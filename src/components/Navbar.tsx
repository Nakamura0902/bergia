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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div
          className="text-xl font-black tracking-widest text-gray-900 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BERGIA
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          {[
            { label: "Students", id: "students" },
            { label: "Enterprise", id: "enterprise" },
            { label: "Mission", id: "mission" },
            { label: "Benefits", id: "benefits" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-gray-900 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("student-form")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
          >
            Login
          </button>
          <button
            onClick={() => scrollTo("student-form")}
            className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-gray-600"
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

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3">
          {[
            { label: "Students", id: "students" },
            { label: "Enterprise", id: "enterprise" },
            { label: "Mission", id: "mission" },
            { label: "Benefits", id: "benefits" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-gray-600 hover:text-gray-900 py-1"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("student-form")}
            className="mt-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
