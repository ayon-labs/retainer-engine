# Marketing Landing Page — Master Brief for the Design LLM

**Purpose of this document:** Single self-contained source of truth for designing landing pages, ads, decks, emails, and brand surfaces for AI-native lead-generation services targeting professional service verticals. This brief is **niche-agnostic** — the same system designs surfaces for personal injury law firms, real estate brokerages, med spas, financial advisors, and similar high-ticket B2B-to-professional-services audiences. A single `{{NICHE}}` swap table at the bottom makes the brief usable across verticals without rewriting the system.

Hand this entire file to a design LLM together with a filled-in niche profile (see Section 19) and it will have everything required.

**Last updated:** April 25, 2026 · Version 2.0 — Generic / Quintessa-aesthetic

---

## 1. The Mission in One Paragraph

You are designing brand and product surfaces for an **AI-native lead-generation and intake platform** that delivers signed engagements (retainers, listings, signed contracts, booked procedures, AUM commitments — the unit varies by vertical) to professional firms in the United States on a pay-per-outcome basis. The buyer is the managing principal of a $1M to $25M annual-revenue firm with 2 to 50 producers (attorneys / agents / providers). The buyer has been pitched by three lead-gen vendors this quarter and is exhausted by templated funnels and "AI-powered" agencies that turn out to be GoHighLevel resellers. Your design job is to make the brand feel like the **premium, institutional, engineering-led platform** it actually is, and to actively avoid looking like every other lead-gen page on the internet.

The aesthetic target is **premium institutional** — think private bank, white-glove concierge, Bloomberg Terminal-meets-luxury-hotel — *not* startup landing page, *not* dark-tech-brutalism, *not* SaaS gradient hero.

---

## 2. Strategic Positioning — The Wedge

In every professional-services vertical, the dominant lead-gen incumbent positions on **"trained human callers, premium service, white-glove intake."** They publicly disparage AI. That public stance is the single biggest gift in the market. We counter-position as the AI-native option the incumbent explicitly refuses to be — while matching them on premium feel and exceeding them on speed, transparency, and outcome alignment.

Memorize this contrast and let every design surface make it implicit. **Never name the incumbent directly in marketing copy. Let the contrasts do the work.**

| Axis | Incumbent | Us |
|---|---|---|
| Stance on AI | "Not trendy AI or algorithms" | AI-native. Built in-house. |
| Founder profile | Sales/marketing founder | Engineering co-founders from frontier labs |
| Tech moat | "Our humans are better humans" | Proprietary voice AI, qualification logic, intake-flow infrastructure |
| Vertical coverage | Single sub-vertical only | Full vertical coverage (every case type / property type / treatment type) |
| Social proof | Media mentions, no named-firm case studies | Named client wins with specific dollar outcomes |
| Speed claim | "First contact in 24 hours" | Sub-10-second contact. Engagements sign in minutes. |
| Aesthetic | Stock photography, royal blue/navy, generic professional | Premium institutional. Deep navy + champagne gold + cream. Built-by-engineers with white-glove polish. |
| Pricing | Pay-per-performance, undisclosed | Pay-per-signed-engagement, transparent on the call |

**The one-line wedge:** They say humans, not AI. We say AI plus humans, with the speed humans alone cannot match — wrapped in the same premium institutional polish they use to justify their pricing.

---

## 3. Brand DNA

| | |
|---|---|
| **Name** | `{{BRAND_NAME}}` |
| **Legal entity** | `{{LEGAL_ENTITY}}`, DBA `{{BRAND_NAME}}` |
| **Domain** | `{{DOMAIN}}` |
| **Category** | AI-native growth platform for `{{NICHE_PLURAL}}` |
| **Tagline (long)** | The AI Growth Engine for `{{NICHE_PROPER_PLURAL}}` |
| **Offer hook** | Pay only when `{{ENGAGEMENT_VERB_PRESENT}}` |
| **One-line elevator** | We are the AI-native growth platform that delivers signed `{{ENGAGEMENT_NOUN_PLURAL}}` to `{{NICHE_PLURAL}}`. Built by an engineering team from Stanford, Harvard, and MIT. You pay only when `{{ENGAGEMENT_NOUN_PLURAL}}` `{{ENGAGEMENT_VERB_PAST}}`. |

### Ideal customer profile

**Primary.** `{{NICHE_PLURAL}}` doing $1M to $25M in annual revenue, 2 to 50 producers, multi-sub-vertical practice. Decision-maker is the managing principal or marketing director. Already running paid ads. Has a CRM. Has been burned by at least one previous lead-gen vendor.

**Anti-customer.** Generalist firms with a `{{NICHE}}` side-practice, sub-$500K solo shops, anyone who says "I just want leads, not signed `{{ENGAGEMENT_NOUN_PLURAL}}`" or "I do my own intake, just send phone numbers."

---

## 4. Voice and Tone

### Voice principles (always)

1. **Direct.** Lead with the claim. Proof follows. Never bury the lede.
2. **Technical without being jargony.** Sophisticated buyers respect specificity. They distrust vagueness.
3. **Engineer-not-marketer.** Sound like the team that built the thing, not the team that sells it.
4. **Short sentences.** Single ideas per line.
5. **Specific numbers.** "Sub-10-second response," "14 minutes from click to signed engagement." Not "fast" or "industry-leading."
6. **Confident, not boastful.** State what is true. Let the reader infer the implication.
7. **Buyer-respectful.** Managing partners and brokers are sophisticated buyers. Do not explain category basics. Do not flatter.

### Reference register

Senior engineer at Stripe writing a launch post. Or Anthropic explaining a technical capability. Or a private bank's annual report. Confident, plain-spoken, technical when it earns its keep, premium without being precious. **Not** marketing copywriter, agency pitch deck, life coach, or 2008-era industry website.

### Banned words and phrases (strict)

Reject any draft that contains:

- leverage, synergize, world-class, best-in-class, cutting-edge, innovative, transform, unlock, harness, empower, revolutionary, game-changing, next-level
- "We are passionate about..."
- "At [Brand], we believe..."
- "Our mission is to..."
- "In today's competitive landscape..."
- Em dashes in body copy (use periods, commas, colons, or "or" instead). Em dashes in headlines case-by-case, default to no.
- Exclamation points in body copy (one per page maximum, used surgically)
- Hedging in claims: "could," "might," "may help you," "potentially"

