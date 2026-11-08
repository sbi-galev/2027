# SBI for Galaxy Evolution 2027

Website for the fourth SBI for Galaxy Evolution meeting, 6–9 July 2027, Senate House, London.
Built with [Astro](https://astro.build); deployed to <https://sbi-galev.github.io/2027/>.

## Develop

Requires Node ≥ 22.

```sh
npm install
npm run dev       # http://localhost:4321/2027/
npm run build     # static site in dist/
npm run preview   # serve dist/
```

## Editing

- **Content** (dates, venue, people, key dates, archive): `src/data/meeting.ts`
- **Page structure and section styles**: `src/pages/index.astro`
- **Global tokens** (colours, type scale, section grid): `src/styles/global.css`
- **Hero galaxy** (1-bit dithered canvas): `src/components/Galaxy.astro`
- **Previous meetings list and photo hover**: `src/components/Archive.astro`

Archive photos are 1-bit dithered with `python scripts/dither.py IN.jpg ... --out public/archive`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
In the repo settings, set **Pages → Source** to **GitHub Actions**. The `/2027` base path is set in
`astro.config.mjs`. Change it there if the repo name differs.
