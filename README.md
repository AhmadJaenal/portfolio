# Portfolio — Flutter & Mobile Developer (React)

Personal portfolio website migrated from Astro to **React + Vite + Tailwind CSS**.
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
| `/`               | Landing page    | Hero, Skills, featured projects, CTA                        |
| `/about`          | About page      | Bio, stats, experience timeline, skills + proficiency bars  |
| `/portfolio`      | Portfolio page  | Project grid with category filter                           |
| `/portfolio/:id`  | Project detail  | Cover, meta, tasks, implementations, tech, links            |
| `/contact`        | Contact page    | Contact form (Web3Forms) + contact details                  |
| `*`               | 404             | Not found                                                   |

- **Dark mode** — toggle in the navbar, persisted to `localStorage`, respects
  `prefers-color-scheme`, and applied before first paint (no flash).
- **Skills** — reusable `<Skills />` section (capability cards + tech stack,
  optional proficiency bars) used on both Home and About.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Configuration

- **Content** lives in `src/data/` — `projects.js`, `skills.js`, `experiences.js`.
- **Contact form**: create a free key at <https://web3forms.com> and set
  `ACCESS_KEY` in `src/components/ContactForm.jsx`. Without a key the form runs in
  demo mode (no message is sent).

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
└── pages/                  # Home, About, Portfolio, ProjectDetail, Contact, NotFound
```

## Deployment

Any static host works. SPA deep-link fallbacks are included for Netlify
(`public/_redirects`) and Vercel (`vercel.json`).
# portfolio
