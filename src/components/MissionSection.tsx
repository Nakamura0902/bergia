export default function MissionSection() {
  const values = [
    {
      icon: "✓",
      title: "本気の評価",
      desc: "選考・スカウトに直結するリアルな評価",
    },
    {
      icon: "↗",
      title: "成長の機会",
      desc: "フィードバックによる自己認識の深化",
    },
    {
      icon: "♥",
      title: "情熱の共鳴",
      desc: "同じ熱量を持つ学生・企業との出会い",
    },
    {
      icon: "◎",
      title: "コミュニティ",
      desc: "厳選されたメンバーとの深い繋がり",
    },
    {
      icon: "🚀",
      title: "キャリア加速",
      desc: "早期オファーで一歩先のキャリアへ",
    },
  ];

  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(168,85,247,0.1),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-4 block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              学生と企業の
              <br />
              <span className="gradient-text">真剣勝負の場</span>
              <br />
              を創る。
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              従来の就活は、書類と面接だけで人を評価しようとする。
              しかしBERGIAは違う。
              <br /><br />
              4時間の濃密なイベントで、学生は本気のプレゼンとディスカッションに挑み、
              企業はその姿を間近で見る。
              マッチングではなく、ドラフト。
              <br /><br />
              君のポテンシャルを、正しく評価される場所がここにある。
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-indigo-500 to-purple-500" />
              <span className="text-white/30 text-sm">© 2024 Bergia Career Draft Platform</span>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group flex items-center gap-5 glass rounded-xl p-5 hover:border-purple-500/30 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-lg flex-shrink-0 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                  {v.icon}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{v.title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
