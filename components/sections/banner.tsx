"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Network, Eye, Lock } from "lucide-react";

const STATS = [
  { value: "4", label: "Behavior Layers", suffix: "" },
  { value: "Zero", label: "Payload Decryption", suffix: "-day" },
  { value: "99", label: "Forensic Accuracy", suffix: "%" },
];

const PILLS = [
  { icon: Network, text: "Network Forensics" },
  { icon: Eye,     text: "API Intelligence" },
  { icon: Lock,    text: "Encrypted Traffic" },
  { icon: Zap,     text: "Endpoint Analysis" },
];

export default function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tick, setTick] = useState(0);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,211,238,0.55)";
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(34,211,238,${0.12 * (1 - d / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  /* tick for stat counter shimmer */
  useEffect(() => { const t = setInterval(() => setTick(n => n + 1), 2800); return () => clearInterval(t); }, []);

  return (
    <div className="relative w-full overflow-hidden py-20 px-4 md:px-8" id="top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&display=swap');

        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glitchTop {
          0%,100%{clip-path:inset(0 0 98% 0);transform:translate(-3px,0);}
          25%{clip-path:inset(20% 0 60% 0);transform:translate(3px,0);}
          50%{clip-path:inset(55% 0 30% 0);transform:translate(-2px,0);}
          75%{clip-path:inset(80% 0 5% 0);transform:translate(2px,0);}
        }
        @keyframes shimmerX {
          from{transform:translateX(-120%) skewX(-15deg)}
          to{transform:translateX(220%) skewX(-15deg)}
        }
        @keyframes orbit { to{transform:rotate(360deg)} }
        @keyframes liveDot {
          0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.7)}
          50%{box-shadow:0 0 0 8px rgba(34,197,94,0)}
        }
        @keyframes radarSweep {
          to{transform:rotate(360deg) scaleX(-1)}
        }
        @keyframes scanLine {
          0%{top:-2px;opacity:0.9} 100%{top:100%;opacity:0}
        }
        @keyframes statPop {
          0%{transform:scale(1)} 50%{transform:scale(1.06)} 100%{transform:scale(1)}
        }

        .f-display { font-family:'Orbitron',monospace; }
        .f-mono    { font-family:'JetBrains Mono',monospace; }

        .anim-fade-up { animation:fadeUp 0.7s ease both; }
        .d1 { animation-delay:0.05s; opacity:0; }
        .d2 { animation-delay:0.2s;  opacity:0; }
        .d3 { animation-delay:0.35s; opacity:0; }
        .d4 { animation-delay:0.5s;  opacity:0; }
        .d5 { animation-delay:0.65s; opacity:0; }

        .glitch-overlay {
          position:absolute; inset:0; color:#22d3ee;
          animation: glitchTop 5s linear infinite;
          pointer-events:none; z-index:2;
        }

        .btn-primary { position:relative; overflow:hidden; }
        .btn-primary::after {
          content:''; position:absolute; top:0; bottom:0; left:0;
          width:40%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent);
          opacity:0;
        }
        .btn-primary:hover::after { opacity:1; animation:shimmerX 0.6s ease forwards; }

        .stat-card { transition:transform 0.2s; }
        .stat-card:hover { transform:translateY(-4px); }

        .pill-item {
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .pill-item:hover {
          border-color: rgba(34,211,238,0.5);
          background: rgba(34,211,238,0.1);
          transform: translateY(-2px);
        }

        .radar-icon { animation: orbit 6s linear infinite; }
        .live-dot   { animation: liveDot 1.8s ease-in-out infinite; }

        .scan-overlay {
          position:absolute; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,rgba(34,211,238,0.7),transparent);
          animation: scanLine 4s linear infinite;
          pointer-events:none;
        }

        .stat-pop { animation: statPop 2.8s ease-in-out infinite; }
      `}</style>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="overflow-hidden relative rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-[#06091a] via-[#080d22] to-[#0d0a22] p-8 md:p-16 shadow-2xl">

          {/* Scan line overlay */}
          <div className="scan-overlay" />

          {/* Grid texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage:'linear-gradient(rgba(34,211,238,1) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />

          {/* Corner accents */}
          {[
            "top-0 left-0 border-t border-l rounded-tl-[2rem]",
            "top-0 right-0 border-t border-r rounded-tr-[2rem]",
            "bottom-0 left-0 border-b border-l rounded-bl-[2rem]",
            "bottom-0 right-0 border-b border-r rounded-br-[2rem]",
          ].map((cls, i) => (
            <div key={i} className={`pointer-events-none absolute h-10 w-10 ${cls} border-cyan-400/50`} />
          ))}

          <div className="flex flex-col items-center text-center gap-8">
            {/* Live badge */}
            <div className="anim-fade-up d1 flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/8 px-4 py-2">
              <span className="live-dot inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Active Research · SLIIT · 2024–25
              </span>
            </div>

            {/* Glitch heading */}
            <div className="anim-fade-up d2 relative">
              <h1 className="f-display relative z-10 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                <span className="block text-white">FORENSIC-DRIVEN</span>
                <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  DETECTION OF
                </span>
                <span className="block text-white">MALICIOUS BEHAVIORS</span>
              </h1>
              <div className="glitch-overlay f-display text-5xl font-black leading-tight tracking-tight md:text-7xl">
                FORENSIC-DRIVEN DETECTION OF MALICIOUS BEHAVIORS
              </div>
            </div>

            {/* Subtitle */}
            <p className="anim-fade-up d3 f-mono max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              An ML-enabled architecture for detecting behavioral anomalies across{" "}
              <span className="text-cyan-300">network traffic</span>,{" "}
              <span className="text-violet-300">social media APIs</span>,{" "}
              <span className="text-emerald-300">encrypted web access</span>, and{" "}
              <span className="text-amber-300">filesystem endpoints</span> — without payload decryption.
            </p>

            {/* Stats */}
            <div className="anim-fade-up d3 grid w-full max-w-lg grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <div key={i} className="stat-card rounded-xl border border-cyan-500/20 bg-slate-900/70 py-4 text-center">
                  <div className={`f-display text-2xl font-black text-cyan-300 ${tick > 0 ? 'stat-pop' : ''}`} style={{ animationDelay:`${i*120}ms` }}>
                    {s.value}<span className="text-lg text-cyan-500">{s.suffix}</span>
                  </div>
                  <div className="f-mono mt-1 text-[10px] uppercase tracking-widest text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Pills */}
            <div className="anim-fade-up d4 flex flex-wrap justify-center gap-2.5">
              {PILLS.map(({ icon: Icon, text }) => (
                <div key={text} className="pill-item flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-300">
                  <Icon className="h-3.5 w-3.5 text-cyan-400" strokeWidth={2.2} />
                  {text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="anim-fade-up d5 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="#components"
                className="btn-primary inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                <Shield className="h-4 w-4" />
                Explore Architecture
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-400/40 bg-violet-500/10 px-7 py-3.5 text-sm font-semibold text-violet-200 hover:bg-violet-500/20 transition-colors"
              >
                Contact Research Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}