import {
  Braces, Eye, FolderSearch, Lightbulb, Network, ShieldAlert, UserCog, GitMerge,
} from "lucide-react";

const features = [
  {
    icon: Network,
    id: "IT22310064",
    title: "Network Behavior Forensics",
    subtitle: "Flow-Based GAN + ML Classifier",
    description:
      "Builds temporal fingerprints from packet flows, DNS activity, and endpoint communication using a GAN discriminator trained on benign traffic. Detects zero-day and low-and-slow stealth attacks without payload decryption.",
    tags: ["Flow Analysis","GAN","Anomaly Detection","Zero-Day"],
    color: "#22d3ee",
    border: "rgba(34,211,238,0.3)",
    glow: "rgba(34,211,238,0.25)",
  },
  {
    icon: UserCog,
    id: "IT22307880",
    title: "Social Media API Forensics",
    subtitle: "API Sequence + Timeline Reconstruction",
    description:
      "Captures API endpoints, request frequency, token scopes, and timestamps to reconstruct API-driven attack timelines. Identifies automated actions, token misuse, and abnormal API call sequences.",
    tags: ["API Metadata","Token Analysis","Sequence ML","Timeline"],
    color: "#a78bfa",
    border: "rgba(167,139,250,0.3)",
    glow: "rgba(167,139,250,0.25)",
  },
  {
    icon: FolderSearch,
    id: "IT22919496",
    title: "Encrypted Web Behavior",
    subtitle: "TLS Traffic Classification",
    description:
      "Classifies HTTPS, VPN, and DoH traffic patterns using flow-level metadata — packet size, timing, duration — without decrypting content. Detects policy-violating or suspicious encrypted activities.",
    tags: ["TLS Fingerprint","Traffic ML","No Decryption","DoH/VPN"],
    color: "#34d399",
    border: "rgba(52,211,153,0.3)",
    glow: "rgba(52,211,153,0.25)",
  },
  {
    icon: Braces,
    id: "IT22644930",
    title: "Filesystem & Endpoint",
    subtitle: "Event Sequences + LOTL Detection",
    description:
      "Monitors file read/write/delete events, process creation, and parent–child relationships. Models sequences of endpoint activity to detect ransomware-like behavior, insider threats, and living-off-the-land attacks.",
    tags: ["Event Logs","LOTL","Sequence Model","Insider Threat"],
    color: "#fbbf24",
    border: "rgba(251,191,36,0.3)",
    glow: "rgba(251,191,36,0.25)",
  },
];

