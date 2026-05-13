"use client";

export default function EnterpriseSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const benefits = [
    { icon: "👁", title: "早期接触", desc: "27/28卒の優秀層へリーチ" },
    { icon: "⏱", title: "4時間の深掘り", desc: "面書では見えない本質を見抜く" },
    { icon: "💰", title: "コスト削減", desc: "エージェント比で高い投資対効果" },
  ];

  return (
    <section id="enterprise" style={{ background: "#0b0b12", padding: "80px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#a855f7" }}>
              For Enterprises
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Bergiaは、単なる採用媒体ではありません。学生の「素」の能力と熱意が可視化される4時間の濃厚なマッチング体験を提供します。
            </p>
            <div className="grid grid-cols-3 gap-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl p-4 flex flex-col gap-2"
                  style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}
                >
                  <span className="text-xl">{b.icon}</span>
                  <p className="font-bold text-white text-xs">{b.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-xl font-black text-white">採用ブランディングを加速させる</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              学生との本質的な接点を通じて、企業の魅力を深く伝える場を提供します。
              採用ブランドの構築から早期オファーまで、一貫したサポートを行います。
            </p>
            <button
              onClick={() => scrollTo("enterprise-form")}
              className="font-bold px-6 py-3 rounded-xl text-sm text-white w-fit"
              style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
            >
              資料ダウンロード
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
