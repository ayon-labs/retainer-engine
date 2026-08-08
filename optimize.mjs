#!/usr/bin/env node
/**
 * optimize.mjs — re-apply landing-page performance + booking-calendar fixes
 * after a fresh page-builder export overwrites index.html and the assets.
 *
 * Zero dependencies (pure Node). No package.json, so it never affects the
 * Vercel static deploy. Fully idempotent — safe to run repeatedly.
 *
 * WORKFLOW after every export:
 *     node optimize.mjs && git add -A && git commit -m "sync + re-optimize" && git push
 *
 * What it does:
 *   1. Restores the optimized images + .webp + vercel.json from git HEAD
 *      (the builder re-exports the same heavy originals each time, so the
 *      optimized versions already committed are always valid). New images
 *      you add are left untouched — tell Claude to add them to the pipeline.
 *   2. Re-applies the index.html transforms: font preconnects/preloads +
 *      non-blocking Google Fonts, WebP image-set backgrounds, ?v=40 cache
 *      bump, and the non-destructive booking-calendar load logic.
 *
 * Limitation: if you intentionally *replace* an existing image's content in
 * the builder, step 1 will revert it to the old optimized version — re-run
 * image optimization for that file (ask Claude) in that case.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const ROOT = new URL('.', import.meta.url).pathname;
const HTML = ROOT + 'index.html';
const changes = [];

// ── 1. Restore what the export clobbered ─────────────────────────────────
// HEAD is the source of truth for images + config. The builder re-exports
// stale/heavy image variants every time (and strips .webp / vercel.json), so
// ALL tracked assets are blanket-restored from HEAD. Real image corrections
// flow through commits to HEAD (Claude rebuilds them from uploads/), never
// through the builder -- so blanket-restoring loses nothing. Untracked NEW
// images are left untouched by checkout.
//
// NOTE: an earlier version tried to "preserve" assets whose bytes differed
// from the first-commit original, to protect genuine edits. That backfired:
// the builder's stale re-export is a *different* stale variant, so it looked
// like a genuine edit and stale testimonials got republished. HEAD-wins is
// the correct model.
const sh = (cmd) => execSync(cmd, { cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'] }).toString().trim();
try {
  sh('git checkout HEAD -- assets vercel.json');
  changes.push('restored optimized images + .webp + vercel.json from git HEAD');
} catch (e) {
  console.warn('  ! restore step failed:', e.message.trim());
}

// ── 2. index.html transforms (each guarded → idempotent) ─────────────────
let html = readFileSync(HTML, 'utf8');
const before = html;

// 2a. Head: preconnects + hero-font preloads + non-blocking Google Fonts.
// Guard on the preconnect link specifically -- cdn.fontshare.com always appears
// in the General Sans @font-face src, so it can't be the "already done" sentinel.
if (!html.includes('<link rel="preconnect" href="https://cdn.fontshare.com"')) {
  const GF = /<link href="(https:\/\/fonts\.googleapis\.com\/css2\?[^"]*&display=swap)" rel="stylesheet">/;
  const m = html.match(GF);
  if (m) {
    const url = m[1];
    const block =
`<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin>
<link rel="preconnect" href="https://api.leadconnectorhq.com">
<link rel="dns-prefetch" href="https://link.msgsndr.com">
<!-- Preload the two General Sans weights used in the above-the-fold hero (500 headline, 600 hook) -->
<link rel="preload" as="font" type="font/woff2" crossorigin href="https://cdn.fontshare.com/wf/3RZHWSNONLLWJK3RLPEKUZOMM56GO4LJ/BPDRY7AHVI3MCDXXVXTQQ76H3UXA63S3/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2">
<link rel="preload" as="font" type="font/woff2" crossorigin href="https://cdn.fontshare.com/wf/K46YRH762FH3QJ25IQM3VAXAKCHEXXW4/ISLWQPUZHZF33LRIOTBMFOJL57GBGQ4B/3ZLMEXZEQPLTEPMHTQDAUXP5ZZXCZAEN.woff2">
<!-- Google Fonts loaded non-render-blocking; @font-face still uses display:swap -->
<link rel="preload" as="style" href="${url}">
<link href="${url}" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="${url}" rel="stylesheet"></noscript>`;
    html = html.replace(GF, block);
    changes.push('head: preconnects + hero-font preloads + non-blocking Google Fonts');
  }
}

// 2b. Background images → image-set() WebP with fallback (+ ?v=40).
const bg = [
  { file: 'founder-stage', ext: 'jpg', mime: 'image/jpeg' },
  ...[1, 2, 3, 4, 6, 7].map(n => ({ file: `face-${n}`, ext: 'png', mime: 'image/png' })),
];
for (const { file, ext, mime } of bg) {
  if (html.includes(`${file}.webp`)) continue; // already done
  const re = new RegExp(`url\\('assets/${file}\\.${ext}\\?v=\\d+'\\)`, 'g');
  if (re.test(html)) {
    html = html.replace(re,
      `url('assets/${file}.${ext}?v=40'); background-image: image-set(url('assets/${file}.webp?v=40') type('image/webp'), url('assets/${file}.${ext}?v=40') type('${mime}'))`);
    changes.push(`bg image-set: ${file}`);
  }
}

// 2c. Cache-bust: bump every ?v= on our managed assets to 40.
const bumped = html.replace(
  /(assets\/(?:founder-stage|face-\d|jason-paris|doug-zanes)\.(?:jpg|png|webp))\?v=\d+/g,
  '$1?v=40');
if (bumped !== html) { html = bumped; changes.push('cache-bump ?v=40'); }

// 2d. Booking calendar: replace destructive 7s-collapse with non-destructive load logic.
if (html.includes("iframe.style.minHeight = '0'")) {
  const CAL = /window\.addEventListener\('message', function\(e\) \{\s*if \(String\(e\.origin\)\.indexOf\('leadconnectorhq\.com'\) > -1\) \{[\s\S]*?\}, 7000\);/;
  const repl =
`function markLoaded() {
      loaded = true;
      if (fb) fb.setAttribute('hidden', 'hidden');
    }
    // Reliable cross-origin load signal (works on slow LTE and inside the GHL wrapper).
    if (iframe) iframe.addEventListener('load', markLoaded);
    window.addEventListener('message', function(e) {
      if (String(e.origin).indexOf('leadconnectorhq.com') > -1) markLoaded();
    });
    // Last resort only; NEVER collapse the iframe.
    setTimeout(function() {
      if (!loaded && fb) fb.removeAttribute('hidden');
    }, 12000);`;
  if (CAL.test(html)) {
    html = html.replace(CAL, repl);
    changes.push('calendar: non-destructive load logic (12s, never collapse)');
  }
}

if (html !== before) writeFileSync(HTML, html);

// ── 3. Corrected testimonial screenshots: keep ?v=41 across ALL pages ────
// #2 (Ashley), #5 (Brett), #6 (Marc) were rebuilt from corrected sources.
// /assets is immutably cached, so the version query MUST persist or browsers
// re-serve the stale cached copy. The builder strips it on every export.
const PAGES = ['index.html', 'case-studies/index.html', 'retainer-engine-demo-booked.html'];
// Each rebuilt screenshot is pinned to the version whose content it matches:
//   ?v=41 = #2 Ashley, #5 Brett, #6 Marc (corrected sigs / math)
//   ?v=42 = #4 trucking (tighter re-crop, John C.) + Steven headshot (new photo)
//   ?v=44 = #1 17:1 ROAS email (Kevin -> Steven -> Doug Zanes)
const TESTI_V41 = /(re-testimonial-(?:2-record-month|5-125m|6-scale)\.png)(\?v=\d+)?/g;
const TESTI_V42 = /(re-testimonial-4-imsg-35k-trucking\.png)(\?v=\d+)?/g;
const STEVEN_V42 = /(steven-stieglitz\.jpg)(\?v=\d+)?/g;
const TESTI1_V44 = /(re-testimonial-1-17x-roas\.png)(\?v=\d+)?/g;
// Builder bug: it renamed the Jason Paris card to "Shawn Rokni, Esq." but
// left jason-paris.jpg as the avatar. Jason is fully gone, so any remaining
// jason-paris.jpg reference is really Shawn -> point it at shawn-rokni.jpg.
const SHAWN_SWAP = /jason-paris\.jpg(\?v=\d+)?/g;
for (const p of PAGES) {
  const fp = ROOT + p;
  if (!existsSync(fp)) continue;
  const s = readFileSync(fp, 'utf8');
  const s2 = s.replace(TESTI_V41, '$1?v=41').replace(TESTI_V42, '$1?v=42')
             .replace(STEVEN_V42, '$1?v=42').replace(TESTI1_V44, '$1?v=44')
             .replace(SHAWN_SWAP, 'shawn-rokni.jpg?v=8');
  if (s2 !== s) { writeFileSync(fp, s2); changes.push(`testimonial/headshot ?v pins refreshed: ${p}`); }
}

// ── 4. Re-inject Meta Pixel + GTM tracking (builder exports strip it) ────
// This tracking lives in the repo, NOT the builder, so every export drops it.
// Losing it silently breaks ad conversion tracking, so restore it on index.html
// if absent. Guard on fbq('init' so it's never duplicated.
const TRACKING = `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1765965831489341');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1765965831489341&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLXKZQWV');</script>
<!-- End Google Tag Manager -->`;
{
  const fp = ROOT + 'index.html';
  const s = readFileSync(fp, 'utf8');
  if (!s.includes("fbq('init'") && s.includes('</head>')) {
    writeFileSync(fp, s.replace('</head>', TRACKING + '\n</head>'));
    changes.push('re-injected Meta Pixel + GTM tracking into index.html');
  }
}

// ── report ───────────────────────────────────────────────────────────────
if (changes.length) {
  console.log('optimize.mjs applied:');
  changes.forEach(c => console.log('  • ' + c));
} else {
  console.log('optimize.mjs: nothing to do — already optimized.');
}
