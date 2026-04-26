"use client";
import { Activity, Braces, FolderSearch, GitBranch, Network, ShieldAlert, Sparkles, UserCog } from "lucide-react";

const components = [
  {
    icon: Network,
    title: "Network Behavior Forensics",
    subtitle: "Flow-Based GAN + ML Classifier",
    id: "IT22310064",
    member: "Jayawickrama P C",
    description:
      "Continuously profiles flow, packet, and DNS telemetry using a GAN discriminator trained on benign traffic. Detects zero-day attacks and low-and-slow network intrusions without payload decryption.",
    methods: ["Flow-level metadata analysis", "GAN discriminator/generator", "ML anomaly classifier", "Behavior-based baselining"],
    github: "https://github.com/HeidiHettiarachchi/exo-hybrid-detection",
    accent: "#22d3ee",
    status: "In Development",
  },
  {
    icon: UserCog,
    title: "Social Media API Forensics",
    subtitle: "API Sequence + Timeline Reconstruction",
    id: "IT22307880",
    member: "Ellawala E L M",
    description:
      "Captures API endpoints, request frequency, token scopes, and timestamps to identify automated actions, token misuse, and API abuse. Generates forensic-ready API activity timelines.",
    methods: ["API call sequence analysis", "Token & scope monitoring", "ML automation detection", "Forensic timeline builder"],
    github: "https://github.com/KCxRULZZ/Star-Suitability-Predictor.git",
    accent: "#a78bfa",
    status: "In Development",
  },
  {
    icon: FolderSearch,
    title: "Encrypted Web Behavior",
    subtitle: "TLS Classification Without Decryption",
    id: "IT22919496",
    member: "Muhandiram T M B D",
    description:
      "Classifies HTTPS, VPN, and DoH traffic using flow-level metadata — packet size, timing, and duration. Detects policy-violating encrypted activities without decrypting any content.",
    methods: ["Packet size & timing features", "Flow duration analysis", "Feature-based ML classifier", "Privacy-preserving monitoring"],
    github: "https://github.com/HeidiHettiarachchi/MediSync.git",
    accent: "#34d399",
    status: "In Development",
  },
  {
    icon: Braces,
    title: "Filesystem & Endpoint",
    subtitle: "Sequence-Based LOTL Detection",
    id: "IT22644930",
    member: "K. M. I Bandara",
    description:
      "Monitors file read/write/delete events, process creation, and parent–child relationships. Detects ransomware-like behavior, insider threats, and living-off-the-land attacks via sequence modeling.",
    methods: ["File event log monitoring", "Process creation tracking", "Sequence-based behavior model", "ML anomaly classification"],
    github: "#",
    accent: "#fbbf24",
    status: "In Development",
  },
];

