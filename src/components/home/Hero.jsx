import { BiCloudDownload, BiLogoWhatsapp } from "react-icons/bi";
import Button from "../ui/Button.jsx";
import heroImage from "@assets/hero.png";

export default function Hero() {
  return (
    <section className="grid place-items-center pb-8 pt-16 md:pb-24 md:pt-12 lg:grid-cols-2">
      <div className="order-1 hidden py-6 md:block">
        <img
          src={heroImage}
          alt="Astronaut in the air"
          width={620}
          height={620}
          loading="eager"
          className="mx-auto h-auto w-64"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold lg:text-6xl lg:tracking-tight xl:text-7xl xl:tracking-tighter text-slate-900 dark:text-white">
          <span className="text-accent">Flutter</span> and{" "}
          <span className="text-accent">Mobile</span> Developer
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
          Developing Android applications with a wide range of features and
          intuitive, attractive user interfaces, while maintaining a fast and
          efficient development process to deliver high-quality applications that
          provide a smooth user experience.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="#" target="_blank" rel="noopener">
            <BiCloudDownload className="h-5 w-5" />
            Download CV
          </Button>
          <Button to="/contact" variant="outline">
            <BiLogoWhatsapp className="h-5 w-5" />
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
}
