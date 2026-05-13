export default function FeaturesSection() {
  const features = [
    { icon: "🎯", title: '圧倒的な「打席」', desc: "8社からの本気1on1フィードバック、君の武器を磨き上げる。最速で内定へ。" },
    { icon: "⚡", title: "早期オファー", desc: "優秀者には選考ショートカットの特別ルートへ。最速で内定へ。" },
    { icon: "🏆", title: "報酬とエンタメ", desc: "1〜2万円相当の豪華景品を用意。真剣勝負を、最高のエンタメに。" },
    { icon: "🤝", title: "戦友との出会い", desc: "厳選された12名の学生コミュニティ。生涯続く繋がりがここに。" },
  ];

  return (
    <section id="benefits" className="py-20 bg-[#0b0b12]">
      {/* Gradient separator */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mb-16" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-12">
          未来を掴む、4つの圧倒的な体験
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-[#16162a] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                {f.icon}
              </div>
              <p className="font-bold text-white text-sm">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
