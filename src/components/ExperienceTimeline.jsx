import { experiences } from "@data/experiences.js";

export default function ExperienceTimeline({ id, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-2 py-16 md:px-6 ${className}`}>
      <div className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">
          Experience
        </p>
        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
          Professional Journey
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-slate-500 dark:text-slate-400">
          My journey as a Flutter Developer through internships and professional
          experience developing enterprise mobile applications.
        </p>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 border-l-2 border-dashed border-slate-300 md:block dark:border-[#3A3A3A]" />

        {experiences.map((item, index) => (
          <div
            key={`${item.company}-${item.period}`}
            className={`relative mb-16 flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}>
            <div className="absolute bottom-0 left-3 top-0 border-l-2 border-dashed border-slate-300 md:hidden dark:border-[#3A3A3A]" />
            <div className="absolute left-1/2 top-8 z-20 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-accent md:block dark:border-[#0F0F0F]" />
            <div className="absolute left-[5px] top-8 z-20 h-4 w-4 rounded-full border-4 border-white bg-accent md:hidden dark:border-[#0F0F0F]" />

            <div className="ml-10 w-full rounded-3xl border border-slate-200 bg-white p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent md:ml-0 md:max-w-md dark:border-[#262626] dark:bg-[#111111]">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500 dark:border-[#333333] dark:bg-[#1A1A1A] dark:text-slate-300">
                {item.type}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                {item.position}
              </h3>
              <p className="mt-2 font-medium text-accent">{item.company}</p>
              <p className="mt-1 text-sm text-slate-400">{item.period}</p>
              <p className="mt-6 leading-7 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
