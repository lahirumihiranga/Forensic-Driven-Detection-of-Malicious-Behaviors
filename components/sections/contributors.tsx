"use client";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Braces, FolderSearch, Network, ShieldAlert, Sparkles, UserCog } from "lucide-react";

const people = [
  { id: 1, name: "Jayawickrama P C",    designation: "Network Behavior Module (IT22310064)", image: "/images/members/Chathuwa.png" },
  { id: 2, name: "Ellawala E L M",      designation: "Social Media API Module (IT22307880)", image: "/images/members/Lahiru.png"     },
  { id: 3, name: "Muhandiram T M B D",  designation: "Encrypted Web Module (IT22919496)",    image: "/images/members/Binu.png"   },
  { id: 4, name: "K. M. I Bandara",     designation: "Filesystem & Endpoint (IT22644930)",   image: "/images/members/Induwa.png"      },
];

const streams = [
  { Icon: Network,     label: "Network Behavior",   color: "#22d3ee" },
  { Icon: UserCog,     label: "Social Media API",   color: "#a78bfa" },
  { Icon: FolderSearch,label: "Encrypted Web",      color: "#34d399" },
  { Icon: Braces,      label: "Filesystem & EP",    color: "#fbbf24" },
];

const STATS = [
  { value: "4", label: "Core Contributors" },
  { value: "4", label: "Detection Layers"  },
  { value: "24/7", label: "Detection Vision" },
];

