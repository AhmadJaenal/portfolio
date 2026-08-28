import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import Container from "./ui/Container.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "@data/profile.js";

const menu = [
  { title: "Home", to: "/", key: "home" },
  { title: "About", to: "/#about", key: "about" },
  { title: "Skills", to: "/#skills", key: "skills" },
  { title: "Portfolio", to: "/portfolio", key: "portfolio" },
  { title: "Contact", to: "/contact", key: "contact" },
];

// Landing-page section ids, in document order, mapped to the nav item they
// belong to. Sections after "skills" keep "Portfolio" highlighted.
const SPY_SECTIONS = ["about", "experience", "skills", "portfolio", "certificates"];
const SPY_TO_KEY = {
  about: "about",
  experience: "about",
  skills: "skills",
  portfolio: "portfolio",
  certificates: "portfolio",
};

function useScrollSpy(enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return undefined;
    }

    let frame = 0;
    const compute = () => {
      frame = 0;
      const line = 140; // reference line just below the sticky navbar
      let current = null;
      for (const id of SPY_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - line <= 0) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const spy = useScrollSpy(onHome);
  const activeKey = onHome ? (spy ? SPY_TO_KEY[spy] : "home") : null;

  const isActive = (item) => {
    if (onHome) return activeKey === item.key;
    if (item.key === "portfolio") return pathname.startsWith("/portfolio");
    if (item.key === "contact") return pathname === "/contact";
    return false;
  };

  const linkClass = (item) =>
    `block py-2 lg:px-3 text-sm transition-colors ${
      isActive(item)
        ? "text-accent font-semibold"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    }`;

  const firstName = profile.shortName.split(" ")[0];
  const lastName = profile.shortName.split(" ")[1];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-[#1f1f1f] dark:bg-[#050505]/80">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm text-white">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">
              {firstName} <span className="text-accent">{lastName}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {menu.map((item) => (
              <Link key={item.key} to={item.to} className={linkClass(item)}>
                {item.title}
              </Link>
            ))}
            <ThemeToggle className="ml-3" />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-[#262626] dark:text-slate-200">
              {open ? <BiX className="h-5 w-5" /> : <BiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 pb-4 lg:hidden">
            {menu.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                onClick={() => setOpen(false)}
                className={linkClass(item)}>
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
