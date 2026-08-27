import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export default function ProjectCard({ project }) {
  return (
    <div className="surface-card mx-auto flex w-full flex-col p-5 md:p-6">
      <div className="relative mb-12 h-64 w-full md:h-72">
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-[#262626]">
          <img
            src={project.media.cover}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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

      <div className="flex flex-grow flex-col px-2 pb-2">
        <h3 className="mb-4 text-xl font-bold leading-snug tracking-wide text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-[15px] text-slate-500 dark:text-slate-300">
          <p>Category: {project.category}</p>
          <p>{project.date}</p>
        </div>
        <p className="mt-auto text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-base">
          {project.description}
        </p>
      </div>
    </div>
  );
}
