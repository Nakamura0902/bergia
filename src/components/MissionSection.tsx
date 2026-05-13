export default function MissionSection() {
  const values = [
    { icon: "✓", label: "誠実", sub: "直率に向き合う姿勢" },
    { icon: "◎", label: "目的", sub: "本質を見失わない" },
    { icon: "♥", label: "利他", sub: "他者の成功を喜ぶ" },
    { icon: "◈", label: "ワンチーム", sub: "個を活かし全体へ" },
    { icon: "🚀", label: "挑戦", sub: "未知への一歩を" },
  ];

  return (
    <section id="mission" style={{ background: "#0b0b12", padding: "80px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#a855f7" }}>
              BRAND STORY
            </p>
            <h2 className="font-black text-white leading-tight mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}>
              誰もが挑戦を<br />循環させられる社会へ
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
              「一人では新くことができない人々を支えたい」<br />
              代表・JoyのそんなからBergiaは誕生しました。硬い業界間で隙間に、
              隠れた才能が正しい場所で評価されるプラットフォームを目指しています。
            </p>
            <div
              className="rounded-xl p-5"
              style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="text-xs font-bold mb-2" style={{ color: "#a855f7" }}>Vision</p>
              <p className="text-sm font-semibold text-white leading-relaxed">
                すべての価値が正しく評価され、挑戦が循環する社会を創る
              </p>
            </div>
          </div>

          {/* Right — Values */}
          <div className="grid grid-cols-3 gap-4">
            {values.map((v) => (
              <div
                key={v.label}
                className="rounded-xl p-5 flex flex-col gap-2"
                style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span className="text-lg" style={{ color: "#c084fc" }}>{v.icon}</span>
                <p className="font-bold text-white text-sm">{v.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
