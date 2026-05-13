"use client";

export default function EnterpriseSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const benefits = [
    { icon: "👁", title: "早期接触", desc: "27/28卒の優秀層へリーチ" },
    { icon: "⏱", title: "4時間の深掘り", desc: "面書では見えない本質を見抜く" },
    { icon: "💰", title: "コスト削減", desc: "エージェント比で高い投資対効果" },
  ];

  return (
    <section id="enterprise" className="py-24 bg-[#0b0b12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">For Enterprises</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Bergiaは、単なる採用媒体ではありません。学生の「素」の能力と熱意が可視化される4時間の濃厚なマッチング体験を提供します。
            </p>
            <div className="grid grid-cols-3 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-[#16162a] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                  <span className="text-xl">{b.icon}</span>
                  <p className="font-bold text-white text-xs">{b.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="bg-[#16162a] border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
            <h3 className="text-xl font-black text-white">採用ブランディングを加速させる</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              学生との本質的な接点を通じて、企業の魅力を深く伝える場を提供します。
              採用ブランドの構築から早期オファーまで、一貫したサポートを行います。
            </p>
            <button
              onClick={() => scrollTo("enterprise-form")}
              className="grad-btn text-white font-bold px-6 py-3 rounded-xl text-sm w-fit"
            >
              資料ダウンロード
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
