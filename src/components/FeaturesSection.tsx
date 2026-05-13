export default function FeaturesSection() {
  const features = [
    { icon: "🎯", title: '圧倒的な「打席」', desc: "8社からの本気1on1フィードバック、君の武器を磨き上げる。最速で内定へ。" },
    { icon: "⚡", title: "早期オファー", desc: "優秀者には選考ショートカットの特別ルートへ。最速で内定へ。" },
    { icon: "🏆", title: "報酬とエンタメ", desc: "1〜2万円相当の豪華景品を用意。真剣勝負を、最高のエンタメに。" },
    { icon: "🤝", title: "戦友との出会い", desc: "厳選された12名の学生コミュニティ。生涯続く繋がりがここに。" },
  ];

  return (
    <section id="benefits" style={{ background: "#0b0b12", paddingBottom: "80px" }}>
      {/* Gradient line */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #7c3aed, #ec4899, #7c3aed)", marginBottom: 64 }} />

      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-black text-white text-center mb-12"
          style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
        >
          未来を掴む、4つの圧倒的な体験
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 flex flex-col items-center text-center gap-4"
              style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{ background: "rgba(139,92,246,0.2)" }}
              >
                {f.icon}
              </div>
              <p className="font-bold text-white text-sm">{f.title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
