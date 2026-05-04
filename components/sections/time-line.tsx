"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Activity, Heart, Sparkles } from "lucide-react";

const milestones = [
  {
    date: "May 30, 2025",
    title: "Awareness Session",
    description:
      "Awareness session for the research project and, we had to select a supervisor.",
    color: "bg-slate-600",
    icon: Heart,
  },
  {
    date: "Jul 14, 2025",
    title: "Topic Evaluation",
    description: "In this stage the Topic we selected been evaluated.",
    color: "bg-yellow-400",
    icon: Sparkles,
  },
  {
    date: "Aug 05, 2025",
    title: "Project Proposal Presentation",
    description:
      "A project proposal is prepared to make an offer and to try to convince a supervisor or a future customer to accept it.",
    color: "bg-pink-500",
    icon: Activity,
  },
  {
    date: "Jan 05, 2026",
    title: "Progress Presentation 1",
    description: "In this stage we had to show our progress up to 50%.",
    color: "bg-blue-600",
    icon: Heart,
  },
  {
    date: "Feb 15, 2026",
    title: "Research Paper",
    description: "Published research findings and methodology.",
    color: "bg-teal-500",
    icon: Sparkles,
  },
  {
    date: "Mar 09, 2026",
    title: "Progress Presentation 2",
    description: "Demonstrated 90% progress.",
    color: "bg-green-500",
    icon: Heart,
  },
  {
    date: "Apr 11, 2026",
    title: "Thesis Submission",
    description: "Thesis paper of the project.",
    color: "bg-gray-700",
    icon: Activity,
  },
  {
    date: "May 4, 2026",
    title: "Final Presentation and viva",
    description: "Finalized and Demonstrated 100% progress.",
    color: "bg-purple-700",
    icon: Sparkles,
  },
];

const Timeline = () => {
  return (
    <section className="container mx-auto px-4 py-24 relative" id="milestones">
      {/* Medical diagnostic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <style>{`
        @keyframes timeline-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes marker-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(34, 197, 226, 0.3); }
          50% { transform: scale(1.15); box-shadow: 0 0 30px rgba(34, 197, 226, 0.6); }
        }

        @keyframes line-glow {
          0%, 100% { background: linear-gradient(180deg, rgba(34, 197, 226, 0.2) 0%, transparent 100%); }
          50% { background: linear-gradient(180deg, rgba(34, 197, 226, 0.4) 0%, transparent 100%); }
        }

        .animate-timeline-float {
          animation: timeline-float 3.5s ease-in-out infinite;
        }

        .animate-marker-pulse {
          animation: marker-pulse 2.5s ease-in-out infinite;
        }

        .animate-line-glow {
          animation: line-glow 3s ease-in-out infinite;
        }

        .timeline-card-bg {
          background: linear-gradient(135deg, rgba(30, 41, 82, 0.6), rgba(15, 23, 42, 0.8));
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center mb-8">
          <Activity className="w-12 h-12 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} strokeWidth={1.5} />
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          PROJECT MILESTONES
        </h2>
        <p className="text-slate-300 max-w-5xl mx-auto text-lg font-light leading-relaxed">
          Here you can track the significant milestones achieved throughout our disease detection research journey. These pivotal moments represent crucial stages of our project's progression, reflecting key achievements and scientific breakthroughs in our detection systems.
        </p>
      </div>

      <div className="relative mt-16">
        {/* Enhanced Center Vertical Line with glow */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 h-full animate-line-glow"
          style={{
            background: 'linear-gradient(180deg, rgba(34, 197, 226, 0.4) 0%, rgba(168, 85, 247, 0.3) 50%, rgba(59, 130, 246, 0.4) 100%)',
            boxShadow: '0 0 30px rgba(34, 197, 226, 0.3)',
          }} />

        {/* Decorative orbit elements */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-8 transform -translate-y-4">
          <div className="w-full h-full border-2 border-cyan-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <div className="space-y-16 md:space-y-1 relative">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = milestone.icon;

            return (
              <div key={index} className="relative animate-timeline-float" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Different layouts for mobile vs desktop */}
                <div className="md:hidden">
                  {/* Mobile View */}
                  <div
                    className={cn(
                      "text-white font-bold py-3 px-6 rounded-lg text-center mb-4 relative border-2 timeline-card-bg",
                      milestone.color,
                      "border-opacity-50 hover:border-opacity-100 transition-all duration-300"
                    )}
                  >
                    <div className="text-sm font-semibold opacity-90">{milestone.date}</div>

                    {/* Timeline marker */}
                    <div
                      className={cn(
                        "absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 rounded-full border-4 border-slate-950 dark:border-slate-900 z-10 animate-marker-pulse",
                        milestone.color
                      )}
                    >
                      <div className="absolute inset-1 flex items-center justify-center">
                        <IconComponent className="w-2 h-2 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>

                  {/* Content card - Below date header on mobile */}
                  <div className="timeline-card-bg border border-cyan-500/30 p-5 rounded-lg shadow-lg hover:border-cyan-500/60 transition-all duration-300 mt-2">
                    <h3 className="font-bold text-white text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Desktop/Tablet View - Zigzag layout */}
                <div className="hidden md:block">
                  {/* Timeline marker - Centered on timeline */}
                  <div
                    className={cn(
                      "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-slate-950 dark:border-slate-900 z-10 animate-marker-pulse shadow-lg",
                      milestone.color
                    )}
                  >
                    <div className="absolute inset-1.5 flex items-center justify-center">
                      <IconComponent className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Layout grid */}
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left side */}
                    {isLeft ? (
                      <>
                        <div className="pr-16">
                          {/* Date header */}
                          <div
                            className={cn(
                              "text-white font-bold py-3 px-6 rounded-lg w-full text-center mb-4 border-2 transition-all duration-300",
                              milestone.color,
                              "border-opacity-50 hover:border-opacity-100"
                            )}
                          >
                            {milestone.date}
                          </div>

                          {/* Content card */}
                          <div className="timeline-card-bg border border-cyan-500/30 p-6 rounded-lg shadow-xl hover:border-cyan-500/60 transition-all duration-300">
                            <h3 className="font-bold text-white text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                              {milestone.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                        <div></div> {/* Empty div for right side */}
                      </>
                    ) : (
                      <>
                        <div></div> {/* Empty div for left side */}
                        <div className="pl-16">
                          {/* Date header */}
                          <div
                            className={cn(
                              "text-white font-bold py-3 px-6 rounded-lg w-full text-center mb-4 border-2 transition-all duration-300",
                              milestone.color,
                              "border-opacity-50 hover:border-opacity-100"
                            )}
                          >
                            {milestone.date}
                          </div>

                          {/* Content card */}
                          <div className="timeline-card-bg border border-cyan-500/30 p-6 rounded-lg shadow-xl hover:border-cyan-500/60 transition-all duration-300">
                            <h3 className="font-bold text-white text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                              {milestone.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative bottom element */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-8 h-8 transform translate-y-4">
          <div className="w-full h-full border-2 border-purple-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
