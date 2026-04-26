"use client";
import React from "react";
import { Cpu, Database, Cloud, Code, Zap, Lightbulb } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: Cpu,
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "YOLO"],
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-600/20",
      textColor: "text-cyan-400",
    },
    {
      category: "Data Management",
      icon: Database,
      tools: ["PostgreSQL", "MongoDB", "Redis", "Apache Spark"],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-600/20",
      textColor: "text-purple-400",
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      tools: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-600/20",
      textColor: "text-amber-400",
    },
    {
      category: "Development Stack",
      icon: Code,
      tools: ["React", "Node.js", "Python", "TypeScript"],
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-600/20",
      textColor: "text-pink-400",
    },
  ];

  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950 relative overflow-hidden">
      {/* Medical diagnostic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '11s', animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 right-0 w-72 h-72 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl" style={{ animationDuration: '13s', animationDelay: '2s' }} />
      </div>

      <style>{`
        @keyframes tech-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes icon-glow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(34, 197, 226, 0.4)); }
          50% { filter: drop-shadow(0 0 24px rgba(34, 197, 226, 0.8)); }
        }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(34, 197, 226, 0.2); box-shadow: 0 0 20px rgba(34, 197, 226, 0.1); }
          50% { border-color: rgba(34, 197, 226, 0.5); box-shadow: 0 0 40px rgba(34, 197, 226, 0.3); }
        }

        @keyframes tool-slide {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-tech-float {
          animation: tech-float 3.5s ease-in-out infinite;
        }

        .animate-icon-glow {
          animation: icon-glow 2.5s ease-in-out infinite;
        }

        .animate-pulse-border {
          animation: pulse-border 3s ease-in-out infinite;
        }

        .tech-card-bg {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 82, 0.6));
          backdrop-filter: blur(10px);
        }

        .tool-item {
          animation: tool-slide 0.5s ease-out forwards;
          opacity: 0;
        }

        .tool-item:nth-child(1) { animation-delay: 0.1s; }
        .tool-item:nth-child(2) { animation-delay: 0.2s; }
        .tool-item:nth-child(3) { animation-delay: 0.3s; }
        .tool-item:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <Zap className="w-12 h-12 text-cyan-400 animate-pulse drop-shadow-lg" strokeWidth={2.5} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Technology Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Cutting-edge technologies and frameworks powering our disease detection and analysis system
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-700/60 tech-card-bg hover:border-cyan-500/40 p-8 transition-all duration-500 overflow-hidden animate-tech-float"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 82, 0.6))',
                }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${tech.color} pointer-events-none`} />

                {/* Glow effect */}
                <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none blur`}
                  style={{
                    background: `linear-gradient(135deg, rgba(${tech.textColor === 'text-cyan-400' ? '34, 197, 226' : tech.textColor === 'text-purple-400' ? '168, 85, 247' : tech.textColor === 'text-amber-400' ? '217, 119, 6' : '236, 72, 153'}, 0.4), transparent)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl ${tech.bgColor} ${tech.textColor} mb-6 group-hover:scale-125 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 animate-icon-glow" strokeWidth={2.5} />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-white mb-7 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                    {tech.category}
                  </h3>

                  {/* Tools List */}
                  <div className="space-y-3">
                    {tech.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="tool-item flex items-center gap-4 text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                      >
                        <div className={`w-2.5 h-2.5 rounded-full ${tech.textColor.replace('text-', 'bg-')} group-hover:scale-150 transition-transform duration-300`} />
                        <span className="font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Integration Overview Box */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 via-indigo-900/15 to-purple-900/10 backdrop-blur-sm p-10 hover:border-cyan-500/60 transition-all duration-500 group">
          <div className="flex items-start gap-4 mb-4">
            <Lightbulb className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1 animate-pulse drop-shadow-lg" strokeWidth={2.5} />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Integration Overview</h3>
              <p className="text-slate-300 leading-relaxed font-light text-base">
                Our advanced disease detection system integrates state-of-the-art AI frameworks, scalable cloud infrastructure, and modern full-stack development tools. We leverage machine learning for precision diagnosis and pattern recognition, cloud services for elastic scalability, and comprehensive development practices for seamless multi-platform user experiences. This synergistic technology ecosystem enables rapid iteration, robust performance, and cutting-edge disease detection capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;