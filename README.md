
# New Day Construction — Website

Polished custom build for New Day Construction (HVAC • Solar • GC) using Next.js + Tailwind.
Bilingual (EN/ES), modern UI, ready for Vercel.

## Local setup
1) Install deps: `npm i`
2) Run dev: `npm run dev`
3) Build: `npm run build` then `npm start`

## Contact form
- By default, the form uses a fake submit. To make it live in 2 minutes:
  1. Create a Formspree form, get your endpoint URL.
  2. Put it in `.env` as `FORM_ENDPOINT=...`
  3. In `app/page.js`, switch `fakeSubmit` to `realSubmit` (search for TODO).

## Deploy to Vercel
1) Create a free account at vercel.com
2) Push this folder to a new GitHub repo
3) Import the repo in Vercel → Framework: Next.js → Deploy
4) After deploy, go to Vercel → **Settings → Domains** → Add your domain (e.g. newdayconstruction.org)
5) Follow DNS instructions (below) to connect via Squarespace

## DNS (Squarespace Domains → Vercel)
- **Apex (root) domain**: `newdayconstruction.org`
  - Add an **A** record: Host `@` → Value `76.76.21.21`
- **WWW subdomain**: `www.newdayconstruction.org`
  - Add a **CNAME**: Host `www` → Value `cname.vercel-dns.com`
- Back in Vercel, wait for verification (usually a few minutes).

## Brand & assets to tweak
- `app/globals.css` → colors/typography
- `app/page.js` → strings in English/Spanish, phone, email, address
- `components/ui/*` → minimal UI primitives (replace with shadcn/ui later if you prefer)

## SEO
- Update `<title>` and meta in `app/layout.js`
- Add OpenGraph image at `app/opengraph-image.png` (optional)

---
Made with ♥ in Chicago.