### Required brand verbs and nouns

Use these. Repeat them.

- **Sign / signed:** the action and result. `{{ENGAGEMENT_NOUN_PLURAL}}` `{{ENGAGEMENT_VERB_PRESENT}}`. Signed `{{ENGAGEMENT_NOUN_PLURAL}}`.
- **Engineer / engineered:** as adjective and verb. "Engineered for speed."
- **`{{ENGAGEMENT_NOUN}}`:** the unit of value. Not "lead," not "deal," not generic "client."
- **Pay only when:** the pricing structure. Always lead with this when discussing money.
- **Sub-10-second:** the speed claim. Always digit + hyphen + unit.
- **In-house / built in-house:** the engineering moat.

### Voice example: on-brand vs. off-brand

**On-brand:**
> Our voice AI calls every new lead in under 10 seconds, qualifies for `{{QUALIFICATION_CRITERIA}}`, and routes only `{{QUALIFIED_ADJ}}` matters to your intake team. If a `{{ENGAGEMENT_NOUN}}` does not `{{ENGAGEMENT_VERB_PRESENT_SINGULAR}}`, you do not pay.

**Off-brand (do not write):**
> At [Brand], we believe every `{{NICHE}}` deserves access to cutting-edge AI technology that empowers them to unlock their growth potential and transform their `{{NICHE}}` strategy.

---

## 5. Messaging Pillars

The five things we say. Every page, every ad, every email pulls from this list. If a piece of copy does not deliver on at least one pillar, cut it.

### Pillar 1 — AI-native, not human-pretending-AI

Claim: We built the voice agent, the qualification logic, and the intake-flow engine in-house. Most "AI agencies" are reselling Vapi with a logo on top.

Sample line: *"We built the call infrastructure ourselves. Speed is not a feature on our deck. It is the thing we ship."*

### Pillar 2 — Pay only when `{{ENGAGEMENT_VERB_PRESENT}}`

Claim: You do not pay for leads, names, intakes, or hand-offs. You pay when an engagement converts. Period.

Sample line: *"You pay nothing for leads, intake, or routing. You pay when `{{ENGAGEMENT_NOUN_PLURAL}}` `{{ENGAGEMENT_VERB_PRESENT}}`. We carry the risk because our infrastructure earns the right to."*

### Pillar 3 — Speed is the product

Claim: In every `{{NICHE}}` vertical, the engagement is won by the firm that calls first. Our infrastructure reaches every new lead in under 10 seconds.

Sample line: *"Leads go cold in 5 minutes. We reach them in under 10 seconds. That gap is the entire pitch."*

### Pillar 4 — Engineered, not outsourced

Claim: Our team is Stanford, Harvard, and MIT engineers who built voice and AI infrastructure at frontier labs.

Sample line: *"A Stanford, Harvard, and MIT team that ships software, not slide decks. Most 'AI agencies' are three guys, a ChatGPT API key, and a GoHighLevel template."*

### Pillar 5 — Every sub-vertical

Claim: We cover every sub-vertical the firm practices. The incumbent is single-track. We are not.

Sample line: *"`{{SUBVERTICAL_LIST}}`. If it has a `{{ENGAGEMENT_NOUN}}` and a fee structure, we route it."*

---

## 6. Color System — Premium Institutional

The palette is built around three core moves: **deep institutional navy** as the dominant brand color, **champagne gold** as the premium accent, **warm cream** as the soft surface alternative to navy. White and pure black are never used at full saturation. The result reads as a private bank, a luxury hotel brand book, or a Bloomberg Terminal redesigned by Hermès.

### Primary palette

| Token | Hex | Usage |
|---|---|---|
| `navy-900` | `#0B1B2B` | Primary dark surface. Hero backgrounds. Footer. The dominant brand color. |
| `navy-800` | `#11253A` | Secondary dark surface, cards on navy, subtle elevation |
| `navy-700` | `#1A3148` | Tertiary dark, dividers on navy, hover states |
| `navy-600` | `#2A4762` | Muted ink, borders on navy, secondary text on cream |
| `navy-500` | `#3F5C7A` | Lightest navy, captions on cream |
| `cream-50` | `#FAF6EE` | Warm cream surface. Alternate to navy for light sections. Reads as paper, not screen. |
| `cream-100` | `#F2EBDA` | Secondary cream surface, subtle cards |
| `cream-200` | `#E5DAC0` | Borders on cream, hairlines |
| `cream-300` | `#D2C29E` | Strongest cream, decorative |

### Accents — gold-forward

| Token | Hex | Usage |
|---|---|---|
| `gold-500` | `#C9A24A` | Champagne gold. Primary accent. Premium signal, money figures, decorative rules, italic emphasis in wordmark, key CTA outline on dark surfaces. The brand's emotional voice. |
| `gold-600` | `#A6841C` | Hover, deeper gold |
| `gold-400` | `#D9B770` | Lighter variant, hairline rules |
| `gold-300` | `#E8CF96` | Subtle gold tint |
| `gold-100` | `#F5E8C8` | Tinted backgrounds, gold-on-cream lift |

### Supporting accent — subdued

| Token | Hex | Usage |
|---|---|---|
| `sage-700` | `#3F5448` | Conservative supporting accent. Status indicators, "verified" / "compliant" marks. Use sparingly. |
| `claret-600` | `#7E2A2A` | Reserved alert / urgency. Far more muted than typical signal-red. Use only for genuinely time-sensitive copy. Maximum one instance per fold. |

### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `paper` | `#FFFEF9` | Off-white for elevated cards on cream. Never a full-page surface. |
| `ink` | `#1A1A1A` | High-contrast text alternative. Used only for dense print-style content. |
| `mute-700` | `#4A4A4A` | Body text on cream when navy is too heavy |
| `mute-500` | `#7A7A7A` | Tertiary, captions |
| `mute-300` | `#C4C4C4` | Disabled |

### Color rules (non-negotiable)

