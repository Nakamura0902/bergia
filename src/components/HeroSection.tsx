"use client";

import Image from "next/image";

const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuClvdGt3UDrpQtxRKbu4x8SedJUChJJS4pLtsah4we1z8rq1JaGkDZ6aQQHqigwprMrik3VLd-OUOcXA1rgrEzMssLoMoAghyLlT2lQZEDDPX7n-HzrF3VkvHLbHbjEMue4gbZ6moe1gGGgL4r_P-K06ieNcwVUfD8hcPI7_9s16YyljTHT6HTThJkI2Tvcm9e801NY3FqTYhRjFLoqwXEdXEkS7-S61WboUxHU3MD0wSZgA68-iAyEPkXRRrhqZnG1Y-cCgs6iqFE";

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="students" className="relative pt-14 min-h-screen flex items-center overflow-hidden bg-[#0b0b12]">
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-700/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Left — Students */}
          <div className="bg-[#16162a]/80 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full w-fit tracking-widest">
              FOR STUDENTS
            </span>
            <p className="text-2xl font-black text-white leading-snug">
              君の挑戦に、<br />スポットライトを。
            </p>
            <button
              onClick={() => scrollTo("student-form")}
              className="grad-btn text-white font-bold px-6 py-3 rounded-xl text-sm w-fit"
            >
              挑戦を始める
            </button>
          </div>

          {/* Center — Logo */}
          <div className="flex items-center justify-center py-8">
            <Image
              src={LOGO_URL}
              alt="Bergia Logo"
              width={200}
              height={80}
              className="w-auto h-20 object-contain"
              unoptimized
            />
          </div>

          {/* Right — Enterprise */}
          <div id="enterprise-hero" className="bg-[#16162a]/80 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full w-fit tracking-widest">
              FOR ENTERPRISES
            </span>
            <p className="text-2xl font-black text-white leading-snug">
              地域の未来を、<br />共に創る。
            </p>
            <button
              onClick={() => scrollTo("enterprise-form")}
              className="grad-btn text-white font-bold px-6 py-3 rounded-xl text-sm w-fit"
            >
              パートナー参画
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
