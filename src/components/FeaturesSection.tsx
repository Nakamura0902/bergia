export default function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: '圧倒的な「打席」',
      desc: "8社からの本気1on1フィードバックが、君の武器を磨き上げる。業界トップの社会人から直接評価を受け、自分の市場価値を把握できる唯一の機会。",
    },
    {
      icon: "⚡",
      title: "早期オファー",
      desc: "選考ショートカットを提供。トップパフォーマーには企業から直接アプローチが届く。通常の選考プロセスを飛び越えた、特別なルートが開く。",
    },
    {
      icon: "🏆",
      title: "報酬とエンタメ",
      desc: "1〜2万円相当の景品が当たるチャンス。真剣勝負の中にも楽しさと刺激がある。ゲーム感覚で挑戦できる新しいキャリアイベント。",
    },
    {
      icon: "🤝",
      title: "戦友との出会い",
      desc: "厳選12名の学生コミュニティ。同じ熱量・高い志を持つ仲間と出会える場所。ここで築く人脈は、キャリアの財産になる。",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">Career Draft</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            未来を掴む、4つの圧倒的な体験
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
