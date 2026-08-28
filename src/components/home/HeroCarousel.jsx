import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft, BiChevronRight, BiLogoPlayStore } from "react-icons/bi";
import { getProject } from "@data/projects.js";

// Screenshots of the Safe Keyboard app (files in `public/safe-keyboard/`).
const slides = [
  {
    src: "/safe-keyboard/frame_blockedword_screen.png",
    name: "Blocked Words",
    caption:
      "A personal dictionary of words to block, with a free quota and upgrade tiers.",
    alt: "Safe Keyboard Blocked Words dictionary screen",
  },
  {
    src: "/safe-keyboard/frame_pin_screen.png",
    name: "Parent Mode",
    caption: "Settings locked behind a 6-digit PIN so kids can't change the filter.",
    alt: "Safe Keyboard Parent Mode PIN screen",
  },
  {
    src: "/safe-keyboard/frame_keyboard_screen.png",
    name: "Live Filtering",
    caption:
      "Inappropriate words are caught and removed as you type, anywhere on the phone.",
    alt: "Safe Keyboard live word filtering while typing",
  },
  {
    src: "/safe-keyboard/frame_setting_screen.png",
    name: "Keyboard Settings",
    caption:
      "Filter levels, language dictionary, themes, and haptic feedback in one place.",
    alt: "Safe Keyboard keyboard settings screen",
  },
];

const INTERVAL = 4500;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const go = useCallback(
    (next) => setIndex((i) => (next + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => go(index + 1), INTERVAL);
    return () => clearInterval(id);
  }, [index, paused, go]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const current = slides[index];
  const playStore = getProject("safe-keyboard")?.links?.playStore;
  const hasStore = Boolean(playStore && playStore !== "#");

  return (
    <div
      className="mx-auto w-full max-w-[320px] py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div className="mb-5 flex items-center justify-center gap-2">
        <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
          Latest app
        </span>
        <span className="text-sm font-semibold text-slate-900 dark:text-white">
          Safe Keyboard
        </span>
      </div>

      <div
        className="relative h-[470px] md:h-[510px]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}>
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== index}
            className={`absolute inset-0 mx-auto h-full w-auto object-contain drop-shadow-2xl transition-opacity duration-700 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => go(index - 1)}
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-md transition hover:text-accent dark:border-[#262626] dark:bg-[#121212] dark:text-slate-200">
          <BiChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => go(index + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-md transition hover:text-accent dark:border-[#262626] dark:bg-[#121212] dark:text-slate-200">
          <BiChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.name}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-accent" : "w-2 bg-slate-300 dark:bg-[#333333]"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 min-h-[92px] text-center">
        <p className="text-base font-semibold text-slate-900 dark:text-white">
          {current.name}
        </p>
        <p className="mx-auto mt-1 max-w-[280px] text-sm text-slate-500 dark:text-slate-400">
          {current.caption}
        </p>
      </div>

      <div className="mt-3 flex flex-col items-center gap-2">
        <a
          href={hasStore ? playStore : undefined}
          target={hasStore ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-disabled={!hasStore}
          title={
            hasStore ? "Open in Google Play" : "Coming soon to Google Play"
          }
          onClick={hasStore ? undefined : (e) => e.preventDefault()}
          className={`inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors dark:bg-white dark:text-slate-900 ${
            hasStore
              ? "hover:bg-slate-700 dark:hover:bg-slate-200"
              : "cursor-default opacity-60"
          }`}>
          <BiLogoPlayStore className="h-5 w-5" />
          {hasStore ? "Get it on Google Play" : "Coming soon on Google Play"}
        </a>
        <Link
          to="/portfolio/safe-keyboard"
          className="text-sm font-medium text-accent hover:underline">
          See full case study
        </Link>
      </div>
    </div>
  );
}
