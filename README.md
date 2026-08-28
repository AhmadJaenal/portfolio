# Ahmad Jaenal Aripin — Portfolio (React)

Personal portfolio website for **Ahmad Jaenal Aripin**, a Flutter & Mobile
Developer. Migrated from Astro to **React + Vite + Tailwind CSS**.
The original Astroship style and theme (Bricolage Grotesque / Inter type, the
`#FE7743` orange accent, and the dark card aesthetic) are preserved, now with a
full light/dark mode.

## Tech stack

- **React 18** + **Vite 5**
- **React Router 6** — client-side routing
- **Tailwind CSS 3** — `darkMode: "class"`
- **react-icons** — Boxicons (`bi`) + Simple Icons (`si`)
- **@fontsource-variable** — Bricolage Grotesque + Inter

## Features & pages

| Route             | Page            | Notes                                                        |
| ----------------- | --------------- | ----------------------------------------------------------- |
| `/`               | Landing page    | Everything on one page: hero carousel, about, education, experience timeline, skills, featured projects, certificates, CTA. Navbar/footer links scroll to `#about`, `#experience`, `#skills`, `#certificates` |
| `/about`          | Redirect        | Redirects to `/#about`                                      |
| `/portfolio`      | Portfolio page  | Project grid with category filter                           |
| `/portfolio/:id`  | Project detail  | Cover/screenshot gallery, meta, tasks, implementations, tech, links |
| `/contact`        | Contact page    | Contact form (Web3Forms) + contact details                  |
| `*`               | 404             | Not found                                                   |

- **Dark mode** — toggle in the navbar, persisted to `localStorage`, respects
  `prefers-color-scheme`, and applied before first paint (no flash).
- **Skills** — reusable `<Skills />` section (capability cards + tech stack,
  optional proficiency bars).
- **Image loading** — `<ShimmerImage />` (`src/components/ui/`) shows an animated
  skeleton shimmer until each image loads, then fades it in. Used for project
  covers, the project-detail gallery, and certificate scans; the hero carousel
  has its own inline shimmer. Respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Configuration

- **Content** lives in `src/data/` — `profile.js` (name, contact, socials, CV
  link, summary, bio, interests), `projects.js`, `skills.js`, `experiences.js`
  (+ `education`), `certificates.js`.
- **Certificates**: edit `src/data/certificates.js`. Scans live in
  `public/images/certificates/` (spaces in file names are written as `%20` in
  the data file); `url` is the verification link and falls back to the scan.
  Each entry has a `group` (`certificateGroups` sets the display order, mobile
  development first) and a `level` (`Expert` > `Advanced`/`Certified` >
  `Intermediate` > `Fundamental`) that sorts cards within a group and colours the
  badge.
- **Project & app images** live under `public/images/<project>/` and are
  referenced as `/images/<project>/<file>` in `src/data/projects.js` and
  `src/components/home/HeroCarousel.jsx`.
- **CV download**: put the PDF at `public/CV-Ahmad-Jaenal-Aripin.pdf` (the path
  set in `src/data/profile.js` → `cvUrl`).
- **Contact form**: create a free key at <https://web3forms.com> and set
  `ACCESS_KEY` in `src/components/ContactForm.jsx`. Without a key the form runs in
  demo mode (no message is sent).
- **Project covers** currently use a shared placeholder image — replace
  `media.cover` per project in `src/data/projects.js` with real screenshots.
- **Hero carousel** shows the Safe Keyboard app. Screenshots live in
  `public/safe-keyboard/` (`frame_*_screen.png`); slides and captions are defined
  in `src/components/home/HeroCarousel.jsx`.
- **Google Play links**: set `links.playStore` on a project in
  `src/data/projects.js` to a real URL and the Play Store button turns live
  everywhere (hero carousel, project card, project detail). While empty, projects
  flagged `playStoreComingSoon: true` show a disabled "Coming soon on Google
  Play" button instead.

## Project structure

```
src/
├── App.jsx                 # routes
├── main.jsx                # entry + providers
├── index.css               # Tailwind + fonts + theme tokens
├── context/ThemeContext.jsx
├── data/                   # projects, skills, experiences
├── components/
│   ├── Navbar / Footer / ThemeToggle
│   ├── Skills / ProjectCard / Cta / ExperienceTimeline / ContactForm
│   ├── home/               # Hero, FeaturedProjects
│   └── ui/                 # Container, Button, SectionHead
└── pages/                  # Home, Portfolio, ProjectDetail, Contact, NotFound
```

## Deployment

Any static host works. SPA deep-link fallbacks are included for Netlify
(`public/_redirects`) and Vercel (`vercel.json`).
# portfolio
