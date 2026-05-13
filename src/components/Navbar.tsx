"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}
      className="bg-[#0b0b12] border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div
          className="text-base font-black tracking-widest text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BERGIA
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {[["Students","students"],["Enterprise","enterprise"],["Mission","mission"],["Benefits","benefits"]].map(([l,id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-white transition-colors">{l}</button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => scrollTo("student-form")} className="text-sm text-gray-400 hover:text-white px-4 py-2 transition-colors">
            Login
          </button>
          <button
            onClick={() => scrollTo("student-form")}
            className="text-sm font-semibold text-white px-5 py-2 rounded-lg"
            style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
          >
            Get Started
          </button>
        </div>

        <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#16162a] border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {[["Students","students"],["Enterprise","enterprise"],["Mission","mission"],["Benefits","benefits"]].map(([l,id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left text-gray-300 hover:text-white py-1 text-sm">{l}</button>
          ))}
          <button
            onClick={() => scrollTo("student-form")}
            className="mt-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
            style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
