# FlickzWithFitz

Wedding and portrait photography site for Cameron Fitzsimmons, Erie PA — a rebuild of
the original Next.js site against the 2026 rebrand design handoff.

Art direction is strictly black-and-white chrome; the photography is the only colour on
the page. Motion is continuous: a page-load reveal, scroll-linked parallax and scale, a
pinned `mix-blend-mode: difference` statement, an infinite marquee, a cursor-following
preview, and crossfaded route transitions.

Next.js 14 (App Router) · React 18 · Tailwind CSS 4 · Framer Motion 11 · TypeScript.

## Running it

```bash
npm install
npm run dev
```

`npm run build` produces the production bundle; every route is statically prerendered.

## Layout

| Path | What it holds |
| --- | --- |
| `app/` | Four routes — home, `/portfolio`, `/about`, `/contact` — plus the shared shell, `sitemap.ts` and `robots.ts` |
| `components/` | Shell chrome (sidebar, mobile bars, intro, transitions) and the page sections |
| `data/photos.ts` | The 67-frame gallery inventory and the five categories; counts derive from it |
| `data/content.ts` | Copy, packages, testimonials, form options |
| `data/photo-meta.json` | Generated intrinsic dimensions — do not hand-edit |
| `scripts/build-photos.mjs` | Regenerates the responsive derivatives |
| `public/photos/` | Three WebP widths plus a JPEG fallback per photo |
| `public/film/ceremony.mp4` | The stitched ceremony film |

## Desktop and mobile are separate designs

The mobile experience is not a reflow — no sidebar, a sticky top bar and a fixed bottom
tab bar, and swipe-first content. The two are selected by real media queries at the `lg`
breakpoint (1024px); structurally different blocks render as `lg:hidden` /
`hidden lg:block`. Lazy loading keeps the hidden branch from fetching images.

## Assets

Photographs are committed as derivatives, not originals. To regenerate them from a
directory of source JPEGs:

```bash
node scripts/build-photos.mjs "<dir containing photos/>"
```

That writes `public/photos/<name>-{400,800,1400}.webp`, a 1400px JPEG fallback, and
`data/photo-meta.json`. Every `<img>` carries intrinsic `width`/`height` from that file,
so the masonry never shifts as photos arrive.

The film is one silent, stitched MP4 (1280×720, ~38 MB). It is served with
`preload="none"` and only starts playing once the stage scrolls into view, so visitors
who never reach it pay nothing for it. It runs on a plain loop — there is no crossfade
machinery.

## Booking form

`components/ContactForm.tsx` posts to Formspree (`f/mblkgqkz`, carried over from the
previous site). It validates a name, a well-formed email, and a date that is not in the
past before sending, and falls back to a mailto prompt if the request fails.
