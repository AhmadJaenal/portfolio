import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-[#262626] dark:bg-[#121212] dark:text-slate-200 dark:hover:bg-[#1f1f1f] ${className}`}>
      {isDark ? <BiSun className="h-5 w-5" /> : <BiMoon className="h-5 w-5" />}
    </button>
  );
}
