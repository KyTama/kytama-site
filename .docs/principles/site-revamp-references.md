# kytama-site — Revamp References & Design Direction Notes

Recorded: 2026-11-18 (owner-approved reference set for whole-site revamp).

## Binding Incumbent Visual System (Preserved)
Source of truth: `src/routes/layout.css` and `src/routes/+page.svelte`
- **Palette:** warm parchment background (`#edeae3`), deep forest green text & accents (`#112314` primary, `#4a5c4d` muted, `#5c6e5f` subtle, `#6b7d6e` faint, `#c8c4bc` border, `#0e2912` accent, `#1a472a` accent-visible, `#0a2e10` accent-dark).
- **Typography:** `Departure Mono` (local woff2, headings & mono labels/tags) + `DM Sans` (body prose).
- **Quality & Antislop Mode:** `antislop` Mode **DURING** (apply rules while designing/building, avoid generic AI slop, gradients, glassmorphism, or decorative clutter without purpose).
- **Target Positioning:** ~10-year Go Backend Software Engineer (digital banking: lending, embedded financing and banking, savings/funding), approaching Senior level.

---

## Reference Websites & Adopted Patterns

### Design, Components, & Micro-Interactions
1. **https://21st.dev/**
   - **Adopt (adapted to Svelte 5 — no React runtime):**
     - **Command Menu / Palette (`⌘K` / `/`):** quick navigation across routes, project/journal search, copy contact/social links, and trigger resume print/PDF.
     - **Minimal Portfolio Cards:** clean card hierarchy with explicit status (`active`, `hiatus`, `done`), 1-2 line summary, stack tags, and clear repo/live links.
2. **https://www.cta.gallery/**
   - **Adopt:**
     - **Editorial hairline borders:** 1px borders (`--color-border`) shifting accent cleanly on interaction instead of heavy drop shadows.
     - **Directional arrow shifts (`→` / `↗`):** subtle horizontal/diagonal micro-motion on hover using `cubic-bezier(0.16, 1, 0.3, 1)` (with `prefers-reduced-motion: reduce` fallback).
     - **Monospace index focus-dimming:** hovering one row in a project or journal list subtly dims sibling rows (`opacity`) to emphasize focus.
     - **Ghost / tactile primary CTAs:** e.g., `Print / Save PDF` on `/resume` and hero actions.

### Structure, Content, & Engineering Portfolio Positioning
3. **https://ampersanda.dev/** (Lucky Pradana)
   - **Adopt:** category filter tabs on `/works` (`All`, `Work`, `Collaborations`, `Self Projects`) so visitors can cleanly separate employer experience from partner/client collaborations (web URL only, no repos) and personal/open-source builds (URL/repo allowed).
4. **https://perogeremmer.id/** (Muhamad Hudya Ramadhana)
   - **Adopt:** **Working Ledger** framing (*Live & Running*, *Currently Building*, *Experiments/Automation*) and an authentic `/now` page format (what is actively being built, learned, and automated right now, with a last-updated date).
5. **https://insomnius.dev/** (Muhammad Arief Rahman)
   - **Adopt:** clear backend-specialist problem-focus framing (*distributed systems, high-reliability flows, observability, AI/automation workflows*) so recruiters grasp Senior-level backend value quickly.
6. **https://imrenagi.com/** (Imre Nagi)
   - **Adopt:** direct hero positioning (current role, what you build, and 2 clear primary CTA buttons) plus a hybrid live-resume credibility feel connecting career work, projects, and technical writing.
7. **https://www.lintangkusuma.site/** (Lintang Kusuma)
   - **Adopt:** framing enterprise/company work (`Amar Bank`, `PT. Sentra Inovasi Solusindo`) in clear product/business terms understandable to both technical and non-technical recruiters, without exposing internal confidential systems.

---

## Web Platform Standards (`modern-web-guidance`)
- **`dialog`:** Build Command Palette (`⌘K`) using native `<dialog>` + `showModal()` (top-layer, `inert` background, `Esc` dismiss, focus return, `overscroll-behavior: contain`).
- **`navbar` & `accessibility`:** Single semantic `<nav>` collapsing to native `popover="auto"` on narrow viewports, `aria-current="page"`, `.visually-hidden` skip-to-content link, sequential headings (`<h1>`–`<h3>`), `:focus-visible` outlines (`>= 3:1` contrast).
- **`same-document-transitions`:** SvelteKit `onNavigate` + `document.startViewTransition()` with `prefers-reduced-motion: reduce` disablement and post-transition focus routing.
- **`performance`, `typography`, & `visually-stable-font-fallbacks`:** Preload `DepartureMono-Regular.woff2` (`crossorigin`), `font-size-adjust: from-font` for zero font-swap CLS, `text-wrap: balance` on headings, `text-wrap: pretty` on body prose.
