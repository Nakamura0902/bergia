"use client";

import Image from "next/image";

const TEAM_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB45FW-X90_ILxsaQcAa6hJOzsGa9Smp81sHo6Xgiva7VBrvm-qQArgBP9wS7V0PzyWmxTlRc4T75joYM3BRC_5zVWoxf7KvDG1rl3MzOdkyndsC2vsAdAGMVY60k1I_phUQDd1lDMElca7LOH1iG6ghHrq5NF3PpZdqlSmitkIUABFRGYq8HqMk7RUMPE3wDnVlpTt_6WtloVto_7T3mGBLL4B6phMfcT0k7DeQd78wtmrMGFbxNIPv7KXJ00BYh3qK6s8S7IA7uY";

export default function EnterpriseSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: "👁",
      title: "27/28卒の優秀層へ早期アクセス",
      desc: "市場に出回る前の逸材を、他社より先に発見できる。",
    },
    {
      icon: "⏱",
      title: "4時間の深掘りマッチング",
      desc: "書類だけでは分からない、学生の本質を直接見極める。",
    },
    {
      icon: "💰",
      title: "採用代理店より圧倒的なコスト削減",
      desc: "従来の採用コストの数分の一で質の高い候補者に会える。",
    },
  ];

  return (
    <section id="enterprise" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">For Enterprise</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            地域の未来を、共に創る。
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            単なる採用媒体ではなく、4時間の濃厚なマッチング体験。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-gray-900">
              採用ブランディングを加速させる
            </h3>
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{b.title}</p>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <Image
              src={TEAM_IMG}
              alt="Professional team meeting"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("enterprise-form")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            パートナー参画
          </button>
          <button
            onClick={() => scrollTo("enterprise-form")}
            className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-colors text-base"
          >
            資料ダウンロード
          </button>
        </div>
      </div>
    </section>
  );
}
