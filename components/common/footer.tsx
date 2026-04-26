"use client";

import Link from "next/link";
import {
  Braces,
  Facebook,
  FolderSearch,
  Linkedin,
  Network,
  ShieldAlert,
  Twitter,
  UserCog,
} from "lucide-react";
import { SubscribeForm } from "./subscribe-form";

const detectionSurfaces = [
  { label: "Network Telemetry", icon: Network },
  { label: "User Session Signals", icon: UserCog },
  { label: "Filesystem Events", icon: FolderSearch },
  { label: "API Invocation Trails", icon: Braces },
];

const architectureLinks = [
  { label: "Threat Scope", href: "#scope" },
  { label: "Detection Components", href: "#components" },
  { label: "Signal Gallery", href: "#gallery" },
  { label: "Research Documents", href: "#documents" },
  { label: "Team Profiles", href: "#team" },
  { label: "Contact", href: "#contact-us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 overflow-hidden rounded-t-[2rem] border border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-14 md:px-8">
      <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-red-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-4">
        <section className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-6 lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-red-500">
              <ShieldAlert className="h-5 w-5 text-slate-950" strokeWidth={2.1} />
            </span>
            <h2 className="text-lg font-black tracking-[0.12em] text-slate-100">FORENSIML</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Forensic-driven malicious behavior detection powered by machine learning. We correlate
            network, user, filesystem, and API evidence to support faster, explainable response.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {detectionSurfaces.map((surface) => {
              const Icon = surface.icon;
              return (
                <div
                  key={surface.label}
                  className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-200"
                >
                  <Icon className="h-4 w-4 text-cyan-300" strokeWidth={2.2} />
                  {surface.label}
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-6">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-cyan-200">
            Architecture
          </h3>
          <ul className="space-y-2 text-sm">
            {architectureLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-300 transition hover:text-cyan-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-6">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-cyan-200">
            Subscribe For Alerts
          </h3>
          <p className="mb-4 text-sm text-slate-300">
            Receive updates on model behavior, threat simulation outcomes, and forensic research.
          </p>
          <SubscribeForm />
        </section>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-slate-800/90 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {year} ForensiML Detection Architecture. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <Link href="https://facebook.com" aria-label="Facebook" className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}