# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Technical recruiters, engineering managers (for Senior Backend SWE roles across product and platform teams), prospective clients evaluating independent web/system delivery, and fellow backend engineers reading practical notes.

## Product Purpose

Present Rizky Pratama's (`KyTama`) engineering track record, shipped projects, current working focus, technical notes, and an ATS-friendly live resume in one fast, minimal personal website.

## Positioning

A ~10-year Go backend engineer rooted in regulated Indonesian digital banking (lending, embedded financing and banking, savings/funding) who builds production-grade systems end to end, maintains self-hosted infrastructure, and documents engineering craft without fluff.

## Operating Context

Visitors inspect `/about` for concise career summaries, `/works` to distinguish employer work from client projects and personal builds, `/resume` for structured ATS/printable review, `/journal` for technical notes, and `/now` for current focus.

## Capabilities and Constraints

- Static/SSR SvelteKit + Tailwind v4 site deployed via `@sveltejs/adapter-cloudflare` at `https://kytama.pages.dev`.
- **Client Work confidentiality:** `Attentive` (`https://attentiveid.com/`) and `Benttreeschool` (`https://benttreeschool.com/`) — listed under `Collaborations` on `/works` — may link to their public web URLs only; never expose repository links.
- **Employer confidentiality:** Never expose internal Amar Bank system names, hostnames, credentials, ticket IDs, partner/client names, or unapproved metrics. Amar Bank detailed highlights in `amar-bank.md` remain pending sanitized verification before replacing the live `/about` Amar Bank bullets.
- **Self Projects:** May display public URLs and GitHub repositories (`ai-toolkit`, `TamLedger`, and additional owner-approved repos).
- **Truthfulness:** Every claim, metric, and article state must be real; unpublished journal entries render honestly as draft outlines rather than fabricated essays or 404s.

## Brand Commitments

- **Handle & Name:** `[ KyTama ]` / `Rizky Pratama — Backend Engineer`
- **Incumbent Visual Identity (preserved):** Warm parchment ground (`#edeae3`), forest green hierarchy (`#112314`, `#4a5c4d`, `#516354`, `#5c6e5f`, `#0e2912`, `#1a472a`, `#0a2e10`), `Departure Mono` headings/metadata, and `DM Sans` body prose.
- **References:** `21st.dev` (command palette, minimal cards), `cta.gallery` (editorial hairline CTAs, focus-dimming lists, directional arrow motion), `ampersanda.dev` (category tabs on `/works`), `perogeremmer.id` (`Working Ledger` & `/now`), `insomnius.dev` (backend capability focus), `imrenagi.com` (direct hero CTAs & hybrid live resume), `lintangkusuma.site` (clear business-domain framing).

## Evidence on Hand

- Verified experience entry for `PT. Sentra Inovasi Solusindo` (`2016 — 2019`, live in `src/lib/data/experience.ts`).
- Confirmed career arc and verified baseline practices for `Amar Bank` (`2020 — Present`) in `kytama-about-page/amar-bank.md`; detailed commit/PR/Jira verification pending company-approved internal agent output.
- Confirmed project URLs/repos: `https://attentiveid.com/`, `https://benttreeschool.com/`, `https://github.com/KyTama/ai-toolkit`, `https://github.com/KyTama/tam-ledger`, `https://github.com/KyTama`, `https://linkedin.com/in/prtamaky`.

## Product Principles

- Evidence over claims: never fabricate metrics, projects, or articles.
- Restraint with craft: editorial parchment aesthetic, hairline borders, zero generic AI gradients or shadow clutter.
- Fast by default: platform-native HTML (`<dialog>`, `popover`, View Transitions), zero layout shift, and printable ATS output.
- Clear separation of work: Employer Work (`Work`), `Collaborations` (web URL only), and `Self Projects` (URL/repo).

## Accessibility & Inclusion

- WCAG AA contrast (`>= 4.5:1` normal text, `>= 3:1` large text and non-text UI controls) across all parchment/green tokens.
- Full keyboard navigation, visible `:focus-visible` outlines, skip-to-content link, sequential headings, and `prefers-reduced-motion` support.