export default function Solution() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8"
      style={{ background:"linear-gradient(to bottom,#080d22,#06091a,#080d22)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes orbit{to{transform:rotate(360deg)}}
        @keyframes sonar{0%{transform:scale(1);opacity:0.8}70%{transform:scale(2.4);opacity:0}100%{transform:scale(1);opacity:0}}
        @keyframes iconGlow{
          0%,100%{filter:brightness(1) drop-shadow(0 0 0 transparent)}
          50%{filter:brightness(1.5) drop-shadow(0 0 8px var(--ic))}
        }
        @keyframes tagSlide{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}

        .f-display{font-family:'Orbitron',monospace}
        .f-mono{font-family:'JetBrains Mono',monospace}
        .f-body{font-family:'Inter',sans-serif}

        .sol-card {
          border-radius:1.25rem;
          border:1px solid;
          background:rgba(8,12,32,0.8);
          backdrop-filter:blur(14px);
          transition:transform 0.25s ease,box-shadow 0.25s ease;
          position:relative;overflow:hidden;
        }
        .sol-card::before {
          content:'';position:absolute;inset:0;opacity:0;
          transition:opacity 0.3s;
          background:radial-gradient(ellipse at top left,var(--glow) 0%,transparent 65%);
        }
        .sol-card:hover { transform:translateY(-4px); }
        .sol-card:hover::before { opacity:1; }

        .icon-orbit-ring {
          position:absolute;inset:-8px;border-radius:50%;
          border:1px dashed;opacity:0.5;
          animation:orbit 5s linear infinite;
        }
        .icon-sonar {
          position:absolute;inset:0;border-radius:50%;
          animation:sonar 2.8s ease-out infinite;
        }
        .icon-self { animation:iconGlow 2.8s ease-in-out infinite; }

        .tag-pill {
          display:inline-flex;align-items:center;
          padding:2px 10px;border-radius:999px;
          font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;
          border:1px solid;
          font-family:'JetBrains Mono',monospace;
        }

        .anim-rise{animation:fadeUp 0.65s ease both;}
        .d1{animation-delay:0.05s;opacity:0}
        .d2{animation-delay:0.15s;opacity:0}
        .d3{animation-delay:0.25s;opacity:0}
        .d4{animation-delay:0.35s;opacity:0}

        .cross-line {
          height:1px;
          background:linear-gradient(90deg,transparent,rgba(34,211,238,0.35),transparent);
        }
      `}</style>

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full blur-[90px]" style={{background:"rgba(34,211,238,0.07)"}} />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-80 w-80 rounded-full blur-[90px]" style={{background:"rgba(239,68,68,0.06)"}} />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <header className="anim-rise mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/8 px-4 py-2">
            <ShieldAlert className="h-3.5 w-3.5 text-red-300" />
            <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Forensic-Driven Solution</span>
          </div>
          <h2 className="f-display text-4xl font-black text-white md:text-5xl">
            ML Detection Architecture
          </h2>
          <p className="f-body mx-auto mt-4 max-w-2xl text-slate-400">
            Four behavioral layers that convert raw telemetry into explainable, forensic-ready threat decisions — without relying on signatures or decryption.
          </p>
        </header>

        {/* Cross-layer connector */}
        <div className="cross-line mb-8 anim-rise" style={{animationDelay:"0.1s"}} />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <article
                key={feat.title}
                className={`sol-card anim-rise p-7 d${i + 1}`}
                style={{ borderColor: feat.border, "--glow": feat.glow } as React.CSSProperties}
              >
                <div className="mb-5 flex items-start justify-between">
                  {/* Animated icon */}
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background:`${feat.color}18` }}>
                    <div className="icon-orbit-ring" style={{ borderColor: feat.color }} />
                    <div className="icon-sonar" style={{ background: `${feat.color}20` }} />
                    <Icon className="icon-self relative z-10 h-5 w-5"
                      style={{ color: feat.color, "--ic": feat.color } as React.CSSProperties}
                      strokeWidth={2.2} />
                  </div>
                  {/* ID badge */}
                  <span className="f-mono rounded-full border px-2 py-1 text-[10px] font-semibold text-slate-400"
                    style={{ borderColor:`${feat.color}30`, background:`${feat.color}08` }}>
                    {feat.id}
                  </span>
                </div>

                <div className="f-mono mb-0.5 text-[10px] uppercase tracking-wider" style={{ color: feat.color }}>
                  {feat.subtitle}
                </div>
                <h3 className="f-display mb-3 text-xl font-black text-white">{feat.title}</h3>
                <p className="f-body text-sm leading-6 text-slate-300">{feat.description}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {feat.tags.map((tag) => (
                    <span key={tag} className="tag-pill"
                      style={{ color: feat.color, borderColor:`${feat.color}30`, background:`${feat.color}0a` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="anim-rise mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6"
          style={{ animationDelay:"0.4s" }}>
          <div className="flex items-start gap-4">
            <GitMerge className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
            <div>
              <div className="f-mono mb-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Cross-Layer Correlation
              </div>
              <p className="f-body text-sm text-slate-300">
                The architecture performs continuous cross-layer correlation so isolated weak signals from any single layer
                become high-confidence forensic incidents — with timeline-ready evidence spanning network, API, web, and endpoint telemetry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}