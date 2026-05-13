"use client";

export default function DinnerSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-12 px-6 bg-[#0b0b12]">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2a0a1e 100%)" }}>
          <div className="flex-1">
            <p className="text-yellow-400 font-bold text-base mb-2">🍾 Dinner Party</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
              ドラフト後は、企業担当者との交流会を開催。肩書きを脱ぎ捨て、未来について語り合う熱い時間を提供します。
            </p>
          </div>
          <button
            onClick={() => scrollTo("student-form")}
            className="grad-btn text-white font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap flex-shrink-0"
          >
            当日の詳細を見る
          </button>
        </div>
      </div>
    </section>
  );
}
