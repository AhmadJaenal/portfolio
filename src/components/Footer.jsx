import { Link } from "react-router-dom";
import { BiLogoLinkedin, BiLogoGithub, BiEnvelope } from "react-icons/bi";
import { profile } from "@data/profile.js";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/#about" },
      { label: "Experience", to: "/#experience" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "What I do",
    links: [
      { label: "Mobile App Development", to: "/#skills" },
      { label: "State Management", to: "/#skills" },
      { label: "API Integration", to: "/#skills" },
      { label: "DevOps and CI/CD", to: "/#skills" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Cerol v5", to: "/portfolio/cerol-v5" },
      { label: "Sikomo", to: "/portfolio/sikomo" },
      { label: "Andon Calling", to: "/portfolio/andon-calling" },
      { label: "Jasmaniku", to: "/portfolio/jasmaniku" },
    ],
  },
];

const socials = [
  { Icon: BiLogoLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { Icon: BiLogoGithub, href: profile.socials.github, label: "GitHub" },
  { Icon: BiEnvelope, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-50 px-6 pb-8 pt-12 md:px-12 dark:border-[#1f1f1f] dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row dark:border-[#262626]">
          <div className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white">
            {profile.initials[0]}
            <span className="text-accent">{profile.initials[1]}</span>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Let&apos;s connect
            </span>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-[#262626] dark:bg-[#121212] dark:text-white dark:hover:bg-[#1f1f1f]">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-b border-slate-200 py-12 md:grid-cols-3 dark:border-[#262626]">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-6 font-semibold text-slate-900 dark:text-white">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-4 text-[15px] text-slate-500 dark:text-slate-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="transition-colors hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-slate-500 lg:flex-row dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
