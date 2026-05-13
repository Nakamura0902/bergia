"use client";

import Image from "next/image";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuClvdGt3UDrpQtxRKbu4x8SedJUChJJS4pLtsah4we1z8rq1JaGkDZ6aQQHqigwprMrik3VLd-OUOcXA1rgrEzMssLoMoAghyLlT2lQZEDDPX7n-HzrF3VkvHLbHbjEMue4gbZ6moe1gGGgL4r_P-K06ieNcwVUfD8hcPI7_9s16YyljTHT6HTThJkI2Tvcm9e801NY3FqTYhRjFLoqwXEdXEkS7-S61WboUxHU3MD0wSZgA68-iAyEPkXRRrhqZnG1Y-cCgs6iqFE";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="students"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src={LOGO_URL}
            alt="Bergia Logo"
            width={180}
            height={60}
            className="h-16 w-auto object-contain"
            unoptimized
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
          君の挑戦に、
          <br />
          スポットライトを。
        </h1>

        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          8社との本気の1on1。早期オファー。選ばれた12名のコミュニティ。
          あなたのキャリアを、ドラフトで動かせ。
        </p>

        <button
          onClick={() => scrollTo("student-form")}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-md"
        >
          挑戦を始める
        </button>
      </div>
    </section>
  );
}
