"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon, Maximize2, Network, Lock, Activity, GitBranch, X, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface GalleryImage { src: string; alt: string; module: string; color: string; icon: React.ElementType; tag: string; }

const images: GalleryImage[] = [
  { src: "/images/diagrams/Chathurma.png",        alt: "Network Behavior GAN Architecture",    module: "Network Forensics",      color: "#22d3ee", icon: Network,    tag: "IT22310064" },
  { src: "/images/diagrams/Lahiru.png",        alt: "Social Media API Timeline Analysis",   module: "API Forensics",          color: "#a78bfa", icon: Activity,   tag: "IT22307880" },
  { src: "/images/diagrams/Binushi.png",   alt: "Encrypted Web Traffic Classification", module: "Encrypted Web",          color: "#34d399", icon: Lock,       tag: "IT22919496" },
  { src: "/images/diagrams/Induwara.png", alt: "Filesystem & Endpoint Behavior Model", module: "Filesystem & Endpoint",  color: "#fbbf24", icon: GitBranch,  tag: "IT22644930" },
];

export default function ComponentGallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="relative overflow-hidden px-4 py-16 md:px-8" id="gallery"
        style={{ background:"linear-gradient(to bottom,#080d22,#06091a)" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

          @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
          @keyframes scanDown{0%{top:0%;opacity:0.85}100%{top:105%;opacity:0}}
          @keyframes orbit{to{transform:rotate(360deg)}}
          @keyframes sonar{0%{transform:scale(1);opacity:0.7}70%{transform:scale(2.4);opacity:0}100%{transform:scale(1);opacity:0}}
          @keyframes slideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
          @keyframes cornerExpand{from{width:0;height:0}to{width:18px;height:18px}}
          @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}

          .f-display{font-family:'Orbitron',monospace}
          .f-mono{font-family:'JetBrains Mono',monospace}
          .f-body{font-family:'Inter',sans-serif}

          .anim-rise{animation:fadeUp 0.65s ease both}

          .gal-card{
            position:relative;overflow:hidden;border-radius:1.25rem;
            border:1px solid rgba(255,255,255,0.07);
            background:rgba(8,12,30,0.8);
            cursor:pointer;
            transition:transform 0.25s ease,border-color 0.25s ease,box-shadow 0.25s ease;
          }
          .gal-card:hover{
            transform:translateY(-4px) scale(1.01);
            border-color:color-mix(in srgb,var(--gc) 50%,transparent);
            box-shadow:0 28px 60px -25px color-mix(in srgb,var(--gc) 40%,transparent);
          }

          /* Scan line sweeps on hover */
          .gal-scan{
            position:absolute;left:0;right:0;height:2px;top:0;
            background:linear-gradient(90deg,transparent,var(--gc),transparent);
            opacity:0;pointer-events:none;z-index:10;
          }
          .gal-card:hover .gal-scan{animation:scanDown 1s ease forwards}

          /* Corner brackets */
          .corner{position:absolute;border-color:color-mix(in srgb,var(--gc) 70%,transparent);border-style:solid;opacity:0;transition:opacity 0.2s,width 0.3s,height 0.3s;width:0;height:0;}
          .corner-tl{top:0;left:0;border-width:2px 0 0 2px;border-radius:4px 0 0 0}
          .corner-tr{top:0;right:0;border-width:2px 2px 0 0;border-radius:0 4px 0 0}
          .corner-bl{bottom:0;left:0;border-width:0 0 2px 2px;border-radius:0 0 0 4px}
          .corner-br{bottom:0;right:0;border-width:0 2px 2px 0;border-radius:0 0 4px 0}
          .gal-card:hover .corner{opacity:1;width:22px;height:22px}

          /* Hover overlay */
          .gal-overlay{
            position:absolute;inset:0;
            background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.3) 50%,transparent 100%);
            opacity:0;transition:opacity 0.3s;display:flex;align-items:flex-end;padding:1.25rem;
          }
          .gal-card:hover .gal-overlay{opacity:1}
          .gal-overlay-content{animation:slideUp 0.3s ease both}

          /* Image zoom */
          .gal-img{transition:transform 0.5s ease}
          .gal-card:hover .gal-img{transform:scale(1.06)}

          /* Icon badge */
          .icon-orbit{position:absolute;inset:-6px;border-radius:50%;border:1px dashed;opacity:0;transition:opacity 0.2s;}
          .gal-card:hover .icon-orbit{opacity:0.55;animation:orbit 4s linear infinite}

          .float-icon{animation:float 3.5s ease-in-out infinite}
        `}</style>

        <div className="pointer-events-none absolute top-16 right-0 h-72 w-72 rounded-full blur-[90px]" style={{background:"rgba(124,58,237,0.07)"}} />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="anim-rise mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/28 bg-cyan-500/8 px-5 py-2.5">
              <div className="relative">
                <ImageIcon className="h-4 w-4 text-cyan-400 float-icon" strokeWidth={2.5} />
              </div>
              <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">Visual Gallery</span>
              <Sparkles className="h-4 w-4 text-violet-400" style={{ animation:"float 3s ease-in-out infinite", animationDelay:"0.5s" }} />
            </div>
            <h2 className="f-display text-4xl font-black text-white md:text-5xl">
              Research Visualizations
            </h2>
            <p className="f-body mx-auto mt-4 max-w-xl text-slate-400">
              System diagrams and behavioral analysis visualizations across all four detection modules.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {images.map((img, idx) => {
              const Icon = img.icon;
              return (
                <div
                  key={idx}
                  className="gal-card anim-rise"
                  style={{ animationDelay:`${idx*100}ms`, opacity:0, "--gc": img.color } as React.CSSProperties}
                  onClick={() => setSelected(img)}
                >
                  {/* Scan line */}
                  <div className="gal-scan" />

                  {/* Corner brackets */}
                  <div className="corner corner-tl" />
                  <div className="corner corner-tr" />
                  <div className="corner corner-bl" />
                  <div className="corner corner-br" />

                  {/* Header row */}
                  <div className="flex items-center gap-3 border-b border-slate-700/50 px-4 py-3">
                    <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{ background:`${img.color}18` }}>
                      <div className="icon-orbit" style={{ borderColor: img.color }} />
                      <Icon className="relative z-10 h-4 w-4" strokeWidth={2.2} style={{ color: img.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="f-display text-xs font-black text-white">{img.module}</p>
                    </div>
                    <span className="f-mono rounded-full border px-2 py-0.5 text-[9px] font-semibold text-slate-400"
                      style={{ borderColor:`${img.color}25`, background:`${img.color}08`, color:img.color }}>
                      {img.tag}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image src={img.src} alt={img.alt} fill className="gal-img object-cover" priority={idx < 2} />

                    {/* Hover overlay */}
                    <div className="gal-overlay">
                      <div className="gal-overlay-content flex w-full items-end justify-between">
                        <p className="f-display text-sm font-black text-white">{img.alt}</p>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                          <Maximize2 className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dialog */}
      {selected && (
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="sm:max-w-4xl rounded-2xl border border-cyan-500/25"
            style={{ background:"#06091a" }}>
            <DialogHeader>
              <DialogTitle className="f-display text-lg font-black text-white">{selected.alt}</DialogTitle>
            </DialogHeader>
            <div className="relative h-[60vh] w-full overflow-hidden rounded-xl border border-slate-700/50">
              <Image src={selected.src} alt={selected.alt} fill className="object-contain" priority />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1"
                style={{ background:`linear-gradient(90deg,transparent,${selected.color},transparent)` }} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}