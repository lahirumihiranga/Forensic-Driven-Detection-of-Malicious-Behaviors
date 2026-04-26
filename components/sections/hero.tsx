"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  ArrowRightIcon,
  Braces,
  FolderSearch,
  Network,
  Radar,
  ShieldAlert,
  UserCog,
} from "lucide-react";

const behaviorStreams = [
  { label: "Network Behavior", icon: Network, color: "#22d3ee", delay: "0ms" },
  { label: "User Behavior", icon: UserCog, color: "#a78bfa", delay: "150ms" },
  { label: "Filesystem Behavior", icon: FolderSearch, color: "#34d399", delay: "300ms" },
  { label: "API Behavior", icon: Braces, color: "#fb923c", delay: "450ms" },
];

const THREATS = [
  { id: "T-8812", severity: "CRIT", label: "Lateral movement detected", source: "net/eth0", time: "00:02" },
  { id: "T-8809", severity: "HIGH", label: "Priv escalation via /proc", source: "fs/proc", time: "00:47" },
  { id: "T-8803", severity: "HIGH", label: "Anomalous API burst rate", source: "api/v2", time: "01:14" },
  { id: "T-8799", severity: "MED", label: "Shadow admin account created", source: "usr/iam", time: "03:05" },
  { id: "T-8791", severity: "MED", label: "Exfil via DNS tunneling", source: "net/dns", time: "04:30" },
  { id: "T-8784", severity: "LOW", label: "Unusual cron persistence", source: "fs/etc", time: "07:22" },
];

const SEV_STYLE: Record<string, string> = {
  CRIT: "bg-red-500/20 text-red-300 border border-red-500/40",
  HIGH: "bg-orange-500/20 text-orange-300 border border-orange-500/40",
  MED: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40",
  LOW: "bg-sky-500/20 text-sky-300 border border-sky-500/40",
};

