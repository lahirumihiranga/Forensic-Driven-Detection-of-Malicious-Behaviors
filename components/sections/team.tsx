import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Braces, Crown, FolderSearch, Network, ShieldCheck, UserCog, Users, Activity, LucideIcon,
} from "lucide-react";

const supervisors = [
  {
    id: "supervisor-1",
    name: "Mr. Amila Nuwan Senarathne",
    role: "Supervisor",
    focus: "Forensic Strategy & Threat Correlation",
    avatar: "/images/members/Amila-sir.jpg",
    icon: Crown,
    color: "#22d3ee",
  },
  {
    id: "supervisor-2",
    name: "Miss. Ayesha Wijesooriya",
    role: "Co-Supervisor",
    focus: "Behavioral Analysis & Detection Pipeline",
    avatar: "/images/members/Ayesha-miss.jpg",
    icon: ShieldCheck,
    color: "#a78bfa",
  },
];

const members = [
  {
    id: "member-1",
    name: "Jayawickrama P C",
    role: "Network Behavior Module",
    focus: "Flow-based GAN + ML anomaly detection",
    studentId: "IT22310064",
    avatar: "/images/members/Chathuwa.png",
    icon: Network,
    color: "#22d3ee",
  },
  {
    id: "member-2",
    name: "Ellawala E L M",
    role: "Social Media API Module",
    focus: "API forensic timeline reconstruction",
    studentId: "IT22307880",
    avatar: "/images/members/Lahiru.png",
    icon: Braces,
    color: "#a78bfa",
  },
  {
    id: "member-3",
    name: "Muhandiram T M B D",
    role: "Encrypted Web Module",
    focus: "TLS traffic classification without decryption",
    studentId: "IT22919496",
    avatar: "/images/members/Binu.png",
    icon: Users,
    color: "#34d399",
  },
  {
    id: "member-4",
    name: "K. M. I Bandara",
    role: "Filesystem & Endpoint Module",
    focus: "Sequence-based LOTL & insider threat detection",
    studentId: "IT22644930",
    avatar: "/images/members/Induwa.png",
    icon: FolderSearch,
    color: "#fbbf24",
  },
];

type Person = {
  id: string; name: string; role: string; focus: string;
  avatar: string; icon: LucideIcon; color: string;
  studentId?: string;
};

function PersonCard({ person, delay }: { person: Person; delay: string }) {
  const Icon = person.icon;
  const initials = person.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <article
      className="person-card anim-rise relative overflow-hidden rounded-2xl p-6"
      style={{ animationDelay: delay, "--card-color": person.color } as React.CSSProperties}
    >
      {/* Scan line on hover */}
      <div className="scan-sweep" />
      {/* Corner accent */}
      <div className="card-corner-tl" />
      <div className="card-corner-br" />

      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between">
          <Avatar className="h-14 w-14 ring-2" style={{ "--tw-ring-color": `${person.color}40` } as React.CSSProperties}>
            <AvatarImage src={person.avatar} />
            <AvatarFallback className="text-sm font-bold" style={{ background:`${person.color}18`, color: person.color }}>
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background:`${person.color}15`, border:`1px solid ${person.color}30` }}>
            <div className="icon-ring-orbit" style={{ borderColor: person.color }} />
            <Icon className="icon-pulse relative z-10 h-4 w-4" style={{ color: person.color }} strokeWidth={2.2} />
          </div>
        </div>

        <h4 className="f-display text-base font-black text-white">{person.name}</h4>
        <p className="f-mono mt-1 text-xs font-semibold" style={{ color: person.color }}>{person.role}</p>
        {person.studentId && (
          <p className="f-mono mt-0.5 text-[10px] text-slate-500">{person.studentId}</p>
        )}
        <p className="f-body mt-3 text-sm leading-relaxed text-slate-400">{person.focus}</p>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden px-4 py-24 md:px-8"
      style={{ background:"linear-gradient(to bottom,#06091a,#080d22 50%,#06091a)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scanDown{0%{top:-2px;opacity:0.8}100%{top:110%;opacity:0}}
        @keyframes orbit{to{transform:rotate(360deg)}}
        @keyframes iconPulse{0%,100%{transform:scale(1);opacity:0.7}50%{transform:scale(1.2);opacity:1}}
        @keyframes softPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}

        .f-display{font-family:'Orbitron',monospace}
        .f-mono{font-family:'JetBrains Mono',monospace}
        .f-body{font-family:'Inter',sans-serif}

        .anim-rise{animation:fadeUp 0.65s ease both;}

        .person-card {
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(8,12,30,0.75);
          backdrop-filter:blur(14px);
          transition:transform 0.22s ease,border-color 0.22s ease,box-shadow 0.22s ease;
        }
        .person-card:hover {
          transform:translateY(-4px);
          border-color: color-mix(in srgb,var(--card-color,#22d3ee) 40%,transparent);
          box-shadow:0 28px 60px -30px color-mix(in srgb,var(--card-color,#22d3ee) 40%,transparent);
        }
        .scan-sweep {
          position:absolute; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,var(--card-color,#22d3ee),transparent);
          top:-2px; opacity:0;
          pointer-events:none;
          transition:none;
        }
        .person-card:hover .scan-sweep {
          animation:scanDown 0.9s ease forwards;
        }
        .card-corner-tl,.card-corner-br {
          position:absolute; width:14px; height:14px;
          border-color: color-mix(in srgb,var(--card-color,#22d3ee) 50%,transparent);
          opacity:0; transition:opacity 0.25s;
        }
        .card-corner-tl { top:0; left:0; border-top:1px solid; border-left:1px solid; border-radius:0.5rem 0 0 0; }
        .card-corner-br { bottom:0; right:0; border-bottom:1px solid; border-right:1px solid; border-radius:0 0 0.5rem 0; }
        .person-card:hover .card-corner-tl,
        .person-card:hover .card-corner-br { opacity:1; }

        .icon-ring-orbit {
          position:absolute; inset:-5px; border-radius:50%;
          border:1px dashed; opacity:0;
          transition:opacity 0.2s;
        }
        .person-card:hover .icon-ring-orbit {
          opacity:0.6; animation:orbit 4s linear infinite;
        }
        .icon-pulse { animation:iconPulse 2.6s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full blur-[90px]" style={{background:"rgba(34,211,238,0.07)"}} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full blur-[90px]" style={{background:"rgba(239,68,68,0.06)"}} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="anim-rise mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/8 px-4 py-2">
            <Activity className="h-3.5 w-3.5 text-cyan-300" style={{ animation:"softPulse 2.4s ease-in-out infinite" }} />
            <span className="f-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Forensic Detection Team · SLIIT
            </span>
          </div>
          <h2 className="f-display text-4xl font-black text-white md:text-5xl">Meet The Team</h2>
          <p className="f-body mx-auto mt-4 max-w-2xl text-slate-400">
            Security researchers and ML engineers shaping a behavioral detection framework for malicious activity across enterprise telemetry.
          </p>
        </header>

        <div className="mb-12">
          <h3 className="f-display mb-6 text-lg font-bold text-slate-300 uppercase tracking-wider">Supervision Panel</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {supervisors.map((p, i) => (
              <PersonCard key={p.id} person={p} delay={`${i * 80}ms`} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="f-display mb-6 text-lg font-bold text-slate-300 uppercase tracking-wider">Core Research Squad</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((p, i) => (
              <PersonCard key={p.id} person={p} delay={`${i * 80}ms`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}