- **Default surface is `navy-900` for hero/anchor sections, `cream-50` for body sections.** Pure white is forbidden as a section fill. Pure black is forbidden as a text color.
- **Default text is `cream-50` on navy and `navy-900` on cream.** Match the contrast pair to the surface.
- **Gold is the primary accent, not red.** Gold carries: dollar figures, italic wordmark emphasis, decorative rules, eyebrow underlines, premium badges, the key CTA on dark surfaces.
- **Claret is reserved for genuine urgency** (statute deadlines, time-sensitive offers). Maximum one instance per fold. Never as a button fill.
- **Two accent instances maximum per fold.** Gold can repeat 2–3× per fold; claret 0–1×.
- **No bright cyan, no neon, no electric blue.** This brand reads institutional, not tech-forward.
- **Gradients are forbidden** as section fills. The single permitted gradient is a 2% noise-textured navy in hero blocks (see Imagery section).

---

## 7. Typography

The type system pairs an **editorial serif** for display moments with a **clean grotesque sans** for body and UI, plus a **mono** for data and labels. The serif carries the premium register; italic moments are the brand's emotional voice.

### Type stack

| Family | Source | Use |
|---|---|---|
| **Instrument Serif** | Google Fonts (free) | Display, headlines, pull quotes. Italic moments are sacred. |
| **Inter** | Google Fonts (free) | Body, UI, buttons, headings below 32px. Set with `font-feature-settings: "ss01", "cv11"` for a slightly more refined look. |
| **JetBrains Mono** | Google Fonts (free) | Stats, labels, eyebrows (UPPERCASE), data callouts, timestamps |

Fallbacks: `'Times New Roman', Georgia, serif` (display); `-apple-system, BlinkMacSystemFont, system-ui, sans-serif` (body); `ui-monospace, 'SF Mono', 'Fira Code', monospace` (mono).

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap
```

### Type scale

| Token | Size | Line-height | Tracking | Weight | Family |
|---|---|---|---|---|---|
| `display-xl` | 96px | 0.95 | -0.04em | 400 | Instrument Serif |
| `display-lg` | 72px | 1.0 | -0.03em | 400 | Instrument Serif |
| `display-md` | 56px | 1.05 | -0.025em | 400 | Instrument Serif |
| `display-sm` | 40px | 1.1 | -0.02em | 400 | Instrument Serif |
| `heading-lg` | 28px | 1.2 | -0.015em | 600 | Inter |
| `heading-md` | 22px | 1.25 | -0.01em | 600 | Inter |
| `heading-sm` | 18px | 1.35 | 0 | 600 | Inter |
| `body-lg` | 18px | 1.55 | 0 | 400 | Inter |
| `body-md` | 16px | 1.55 | 0 | 400 | Inter |
| `body-sm` | 14px | 1.5 | 0 | 400 | Inter |
| `mono-md` | 14px | 1.4 | 0 | 500 | JetBrains Mono |
| `mono-sm` | 12px | 1.4 | 0.08em | 500 UPPERCASE | JetBrains Mono |
| `mono-xs` | 11px | 1.4 | 0.1em | 500 UPPERCASE | JetBrains Mono |

### Typography rules

- **Italic is reserved for Instrument Serif headlines and pull quotes.** Never italicize body copy.
- **All-caps is reserved for JetBrains Mono.** Never set Inter or Instrument Serif in all-caps.
- **Numbers in stat callouts always use JetBrains Mono.** "$30,000+", "10 seconds", "55-65%" all read as data, not prose.
- **Body lines stay under 70 characters.** Constrain max-width on text columns.
- **Headlines never exceed 12 words.** If you need more, you have two headlines.
- **Tracking on mono UPPERCASE eyebrows is generous (0.08–0.1em).** This is what makes it read institutional rather than tech.

---

## 8. Logo System

The wordmark is sentence-case Instrument Serif with **one italic-gold word** providing the emphasis moment. The italic-gold treatment is the brand's single most important design decision. The mark is a stylized italic cap letter on navy ground with a single gold underline.

> **Niche customization:** Replace `Sign` / `More` / `Cases` with the brand's three-word wordmark. The middle word is always the italic-gold one. See Section 19 for niche-specific examples.

### Wordmark (light surface, the default for cream sections)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 200" role="img" aria-label="{{BRAND_NAME}}">
  <defs>
    <style type="text/css"><![CDATA[
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      .wm-word { font-family: 'Instrument Serif', 'Times New Roman', serif; font-weight: 400; font-size: 120px; letter-spacing: -0.025em; }
      .wm-navy { fill: #0B1B2B; }
      .wm-gold { fill: #C9A24A; }
    ]]></style>
  </defs>
  <rect width="720" height="200" fill="#FAF6EE"/>
  <text x="40" y="138" class="wm-word wm-navy">{{WORD_1}}</text>
  <text x="{{X2}}" y="138" class="wm-word wm-gold" font-style="italic">{{WORD_2}}</text>
  <text x="{{X3}}" y="138" class="wm-word wm-navy">{{WORD_3}}</text>
</svg>
```

