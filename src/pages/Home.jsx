import Container from "@components/ui/Container.jsx";
import Hero from "@components/home/Hero.jsx";
import Skills from "@components/Skills.jsx";
import FeaturedProjects from "@components/home/FeaturedProjects.jsx";
import Cta from "@components/Cta.jsx";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Skills className="mt-16" />
      <FeaturedProjects />
      <Cta />
    </Container>
  );
}