function ThreatFeed() {
  const [visible, setVisible] = useState<number[]>([]);
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setVisible((v) => [...v, i]);
      i++;
      if (i >= THREATS.length) clearInterval(t);
    }, 280);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setScanLine((s) => (s + 1) % 100), 40);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-1.5">
      {THREATS.map((threat, idx) => (
        <div
          key={threat.id}
          className="threat-row flex items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-900/50 px-3 py-2 text-xs"
          style={{
            opacity: visible.includes(idx) ? 1 : 0,
            transform: visible.includes(idx) ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          <span className="font-mono text-slate-500">{threat.id}</span>
          <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold tracking-widest ${SEV_STYLE[threat.severity]}`}>
            {threat.severity}
          </span>
          <span className="flex-1 font-mono text-slate-300">{threat.label}</span>
          <span className="font-mono text-slate-600">{threat.source}</span>
          <span className="font-mono text-slate-500">{threat.time}</span>
        </div>
      ))}
    </div>
  );
}

function AnimatedIcon({ icon: Icon, color, delay }: { icon: React.ElementType; color: string; delay: string }) {
  // Convert hex to RGB for gradients and effects
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "34, 211, 238";
  };
  const rgb = hexToRgb(color);

  return (
    <span className="icon-wrapper relative inline-flex h-12 w-12 items-center justify-center" style={{ "--icon-color": color, "--delay": delay, "--icon-rgb": rgb } as React.CSSProperties}>
      {/* Outer glow halo */}
      <span className="halo-ring absolute inset-0 rounded-full opacity-0" style={{ background: `radial-gradient(circle, ${color}40 0%, transparent 70%)` }} />
      
      {/* Rotating orbit with gradient */}
      <span className="ring-orbit absolute inset-0 rounded-full border-2 border-dashed opacity-0" style={{ borderColor: color, borderTopColor: `${color}80`, borderRightColor: `${color}80` }} />
      
      {/* Inner pulsing ring */}
      <span className="ring-pulse absolute inset-1.5 rounded-full" style={{ background: `linear-gradient(135deg, ${color}30 0%, ${color}05 100%)` }} />
      
      {/* Floating accent dots */}
      <span className="accent-dot accent-dot-1 absolute h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      <span className="accent-dot accent-dot-2 absolute h-1 w-1 rounded-full" style={{ background: color, opacity: 0.6 }} />
      <span className="accent-dot accent-dot-3 absolute h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      
      {/* Icon with gradient and multiple layers */}
      <div className="icon-container relative z-20">
        {/* Glow layer behind icon */}
        <div className="icon-glow-layer absolute inset-0 flex items-center justify-center">
          <Icon className="h-5 w-5 blur-sm" style={{ color, opacity: 0.4 }} strokeWidth={2.2} />
        </div>
        
        {/* Main icon with gradient effect */}
        <Icon 
          className="icon-self relative z-10 h-5 w-5 transition-transform" 
          style={{ color }} 
          strokeWidth={2.2}
        />
      </div>

      {/* Shimmer overlay */}
      <span className="shimmer-overlay absolute inset-0 rounded-full opacity-0" style={{ background: `linear-gradient(45deg, transparent 30%, ${color}20 50%, transparent 70%)` }} />
    </span>
  );
}

const HeroSection = () => {
  const scrollToSection = <T extends HTMLElement>(e: React.MouseEvent<T>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Syne:wght@700;800&display=swap');

        .hero-section {
          font-family: 'Syne', sans-serif;
        }
        .hero-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Animated grid background */
        .hero-grid::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          border-radius: inherit;
          pointer-events: none;
        }

        /* Multi-layer rotating orbit with dual spin */
        @keyframes orbit-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .ring-orbit {
          animation: orbit-spin 5.5s linear infinite;
          animation-delay: var(--delay, 0ms);
          opacity: 0.7 !important;
        }

        /* Enhanced halo effect with breathing */
        @keyframes halo-breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.25); }
        }
        .halo-ring {
          animation: halo-breathe 3.8s ease-in-out infinite;
          animation-delay: calc(var(--delay, 0ms) + 0.2s);
        }

        /* Advanced pulse ring with scale and opacity */
        @keyframes pulse-bg {
          0%, 100% { opacity: 0.2; transform: scale(0.85); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        .ring-pulse {
          animation: pulse-bg 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: var(--delay, 0ms);
        }

        /* Floating accent dots with orbital paths */
        @keyframes float-dot-1 {
          0% { transform: translate(16px, 0) rotate(0deg); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: translate(0, 16px) rotate(90deg); }
          75% { opacity: 1; }
          100% { transform: translate(-16px, 0) rotate(180deg); opacity: 0; }
        }
        @keyframes float-dot-2 {
          0% { transform: translate(0, -16px) rotate(90deg); opacity: 0; }
          25% { opacity: 0.8; }
          50% { transform: translate(16px, 0) rotate(180deg); }
          75% { opacity: 0.8; }
          100% { transform: translate(0, 16px) rotate(270deg); opacity: 0; }
        }
        @keyframes float-dot-3 {
          0% { transform: translate(-16px, 0) rotate(180deg); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: translate(0, -16px) rotate(270deg); }
          75% { opacity: 1; }
          100% { transform: translate(16px, 0) rotate(360deg); opacity: 0; }
        }
        .accent-dot {
          filter: drop-shadow(0 0 3px var(--icon-color));
        }
        .accent-dot-1 {
          animation: float-dot-1 4s ease-in-out infinite;
          animation-delay: var(--delay, 0ms);
        }
        .accent-dot-2 {
          animation: float-dot-2 4s ease-in-out infinite;
          animation-delay: calc(var(--delay, 0ms) + 0.15s);
        }
        .accent-dot-3 {
          animation: float-dot-3 4s ease-in-out infinite;
          animation-delay: calc(var(--delay, 0ms) + 0.3s);
        }

        /* Icon container rotation and scaling */
        @keyframes icon-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-2px) scale(1.05); }
        }
        .icon-container {
          animation: icon-float 3s ease-in-out infinite;
          animation-delay: var(--delay, 0ms);
        }

        /* Multi-layer glow effect */
        @keyframes icon-glow {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 2px var(--icon-color)); }
          50% { filter: brightness(1.3) drop-shadow(0 0 8px var(--icon-color)) drop-shadow(0 0 12px var(--icon-color)); }
        }
        .icon-self {
          animation: icon-glow 2.4s ease-in-out infinite;
          animation-delay: var(--delay, 0ms);
        }

        /* Glow layer animation */
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.2; filter: blur(4px); }
          50% { opacity: 0.5; filter: blur(6px); }
        }
        .icon-glow-layer {
          animation: glow-pulse 3s ease-in-out infinite;
          animation-delay: var(--delay, 0ms);
        }

        /* Shimmer overlay sweep */
        @keyframes shimmer-sweep {
          0% { opacity: 0; transform: translateX(-100%) rotate(45deg); }
          50% { opacity: 0.6; }
          100% { opacity: 0; transform: translateX(100%) rotate(45deg); }
        }
        .shimmer-overlay {
          animation: shimmer-sweep 4s ease-in-out infinite;
          animation-delay: calc(var(--delay, 0ms) + 0.5s);
        }

        /* Stream card with enhanced hover */
        .stream-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .stream-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(34,211,238,0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .stream-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(34,211,238,0.6);
          background: rgba(15,23,42,0.95);
          box-shadow: 0 12px 24px -6px rgba(34,211,238,0.25), 0 0 20px -2px rgba(34,211,238,0.15);
        }
        .stream-card:hover::before {
          opacity: 1;
        }

        /* Radar badge pulse */
        @keyframes badge-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        .badge-dot {
          animation: badge-blink 1.4s ease-in-out infinite;
        }

        /* Scan line for console */
        @keyframes scan {
          0% { top: 0%; opacity: 0.6; }
          95% { top: 100%; opacity: 0.3; }
          100% { top: 100%; opacity: 0; }
        }
        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent);
          animation: scan 3s linear infinite;
          pointer-events: none;
        }

        /* Heading reveal */
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.6s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.25s; opacity: 0; }
        .delay-3 { animation-delay: 0.4s; opacity: 0; }
        .delay-4 { animation-delay: 0.55s; opacity: 0; }

        /* Button shimmer */
        .btn-primary { position: relative; overflow: hidden; }
        .btn-primary::after {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-15deg);
          transition: none;
        }
        .btn-primary:hover::after {
          animation: shimmer 0.55s ease forwards;
        }
        @keyframes shimmer {
          to { left: 130%; }
        }

        /* Live model dot */
        @keyframes live-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
        }
        .live-dot {
          display: inline-block;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #34d399;
          animation: live-pulse 1.6s ease-in-out infinite;
          margin-right: 6px;
        }

        /* Console glow border */
        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 18px -4px rgba(34,211,238,0.3), 0 0 50px -20px rgba(34,211,238,0.15); }
          50%       { box-shadow: 0 0 28px -2px rgba(34,211,238,0.5), 0 0 70px -15px rgba(34,211,238,0.25); }
        }
        .console-glow {
          animation: border-glow 3.5s ease-in-out infinite;
        }

        /* Threat row hover */
        .threat-row {
          transition: background 0.15s;
        }
        .threat-row:hover {
          background: rgba(15,23,42,0.8);
          border-color: rgba(34,211,238,0.2);
        }
      `}</style>

      <section className="hero-section hero-grid relative my-12 overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/30 px-5 py-14 md:px-10 lg:px-12">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-red-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          {/* ── Left column ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-up delay-1 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/8 px-4 py-2">
              <span className="badge-dot">
                <Radar className="h-3.5 w-3.5 text-cyan-300" />
              </span>
              <span className="hero-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                ML Enabled Threat Forensics
              </span>
            </div>

            {/* Heading */}
            <div className="animate-fade-up delay-2 space-y-4">
              <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-slate-50 md:text-[3.4rem]">
                Forensic-Driven{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                    Detection
                  </span>
                  <span className="absolute bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/60 to-transparent" />
                </span>{" "}
                of Malicious Behaviors
              </h1>
              <p className="hero-mono max-w-lg text-sm leading-relaxed text-slate-400">
                A unified architecture correlating network, user, filesystem, and API signals to surface stealthy attacks with explainable ML insights.
              </p>
            </div>

            {/* Behavior stream cards */}
            <div className="animate-fade-up delay-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {behaviorStreams.map((stream) => (
                <div
                  key={stream.label}
                  className="stream-card flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/50 px-4 py-3"
                >
                  <AnimatedIcon icon={stream.icon} color={stream.color} delay={stream.delay} />
                  <span className="hero-mono text-[11px] font-semibold text-slate-200">{stream.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="animate-fade-up delay-4 flex flex-wrap gap-3">
              <Button
                className="btn-primary h-auto rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-400"
                onClick={(e) => scrollToSection(e, "components")}
              >
                Explore Architecture
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                className="h-auto rounded-xl border border-red-400/30 bg-red-500/8 px-6 py-3 font-semibold text-red-200 hover:bg-red-500/18"
                onClick={(e) => scrollToSection(e, "contact-us")}
              >
                Submit Threat Scenario
              </Button>
            </div>
          </div>

          {/* ── Right column: Threat Console ── */}
          <div className="animate-fade-up delay-3 relative">
            <div className="console-glow rounded-3xl border border-cyan-500/25 bg-slate-950/80 p-4">
              {/* Console header */}
              <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-4 w-4 text-red-400" />
                  <span className="hero-mono text-xs font-semibold text-slate-200">
                    Threat Correlation Console
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
                  <span className="live-dot" />
                  <span className="hero-mono text-[10px] font-semibold text-emerald-300">LIVE MODEL</span>
                </div>
              </div>

              {/* Stats bar */}
              <div className="mb-3 grid grid-cols-3 gap-2">
                {[
                  { label: "Events/s", value: "1,247", color: "text-cyan-300" },
                  { label: "Anomalies", value: "6", color: "text-red-300" },
                  { label: "ML Score", value: "98.4%", color: "text-emerald-300" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg border border-slate-700/50 bg-slate-900/60 px-3 py-2 text-center">
                    <div className={`hero-mono text-lg font-bold ${s.color}`}>{s.value}</div>
                    <div className="hero-mono text-[9px] uppercase tracking-widest text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Threat feed with scan line */}
              <div className="relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950/60 p-3">
                <div className="scan-line" />
                <div className="hero-mono mb-2 flex items-center gap-2 text-[9px] uppercase tracking-widest text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
                  Active Threat Feed
                </div>
                <ThreatFeed />
              </div>

              {/* Bottom model bar */}
              <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-700/40 bg-slate-900/40 px-3 py-2">
                <span className="hero-mono text-[9px] uppercase tracking-widest text-slate-600">
                  ForensicsML · v3.1.2
                </span>
                <div className="flex items-center gap-1.5">
                  {["net", "usr", "fs", "api"].map((src) => (
                    <span
                      key={src}
                      className="hero-mono rounded border border-cyan-500/20 bg-cyan-500/8 px-1.5 py-0.5 text-[9px] text-cyan-400"
                    >
                      {src}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Corner accent lines */}
            <div className="pointer-events-none absolute -bottom-px -left-px h-8 w-8 border-b border-l border-cyan-400/40 rounded-bl-3xl" />
            <div className="pointer-events-none absolute -right-px -top-px h-8 w-8 border-r border-t border-cyan-400/40 rounded-tr-3xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
