"use client";

export default function EnterpriseSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: "👁",
      title: "27/28卒の優秀層へ早期アクセス",
      desc: "市場に出回る前の逸材を、他社より先に発見できる。",
    },
    {
      icon: "⏱",
      title: "4時間の濃密なマッチング",
      desc: "書類だけでは分からない、学生の本質を直接見極める。",
    },
    {
      icon: "💰",
      title: "採用代理店より圧倒的なコスト削減",
      desc: "従来の採用コストの数分の一で、質の高い候補者に会える。",
    },
    {
      icon: "🍽",
      title: "ディナーでの深い関係構築",
      desc: "イベント後の食事会で、よりフランクな対話が生まれる。",
    },
  ];

  return (
    <section id="enterprise" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.1),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            For Enterprise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            単なる採用媒体では
            <br />
            <span className="gradient-text">なく、4時間の濃厚な</span>
            <br />
            マッチング体験。
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            地域の未来を、共に創る。
            学生の可能性を最大限引き出し、
            企業のカルチャーに本当にフィットする人材を見つける新しいアプローチ。
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group flex gap-5 glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="text-3xl flex-shrink-0">{b.icon}</div>
              <div>
                <h3 className="font-bold text-white mb-2 text-sm">{b.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollTo("enterprise-form")}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            パートナー参画
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-white/30 text-xs mt-3">資料ダウンロードも可能です</p>
        </div>
      </div>
    </section>
  );
}
