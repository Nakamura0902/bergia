"use client";

export default function DinnerSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ background: "#0b0b12", padding: "0 0 32px" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d0a20 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex-1">
            <p className="font-bold text-base mb-3" style={{ color: "#fbbf24" }}>
              🍾 Dinner Party
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
              ドラフト後は、企業担当者との交流会を開催。肩書きを脱ぎ捨て、未来について語り合う熱い時間を提供します。
            </p>
          </div>
          <button
            onClick={() => scrollTo("student-form")}
            className="font-bold px-6 py-3 rounded-xl text-sm text-white whitespace-nowrap flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
          >
            当日の詳細を見る
          </button>
        </div>
      </div>
    </section>
  );
}