### Wordmark (dark surface)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 200" role="img" aria-label="{{BRAND_NAME}}">
  <defs>
    <style type="text/css"><![CDATA[
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      .wm-word { font-family: 'Instrument Serif', 'Times New Roman', serif; font-weight: 400; font-size: 120px; letter-spacing: -0.025em; }
      .wm-cream { fill: #FAF6EE; }
      .wm-gold { fill: #C9A24A; }
    ]]></style>
  </defs>
  <rect width="720" height="200" fill="#0B1B2B"/>
  <text x="40" y="138" class="wm-word wm-cream">{{WORD_1}}</text>
  <text x="{{X2}}" y="138" class="wm-word wm-gold" font-style="italic">{{WORD_2}}</text>
  <text x="{{X3}}" y="138" class="wm-word wm-cream">{{WORD_3}}</text>
</svg>
```

### Mark / icon (rounded-square, for tight UI)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="{{BRAND_NAME}}">
  <rect width="200" height="200" fill="#0B1B2B" rx="20" ry="20"/>
  <text x="100" y="148" text-anchor="middle"
    font-family="'Instrument Serif', 'Times New Roman', serif"
    font-style="italic" font-size="180" font-weight="400"
    fill="#FAF6EE" letter-spacing="-7">{{MARK_LETTER}}</text>
  <line x1="58" y1="170" x2="142" y2="170" stroke="#C9A24A" stroke-width="6" stroke-linecap="round"/>
</svg>
```

### Favicon (64×64)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="{{BRAND_NAME}}">
  <rect width="64" height="64" fill="#0B1B2B" rx="6" ry="6"/>
  <text x="32" y="46" text-anchor="middle"
    font-family="'Instrument Serif', 'Times New Roman', serif"
    font-style="italic" font-size="56" font-weight="400" fill="#FAF6EE"
    letter-spacing="-2">{{MARK_LETTER}}</text>
  <line x1="18" y1="54" x2="46" y2="54" stroke="#C9A24A" stroke-width="2.5" stroke-linecap="round"/>
</svg>
```

### Logo construction notes

The wordmark sets the first and third words in Instrument Serif Regular `navy-900`, and the middle word in Instrument Serif **Italic** `gold-500`. The italic-gold middle word is the brand's single most important design decision. The mark is a stylized italic cap letter (the first letter of `{{WORD_1}}`) in cream on navy ground, with a single gold underline beneath the letter that references both a signature line and the gold emphasis in the wordmark.

### Logo don'ts

- Do not stretch, skew, or rotate the wordmark
- Do not change the color of the italic word to anything other than `gold-500`
- Do not set the wordmark on backgrounds other than `cream-50`, `navy-900`, or pure white when forced by a third-party platform
- Do not add a tagline underneath the wordmark in any web context
- Do not animate the logo
- Minimum clear space equals the cap-height of the first letter on all sides

---

## 9. Layout and Grid

| Property | Value |
|---|---|
| **Grid** | 12 columns, 24px gutter |
| **Max content width** | 1280px |
| **Max prose width** | 720px |
| **Section padding** | 96px (desktop) / 64px (tablet) / 48px (mobile) top and bottom. Hero sections may go to 128px. |
| **Spacing base** | 8px. All vertical rhythm is a multiple of 8: `8, 16, 24, 32, 40, 48, 64, 96, 128` |
| **Border radius** | 4px (buttons, inputs, cards). Never above 12px. The brand reads as institutional/architectural — sharp corners over soft. No fully rounded pills except for category tags. |
| **Borders** | 1px solid `cream-200` on cream surfaces, 1px solid `navy-700` on navy surfaces, 1px solid `gold-500` for emphasized elements. Never thicker than 1px except on quote left-borders (3px gold). |
| **Shadows** | Avoid by default. The brand reads flat/architectural. When needed: `0 4px 24px rgba(11, 27, 43, 0.08)` on cream, `0 4px 24px rgba(0, 0, 0, 0.3)` on navy. |
| **Motion** | Minimal, purposeful. `cubic-bezier(0.2, 0.8, 0.2, 1)`, durations 120ms / 240ms / 480ms. No scroll-triggered fade-ins on every element. |
| **Section dividers** | A 1px `gold-500` rule, 64px wide, centered above section H2s — instead of borders between sections. This is a signature element. |

---

## 10. Component Patterns

### Primary CTA — on cream

```css
.btn-primary {
  display: inline-flex;
  padding: 14px 28px;
  background: #0B1B2B;
  color: #FAF6EE;
  border: 1px solid #0B1B2B;
  border-radius: 4px;
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
.btn-primary:hover { background: #11253A; }
```

### Primary CTA — on navy (gold-bordered, the signature)

```css
.btn-primary-on-navy {
  display: inline-flex;
  padding: 14px 28px;
  background: transparent;
  color: #FAF6EE;
  border: 1px solid #C9A24A;
  border-radius: 4px;
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.01em;
}
.btn-primary-on-navy:hover { background: #C9A24A; color: #0B1B2B; }
```

### Secondary CTA

```css
.btn-secondary {
  display: inline-flex;
  padding: 14px 28px;
  background: transparent;
  color: #0B1B2B;
  border: 1px solid #0B1B2B;
  border-radius: 4px;
  font-weight: 600;
  font-size: 15px;
}
.btn-secondary:hover { background: #0B1B2B; color: #FAF6EE; }
```

### Approved CTA copy library

- "Schedule the strategy call" (default, mirrors Quintessa's "Schedule a conversation" register)
- "Book a private consultation"
- "See the AI handle a live intake"
- "Request the `{{NICHE}}` audit"
- "Talk to the engineering team"

### Forbidden CTA copy

- "Learn more"
- "Get started"
- "Book a demo"
- "Contact us"
- "Sign up today"
- "Free `{{NICHE}}` Review"
- "Get Help Now"

### Eyebrow / kicker

JetBrains Mono UPPERCASE, 11–12px, `gold-500` or `navy-600`, set above section H2s. Often paired with a 24px gold rule.

```html
<div class="eyebrow">
  <span class="eyebrow-rule"></span>
  03 / Speed is the product
</div>
```

```css
.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C9A24A;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.eyebrow-rule {
  display: inline-block;
  width: 24px;
  height: 1px;
  background: #C9A24A;
}
```

### Stat callout

```html
<div class="stat">
  <div class="stat-num">10s</div>
  <div class="stat-label">First contact on every new lead</div>
</div>
```

```css
.stat-num {
  font-family: 'Instrument Serif', serif;     /* serif numerals for premium read */
  font-size: 64px;
  font-weight: 400;
  color: #C9A24A;          /* gold for money / volume / value */
  line-height: 1;
  letter-spacing: -0.02em;
}
.stat-num.urgent { color: #7E2A2A; }   /* claret for time-sensitivity, used sparingly */
.stat-num.neutral { color: #0B1B2B; }  /* navy for counts and verticals */
.stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2A4762;
  margin-top: 12px;
  max-width: 240px;
}
```

Rule: **gold for money/value (default), navy for counts, claret for time-sensitivity.** Never two colors on the same number. Stat numerals use Instrument Serif at display sizes for the premium register, JetBrains Mono only at body-stat sizes.

### Quote / testimonial

```html
<blockquote class="quote">
  Over the last two decades, I have tried dozens of lead generation companies. {{BRAND_NAME}} will easily outperform every one of them.
</blockquote>
<div class="quote-attr">Managing Partner · {{Firm Name}} · {{City &amp; Region}}</div>
```

```css
.quote {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 32px;
  line-height: 1.3;
  color: #0B1B2B;
  border-left: 3px solid #C9A24A;
  padding-left: 32px;
  max-width: 720px;
}
.quote-attr {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2A4762;
  padding-left: 35px;
  margin-top: 20px;
}
```

Always include firm name, principal role/name, and a specific dollar or volume claim.

### Trust badge strip

A signature institutional element. Five to six small grayscale badges (industry associations, press logos, certifications) in a single row, each at 50% opacity by default, 100% on hover. Rendered at `mute-500` tint with the brand's institutional register. No drop shadows, no boxes around badges.

---

## 11. Imagery and Illustration

### Use

- **Bold typographic compositions.** Display-size Instrument Serif italic-gold as the visual.
- **Gold-rule line art.** Thin gold rules, 1px, used as decorative dividers and underlines. Never thicker than 1px.
- **Data visualization.** Sparklines, bar charts, intake-flow diagrams. JetBrains Mono labels in `navy-600`. Primary line is `gold-500`, secondary is `navy-700`.
- **Hand-annotated artifacts.** Gold ink circle on screenshots, signature marks. Looks like a partner reviewed the artifact in pen.
- **Editorial photography.** If used, must be: natural light, warm tone, real subjects (not stock), shot on cream or navy backgrounds, no corporate-blazer-on-white. Reference: Bloomberg Businessweek long-form feature photography.
- **Custom illustration.** Geometric, ink-on-cream or gold-on-navy, single-accent only.

### Never use

- Stock photos of generic professionals in suits, handshakes, gavels, scales, courtrooms, "happy customer" smiling-into-laptop shots
- AI-generated photorealistic imagery of people (FTC risk plus aesthetic mismatch)
- Rotating-globe / glowing-network / circuit-board AI clichés
- Drop shadows on photographs
- Stock-business-icons (briefcase, handshake, lightbulb, gear, target)
- Gradient hero backgrounds

---

## 12. Landing Page Section Playbook

The lead-gen landing page conventions exist for a reason and you should adapt them, but you must apply the new aesthetic, not the templated funnel look. Here is the section structure the design LLM should use, in order.

### Section 1 — Hero (above fold) — `navy-900` surface

Required: Eyebrow ("LIMITED INTAKE · `{{REGION_OR_VERTICAL}}` FIRMS") in gold-mono with a 24px gold rule before it. Display-xl headline in cream Instrument Serif (max 12 words) — italicize one to three words for emphasis. One body-lg sub-paragraph in `cream-100` (max 2 sentences). Primary CTA is the gold-bordered ghost button on navy. Secondary CTA is plain underlined gold link.

Three trust microstats in JetBrains Mono below the CTA: gold numerals (Instrument Serif if at display size), mono labels, divided by 1px gold rules.

The hero may include a small accreditation badge cluster on the right side at low opacity, mimicking the Quintessa "BBB · Inc 5000 · etc." badge strip. Do not invent badges; use only real ones.

The headline should pull from this approved set or a close variant:
- "Sign more `{{ENGAGEMENT_NOUN_PLURAL}}`. Pay only when they `{{ENGAGEMENT_VERB_PRESENT_SINGULAR}}`."
- "The AI Growth Engine for `{{NICHE_PROPER_PLURAL}}`."
- "Built by Stanford. Built for `{{NICHE}}`."
- "Premium `{{ENGAGEMENT_NOUN_PLURAL}}`, delivered on retainer."  *(direct Quintessa mirror)*

Phone-capture form **above the fold is acceptable but not required.** If used, place it inside a `cream-50` card on navy, not as the primary visual. The form is *a* CTA, not *the* CTA.

### Section 2 — Stat bar — `cream-50` surface, narrow strip

3 to 4 stat callouts side-by-side on a section divider strip. Numerals in Instrument Serif `gold-500`, labels in JetBrains Mono `navy-600`. Use real numbers from real client data.

Approved data archetypes: "$X.XM signed `{{ENGAGEMENT_NOUN_PLURAL}}` · 90 days · live client" / "Sub-10-second first contact" / "X sub-verticals covered" / "0 leads, 0 invoices, 0 monthly retainers".

### Section 3 — The wedge ("Why this team is different") — `cream-50`

Three 01/02/03 numbered pillars. Pull from messaging pillars in Section 5 of this brief. Mono numbering in gold, display-sm Instrument Serif headers, body-md description.

Recommended headers:
- `01 · ENGINEERED, NOT OUTSOURCED`
- `02 · PAY ONLY WHEN {{ENGAGEMENT_VERB_PRESENT}}`
- `03 · SPEED IS THE PRODUCT`

Each pillar gets a 24px gold rule above the number.

### Section 4 — Sub-vertical coverage — `navy-900` surface

A 2×3 or 3×2 grid of cards rendered on `navy-800` with 1px `navy-700` borders and a single 1px gold corner accent. Each card has: a small gold mono label at top, a serif sub-vertical name in cream, one line of body in `cream-100`. No icons.

`{{SUBVERTICAL_LIST}}` — fill from niche profile (Section 19).

**Forbidden:** the templated "icon card with hover state" treatment. Render as flat editorial cards.

### Section 5 — Process (3 steps) — `cream-50`

Editorial timeline: timestamp on the left in JetBrains Mono `gold-500`, process step heading in Instrument Serif on the right, body copy underneath in Inter `navy-700`. Each step separated by a 1px gold rule, 64px wide, vertically.

- `00:00` — Lead clicks ad
- `+10s` — AI calls and qualifies
- `+14m` — Consultation booked into your calendar

### Section 6 — Social proof — `cream-50`

Two to four Instrument Serif italic quote blocks, 3px `gold-500` left border, attributed in JetBrains Mono. Real client name, real firm, real outcome dollar figure.

**Until real testimonials exist, mark these as illustrative with a footer disclaimer. Do not invent testimonials with stock-photo headshots.** See Section 14.

Optional: a single hero pull-quote rendered at display-md, 60ch max-width, centered on cream with no border — for the strongest piece of proof.

### Section 7 — Urgency / deadline (optional) — `cream-50`

If included, do **not** use a red full-bleed warning block. Render time-sensitive content as an editorial sidebar card on `cream-100` with a `navy-900` heading and JetBrains Mono "TIME-SENSITIVE" eyebrow in `claret-600`. The claret appears only on the dollar-figure or deadline consequence, not as a background fill.

### Section 8 — FAQ — `cream-50`

Maximum 6 questions. Inter heading-md questions, body-md answers in `navy-700`. Default to **expanded** (no accordion) unless length forces it. Long-form FAQ copy mirrors Quintessa's depth — ~150 words per answer, conversational, not bullet-pointed. Each question separated by a 1px `cream-200` rule.

### Section 9 — Final CTA — full-bleed `navy-900`

Display-md cream Instrument Serif headline with one italic-gold word. Single CTA (gold-bordered ghost button). Below the CTA: JetBrains Mono one-liner with the FTC disclaimer footer (Section 14).

### Section 10 — Footer — `navy-900`

Logo (dark-surface variant), three columns: Company / Services / Contact. Parent-entity attribution line. Links (Privacy / Terms / Compliance). Footer disclaimer set in `mono-xs` `navy-500`. Address block in `navy-500`. Phone number in `gold-500`.

---

## 13. Counter-Templated-Funnel Design Directives

When designing pages, **actively avoid** the following templated-funnel tells:

- All-caps hero headlines in bold sans (e.g., "INJURED IN [STATE]?" or "SELL YOUR HOME FAST?"). Use Instrument Serif sentence-case with one or two italic-gold words instead.
- Bright cyan or neon accent buttons. Use the gold-bordered ghost button on navy or ink-fill on cream.
- Red full-bleed "WARNING" urgency blocks. Use editorial sidebar treatment in claret-on-cream.
- Avatar circles with first-name initials as testimonial visuals. Use no avatar, or a minimal mono name treatment.
- Stock-photo customer headshots in testimonials.
- Stack of identical icon-cards in a 3×2 grid for service types. Render as flat editorial cards with gold corner accents.
- "Free `{{NICHE}}` Review in 60 Seconds" copy archetype. The offer is "Pay only when `{{ENGAGEMENT_VERB_PRESENT}}`," not free reviews.
- Auto-playing video hero loops.
- Sticky chat widget popping up in the corner. (A static "Talk to us" link in the navigation is fine.)
- Multiple CTA colors competing on the same page. One CTA style per surface (gold-on-navy or ink-on-cream), not both.

---

## 14. Compliance Notes

Lead-gen marketing in regulated professional verticals has bar / state-licensing-board / FTC exposure. Apply these rules to all public surfaces.

- **Never guarantee outcomes.** "We will sign 20 `{{ENGAGEMENT_NOUN_PLURAL}}` for you" is exposed. "We deliver pay-per-signed-`{{ENGAGEMENT_NOUN}}` infrastructure" is fine.
- **Use vertical-correct terminology.** Don't call leads "clients" until the engagement has converted. Use "leads," "prospects," "matters," `{{ENGAGEMENT_NOUN_PLURAL}}`.
- **Never imply professional advice from the platform.** We are a marketing and intake infrastructure vendor, not a `{{NICHE_PRACTITIONER}}`. Footer must make this clear.
- **State-specific rules apply.** Bar associations (legal), real-estate commissions (real estate), state medical boards (med spa) all have advertising restrictions. Any client deployment requires a state-specific compliance pass before publish.
- **Always include the "results vary" disclaimer** on any volume or revenue claim. Footer of every page.

### Boilerplate footer disclaimer (template — fill `{{NICHE}}` blanks)

> `{{BRAND_NAME}}` provides marketing and intake infrastructure for `{{NICHE_PLURAL}}`. We are not a `{{NICHE_PRACTITIONER}}` and do not provide `{{NICHE_ADVICE_TYPE}}`. Performance figures cited reflect the experience of representative client firms. Individual results vary based on geography, sub-vertical, ad spend, and intake operations.

### Testimonial disclosure rule

If any testimonial uses stock-photo headshots or fabricated names while real client testimonials are pending, every such testimonial must be visibly labeled "Design-matched illustration of representative client outcomes" or be replaced with real consented quotes. FTC §255 endorsement-guides exposure is real. Do not ship un-disclosed fabricated testimonials.

---

## 15. Sub-brand Relationship to Parent

`{{BRAND_NAME}}` is a DBA of `{{LEGAL_ENTITY}}`, the same legal entity that operates a portfolio of vertical-specific lead-gen brands.

```
{{LEGAL_ENTITY}}  (parent / engineering team identity)
├── {{SIBLING_BRAND_1}}  ({{SIBLING_VERTICAL_1}} DBA)
├── {{BRAND_NAME}}        ({{NICHE}} DBA)
└── [future verticals]
```

### Where to surface the parent

- Footer of every page: "`{{BRAND_NAME}}` is a `{{LEGAL_ENTITY}}` company."
- Contracts and legal: "`{{LEGAL_ENTITY}}`, DBA `{{BRAND_NAME}}`"
- Founder mentions: "The `{{LEGAL_ENTITY}}` engineering team also operates `{{SIBLING_BRAND_1}}` for `{{SIBLING_VERTICAL_1}}`."

### Where NOT to surface the parent

Hero block, headlines, subheadlines, CTAs, ad copy, cold email opens, slide 1 of any deck.

### Visual relationship across DBAs

Each vertical sub-brand may share the **structural system** (grid, type scale, layout playbook, voice) but should adapt **palette, mark, and sub-vertical taxonomy** to match the ICP's aesthetic expectations. PI lawyers and luxury real estate brokers both respond to "premium institutional," so this exact palette works across both with minor wordmark / mark adjustments. Med spa or financial advisor verticals may want a hue shift on the gold (warmer / cooler) but the structural system remains constant.

---

## 16. The Validation Directive

The brand system is fully designed but **not yet validated against real conversion data** in this vertical. Ship one variant, measure, then commit at scale. Do not over-invest in further system refinement before live data lands.

### What this means for the design LLM

1. **Build the first landing page using this brief verbatim.** Do not improvise, do not hybrid in templated-funnel patterns, do not "blend the best of both."
2. **Optimize for shipability, not perfection.** A good page live this week beats a great page live next month. The data will tell us what to fix.
3. **Make the page A/B-test friendly.** Section structure should be modular so we can swap individual sections (hero variants, urgency variants, stat-bar variants) without rebuilding.
4. **Instrument from day one.** Each CTA, each form-fill, each scroll-depth milestone needs an event hook.

### Success criteria for the first ship

| Metric | Floor | Target |
|---|---|---|
| Cost per lead vs. client historical | within -15% | parity or better |
| Form-fill rate | ≥3% of unique visitors | ≥5% |
| Strategy-call book rate from form-fill | ≥35% | ≥50% |
| Time on page | ≥45 sec | ≥75 sec |

If the page **tanks** below floor on any two metrics within 7–10 days of live traffic, fall back to a more direct-response variant for cold-traffic landing pages while keeping the editorial system for sales decks and partner-pitch surfaces.

---

## 17. Concrete Copy Library (paste-ready, fill `{{NICHE}}` blanks)

### Headlines (display-xl or display-lg, italicize the {{ITALIC_PHRASE}} portion in `gold-500`)

- "Sign more `{{ENGAGEMENT_NOUN_PLURAL}}`. Pay only when *they* `{{ENGAGEMENT_VERB_PRESENT_SINGULAR}}`."
- "The AI Growth Engine for `{{NICHE_PROPER_PLURAL}}`."
- "Built by *Stanford*. Built for `{{NICHE}}`."
- "Leads go cold in 5 minutes. We reach them in *10 seconds*."
- "Premium `{{ENGAGEMENT_NOUN_PLURAL}}`, delivered *on retainer*."

### Sub-headlines (body-lg paragraph after hero H1)

- "The AI growth engine for `{{NICHE_PLURAL}}`. Built by a Stanford, Harvard, and MIT team. Sub-10-second contact on every new lead. No retainer, no invoice."
- "`{{SUBVERTICAL_LIST}}`. Built by engineers, not a lead-gen agency. Pay only when `{{ENGAGEMENT_NOUN_PLURAL}}` `{{ENGAGEMENT_VERB_PRESENT}}`."

### Eyebrow / kicker (mono-sm uppercase, gold)

- "01 / WHY THIS TEAM IS DIFFERENT"
- "02 / PAY ONLY WHEN `{{ENGAGEMENT_VERB_PRESENT}}`"
- "03 / SPEED IS THE PRODUCT"
- "LIMITED INTAKE · `{{REGION}}` `{{NICHE_PROPER_PLURAL}}`"

### Stat callout pairs

- `10s` (gold) — "First contact on every new lead"
- `$4.2M` (gold) — "Signed `{{ENGAGEMENT_NOUN_PLURAL}}` · 90 days · live client"
- `5` (navy) — "`{{NICHE}}` sub-verticals covered"
- `14m` (gold) — "Click to signed `{{ENGAGEMENT_NOUN}}` · average"

### Sample paragraph (body-md)

> The dominant lead-gen incumbent in `{{NICHE}}` builds intake teams of human callers and tells you AI does not work in this category. We disagree. Our voice AI calls every new lead in under 10 seconds, qualifies for `{{QUALIFICATION_CRITERIA}}`, and routes only `{{QUALIFIED_ADJ}}` matters to your front desk. The result is more `{{ENGAGEMENT_NOUN_PLURAL}}`, faster, with less spend on cold leads that never `{{ENGAGEMENT_VERB_PRESENT_SINGULAR}}`. You pay only when `{{ENGAGEMENT_NOUN_PLURAL}}` `{{ENGAGEMENT_VERB_PRESENT}}`.

### Sample testimonial scaffold (replace with real client when available)

> "`{{BRAND_NAME}}` rebuilt the way leads move through our firm. The AI calls every new inquiry in under a minute and we signed `{{N}}` additional `{{SUBVERTICAL}}` `{{ENGAGEMENT_NOUN_PLURAL}}` in the first two weeks alone."
>
> *Managing Partner · `{{Firm Name}}` · `{{City &amp; Region}}` · 2026*

### Final CTA block

> **Sign more `{{ENGAGEMENT_NOUN_PLURAL}}`. Pay only when *they* `{{ENGAGEMENT_VERB_PRESENT_SINGULAR}}`.**
>
> Talk to the engineering team. 25 minutes. No pitch. We map the AI to your current intake flow on the call.
>
> [ Schedule the strategy call ]

---

## 18. Quick-reference — One-Page Cheat Sheet

If the design LLM needs to recall the system in five lines:

1. **Surface:** alternate `navy-900` (`#0B1B2B`) hero/anchor sections with `cream-50` (`#FAF6EE`) body sections. Never pure white. Never pure black.
2. **Text:** `cream-50` on navy, `navy-900` on cream. `navy-700` for body when navy-900 is too heavy.
3. **Accents:** `gold-500` (`#C9A24A`) is the primary accent — money, italic emphasis, decorative rules, gold-bordered CTAs. `claret-600` (`#7E2A2A`) only for genuine urgency. Two accent instances per fold max.
4. **Type:** Instrument Serif display (italic-gold for emphasis), Inter body, JetBrains Mono data labels. The italic-gold middle word in the wordmark is sacred.
5. **Voice:** engineer-not-marketer, premium-institutional. No leverage, no cutting-edge, no "we believe." Specific numbers, short sentences, buyer-respectful.

If the design LLM is unsure about a decision, default to whichever option looks **less like a templated lead-gen funnel** and **more like a private bank or Bloomberg long-form feature**. That heuristic catches 80% of bad calls.

---

## 19. Niche Profile — Variable Substitution Table

The single source of truth for niche-specific values. Fill this table at the top of any new niche project; every `{{VARIABLE}}` reference in the brief above resolves from here.

### Generic variable schema

| Variable | Description | Example values |
|---|---|---|
| `{{BRAND_NAME}}` | The DBA / public brand name | "Sign More Cases", "List More Homes" |
| `{{LEGAL_ENTITY}}` | Parent legal entity | "Cybersphere LLC" |
| `{{DOMAIN}}` | Public domain | "signmorecases.com" |
| `{{WORD_1}}` `{{WORD_2}}` `{{WORD_3}}` | The three words of the wordmark; word 2 is italic-gold | "Sign / More / Cases" |
| `{{MARK_LETTER}}` | First letter of WORD_1 for the icon | "S" |
| `{{NICHE}}` | The vertical, singular adjective form | "personal injury", "real estate", "med spa" |
| `{{NICHE_PLURAL}}` | The buyer noun, plural | "personal injury law firms", "real estate brokerages" |
| `{{NICHE_PROPER_PLURAL}}` | Title-case version for headlines | "Personal Injury Firms", "Real Estate Brokerages" |
| `{{NICHE_PRACTITIONER}}` | The licensed individual at the firm | "law firm", "brokerage", "medical practice" |
| `{{NICHE_ADVICE_TYPE}}` | The regulated advice category | "legal advice", "real estate advice", "medical advice" |
| `{{ENGAGEMENT_NOUN}}` | The unit of value, singular | "retainer", "listing", "treatment plan" |
| `{{ENGAGEMENT_NOUN_PLURAL}}` | Plural form | "retainers", "listings", "treatment plans" |
| `{{ENGAGEMENT_VERB_PRESENT}}` | "they ___" plural verb | "sign", "list", "book" |
| `{{ENGAGEMENT_VERB_PRESENT_SINGULAR}}` | "it ___s" singular verb | "signs", "lists", "books" |
| `{{ENGAGEMENT_VERB_PAST}}` | Past tense for converted state | "signed", "listed", "booked" |
| `{{SUBVERTICAL_LIST}}` | Comma list of sub-verticals covered, voice-cadence | "Auto, premises, mass tort, med mal, workers' comp" |
| `{{QUALIFICATION_CRITERIA}}` | What the AI qualifies for | "case type and statute fit", "property type and price band fit", "treatment fit and pre-auth" |
| `{{QUALIFIED_ADJ}}` | Adjective for "good" leads | "retainable", "listable", "bookable" |
| `{{REGION}}` | Geo qualifier in eyebrow copy | "NEW YORK", "GREATER MIAMI", "TEXAS" |
| `{{SIBLING_BRAND_1}}` `{{SIBLING_VERTICAL_1}}` | Other DBAs in the portfolio | "7 Figure Smiles" / "cosmetic dentistry" |

### Filled example: Personal Injury

| Variable | Value |
|---|---|
| `{{BRAND_NAME}}` | Sign More Cases |
| `{{LEGAL_ENTITY}}` | Cybersphere LLC |
| `{{DOMAIN}}` | signmorecases.com |
| `{{WORD_1}}` / `{{WORD_2}}` / `{{WORD_3}}` | Sign / More / Cases |
| `{{MARK_LETTER}}` | S |
| `{{NICHE}}` | personal injury |
| `{{NICHE_PLURAL}}` | personal injury law firms |
| `{{NICHE_PROPER_PLURAL}}` | Personal Injury Firms |
| `{{NICHE_PRACTITIONER}}` | law firm |
| `{{NICHE_ADVICE_TYPE}}` | legal advice |
| `{{ENGAGEMENT_NOUN}}` / `{{_PLURAL}}` | retainer / retainers |
| `{{ENGAGEMENT_VERB_PRESENT}}` / `{{_SINGULAR}}` / `{{_PAST}}` | sign / signs / signed |
| `{{SUBVERTICAL_LIST}}` | Auto, premises, mass tort, med mal, workers' comp |
| `{{QUALIFICATION_CRITERIA}}` | case type and statute fit |
| `{{QUALIFIED_ADJ}}` | retainable |
| `{{REGION}}` | NEW YORK |
| `{{SIBLING_BRAND_1}}` / `{{SIBLING_VERTICAL_1}}` | 7 Figure Smiles / cosmetic dentistry |

### Filled example: Real Estate (agents/brokers)

| Variable | Value |
|---|---|
| `{{BRAND_NAME}}` | List More Homes (working name; replace with chosen brand) |
| `{{LEGAL_ENTITY}}` | Cybersphere LLC |
| `{{DOMAIN}}` | listmorehomes.com |
| `{{WORD_1}}` / `{{WORD_2}}` / `{{WORD_3}}` | List / More / Homes |
| `{{MARK_LETTER}}` | L |
| `{{NICHE}}` | real estate |
| `{{NICHE_PLURAL}}` | real estate brokerages |
| `{{NICHE_PROPER_PLURAL}}` | Real Estate Brokerages |
| `{{NICHE_PRACTITIONER}}` | brokerage |
| `{{NICHE_ADVICE_TYPE}}` | real estate advice |
| `{{ENGAGEMENT_NOUN}}` / `{{_PLURAL}}` | listing / listings (or "buyer agreement / buyer agreements" depending on side) |
| `{{ENGAGEMENT_VERB_PRESENT}}` / `{{_SINGULAR}}` / `{{_PAST}}` | list / lists / listed (or "sign / signs / signed" for buyer agreements) |
| `{{SUBVERTICAL_LIST}}` | Single-family resale, luxury, new construction, multi-family, land, relocation |
| `{{QUALIFICATION_CRITERIA}}` | property type, price band, motivation, and timeline fit |
| `{{QUALIFIED_ADJ}}` | listable |
| `{{REGION}}` | GREATER MIAMI |
| `{{SIBLING_BRAND_1}}` / `{{SIBLING_VERTICAL_1}}` | Sign More Cases / personal injury |

### Filled example: Med Spa (for reference only, not a current build)

| Variable | Value |
|---|---|
| `{{BRAND_NAME}}` | Book More Treatments |
| `{{NICHE}}` | med spa |
| `{{NICHE_PLURAL}}` | med spas |
| `{{ENGAGEMENT_NOUN}}` / `{{_PLURAL}}` | treatment / treatments |
| `{{ENGAGEMENT_VERB_PRESENT}}` / `{{_SINGULAR}}` / `{{_PAST}}` | book / books / booked |
| `{{SUBVERTICAL_LIST}}` | Injectables, body contouring, laser, skincare, hormone therapy |
| `{{QUALIFICATION_CRITERIA}}` | treatment fit, pre-auth, and contraindication screening |

---

**End of brief.**

This document supersedes any earlier brand notes and is the single source of truth. If conflict arises between this brief and any other reference, this brief wins for any `{{BRAND_NAME}}` surface. Fill the niche profile in Section 19 first, then resolve every `{{VARIABLE}}` reference throughout the document before handing to a downstream design LLM.
