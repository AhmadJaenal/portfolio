import SectionHead from "./ui/SectionHead.jsx";
import { capabilities, techStack, proficiencies } from "@data/skills.js";

function CapabilityCard({ title, category, description, Icon }) {
  return (
    <div className="surface-card flex flex-col p-6 md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800 text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]">
          <Icon className="h-6 w-6 drop-shadow-md" />
        </div>
        <h3 className="text-xl font-semibold leading-snug tracking-wide text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="surface-inset mb-4 px-5 py-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Category
        </p>
        <p className="text-base font-medium text-slate-700 dark:text-slate-200">
          {category}
        </p>
      </div>
      <div className="surface-inset flex-grow px-5 py-6">
        <h4 className="mb-3 text-lg font-medium text-slate-900 dark:text-white">
          Description
        </h4>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Skills({ showProficiency = false, className = "" }) {
  return (
    <section className={className}>
      <SectionHead
        eyebrow="Skills"
        title={
          <>
            Technical <span className="text-accent">Toolkits</span>
          </>
        }
        desc="A collection of tools and technologies that I use throughout the software development lifecycle to design, develop, test, deploy, and maintain high-quality applications efficiently."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <CapabilityCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
        {techStack.map(({ name, Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-[#262626] dark:bg-[#121212] dark:text-slate-200">
            <Icon className="h-4 w-4 text-accent" />
            {name}
          </span>
        ))}
      </div>

      {showProficiency && (
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
          {proficiencies.map(({ name, level }) => (
            <div key={name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {name}
                </span>
                <span className="text-slate-400">{level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-[#1f1f1f]">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
