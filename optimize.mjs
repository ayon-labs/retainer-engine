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

// ── 1. Restore optimized binaries from git HEAD ──────────────────────────
try {
  execSync('git checkout HEAD -- assets vercel.json', { cwd: ROOT, stdio: 'pipe' });
  changes.push('restored optimized images + .webp + vercel.json from git HEAD');
} catch (e) {
  console.warn('  ! could not restore assets from git (are they committed?):', e.message.trim());
}

// ── 2. index.html transforms (each guarded → idempotent) ─────────────────
let html = readFileSync(HTML, 'utf8');
const before = html;

// 2a. Head: preconnects + hero-font preloads + non-blocking Google Fonts.
if (!html.includes('cdn.fontshare.com')) {
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
  /(assets\/(?:founder-stage|face-\d|jason-paris|steven-stieglitz|doug-zanes)\.(?:jpg|png|webp))\?v=\d+/g,
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

// ── report ───────────────────────────────────────────────────────────────
if (changes.length) {
  console.log('optimize.mjs applied:');
  changes.forEach(c => console.log('  • ' + c));
} else {
  console.log('optimize.mjs: nothing to do — already optimized.');
}
