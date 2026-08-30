import { BiCloudDownload, BiLogoWhatsapp } from "react-icons/bi";
import Button from "../ui/Button.jsx";
import HeroCarousel from "./HeroCarousel.jsx";
import { profile } from "@data/profile.js";

export default function Hero() {
  return (
    <section className="grid place-items-center gap-y-10 pb-12 pt-16 md:pb-28 md:pt-20 lg:grid-cols-2 lg:gap-x-12">
      <div className="order-1 lg:order-none">
        <HeroCarousel />
      </div>

      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-[#262626] dark:bg-[#121212] dark:text-slate-300">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for work
        </span>

        <p className="mt-6 text-lg text-slate-500 dark:text-slate-400">
          {profile.greeting}
        </p>
        <h1 className="mt-1 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl xl:tracking-tighter dark:text-white">
          {profile.name}
        </h1>
        <p className="mt-4 text-2xl font-semibold sm:text-3xl">
          <span className="text-accent">Flutter</span>
          <span className="text-slate-400"> &amp; </span>
          <span className="text-accent">Mobile</span>
          <span className="text-slate-900 dark:text-white"> Developer</span>
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={profile.cvUrl}
            download={profile.cvFileName}
            rel="noopener">
            <BiCloudDownload className="h-5 w-5" />
            Download CV
          </Button>
          <Button to="/contact" variant="outline">
            <BiLogoWhatsapp className="h-5 w-5" />
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
}
