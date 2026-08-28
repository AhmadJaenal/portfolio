import { BiCertification, BiLinkExternal } from "react-icons/bi";
import SectionHead from "./ui/SectionHead.jsx";
import ShimmerImage from "./ui/ShimmerImage.jsx";
import {
  certificates,
  certificateGroups,
  levelRank,
} from "@data/certificates.js";

const LEVEL_STYLE = {
  4: "bg-accent text-white",
  3: "bg-accent/80 text-white",
  2: "bg-accent/15 text-accent",
  1: "bg-slate-100 text-slate-500 dark:bg-[#1a1a1a] dark:text-slate-400",
};

function LevelBadge({ level }) {
  const rank = levelRank[level] ?? 0;
  if (!level || rank === 0) return null;
  return (
    <span
      className={`absolute right-3 top-3 z-20 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${LEVEL_STYLE[rank]}`}>
      {level}
    </span>
  );
}

function CertificateCard({ title, issuer, date, credentialId, url, image, skills, level }) {
  const preview = image || url;
  const isLinked = url && url !== "#";
  return (
    <article className="surface-card flex flex-col overflow-hidden">
      <a
        href={preview || undefined}
        target={preview ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="group relative flex h-44 items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-[#262626] dark:bg-[#121212]">
        <LevelBadge level={level} />
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

  const year = (d) => parseInt(String(d).match(/\d{4}/)?.[0] ?? "0", 10);

  const groups = certificateGroups
    .map((name) => ({
      name,
      items: certificates
        .filter((c) => c.group === name)
        .sort(
          (a, b) =>
            (levelRank[b.level] ?? 0) - (levelRank[a.level] ?? 0) ||
            year(b.date) - year(a.date)
        ),
    }))
    .filter((g) => g.items.length);

  return (
    <section id={id} className={className}>
      <SectionHead
        eyebrow="Certificates"
        title={
          <>
            Courses &amp; <span className="text-accent">Credentials</span>
          </>
        }
        desc="Grouped by focus and tier, mobile development first. Click any certificate to view the full scan."
      />

      <div className="mt-16 space-y-16">
        {groups.map((group) => (
          <div key={group.name}>
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {group.name}
              </h3>
              <span className="text-sm text-slate-400">{group.items.length}</span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-[#262626]" />
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((cert) => (
                <CertificateCard key={cert.title} {...cert} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
