import Container from "@components/ui/Container.jsx";
import SectionHead from "@components/ui/SectionHead.jsx";
import Skills from "@components/Skills.jsx";
import ExperienceTimeline from "@components/ExperienceTimeline.jsx";
import Cta from "@components/Cta.jsx";

const highlights = [
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Enterprise apps shipped" },
  { value: "5+", label: "Industries served" },
];

export default function About() {
  return (
    <Container>
      <SectionHead
        className="mt-16"
        eyebrow="About"
        title="Flutter & Mobile Developer"
        desc="I build reliable, maintainable mobile applications for enterprise clients — from HR and manufacturing systems to audit and certification platforms."
      />

      <div className="mx-auto mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Turning complex business processes into simple mobile experiences.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
          Over the past few years I have focused on Flutter development, working
          closely with backend teams, designers, and product owners to deliver
          applications that are fast, stable, and pleasant to use. I care about
          clean architecture, thoughtful state management, and shipping features
          that actually solve problems for real users.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="surface-card p-6 text-center">
            <p className="text-4xl font-bold text-accent">{item.value}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <ExperienceTimeline />

      <Skills showProficiency />

      <Cta />
    </Container>
  );
}
