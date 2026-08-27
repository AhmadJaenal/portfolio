import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import SectionHead from "../ui/SectionHead.jsx";
import ProjectCard from "../ProjectCard.jsx";
import { projects } from "@data/projects.js";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section>
      <SectionHead
        title={
          <>
            Completed <span className="text-accent">Projects</span>
          </>
        }
        desc="Witness the brilliance of previous projects. This portfolio showcases successful collaborations with diverse clients across various industries. Let the work speak for itself."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 font-medium text-accent hover:underline">
          See all projects <BiRightArrowAlt className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