export default function ContributorPreview() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-24"
      style={{ background:"linear-gradient(to bottom,#080d22,#06091a,#080d22)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes orbit{to{transform:rotate(360deg)}}
        @keyframes sonar{0%{transform:scale(1);opacity:0.8}70%{transform:scale(2.8);opacity:0}100%{transform:scale(1);opacity:0}}
        @keyframes iconGlow{0%,100%{filter:brightness(1)}50%{filter:brightness(1.6) drop-shadow(0 0 6px var(--ic))}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes statCount{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}

        .f-display{font-family:'Orbitron',monospace}
        .f-mono{font-family:'JetBrains Mono',monospace}
        .f-body{font-family:'Inter',sans-serif}

        .anim-rise{animation:fadeUp 0.65s ease both;}
        .d1{animation-delay:0ms;opacity:0}
        .d2{animation-delay:100ms;opacity:0}
        .d3{animation-delay:180ms;opacity:0}
        .d4{animation-delay:260ms;opacity:0}

        .stream-icon-wrap {
          position:relative; display:inline-flex;
          align-items:center; justify-content:center;
          width:52px; height:52px;
          border-radius:0.875rem;
        }
        .stream-icon-orbit {
          position:absolute;inset:-7px;border-radius:50%;
          border:1px dashed;opacity:0.55;
          animation:orbit var(--spd,4.5s) linear infinite;
        }
        .stream-icon-sonar {
          position:absolute;inset:0;border-radius:50%;
          opacity:0.4;
          animation:sonar 3s ease-out infinite;
          animation-delay:var(--dly,0ms);
        }
        .stream-icon-self {
          animation:iconGlow 2.8s ease-in-out infinite;
          animation-delay:var(--dly,0ms);
        }

        .stream-card {
          border-radius:1rem;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(8,12,30,0.7);
          backdrop-filter:blur(12px);
          padding:1rem 1.25rem;
          display:flex; align-items:center; gap:14px;
          transition:transform 0.2s,border-color 0.2s,box-shadow 0.2s;
          cursor:default;
        }
        .stream-card:hover {
          transform:translateY(-2px);
          border-color:color-mix(in srgb,var(--sc) 45%,transparent);
          box-shadow:0 12px 30px -15px color-mix(in srgb,var(--sc) 35%,transparent);
        }

        .panel {
          border-radius:1.5rem;
          border:1px solid rgba(34,211,238,0.18);
          background:rgba(8,12,30,0.75);
          backdrop-filter:blur(14px);
          padding:2.5rem;
        }

        .stat-box {
          border-radius:0.875rem;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(0,0,0,0.3);
          padding:1.5rem; text-align:center;
          transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position:relative;
          overflow:hidden;
        }
        .stat-box::before {
          content:'';
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          background:radial-gradient(ellipse at center,rgba(34,211,238,0.05),transparent);
          opacity:0;
          transition:opacity 0.3s;
        }
        .stat-box:hover { 
          border-color:rgba(34,211,238,0.5);
          background:rgba(34,211,238,0.08);
          box-shadow:0 0 20px rgba(34,211,238,0.15);
        }
        .stat-box:hover::before { opacity:1; }
      `}</style>

      <div className="pointer-events-none absolute left-1/3 top-16 h-80 w-80 rounded-full blur-[100px]" style={{background:"rgba(34,211,238,0.07)"}} />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full blur-[100px]" style={{background:"rgba(239,68,68,0.06)"}} />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="anim-rise d1 mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/28 bg-cyan-500/8 px-4 py-2">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Contributors</span>
        </div>

        <h3 className="f-display anim-rise d2 text-4xl font-black text-white md:text-5xl">
          Forensic Detection Builders
        </h3>
        <p className="f-body anim-rise d3 mx-auto mt-4 max-w-2xl text-slate-400">
          The research team behind the ML-enabled framework for detecting malicious behaviors across
          network, API, encrypted web, and filesystem telemetry.
        </p>

        {/* Stream icons */}
        <div className="anim-rise d3 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {streams.map(({ Icon, label, color }, idx) => (
            <div key={label} className="stream-card" style={{ "--sc": color } as React.CSSProperties}>
              <div className="stream-icon-wrap flex-shrink-0" style={{ background:`${color}12` }}>
                <div className="stream-icon-orbit" style={{ borderColor: color, "--spd":`${4 + idx * 0.6}s` } as React.CSSProperties} />
                <div className="stream-icon-sonar" style={{ background: color, "--dly":`${idx * 200}ms` } as React.CSSProperties} />
                <Icon className="stream-icon-self relative z-10 h-5 w-5" strokeWidth={2.2}
                  style={{ color, "--ic": color, "--dly":`${idx * 200}ms` } as React.CSSProperties} />
              </div>
              <span className="f-mono text-left text-[11px] font-semibold leading-tight text-slate-200">{label}</span>
            </div>
          ))}
        </div>

        {/* Main panel - Threat Intelligence Crew */}
        <div className="anim-rise d4 panel mt-10 relative">
          {/* Top badge centered */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/8 px-4 py-2">
              <ShieldAlert className="h-3.5 w-3.5 text-red-300" />
              <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-red-200">Threat Intelligence Crew</span>
            </div>
          </div>

          {/* Main layout: avatars on left, stats on right */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left: Avatars stacked vertically */}
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-auto">
              <div className="flex flex-col gap-3 items-center">
                <AnimatedTooltip items={people} />
              </div>
            </div>

            {/* Right: Stats cards */}
            <div className="w-full lg:w-auto grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-4">
              {STATS.map((s, idx) => (
                <div 
                  key={s.label} 
                  className="stat-box hover:scale-105 transition-transform duration-300"
                  style={{
                    animation: `statCount 0.6s ease-out ${300 + idx * 100}ms both`
                  }}
                >
                  <p className="f-display text-xl lg:text-2xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="f-mono mt-2 text-[9px] lg:text-[10px] uppercase tracking-widest text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative grid background */}
          <div className="pointer-events-none absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Architecture Diagram Section */}
        <div className="anim-rise mt-12 w-full">
          <div className="text-left mb-6">
            <h3 className="f-display text-2xl font-black text-white">System Architecture</h3>
            <p className="f-mono text-xs text-slate-400 mt-2">Comprehensive Forensic Driven Research & Analysis Framework</p>
          </div>

          <div className="relative bg-gradient-to-b from-slate-900/50 to-slate-950/50 rounded-2xl border border-cyan-400/15 p-8 overflow-x-auto">
            <svg viewBox="0 0 1200 800" className="w-full min-w-max" preserveAspectRatio="xMidYMid meet">
              {/* Layer 1 Title */}
              <text x="50" y="40" className="fill-white font-bold" fontSize="18" fontFamily="Orbitron">LAYER 1 - Control Forensic Analysis Sensors</text>
              
              {/* Component 1: Network Behavior Analysis */}
              <rect x="30" y="70" width="250" height="280" rx="12" fill="#86efac" opacity="0.15" stroke="#22c55e" strokeWidth="2"/>
              <text x="50" y="100" className="fill-green-300 font-bold" fontSize="16" fontFamily="Orbitron">Network Behavior</text>
              <text x="50" y="120" className="fill-green-300 font-bold" fontSize="16" fontFamily="Orbitron">Analysis (Component 1)</text>
              
              <rect x="55" y="145" width="200" height="50" rx="8" fill="#dcfce7" opacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
              <text x="65" y="165" className="fill-green-200" fontSize="12">Flow Feature Extraction</text>
              <text x="65" y="182" className="fill-green-200" fontSize="11">(Packet & Flow Features)</text>
              
              <rect x="55" y="205" width="200" height="50" rx="8" fill="#dcfce7" opacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
              <text x="65" y="225" className="fill-green-200" fontSize="12">Data Preprocessing</text>
              <text x="65" y="242" className="fill-green-200" fontSize="11">(Scaling, Log Transform, Split)</text>
              
              <rect x="55" y="265" width="200" height="55" rx="8" fill="#dcfce7" opacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
              <text x="65" y="285" className="fill-green-200" fontSize="12">Adversarial Learning</text>
              <text x="65" y="302" className="fill-green-200" fontSize="10">WGAN-GP, AutoEncoder,</text>
              <text x="65" y="315" className="fill-green-200" fontSize="10">Auxiliary Malware</text>

              {/* Component 2: Filesystem Analysis */}
              <rect x="310" y="70" width="250" height="280" rx="12" fill="#fed7aa" opacity="0.15" stroke="#f97316" strokeWidth="2"/>
              <text x="330" y="100" className="fill-orange-300 font-bold" fontSize="16" fontFamily="Orbitron">Filesystem & Endpoint</text>
              <text x="330" y="120" className="fill-orange-300 font-bold" fontSize="16" fontFamily="Orbitron">Analysis (Component 2)</text>
              
              <rect x="335" y="145" width="200" height="50" rx="8" fill="#fed7aa" opacity="0.2" stroke="#f97316" strokeWidth="1.5"/>
              <text x="345" y="165" className="fill-orange-200" fontSize="12">Preprocessing</text>
              <text x="345" y="182" className="fill-orange-200" fontSize="11">(Datetime, Sorting, Feature Eng.)</text>
              
              <rect x="335" y="205" width="200" height="50" rx="8" fill="#fed7aa" opacity="0.2" stroke="#f97316" strokeWidth="1.5"/>
              <text x="345" y="225" className="fill-orange-200" fontSize="12">Data Scaling & Train-Test</text>
              
              <rect x="335" y="265" width="200" height="55" rx="8" fill="#fed7aa" opacity="0.2" stroke="#f97316" strokeWidth="1.5"/>
              <text x="345" y="285" className="fill-orange-200" fontSize="12">Model Training</text>
              <text x="345" y="302" className="fill-orange-200" fontSize="11">Model 1: Isolation Forest</text>
              <text x="345" y="315" className="fill-orange-200" fontSize="11">Model 2: Neural Network</text>

              {/* Component 3: Encrypted Web */}
              <rect x="590" y="70" width="250" height="280" rx="12" fill="#fef08a" opacity="0.15" stroke="#eab308" strokeWidth="2"/>
              <text x="610" y="100" className="fill-yellow-300 font-bold" fontSize="16" fontFamily="Orbitron">Encrypted Web</text>
              <text x="610" y="120" className="fill-yellow-300 font-bold" fontSize="16" fontFamily="Orbitron">Behavior (Component 3)</text>
              
              <rect x="615" y="145" width="200" height="50" rx="8" fill="#fef08a" opacity="0.2" stroke="#eab308" strokeWidth="1.5"/>
              <text x="625" y="165" className="fill-yellow-200" fontSize="12">Data Preprocessing</text>
              <text x="625" y="182" className="fill-yellow-200" fontSize="11">(Cleaning, Feature Selection)</text>
              
              <rect x="615" y="205" width="200" height="50" rx="8" fill="#fef08a" opacity="0.2" stroke="#eab308" strokeWidth="1.5"/>
              <text x="625" y="225" className="fill-yellow-200" fontSize="12">Train-Test Split</text>
              
              <rect x="615" y="265" width="200" height="55" rx="8" fill="#fef08a" opacity="0.2" stroke="#eab308" strokeWidth="1.5"/>
              <text x="625" y="285" className="fill-yellow-200" fontSize="12">Model Training</text>
              <text x="625" y="302" className="fill-yellow-200" fontSize="11">(Random Forest Classifier)</text>

              {/* Component 4: API Forensic */}
              <rect x="870" y="70" width="250" height="280" rx="12" fill="#fbcfe8" opacity="0.15" stroke="#ec4899" strokeWidth="2"/>
              <text x="890" y="100" className="fill-pink-300 font-bold" fontSize="16" fontFamily="Orbitron">API Forensic</text>
              <text x="890" y="120" className="fill-pink-300 font-bold" fontSize="16" fontFamily="Orbitron">Analysis (Component 4)</text>
              
              <rect x="895" y="145" width="200" height="50" rx="8" fill="#fbcfe8" opacity="0.2" stroke="#ec4899" strokeWidth="1.5"/>
              <text x="905" y="165" className="fill-pink-200" fontSize="12">Feature Schema</text>
              <text x="905" y="182" className="fill-pink-200" fontSize="11">Preprocessing (process_api_data)</text>
              
              <rect x="895" y="205" width="200" height="50" rx="8" fill="#fbcfe8" opacity="0.2" stroke="#ec4899" strokeWidth="1.5"/>
              <text x="905" y="225" className="fill-pink-200" fontSize="12">Strict API Analyzer</text>
              <text x="905" y="242" className="fill-pink-200" fontSize="10">(predict_calls): watch live API calls</text>
              
              <rect x="895" y="265" width="200" height="55" rx="8" fill="#fbcfe8" opacity="0.2" stroke="#ec4899" strokeWidth="1.5"/>
              <text x="905" y="285" className="fill-pink-200" fontSize="12">Threat Label</text>
              <text x="905" y="302" className="fill-pink-200" fontSize="11">Normalization (probability-based)</text>

              {/* Arrows pointing down from components */}
              <line x1="155" y1="350" x2="155" y2="390" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="435" y1="350" x2="435" y2="390" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="715" y1="350" x2="715" y2="390" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="995" y1="350" x2="995" y2="390" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Central Engine */}
              <rect x="100" y="390" width="1000" height="80" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0284c7" strokeWidth="2.5"/>
              <text x="600" y="430" textAnchor="middle" className="fill-cyan-300 font-bold" fontSize="18" fontFamily="Orbitron">ML Correlation & Anomaly Detection Engine</text>
              <text x="600" y="455" textAnchor="middle" className="fill-cyan-200" fontSize="12">real time, file prediction | Web Classification | & Model Storage</text>

              {/* Arrow down to reporting */}
              <line x1="600" y1="470" x2="600" y2="500" stroke="#22d3ee" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>

              {/* Reporting Layer */}
              <rect x="200" y="500" width="800" height="70" rx="12" fill="#6b7280" opacity="0.2" stroke="#9ca3af" strokeWidth="2"/>
              <text x="600" y="535" textAnchor="middle" className="fill-slate-300 font-bold" fontSize="16" fontFamily="Orbitron">Forensic Reporting & Timeline Reconstruction</text>
              <text x="600" y="558" textAnchor="middle" className="fill-slate-300" fontSize="12">(Unified Dashboard & Alerts)</text>

              {/* Arrow down to Layer 2 */}
              <line x1="600" y1="570" x2="600" y2="600" stroke="#22d3ee" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>

              {/* Layer 2 Title */}
              <text x="50" y="625" className="fill-white font-bold" fontSize="18" fontFamily="Orbitron">LAYER 2 - Observation & Data Collection Layer</text>

              {/* Sensor 1: Network */}
              <rect x="30" y="640" width="250" height="130" rx="12" fill="#93c5fd" opacity="0.15" stroke="#3b82f6" strokeWidth="2"/>
              <text x="50" y="670" className="fill-blue-300 font-bold" fontSize="14">Network Traffic Collectors</text>
              <text x="50" y="688" className="fill-blue-300 font-bold" fontSize="14">(Sensor 1)</text>
              <rect x="55" y="700" width="200" height="35" rx="6" fill="#dbeafe" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
              <text x="65" y="720" className="fill-blue-200" fontSize="11">Raw Traffic (PCAP/Flow)</text>
              <rect x="55" y="740" width="200" height="25" rx="6" fill="#dbeafe" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
              <text x="65" y="755" className="fill-blue-200" fontSize="11">Live Traffic (CIC-IDS2017)</text>

              {/* Sensor 2: Endpoint */}
              <rect x="310" y="640" width="250" height="130" rx="12" fill="#93c5fd" opacity="0.15" stroke="#3b82f6" strokeWidth="2"/>
              <text x="330" y="670" className="fill-blue-300 font-bold" fontSize="14">Endpoint Agents & File</text>
              <text x="330" y="688" className="fill-blue-300 font-bold" fontSize="14">Monitors (Sensor 2)</text>
              <rect x="335" y="700" width="200" height="60" rx="6" fill="#dbeafe" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
              <text x="345" y="720" className="fill-blue-200" fontSize="11">CSV File Access Logs</text>

              {/* Sensor 3: Web Gateway */}
              <rect x="590" y="640" width="250" height="130" rx="12" fill="#93c5fd" opacity="0.15" stroke="#3b82f6" strokeWidth="2"/>
              <text x="610" y="670" className="fill-blue-300 font-bold" fontSize="14">Web Gateway & Decryption</text>
              <text x="610" y="688" className="fill-blue-300 font-bold" fontSize="14">Proxies (Sensor 3)</text>
              <rect x="615" y="700" width="200" height="60" rx="6" fill="#dbeafe" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
              <text x="625" y="720" className="fill-blue-200" fontSize="11">Encrypted Web Traffic</text>

              {/* Sensor 4: API Gateway */}
              <rect x="870" y="640" width="250" height="130" rx="12" fill="#93c5fd" opacity="0.15" stroke="#3b82f6" strokeWidth="2"/>
              <text x="890" y="670" className="fill-blue-300 font-bold" fontSize="14">API Gateway & Log</text>
              <text x="890" y="688" className="fill-blue-300 font-bold" fontSize="14">Aggregators (Sensor 4)</text>
              <rect x="895" y="700" width="200" height="35" rx="6" fill="#dbeafe" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
              <text x="905" y="720" className="fill-blue-200" fontSize="11">Extracted API Data</text>
              <rect x="895" y="740" width="200" height="25" rx="6" fill="#dbeafe" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
              <text x="905" y="755" className="fill-blue-200" fontSize="11">CSV Data Set File</text>

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#22d3ee"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}