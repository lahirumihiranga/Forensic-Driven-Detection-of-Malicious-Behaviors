"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Rocket,
  Globe,
  Zap,
  Heart,
  Stethoscope,
  Radio,
  ArrowUpRight,
  Activity,
  Lightbulb,
  Waves
} from "lucide-react";
import Link from "next/link";

const presentations = [
  {
    title: "Proposal Presentation",
    description: "FORENSIC-DRIVEN SYSTEM research proposal for explainable multimodal intelligence and threat behavior identification",
    icon: <Rocket className="w-6 h-6" />,
    link: "https://drive.google.com/drive/u/1/folders/1PSPULqxSeAbX947Tq7513-TB3BCxDIrS",
    badge: "Phase 1",
    color: "from-emerald-500 to-cyan-600",
    bgColor: "bg-emerald-600/20",
    textColor: "text-emerald-400",
  },
  {
    title: "Progress Presentation 01",
    description: "Initial development phase with FORENSIC-DRIVEN SYSTEM core detection modules at 50% completion",
    icon: <Activity className="w-6 h-6" />,
    link: "https://drive.google.com/drive/u/1/folders/1ZhcB9KfHvLEPN7CL4cvdQvOkhsNuc5Ix",
    badge: "Phase 2",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-600/20",
    textColor: "text-rose-400",
  },
  {
    title: "Progress Presentation 02",
    description: "Advanced integration phase: Frontend 100%, Backend API 100%, Security/Optimization 85%",
    icon: <Zap className="w-6 h-6" />,
    link: "https://drive.google.com/drive/u/1/folders/1GFrh2qiUksdHiYcw9zmzw7MuGm-dI6Jg",
    badge: "Phase 3",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-600/20",
    textColor: "text-violet-400",
  },
  {
    title: "Final Presentation",
    description: "Complete FORENSIC-DRIVEN SYSTEM with explainability, security analytics, and validation benchmarks",
    icon: <Heart className="w-6 h-6" />,
    link: "https://drive.google.com/drive/u/1/folders/1fhr04nJIJOxXUuMztqiwFUi5BncXwiQF",
    badge: "Phase 4",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-600/20",
    textColor: "text-blue-400",
  },
  {
    title: "Forensic Capability Areas",
    description: "Four key FORENSIC-DRIVEN SYSTEM focus areas: behavior analysis, anomaly detection, attribution, and evidence correlation",
    icon: <Stethoscope className="w-6 h-6" />,
    link: "#",
    badge: "Output",
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-indigo-600/20",
    textColor: "text-indigo-400",
  },
  {
    title: "Live System Demo",
    description: "Interactive demonstration of the FORENSIC-DRIVEN SYSTEM platform with real-time forensic behavior analysis",
    icon: <Waves className="w-6 h-6" />,
    link: "#",
    badge: "Demo",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-600/20",
    textColor: "text-teal-400",
  },
];

export default function Presentations() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950 relative overflow-hidden" id="presentations">
      {/* Enhanced forensic analytics background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl" style={{ animationDuration: '12s', animationDelay: '1s' }} />
      </div>

      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(34, 197, 226, 0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(34, 197, 226, 0.7)); }
        }
        
        @keyframes orbit-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes border-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .animate-float-up {
          animation: float-up 3.5s ease-in-out infinite;
        }

        .animate-glow-icon {
          animation: glow-pulse 2.5s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit-rotate 6s linear infinite;
        }

        .card-gradient {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 82, 0.6));
        }

        .card-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, currentColor, transparent);
          opacity: 0;
          transition: left 0.8s ease, opacity 0.5s ease;
        }

        .group:hover .card-gradient::before {
          opacity: 0.7;
          left: 100%;
        }

        .premium-glow {
          position: relative;
        }

        .premium-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.5s ease;
          box-shadow: 0 0 30px rgba(34, 197, 226, 0.3) inset;
        }

        .group:hover .premium-glow::after {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex gap-3 mb-6 justify-center items-center">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">FORENSIC-DRIVEN SYSTEM Project Phases</span>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-rose-400">
            Presentations & Deliverables
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Track our development journey with comprehensive presentations showcasing multimodal intelligence breakthroughs in the FORENSIC-DRIVEN SYSTEM
          </p>
        </div>

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation, index) => (
            <Link
              key={index}
              href={presentation.link}
              className="group relative rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-500 hover:border-cyan-500/50"
            >
              {/* Enhanced card background */}
              <div className="card-gradient premium-glow h-full p-6 flex flex-col">
              
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${presentation.color} pointer-events-none`} />
                
                {/* Icon with orbital animation */}
                <div className={`inline-flex p-3.5 rounded-xl ${presentation.bgColor} ${presentation.textColor} mb-5 w-fit group-hover:scale-125 transition-transform duration-300 animate-float-up relative`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="animate-glow-icon relative">
                    {presentation.icon}
                  </div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ boxShadow: `inset 0 0 20px ${presentation.textColor}` }} />
                </div>

                {/* Phase badge */}
                <div className={`inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r ${presentation.color} bg-opacity-15 border ${presentation.textColor}/40 ${presentation.textColor} text-xs font-bold mb-4 w-fit group-hover:bg-opacity-25 group-hover:border-opacity-80 transition-all duration-300`}>
                  {presentation.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                  {presentation.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm flex-grow mb-5 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                  {presentation.description}
                </p>

                {/* Link Indicator */}
                <div className={`flex items-center gap-2 ${presentation.textColor} group-hover:text-white transition-all duration-300 font-semibold`}>
                  <span className="text-sm">Explore</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${presentation.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
