export default function MissionSection() {
  const values = [
    { icon: "✓", label: "誠実" },
    { icon: "◎", label: "目的" },
    { icon: "♥", label: "利他" },
    { icon: "◈", label: "ワンチーム" },
    { icon: "🚀", label: "挑戦" },
  ];

  return (
    <section id="mission" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
          誰もが挑戦を循環させられる社会へ
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          代表Joyは、学生時代に「評価される機会すら得られない」という理不尽さを経験しました。
          ポテンシャルがあっても、出会いがなければ埋もれてしまう。
          <br /><br />
          BERGIAは、すべての挑戦に光を当てるためのプラットフォームです。
          企業と学生が対等に向き合い、本質的なマッチングが生まれる場所を創ります。
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <p className="text-sm text-indigo-600 font-semibold tracking-widest uppercase mb-3">Vision</p>
          <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
            すべての価値が正しく評価され、
            <br />
            挑戦が循環する社会を創る
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {values.map((v) => (
            <div
              key={v.label}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col items-center gap-2"
            >
              <span className="text-2xl">{v.icon}</span>
              <span className="font-bold text-gray-900 text-sm">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
