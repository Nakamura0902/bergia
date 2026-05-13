"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-xl font-black tracking-widest cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="gradient-text">BERGIA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <button
            onClick={() => scrollTo("students")}
            className="hover:text-white transition-colors"
          >
            Students
          </button>
          <button
            onClick={() => scrollTo("enterprise")}
            className="hover:text-white transition-colors"
          >
            Enterprise
          </button>
          <button
            onClick={() => scrollTo("mission")}
            className="hover:text-white transition-colors"
          >
            Mission
          </button>
          <button
            onClick={() => scrollTo("benefits")}
            className="hover:text-white transition-colors"
          >
            Benefits
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("student-form")}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors px-4 py-2"
          >
            Login
          </button>
          <button
            onClick={() => scrollTo("student-form")}
            className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-5 py-2 rounded-full transition-all duration-200 shadow-lg shadow-purple-500/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {["students", "enterprise", "mission", "benefits"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-left text-white/60 hover:text-white transition-colors py-1 capitalize"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("student-form")}
            className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2.5 rounded-full w-full"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
