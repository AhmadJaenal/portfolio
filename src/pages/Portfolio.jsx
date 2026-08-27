import { useMemo, useState } from "react";
import Container from "@components/ui/Container.jsx";
import SectionHead from "@components/ui/SectionHead.jsx";
import ProjectCard from "@components/ProjectCard.jsx";
import { projects } from "@data/projects.js";

export default function Portfolio() {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Container className="pb-24">
      <SectionHead
        className="mt-16"
        eyebrow="Portfolio"
        title="Selected Work"
        desc="A closer look at the mobile applications I have designed, built, and shipped for enterprise clients."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "border-accent bg-accent text-white"
                : "border-slate-200 text-slate-600 hover:border-accent hover:text-accent dark:border-[#262626] dark:text-slate-300"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
}
