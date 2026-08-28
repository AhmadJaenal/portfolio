import {
  BiMap,
  BiEnvelope,
  BiPhone,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";
import Container from "@components/ui/Container.jsx";
import SectionHead from "@components/ui/SectionHead.jsx";
import ContactForm from "@components/ContactForm.jsx";
import { profile } from "@data/profile.js";

const details = [
  { Icon: BiMap, text: profile.location },
  { Icon: BiEnvelope, text: profile.email, href: `mailto:${profile.email}` },
  { Icon: BiPhone, text: profile.phone, href: profile.phoneHref },
  {
    Icon: BiLogoLinkedin,
    text: "linkedin.com/in/ahmadjaenal",
    href: profile.socials.linkedin,
  },
  {
    Icon: BiLogoGithub,
    text: "github.com/AhmadJaenal",
    href: profile.socials.github,
  },
];

export default function Contact() {
  return (
    <Container className="pb-24">
      <SectionHead
        className="mt-16"
        eyebrow="Contact"
        title="Let's talk"
        desc="Have a mobile app idea or a role in mind? Fill out the form or reach out directly."
      />

      <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            I&apos;m open to internship, freelance, and full-time mobile
            development opportunities. Expect a reply within 1 to 2 business days.
          </p>
          <div className="mt-6 space-y-3">
            {details.map(({ Icon, text, href }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Icon className="h-5 w-5 shrink-0 text-accent" />
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:text-accent">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
