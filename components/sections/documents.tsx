"use client";
import { FileText, FilePlus, FileCheck, Book, GraduationCap, NotebookPen, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const documents = [
  {
    title: "Project Charter",
    description: "Formal document outlining research scope, team roles, and execution plan.",
    icon: FileText,
    iconAnim: "float",
    color: "#22d3ee",
    tag: "Governance",
    link: "https://drive.google.com/drive/u/1/folders/1oTdpdQy115WVO0Dk1VGu3YYQzw6nxC-L",
  },
  {
    title: "Project Proposal",
    description: "Detailed research plan, methodology, and forensic ML architecture design.",
    icon: FilePlus,
    iconAnim: "spin",
    color: "#a78bfa",
    tag: "Proposal",
    link: "https://drive.google.com/drive/u/1/folders/1Ty_sYURWvcEx57PelAlMoWRHCY4xhD6Z",
  },
  {
    title: "Progress Checklist",
    description: "Task completion tracking across all four behavioral detection modules.",
    icon: FileCheck,
    iconAnim: "pulse",
    color: "#34d399",
    tag: "Tracking",
    link: "https://drive.google.com/drive/u/1/folders/1873g9vDVCqF0uFjnl-ZT2BcSt4ehQeNq",
  },
  {
    title: "Research Paper",
    description: "Academic documentation of findings, experiments, and detection accuracy.",
    icon: Book,
    iconAnim: "wiggle",
    color: "#f97316",
    tag: "Academic",
    link: "https://drive.google.com/drive/u/1/folders/1C3S8xuianuNkgkt0tmCr-Q9QGisCMe5w",
  },
  {
    title: "Thesis Document",
    description: "Comprehensive research thesis with full methodology and validation results.",
    icon: GraduationCap,
    iconAnim: "float",
    color: "#fbbf24",
    tag: "Thesis",
    link: "https://drive.google.com/drive/u/1/folders/14FoX0opykN5RtZTGNXG1eEncLH-6b1aX",
  },
  {
    title: "Research Logbook",
    description: "Chronological activity log and per-module research progress records.",
    icon: NotebookPen,
    iconAnim: "pulse",
    color: "#fb7185",
    tag: "Log",
    link: "https://drive.google.com/drive/u/1/folders/17dkzz-aJHCVN-76blAXz4uA9wZ_xlvh6",
  },
];

export default function Documents() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-8" id="documents"
      style={{ background:"linear-gradient(to bottom,#06091a,#080d22,#06091a)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        @keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:0.8}50%{transform:scale(1.18);opacity:1}}
        @keyframes wiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}
        @keyframes orbit{to{transform:rotate(360deg)}}
        @keyframes sonar{0%{transform:scale(1);opacity:0.7}70%{transform:scale(2.6);opacity:0}100%{transform:scale(1);opacity:0}}
        @keyframes shimmerX{from{transform:translateX(-120%) skewX(-12deg)}to{transform:translateX(200%) skewX(-12deg)}}
        @keyframes bottomLine{from{width:0}to{width:100%}}

        .f-display{font-family:'Orbitron',monospace}
        .f-mono{font-family:'JetBrains Mono',monospace}
        .f-body{font-family:'Inter',sans-serif}

        .anim-rise{animation:fadeUp 0.65s ease both}

        .doc-card {
          position:relative;overflow:hidden;border-radius:1.125rem;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(8,12,30,0.75);
          backdrop-filter:blur(14px);
          padding:1.5rem;
          transition:transform 0.22s ease,border-color 0.22s ease,box-shadow 0.22s ease;
          text-decoration:none; display:block;
        }
        .doc-card::before {
          content:'';position:absolute;inset:0;opacity:0;
          background:radial-gradient(ellipse at top left,var(--doc-glow) 0%,transparent 60%);
          transition:opacity 0.3s;
        }
        .doc-card:hover{
          transform:translateY(-4px);
          border-color:color-mix(in srgb,var(--doc-color) 40%,transparent);
          box-shadow:0 24px 55px -28px color-mix(in srgb,var(--doc-color) 35%,transparent);
        }
        .doc-card:hover::before{opacity:1}

        /* Bottom slide line */
        .doc-card::after {
          content:'';position:absolute;bottom:0;left:0;height:2px;width:0;
          background:linear-gradient(90deg,var(--doc-color),transparent);
          transition:width 0.4s ease;
        }
        .doc-card:hover::after{width:100%}

        /* Shimmer on hover */
        .doc-shimmer {
          position:absolute;top:0;bottom:0;left:0;width:35%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent);
          opacity:0;pointer-events:none;
        }
        .doc-card:hover .doc-shimmer{opacity:1;animation:shimmerX 0.6s ease forwards}

        /* Icon orbit ring */
        .icon-orbit{
          position:absolute;inset:-7px;border-radius:50%;
          border:1px dashed;opacity:0;transition:opacity 0.2s;
        }
        .doc-card:hover .icon-orbit{opacity:0.55;animation:orbit 4s linear infinite}

        /* Sonar ping */
        .icon-sonar{
          position:absolute;inset:0;border-radius:50%;opacity:0;
        }
        .doc-card:hover .icon-sonar{opacity:0.4;animation:sonar 2.5s ease-out infinite}

        .icon-anim-float  { animation:float 3s ease-in-out infinite; }
        .icon-anim-spin   { animation:spin 7s linear infinite; }
        .icon-anim-pulse  { animation:pulse 2.4s ease-in-out infinite; }
        .icon-anim-wiggle { animation:wiggle 2.6s ease-in-out infinite; }

        .tag-pill{
          display:inline-flex;padding:2px 10px;border-radius:999px;
          font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
          border:1px solid;font-family:'JetBrains Mono',monospace;
        }

        .arrow-icon{transition:transform 0.2s}
        .doc-card:hover .arrow-icon{transform:translate(3px,-3px)}
      `}</style>

      <div className="pointer-events-none absolute top-16 right-8 h-72 w-72 rounded-full blur-[90px]" style={{background:"rgba(124,58,237,0.08)"}} />
      <div className="pointer-events-none absolute -bottom-20 left-8 h-80 w-80 rounded-full blur-[90px]" style={{background:"rgba(34,211,238,0.06)"}} />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="anim-rise mb-14 flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/28 bg-emerald-500/8 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ animation:"pulse 1.6s ease-in-out infinite" }} />
            <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Forensic ML Research · SLIIT
            </span>
          </div>
          <h2 className="f-display text-4xl font-black text-white md:text-5xl">
            Project Documentation
          </h2>
          <p className="f-body mx-auto mt-4 max-w-xl text-slate-400">
            Research deliverables for the forensic-driven, multi-layer behavioral detection framework.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, idx) => {
            const Icon = doc.icon;
            const animClass = `icon-anim-${doc.iconAnim}`;
            return (
              <Link
                key={idx}
                href={doc.link}
                className="doc-card anim-rise"
                style={{
                  animationDelay: `${idx * 90}ms`,
                  opacity: 0,
                  "--doc-color": doc.color,
                  "--doc-glow": `${doc.color}22`,
                } as React.CSSProperties}
              >
                <div className="doc-shimmer" />

                {/* Icon */}
                <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ background:`${doc.color}12`, border:`1px solid ${doc.color}25` }}>
                  <div className="icon-orbit" style={{ borderColor: doc.color }} />
                  <div className="icon-sonar" style={{ background: doc.color }} />
                  <Icon className={`relative z-10 h-6 w-6 ${animClass}`} strokeWidth={1.8} style={{ color: doc.color }} />
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <h3 className="f-display text-sm font-black text-white">{doc.title}</h3>
                  <span className="tag-pill" style={{ color: doc.color, borderColor:`${doc.color}30`, background:`${doc.color}0a` }}>
                    {doc.tag}
                  </span>
                </div>

                <p className="f-body text-sm leading-relaxed text-slate-400">{doc.description}</p>

                <div className="mt-5 flex items-center gap-1.5" style={{ color: doc.color }}>
                  <Download className="h-3.5 w-3.5" />
                  <span className="f-mono text-xs font-semibold">View Document</span>
                  <ArrowRight className="arrow-icon ml-1 h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}