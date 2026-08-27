import { BiMap, BiEnvelope, BiPhone } from "react-icons/bi";
import Container from "@components/ui/Container.jsx";
import SectionHead from "@components/ui/SectionHead.jsx";
import ContactForm from "@components/ContactForm.jsx";

const details = [
  { Icon: BiMap, text: "Bekasi, West Java, Indonesia" },
  {
    Icon: BiEnvelope,
    text: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  { Icon: BiPhone, text: "+62 812 3456 7890", href: "tel:+6281234567890" },
];

export default function Contact() {
  return (
    <Container className="pb-24">
      <SectionHead
        className="mt-16"
        eyebrow="Contact"
        title="Let's talk"
        desc="Have a project in mind or just want to say hello? Fill out the form or reach out directly."
      />

      <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            I&apos;m currently open to freelance projects and full-time roles.
            Expect a reply within 1–2 business days.
          </p>
          <div className="mt-6 space-y-3">
            {details.map(({ Icon, text, href }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Icon className="h-5 w-5 text-accent" />
                {href ? (
                  <a href={href} className="hover:text-accent">
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
