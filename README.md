# GingerMail marketing site

The marketing / landing site for **GingerMail** — a local-first desktop
email, calendar, and tasks app with optional on-device AI.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    layout.tsx        Root layout (fonts, metadata, header + footer)
    page.tsx          Landing page (composes the sections)
    privacy/          Privacy policy page
    security/         Security policy page
    globals.css       Brand theme tokens + base styles
  components/
    Header.tsx        Sticky nav with mobile menu
    Footer.tsx        Footer with trust links
    ui.tsx            Container, Logo, Button, SectionHeading
    icons.tsx         Inline SVG icon set
    Reveal.tsx        Scroll-reveal animation wrapper
    LegalShell.tsx    Shared shell for legal pages
    sections/         Landing-page sections (Hero, Features, PrivateAI, ...)
  lib/
    site.ts           Site-wide config (name, links, contacts, nav)
public/
  img/gingermail-icon.png   App icon (from the GingerMail app)
  favicon.svg               Brand favicon
```

## Things to wire up before launch

These are intentionally placeholders:

- **Donations** (`src/components/sections/Support.tsx`): the "Support" buttons
  currently show a friendly placeholder message. Point them at Stripe Checkout /
  Payment Links, Ko-fi, or GitHub Sponsors.
- **Downloads** (`src/components/sections/DownloadCTA.tsx`): the download buttons
  link to `#`. Point them at real release artifacts.
- **Links / contacts** (`src/lib/site.ts`): update `url`, `github`, and the
  email addresses.
