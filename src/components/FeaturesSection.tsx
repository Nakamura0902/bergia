export default function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: '圧倒的な「打席」',
      desc: "8社からの本気1on1フィードバックが、君の武器を磨き上げる。業界トップの社会人から直接評価を受け、自分の市場価値を把握できる唯一の機会。",
      color: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/20",
      glow: "shadow-indigo-500/10",
    },
    {
      icon: "⚡",
      title: "早期オファー",
      desc: "選考ショートカットを提供。トップパフォーマーには企業から直接アプローチが届く。通常の選考プロセスを飛び越えた、特別なルートが開く。",
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
      glow: "shadow-purple-500/10",
    },
    {
      icon: "🏆",
      title: "報酬とエンタメ",
      desc: "1〜2万円相当の景品が当たるチャンス。真剣勝負の中にも、楽しさと刺激がある。ゲーム感覚で挑戦できる新しいキャリアイベント。",
      color: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-500/20",
      glow: "shadow-pink-500/10",
    },
    {
      icon: "🤝",
      title: "戦友との出会い",
      desc: "厳選12名の学生コミュニティ。同じ熱量・高い志を持つ仲間と出会える場所。ここで築く人脈は、キャリアの財産になる。",
      color: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/20",
      glow: "shadow-amber-500/10",
    },
  ];

  return (
    <section id="benefits" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            Career Draft の特徴
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            4つの圧倒的な
            <br />
            <span className="gradient-text">体験</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${f.color} border ${f.border} hover:shadow-2xl ${f.glow} transition-all duration-300 cursor-default`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
