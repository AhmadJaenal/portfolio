import { BiCloudDownload, BiEnvelope } from "react-icons/bi";
import SectionHead from "./ui/SectionHead.jsx";
import Button from "./ui/Button.jsx";
import { profile } from "@data/profile.js";
import { education } from "@data/experiences.js";

const highlights = [
  { value: education.gpa.split(" ")[0], label: "GPA out of 4.00" },
  { value: "9 mo", label: "Internship experience" },
  { value: "7+", label: "Apps and projects built" },
  { value: "1", label: "Published product" },
];

export default function AboutMe({ id, showActions = true, className = "" }) {
  return (
    <section id={id} className={className}>
      <SectionHead
        eyebrow="About Me"
        title={
          <>
            Turning designs into <span className="text-accent">reliable</span>{" "}
            mobile apps
          </>
        }
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {profile.bio.map((para) => (
            <p
              key={para.slice(0, 24)}
              className="mb-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {para}
            </p>
          ))}

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.interests.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 dark:border-[#262626] dark:bg-[#121212] dark:text-slate-300">
                {item}
              </span>
            ))}
          </div>

          {showActions && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={profile.cvUrl}
                download={profile.cvFileName}
                rel="noopener">
                <BiCloudDownload className="h-5 w-5" />
                Download CV
              </Button>
              <Button to="/contact" variant="outline">
                <BiEnvelope className="h-5 w-5" />
                Get in touch
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 lg:col-span-2">
          {highlights.map((item) => (
            <div key={item.label} className="surface-card p-6 text-center">
              <p className="text-3xl font-bold text-accent">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
