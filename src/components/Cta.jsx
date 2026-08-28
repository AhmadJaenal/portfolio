import Button from "./ui/Button.jsx";

export default function Cta({ className = "my-24" }) {
  return (
    <section className={className}>
      <div className="surface-card overflow-hidden bg-slate-900 p-8 text-center md:p-16 dark:bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Let&apos;s build something great together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Have a mobile app idea or a role in mind? I&apos;m open to internship,
          freelance, and full-time mobile development opportunities.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/contact">Get in touch</Button>
          <Button to="/portfolio" variant="dark">
            View portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
