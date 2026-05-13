export default function DinnerSection() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-indigo-200 text-sm font-semibold tracking-widest uppercase mb-4">After Event</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          Dinner Party
        </h2>
        <p className="text-indigo-100 text-base leading-relaxed max-w-xl mx-auto mb-10">
          イベント終了後は、学生・企業担当者・BERGIAメンバーが一堂に会するディナーパーティー。
          肩書きのない、フラットな対話の場。ここでしか生まれない出会いと会話が待っている。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "参加者", value: "20〜30名" },
            { label: "形式", value: "立食・着席" },
            { label: "雰囲気", value: "カジュアル" },
            { label: "時間", value: "2〜3時間" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/10 rounded-xl p-4">
              <div className="text-indigo-200 text-xs mb-1">{label}</div>
              <div className="text-white font-bold text-sm">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
