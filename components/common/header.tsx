"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldAlert, Search } from "lucide-react";

const navItems = [
  { label: "Scope", href: "#scope" },
  { label: "Architecture", href: "#components" },
  { label: "Signals", href: "#gallery" },
  { label: "Docs", href: "#documents" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToHash = (href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/75 backdrop-blur-xl shadow-[0_12px_45px_-24px_rgba(34,211,238,0.5)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="#" className="group flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-red-500 shadow-lg shadow-cyan-500/30">
              <ShieldAlert className="h-5 w-5 text-slate-950" strokeWidth={2.2} />
            </span>
            <span className="text-sm font-black tracking-[0.16em] text-slate-100 sm:text-base">
              FORENSIML
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(item.href);
                }}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}

            <div
              className={`relative transition-all duration-300 ${
                searchFocused ? "w-64" : "w-48"
              }`}
            >
              <div
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-300 ${
                  searchFocused
                    ? "border-cyan-400/60 bg-slate-900/80 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    : "border-slate-600/50 bg-slate-900/40"
                }`}
              >
                <Search className="h-4 w-4 text-slate-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors duration-300"
                />
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact-us");
              }}
              className="hidden rounded-xl border border-red-400/35 bg-red-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-red-200 transition hover:bg-red-500/20 sm:inline-flex"
            >
              Report Incident
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex rounded-lg border border-cyan-400/30 p-2 text-slate-200 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-cyan-400/15 px-4 py-3 lg:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash(item.href);
                      setOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}