import { BiCertification, BiLinkExternal } from "react-icons/bi";
import SectionHead from "./ui/SectionHead.jsx";
import ShimmerImage from "./ui/ShimmerImage.jsx";
import { certificates } from "@data/certificates.js";

function CertificateCard({ title, issuer, date, credentialId, url, image, skills }) {
  const isLinked = url && url !== "#";
  const preview = image || url;
  return (
    <article className="surface-card flex flex-col overflow-hidden">
      <a
        href={preview || undefined}
        target={preview ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="group relative flex h-44 items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-[#262626] dark:bg-[#121212]">
        {preview ? (
          <ShimmerImage
            src={preview}
            alt={`${title} certificate`}
            loading="lazy"
            className="h-full w-full object-cover object-top group-hover:scale-105"
          />
        ) : (
          <BiCertification className="h-14 w-14 text-accent/60" />
        )}
      </a>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {issuer}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-400">{date}</p>
        {credentialId ? (
          <p className="mt-0.5 text-xs text-slate-400">{credentialId}</p>
        ) : null}

        {skills?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs text-slate-600 dark:border-[#262626] dark:bg-[#0a0a0a] dark:text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto pt-5">
          {isLinked ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
              View credential <BiLinkExternal className="h-4 w-4" />
            </a>
          ) : (
            <span className="text-sm text-slate-400">Credential on request</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Certificates({ id, className = "" }) {
  if (!certificates.length) return null;

  return (
    <section id={id} className={className}>
      <SectionHead
        eyebrow="Certificates"
        title={
          <>
            Courses &amp; <span className="text-accent">Credentials</span>
          </>
        }
        desc="National competency certification, developer scholarships, and structured courses in Flutter, Dart, and software architecture. Click a certificate to view the full scan."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert) => (
          <CertificateCard key={cert.title} {...cert} />
        ))}
      </div>
    </section>
  );
}
