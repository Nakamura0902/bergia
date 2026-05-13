export default function DinnerSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden glass border border-white/8">
          {/* BG Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />

          <div className="relative p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="text-sm font-medium text-pink-400 tracking-widest uppercase mb-4 block">
                After Event
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                Dinner Party
                <br />
                <span className="text-white/50 text-2xl font-medium">肩書きのない交流の時間</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                イベント終了後は、学生・企業担当者・BERGIAメンバーが一堂に会するディナーパーティー。
                役職や立場を超えた、フラットな対話の場。
                ここでしか生まれない出会いと会話が待っている。
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "参加者", value: "20〜30名" },
                  { label: "形式", value: "立食・着席ミックス" },
                  { label: "雰囲気", value: "カジュアル" },
                  { label: "時間", value: "2〜3時間" },
                ].map(({ label, value }) => (
                  <div key={label} className="glass rounded-xl p-4">
                    <div className="text-white/40 text-xs mb-1">{label}</div>
                    <div className="text-white font-semibold text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Decorative */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 animate-float" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-pink-500/30 to-indigo-500/30 flex items-center justify-center">
                  <span className="text-5xl">🥂</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
