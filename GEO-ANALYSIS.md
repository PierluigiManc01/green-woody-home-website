# GEO Analysis: greenwoodyhome.com (2026-11-02)

Branch: `seo/geo-greenwoodyhome`. Site: Vite + React client-side SPA on Vercel. Business type: local vacation rental.

## GEO Readiness Score: 38/100 (before fixes in this branch)

Platform scores (Google AIO, ChatGPT, Perplexity) were not measured with a tool, so none is given. Qualitative readiness: low across all three, for the same root cause below.

## Critical finding: content is invisible to non-rendering crawlers

`curl` of `/`, `/services`, `/gallery`, `/contact` all return the same 1,063-byte shell with an empty `<div id="root"></div>`. All copy lives in `src/contexts/LanguageContext.tsx` and renders only after JavaScript runs. Googlebot renders JS; GPTBot / OAI-SearchBot / PerplexityBot-style fetchers often do not (public tests, not confirmed for this site). Every subpage also shares the homepage `<title>` and description.

## AI crawler access (robots.txt)

Served `robots.txt` allows everything (`User-agent: * Allow: /`), so nothing is blocked. Reported by capability:

| Bot | Governs | Status |
|---|---|---|
| Googlebot | Google Search, AI Overviews, AI Mode eligibility | Allowed |
| OAI-SearchBot | ChatGPT Search citability | Allowed (via `*`) |
| Claude-SearchBot | Claude search citability | Allowed (via `*`) |
| PerplexityBot | Perplexity search | Allowed (via `*`) |
| GPTBot / ClaudeBot / Google-Extended / CCBot / Applebot-Extended | Training only | Allowed (via `*`), licensing choice |

No `Sitemap:` line existed. Branch now names the search bots explicitly and adds the sitemap.

## llms.txt, sitemap

Before: `/llms.txt` and `/sitemap.xml` returned the SPA HTML with HTTP 200 (soft 404, because `vercel.json` rewrites everything to `index.html`). Branch adds real static files. llms.txt carries no weight in this score and Google ignores it; it is a low-cost extra for other systems.

## Other findings

- **Host split:** apex `greenwoodyhome.com` 307-redirects to `www`. Canonical was missing; branch adds `https://www.greenwoodyhome.com/`. Use a 301 (Vercel domain setting) instead of 307.
- **Schema:** none before. Branch adds `LodgingBusiness` JSON-LD (static, in `index.html`) built only from facts present in the repo.
- **NAP inconsistency:** contact string `(+06) 5847332` (not a valid format) vs footer `(+39) 3358158411`. Pick one; schema uses the mobile number. Confirm before merge.
- **Language:** `<html lang="en">` fixed, Italian toggle is client-side state, no hreflang or separate URLs. Italian queries cannot reach Italian copy.
- **Brand/entity:** no Google Business Profile, Wikipedia, Reddit, YouTube or LinkedIn signals checked (not measurable from the repo). `sameAs` lists Airbnb and Booking only; add Google Business Profile and social URLs if they exist.
- **Citability:** copy is marketing-style; few quotable fact blocks. Strong facts exist (30 min to Rome centre, 15 to sea, 3 bed / 3 bath, solar, EV charger, Barazzutti tennis academy 200 m, Castrum Legionis 200 m) but sit in JS strings.
- **Images:** photo filenames like `GREEN WOODY HOME-02.jpg`; alt text generic.
- **Recency:** no dates or "last updated" anywhere except the calendar.

## Top 5 highest-impact changes

1. **Pre-render or SSR the routes** (first-principles fix; rest depends on it). Options: `vite-react-ssg`, `vite-plugin-prerender`, or migrate to Next.js. Verify with `curl` that body text appears. Failure check: curl still returns an empty root.
2. **Per-route title, description, canonical** (react-helmet-async or prerender metadata). Today all four pages are identical.
3. **Fix 301 apex to www and unify NAP**; add Google Business Profile and link it in `sameAs`.
4. **Add an FAQ/answer section in plain HTML** ("How far is Green Woody Home from Rome?", "Is it solar powered?", "How many guests?") with 40-60 word direct answers. Schema not needed for Google benefit (FAQ rich results retired 2026-05-07).
5. **Italian version on its own URL** (`/it/...`) with hreflang.

## Update: pre-rendering, per-route metadata, phone (done)

- Routes `/`, `/gallery`, `/services`, `/reservations`, `/contact`, `/404` are now pre-rendered at build time with `vite-react-ssg@0.8.9` (last release supporting Vite 5). `npm run build` also copies `dist/404/index.html` to `dist/404.html` for Vercel.
- `vercel.json` no longer rewrites every URL to `index.html`; unknown URLs now get a real 404 status.
- `src/components/Seo.tsx` sets title, description, canonical and og tags per page. `/contact` canonicalises to `/reservations`.
- Phone unified to `+39 335 815 8411` in both language strings (footer, contact page and schema already used it).
- Verified: no hydration errors in a browser on `/`, `/services/`, `/gallery/`, `/reservations/`. Not verified on a real Vercel deploy: check `curl https://www.greenwoodyhome.com/services` after deploy.

## Done earlier in this branch (uncommitted)

- `public/robots.txt`: explicit search bots + Sitemap line
- `public/sitemap.xml`: 4 routes
- `public/llms.txt`: summary and key facts
- `index.html`: canonical + LodgingBusiness JSON-LD

Not touched: pre-rendering, i18n routing, phone number decision. The unrelated pre-existing diffs (`package.json`, lockfiles, `vite.config.ts`) came along when the branch was created; stage only the files above when committing.
