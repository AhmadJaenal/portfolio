import { Link } from "react-router-dom";
import { BiRightArrowAlt, BiLogoPlayStore } from "react-icons/bi";
import ShimmerImage from "./ui/ShimmerImage.jsx";

export default function ProjectCard({ project }) {
  const framed = Boolean(project.media.screenshots?.length);
  const playStoreLive = Boolean(
    project.links?.playStore && project.links.playStore !== "#"
  );
  const showPlayStore = playStoreLive || project.playStoreComingSoon;
  return (
    <div className="surface-card mx-auto flex w-full flex-col p-6 md:p-8">
      <div className="relative mb-14 h-64 w-full md:h-80">
        <div
          className={`absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-[#262626] ${
            framed ? "bg-slate-100 dark:bg-[#121212]" : ""
          }`}>
          <ShimmerImage
            src={project.media.cover}
            alt={project.title}
            loading="lazy"
            className={`h-full w-full hover:scale-105 ${
              framed ? "object-contain object-top pt-4" : "object-cover"
            }`}
          />
          {!framed && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          )}
          <span
            className="absolute left-4 top-4 z-20 inline-flex rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: project.themeColor }}>
            {project.category}
          </span>
        </div>
        <div className="absolute -bottom-6 left-1/2 z-20 w-max -translate-x-1/2">
          <Link
            to={`/portfolio/${project.id}`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-xl transition-all duration-300 hover:border-accent hover:text-accent dark:border-[#262626] dark:bg-[#121212] dark:text-white dark:hover:border-accent">
            View Project Details
            <BiRightArrowAlt className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="flex flex-grow flex-col px-1 pb-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug tracking-wide text-slate-900 dark:text-white">
            {project.title}
          </h3>
          {showPlayStore &&
            (playStoreLive ? (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                title="Get it on Google Play"
                className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white dark:bg-white dark:text-slate-900">
                <BiLogoPlayStore className="h-3.5 w-3.5" />
                Play Store
              </a>
            ) : (
              <span
                title="Coming soon to Google Play"
                className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-400 dark:border-[#262626]">
                <BiLogoPlayStore className="h-3.5 w-3.5" />
                Soon
              </span>
            ))}
        </div>
        <p className="mt-2 text-sm text-slate-400">{project.company}</p>

        <div className="my-6 flex flex-wrap items-center justify-between gap-3 text-[15px] text-slate-500 dark:text-slate-300">
          <p>{project.category}</p>
          <p>{project.date}</p>
        </div>

        <p className="mt-auto text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-base">
          {project.description}
        </p>
      </div>
    </div>
  );
}
