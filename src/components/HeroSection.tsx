"use client";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="students"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_80%,rgba(236,72,153,0.08),transparent_50%)]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-purple-300">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-glow inline-block" />
          Career Draft Platform
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
          <span className="text-white">君の挑戦に、</span>
          <br />
          <span className="gradient-text">スポットライトを。</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
          8社との本気の1on1。早期オファー。選ばれた12名のコミュニティ。
          <br className="hidden md:block" />
          あなたのキャリアを、ドラフトで動かせ。
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("student-form")}
            className="group relative px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 text-base"
          >
            <span className="relative z-10">挑戦を始める</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollTo("mission")}
            className="px-8 py-4 rounded-full font-semibold text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 text-base"
          >
            当日の詳細を見る
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { num: "8", label: "企業からの\n1on1フィードバック" },
            { num: "12", label: "厳選された\n学生のみ" },
            { num: "2万円", label: "相当の\n景品・報酬" },
          ].map(({ num, label }) => (
            <div key={num} className="text-center">
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{num}</div>
              <div className="text-xs text-white/40 whitespace-pre-line leading-relaxed">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs">
        <span>scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
