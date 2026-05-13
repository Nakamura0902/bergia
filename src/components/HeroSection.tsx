"use client";

import Image from "next/image";

const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuClvdGt3UDrpQtxRKbu4x8SedJUChJJS4pLtsah4we1z8rq1JaGkDZ6aQQHqigwprMrik3VLd-OUOcXA1rgrEzMssLoMoAghyLlT2lQZEDDPX7n-HzrF3VkvHLbHbjEMue4gbZ6moe1gGGgL4r_P-K06ieNcwVUfD8hcPI7_9s16YyljTHT6HTThJkI2Tvcm9e801NY3FqTYhRjFLoqwXEdXEkS7-S61WboUxHU3MD0wSZgA68-iAyEPkXRRrhqZnG1Y-cCgs6iqFE";

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="students"
      style={{
        minHeight: "100vh",
        background: "#0b0b12",
        paddingTop: "56px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Glow effects */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "30%", left: "10%",
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(109,40,217,0.25)", filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "10%",
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(190,24,93,0.2)", filter: "blur(80px)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Left — Students */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              background: "rgba(22,22,42,0.85)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="text-xs font-bold tracking-widest text-white px-3 py-1.5 rounded-full w-fit"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              FOR STUDENTS
            </span>
            <p className="text-2xl font-black text-white leading-snug">
              君の挑戦に、<br />スポットライトを。
            </p>
            <button
              onClick={() => scrollTo("student-form")}
              className="text-white font-bold px-6 py-3 rounded-xl text-sm w-fit"
              style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
            >
              挑戦を始める
            </button>
          </div>

          {/* Center — Logo */}
          <div className="flex items-center justify-center py-6">
            <div className="bg-white rounded-xl p-4 shadow-2xl">
              <Image
                src={LOGO_URL}
                alt="Bergia Logo"
                width={140}
                height={60}
                className="w-36 h-auto object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Right — Enterprise */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              background: "rgba(22,22,42,0.85)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="text-xs font-bold tracking-widest text-white px-3 py-1.5 rounded-full w-fit"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              FOR ENTERPRISES
            </span>
            <p className="text-2xl font-black text-white leading-snug">
              地域の未来を、<br />共に創る。
            </p>
            <button
              onClick={() => scrollTo("enterprise-form")}
              className="text-white font-bold px-6 py-3 rounded-xl text-sm w-fit"
              style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
            >
              パートナー参画
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
