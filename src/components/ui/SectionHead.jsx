export default function SectionHead({ eyebrow, title, desc, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.35em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-white">
        {title}
      </h2>
      {desc && (
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
          {desc}
        </p>
      )}
    </div>
  );
}
