import Container from "@components/ui/Container.jsx";
import Hero from "@components/home/Hero.jsx";
import AboutMe from "@components/AboutMe.jsx";
import EducationCard from "@components/EducationCard.jsx";
import ExperienceTimeline from "@components/ExperienceTimeline.jsx";
import Skills from "@components/Skills.jsx";
import FeaturedProjects from "@components/home/FeaturedProjects.jsx";
import Certificates from "@components/Certificates.jsx";
import Cta from "@components/Cta.jsx";

export default function Home() {
  return (
    <Container>
      <Hero />

      <AboutMe id="about" className="scroll-mt-24 mt-24 md:mt-32" />
      <EducationCard className="mx-auto mt-14 max-w-5xl" />
      <ExperienceTimeline id="experience" className="scroll-mt-24 mt-8" />

      <Skills id="skills" className="scroll-mt-24 mt-24 md:mt-32" />
      <FeaturedProjects id="portfolio" className="scroll-mt-24 mt-24 md:mt-32" />
      <Certificates id="certificates" className="scroll-mt-24 mt-24 md:mt-32" />

      <Cta className="mt-24 md:mt-32" />
    </Container>
  );
}
