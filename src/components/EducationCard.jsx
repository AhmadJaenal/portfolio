import { BiBook } from "react-icons/bi";
import { education } from "@data/experiences.js";

export default function EducationCard({ className = "" }) {
  return (
    <div className={className}>
      <div className="surface-card p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
            <BiBook className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Education
          </h3>
        </div>

        <p className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
          {education.school}
        </p>
        <p className="mt-1 text-accent">{education.degree}</p>

        <dl className="mt-4 grid gap-x-8 gap-y-2 text-sm text-slate-500 dark:text-slate-400 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wider text-slate-400">
              Period
            </dt>
            <dd className="mt-1 text-slate-700 dark:text-slate-200">
              {education.period}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-slate-400">
              Location
            </dt>
            <dd className="mt-1 text-slate-700 dark:text-slate-200">
              {education.location}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-slate-400">
              GPA
            </dt>
            <dd className="mt-1 text-slate-700 dark:text-slate-200">
              {education.gpa}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
