import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import Container from "./ui/Container.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const menu = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-2 lg:px-3 text-sm transition-colors ${
      isActive
        ? "text-accent font-semibold"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-[#1f1f1f] dark:bg-[#050505]/80">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
            D<span className="text-accent">X</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {menu.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} end={item.path === "/"}>
                {item.title}
              </NavLink>
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
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={linkClass}>
                {item.title}
              </NavLink>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
