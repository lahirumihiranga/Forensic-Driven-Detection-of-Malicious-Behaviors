"use client";
import { useState } from "react";
import { Microscope, Zap, Target, BookOpen, Sparkles, Lightbulb, ShieldAlert, Network, Lock, Activity } from "lucide-react";

const objectives = [
  { icon: Network,     text: "Detect abnormal behaviour in network traffic using flow-based ML anomaly detection" },
  { icon: Activity,    text: "Identify misuse of social media APIs and reconstruct API-driven attack timelines" },
  { icon: Lock,        text: "Classify encrypted web access patterns without decrypting traffic content" },
  { icon: ShieldAlert, text: "Detect suspicious filesystem and endpoint activity via sequence-based behavior analysis" },
  { icon: Sparkles,    text: "Build forensic-ready evidence pipelines with explainable ML decision outputs" },
  { icon: Zap,         text: "Deploy a zero-day and behavioral attack detection framework across enterprise telemetry" },
];

export default function Content() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden px-4 py-24 md:px-8" id="scope"
      style={{ background: "linear-gradient(to bottom, #06091a, #080d22, #06091a)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideRight { from{width:0} to{width:100%} }
        @keyframes orbit { to{transform:rotate(360deg)} }
        @keyframes borderGlow {
          0%,100%{border-color:rgba(34,211,238,0.18);box-shadow:none}
          50%{border-color:rgba(34,211,238,0.5);box-shadow:0 0 20px -8px rgba(34,211,238,0.35)}
        }
        @keyframes iconBeat {
          0%,100%{transform:scale(1);filter:brightness(1)}
          50%{transform:scale(1.18);filter:brightness(1.5) drop-shadow(0 0 6px currentColor)}
        }
        @keyframes progressFill {
          from{width:0} to{width:var(--w)}
        }

        .f-display { font-family:'Orbitron',monospace; }
        .f-mono    { font-family:'JetBrains Mono',monospace; }
        .f-body    { font-family:'Inter',sans-serif; }

        .scope-card {
          border-radius:1rem;
          border:1px solid rgba(34,211,238,0.15);
          background:rgba(10,15,40,0.7);
          backdrop-filter:blur(14px);
          transition:transform 0.22s ease,border-color 0.22s ease,box-shadow 0.22s ease;
        }
        .scope-card:hover {
          transform:translateY(-3px);
          border-color:rgba(34,211,238,0.45);
          box-shadow:0 24px 60px -28px rgba(34,211,238,0.3);
        }

        .anim-rise { animation:fadeUp 0.65s ease both; }
        .icon-beat { animation:iconBeat 2.8s ease-in-out infinite; }

        .progress-bar::after {
          content:'';display:block;height:100%;border-radius:9999px;
          background:linear-gradient(90deg,#22d3ee,#7c3aed);
          animation:progressFill 1.4s ease-out forwards;
          animation-delay: 0.5s;
          width:0;
        }
      `}</style>

      {/* Glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full blur-[100px]" style={{ background:"rgba(34,211,238,0.07)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full blur-[100px]" style={{ background:"rgba(124,58,237,0.07)" }} />

      <div className="relative z-10 mx-auto max-w-5xl space-y-6">

        {/* ── Scope Card ── */}
        <div className="scope-card anim-rise p-8 md:p-10" style={{ animationDelay:"0ms" }}>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <Microscope className="icon-beat h-8 w-8 text-cyan-400" strokeWidth={1.5} />
            </div>
            <div>
              <div className="f-mono mb-2 text-[10px] uppercase tracking-[0.18em] text-cyan-500">01 · Project Scope</div>
              <h2 className="f-display mb-4 text-2xl font-black text-white md:text-3xl">
                Research Scope
              </h2>
              <p className="f-body text-base leading-relaxed text-slate-300 md:text-lg">
                This research designs a <span className="font-semibold text-cyan-300">forensic-driven, multi-layer ML framework</span> for
                detecting malicious behaviors that evade traditional signature-based security tools.
                By modeling normal behavior across four telemetry surfaces — network flows, social media API
                interactions, encrypted web traffic, and filesystem endpoints — the system identifies
                hidden threats with forensic-ready, investigator-grade evidence.
              </p>

              {/* Layer progress bars */}
              <div className="mt-6 space-y-3">
                {[
                  { label:"Network Traffic Analysis",    w:"88%",  col:"rgba(34,211,238,1)" },
                  { label:"Social Media API Forensics",  w:"75%",  col:"rgba(167,139,250,1)" },
                  { label:"Encrypted Web Behavior",      w:"80%",  col:"rgba(52,211,153,1)"  },
                  { label:"Filesystem & Endpoint",       w:"82%",  col:"rgba(251,191,36,1)"  },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="f-mono mb-1 flex items-center justify-between text-[10px] text-slate-400">
                      <span>{bar.label}</span><span className="text-slate-500">{bar.w}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800">
                      <div className="progress-bar h-full rounded-full" style={{ "--w":bar.w } as React.CSSProperties} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Problem Card ── */}
        <div className="scope-card anim-rise p-8 md:p-10" style={{ animationDelay:"120ms", borderColor:"rgba(239,68,68,0.2)" }}>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <Zap className="icon-beat h-8 w-8 text-red-400" strokeWidth={1.5} style={{ animationDelay:"0.4s" }} />
            </div>
            <div>
              <div className="f-mono mb-2 text-[10px] uppercase tracking-[0.18em] text-red-400">02 · Research Problem</div>
              <h2 className="f-display mb-4 text-2xl font-black text-white md:text-3xl">
                The Detection Gap
              </h2>
              <p className="f-body text-base leading-relaxed text-slate-300 md:text-lg">
                Modern cyberattacks exploit <span className="font-semibold text-red-300">encryption, legitimate APIs, and trusted system tools</span> to evade conventional defenses.
                Signature-based and payload-inspection systems fail against zero-day and behavioral attacks.
                Existing solutions analyze network, endpoint, or applications in <em>isolation</em> —
                producing high false-positive rates and incomplete forensic reconstruction.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "Encrypted traffic hides payload evidence",
                  "Zero-day attacks bypass all signatures",
                  "Legitimate API abuse is undetectable",
                  "Cross-layer correlation is missing",
                ].map((t) => (
                  <div key={t} className="f-mono flex items-center gap-2 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Objectives Card ── */}
        <div className="scope-card anim-rise p-8 md:p-10" style={{ animationDelay:"240ms", borderColor:"rgba(124,58,237,0.2)" }}>
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 rounded-xl border border-violet-400/30 bg-violet-400/10 p-4">
              <Target className="icon-beat h-8 w-8 text-violet-400" strokeWidth={1.5} style={{ animationDelay:"0.8s" }} />
            </div>
            <div>
              <div className="f-mono mb-2 text-[10px] uppercase tracking-[0.18em] text-violet-400">03 · Objectives</div>
              <h2 className="f-display text-2xl font-black text-white md:text-3xl">
                Research Objectives
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div
                  key={i}
                  className="f-body flex gap-4 rounded-xl border border-slate-700/60 bg-slate-900/50 p-4 text-sm text-slate-300 transition hover:border-violet-500/40 hover:bg-slate-900/80 hover:text-slate-200"
                >
                  <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-400" strokeWidth={2.2} />
                  {obj.text}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}