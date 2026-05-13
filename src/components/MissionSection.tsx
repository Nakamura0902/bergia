export default function MissionSection() {
  const values = [
    { icon: "✓", label: "誠実", sub: "直率に向き合う姿勢" },
    { icon: "◎", label: "目的", sub: "本質を見失わない" },
    { icon: "♥", label: "利他", sub: "他者の成功を喜ぶ" },
    { icon: "◈", label: "ワンチーム", sub: "個を活かし全体へ" },
    { icon: "🚀", label: "挑戦", sub: "未知への一歩を" },
  ];

  return (
    <section id="mission" className="py-24 bg-[#0b0b12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">BRAND STORY</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              誰もが挑戦を<br />循環させられる社会へ
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              「一人では新くことができない人々を支えたい」<br />
              代表・JoyのそんなからBergiaは誕生しました。硬い業界間で隙間に、
              隠れた才能が正しい場所で評価されるプラットフォームを目指しています。
            </p>
            <div className="bg-[#16162a] border border-white/10 rounded-xl p-5">
              <p className="text-xs text-purple-400 font-semibold mb-2">Vision</p>
              <p className="text-white font-semibold text-sm leading-relaxed">
                すべての価値が正しく評価され、挑戦が循環する社会を創る
              </p>
            </div>
          </div>

          {/* Right — Values grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.label} className="bg-[#16162a] border border-white/10 rounded-xl p-5 flex flex-col gap-2">
                <span className="text-xl">{v.icon}</span>
                <p className="font-bold text-white text-sm">{v.label}</p>
                <p className="text-gray-500 text-xs">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