export default function ComponentInfo() {
  return (
    <section id="components" className="relative overflow-hidden px-4 py-24 md:px-8"
      style={{ background:"linear-gradient(to bottom,#06091a,#080d22,#06091a)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes orbit{to{transform:rotate(360deg)}}
        @keyframes sonar{0%{transform:scale(1);opacity:0.7}70%{transform:scale(2.6);opacity:0}100%{transform:scale(1);opacity:0}}
        @keyframes iconGlow{0%,100%{filter:brightness(1)}50%{filter:brightness(1.7) drop-shadow(0 0 8px var(--ic))}}
        @keyframes countUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes statusBlink{0%,100%{opacity:1}50%{opacity:0.45}}
        @keyframes tagIn{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}

        .f-display{font-family:'Orbitron',monospace}
        .f-mono{font-family:'JetBrains Mono',monospace}
        .f-body{font-family:'Inter',sans-serif}

        .anim-rise{animation:fadeUp 0.65s ease both}

        .comp-card{
          position:relative;overflow:hidden;border-radius:1.25rem;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(8,12,30,0.8);
          backdrop-filter:blur(14px);
          transition:transform 0.22s ease,border-color 0.22s ease,box-shadow 0.22s ease;
        }
        .comp-card::before{
          content:'';position:absolute;inset:0;opacity:0;
          background:radial-gradient(ellipse at top left,var(--ac-glow) 0%,transparent 60%);
          transition:opacity 0.3s;pointer-events:none;
        }
        .comp-card:hover{
          transform:translateY(-4px);
          border-color:color-mix(in srgb,var(--accent) 42%,transparent);
          box-shadow:0 28px 65px -30px color-mix(in srgb,var(--accent) 35%,transparent);
        }
        .comp-card:hover::before{opacity:1}

        .icon-orbit{position:absolute;inset:-7px;border-radius:50%;border:1px dashed;opacity:0.5;animation:orbit 5s linear infinite}
        .icon-sonar{position:absolute;inset:0;border-radius:50%;animation:sonar 2.8s ease-out infinite;animation-delay:var(--dly,0ms)}
        .icon-self{animation:iconGlow 2.8s ease-in-out infinite}

        .method-row{
          display:flex;align-items:center;gap:10px;padding:8px 12px;
          border-radius:0.625rem;border:1px solid rgba(255,255,255,0.05);
          background:rgba(0,0,0,0.2);font-size:11px;color:#94a3b8;
          font-family:'JetBrains Mono',monospace;
          transition:border-color 0.2s,color 0.2s;
        }
        .comp-card:hover .method-row:hover{
          border-color:color-mix(in srgb,var(--accent) 30%,transparent);
          color:#e2e8f0;
        }

        .status-dot{display:inline-block;width:7px;height:7px;border-radius:50%;animation:statusBlink 2s ease-in-out infinite}

        .git-btn{
          display:inline-flex;align-items:center;gap:7px;
          border-radius:0.625rem;border:1px solid;
          padding:8px 14px;font-size:11px;font-weight:700;
          font-family:'JetBrains Mono',monospace;text-transform:uppercase;
          letter-spacing:0.1em;text-decoration:none;
          transition:background 0.2s,border-color 0.2s;
        }
        .git-btn:hover{
          border-color:color-mix(in srgb,var(--accent) 60%,transparent);
          background:color-mix(in srgb,var(--accent) 12%,transparent);
        }
      `}</style>

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full blur-[90px]" style={{background:"rgba(34,211,238,0.07)"}} />
      <div className="pointer-events-none absolute bottom-8 -right-20 h-80 w-80 rounded-full blur-[90px]" style={{background:"rgba(239,68,68,0.06)"}} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="anim-rise mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/28 bg-cyan-500/8 px-4 py-2">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">ML Architecture Components</span>
          </div>
          <h2 className="f-display text-4xl font-black text-white md:text-5xl">Research Components</h2>
          <p className="f-body mx-auto mt-4 max-w-2xl text-slate-400">
            Four integrated modules powering forensic-driven detection of malicious behavior across network, API, web, and endpoint surfaces.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {components.map((comp, index) => {
            const Icon = comp.icon;
            return (
              <article
                key={comp.title}
                className="comp-card anim-rise p-7"
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  "--accent": comp.accent,
                  "--ac-glow": `${comp.accent}18`,
                } as React.CSSProperties}
              >
                {/* Top row */}
                <div className="mb-5 flex items-start justify-between">
                  {/* Animated icon */}
                  <div className="relative inline-flex h-13 w-13 items-center justify-center rounded-xl p-3"
                    style={{ background:`${comp.accent}12`, border:`1px solid ${comp.accent}28` }}>
                    <div className="icon-orbit" style={{ borderColor: comp.accent }} />
                    <div className="icon-sonar" style={{ background: comp.accent, "--dly":`${index*180}ms` } as React.CSSProperties} />
                    <Icon className="icon-self relative z-10 h-6 w-6" strokeWidth={2.2}
                      style={{ color: comp.accent, "--ic": comp.accent } as React.CSSProperties} />
                  </div>
                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <span className="status-dot" style={{ background:"#22c55e" }} />
                    <span className="f-mono text-[10px] text-slate-500 uppercase tracking-wider">{comp.status}</span>
                  </div>
                </div>

                {/* Title block */}
                <div className="f-mono mb-0.5 text-[10px] uppercase tracking-wider" style={{ color: comp.accent }}>
                  {comp.subtitle}
                </div>
                <h3 className="f-display mb-3 text-xl font-black text-white">{comp.title}</h3>
                <p className="f-body text-sm leading-6 text-slate-300">{comp.description}</p>

                {/* Methods */}
                <div className="mt-5 space-y-2">
                  {comp.methods.map((m) => (
                    <div key={m} className="method-row">
                      <span className="h-1 w-1 rounded-full flex-shrink-0" style={{ background: comp.accent }} />
                      {m}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-700/60 pt-5">
                  <div>
                    <p className="f-mono text-[10px] uppercase tracking-widest text-slate-500">Module Owner</p>
                    <p className="f-mono mt-1 flex items-center gap-1.5 text-sm font-semibold" style={{ color: comp.accent }}>
                      <Activity className="h-3.5 w-3.5" />{comp.member}
                    </p>
                    <p className="f-mono text-[10px] text-slate-600">{comp.id}</p>
                  </div>
                  {comp.github !== "#" && (
                    <a href={comp.github} target="_blank" rel="noopener noreferrer"
                      className="git-btn"
                      style={{ color: comp.accent, borderColor:`${comp.accent}28`, "--accent": comp.accent } as React.CSSProperties}>
                      <GitBranch className="h-3.5 w-3.5" />
                      Repo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}