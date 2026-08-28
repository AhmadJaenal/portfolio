import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import SectionHead from "../ui/SectionHead.jsx";
import ProjectCard from "../ProjectCard.jsx";
import { projects } from "@data/projects.js";

export default function FeaturedProjects({ id, className = "" }) {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id={id} className={className}>
      <SectionHead
        title={
          <>
            Completed <span className="text-accent">Projects</span>
          </>
        }
        desc="My own product plus cross-platform apps I built and maintained during my internship at PT. Ragdalion Revolusi Industri."
      />

      <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 font-medium text-accent hover:underline">
          See all projects <BiRightArrowAlt className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
