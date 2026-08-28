import { useParams, Link, Navigate } from "react-router-dom";
import {
  BiArrowBack,
  BiCheck,
  BiLinkExternal,
  BiLogoGithub,
  BiLogoPlayStore,
} from "react-icons/bi";
import Container from "@components/ui/Container.jsx";
import ShimmerImage from "@components/ui/ShimmerImage.jsx";
import { getProject } from "@data/projects.js";

function MetaItem({ label, value }) {
  return (
    <div className="surface-inset px-5 py-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {label}
      </p>
      <p className="text-base font-medium text-slate-700 dark:text-slate-200">
        {value}
      </p>
    </div>
  );
}

function List({ title, items }) {
  return (
    <div className="surface-card p-6 md:p-8">
      <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
            <BiCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) return <Navigate to="/portfolio" replace />;

  const playStoreLive = Boolean(
    project.links.playStore && project.links.playStore !== "#"
  );

  const links = [
    playStoreLive && {
      href: project.links.playStore,
      label: "Get it on Google Play",
      Icon: BiLogoPlayStore,
    },
    project.links.github && {
      href: project.links.github,
      label: "GitHub",
      Icon: BiLogoGithub,
    },
    project.links.website && {
      href: project.links.website,
      label: "Website",
      Icon: BiLinkExternal,
    },
  ].filter(Boolean);

  return (
    <Container className="pb-24">
      <div className="mt-10">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-accent dark:text-slate-400">
          <BiArrowBack className="h-4 w-4" /> Back to portfolio
        </Link>
      </div>

      <header className="mt-8">
        <span
          className="inline-flex rounded-full px-3 py-1 text-xs font-medium text-white"
          style={{ backgroundColor: project.themeColor }}>
          {project.category}
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-white">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
      </header>

      {project.media.screenshots?.length ? (
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {project.media.screenshots.map((shot, i) => (
            <div
              key={shot}
              className="relative h-[460px] w-[224px] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl dark:border-[#262626] dark:bg-[#121212]">
              <ShimmerImage
                src={shot}
                alt={`${project.title} screenshot ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative mt-10 h-[280px] overflow-hidden rounded-3xl border border-slate-200 md:h-[420px] dark:border-[#262626]">
          <ShimmerImage
            src={project.media.cover}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetaItem label="Company" value={project.company} />
        <MetaItem label="Role" value={project.role} />
        <MetaItem label="Year" value={project.date} />
        <MetaItem label="Status" value={project.status} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <List title="Key Tasks" items={project.tasks} />
        <List title="Implementations" items={project.implementations} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="surface-card p-6 md:p-8">
          <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-[#262626] dark:bg-[#121212] dark:text-slate-200">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              State management:
            </span>{" "}
            {project.stateManagement}
          </p>
        </div>

        <div className="surface-card p-6 md:p-8">
          <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
            Links
          </h3>
          {links.length || project.playStoreComingSoon ? (
            <div className="flex flex-wrap gap-3">
              {!playStoreLive && project.playStoreComingSoon && (
                <span
                  title="Coming soon to Google Play"
                  className="inline-flex cursor-default items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white opacity-60 dark:bg-white dark:text-slate-900">
                  <BiLogoPlayStore className="h-4 w-4" />
                  Coming soon on Google Play
                </span>
              )}
              {links.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-accent hover:text-accent dark:border-[#262626] dark:text-slate-200">
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Links for this project will be added soon.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
