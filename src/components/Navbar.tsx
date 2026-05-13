"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0b0b12]/95 backdrop-blur-md shadow-lg" : "bg-[#0b0b12]"}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="text-lg font-black tracking-widest text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BERGIA
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {[["Students","students"],["Enterprise","enterprise"],["Mission","mission"],["Benefits","benefits"]].map(([l,id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-white transition-colors">{l}</button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => scrollTo("student-form")} className="text-sm text-gray-400 hover:text-white px-4 py-2 transition-colors">Login</button>
          <button onClick={() => scrollTo("student-form")} className="text-sm font-semibold grad-btn text-white px-5 py-2 rounded-lg">Get Started</button>
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
          <button onClick={() => scrollTo("student-form")} className="mt-2 grad-btn text-white font-semibold px-5 py-2.5 rounded-lg text-sm">Get Started</button>
        </div>
      )}
    </nav>
  );
}
