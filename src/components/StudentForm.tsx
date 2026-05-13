"use client";

import { useState } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({ name: "", email: "", university: "", year: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("エントリーを受け付けました！追って連絡します。");
        setForm({ name: "", email: "", university: "", year: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "エラーが発生しました。");
      }
    } catch {
      setStatus("error");
      setMessage("通信エラーが発生しました。");
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm bg-white";

  return (
    <section id="student-form" className="py-24 bg-white">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">Student Entry</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">挑戦を始める</h2>
          <p className="text-gray-500 text-sm">
            エントリー情報を入力してください。後ほど担当者よりご連絡いたします。
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-gray-900 font-bold text-lg mb-2">エントリー完了！</p>
              <p className="text-gray-500 text-sm">{message}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-indigo-600 hover:text-indigo-700 text-sm underline"
              >
                別の方のエントリーをする
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-gray-700 text-sm font-medium mb-1.5 block">氏名 *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="山田 太郎" className={inputClass} />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium mb-1.5 block">メールアドレス *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="taro@example.com" className={inputClass} />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium mb-1.5 block">大学名 *</label>
                <input type="text" name="university" required value={form.university} onChange={handleChange} placeholder="○○大学" className={inputClass} />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium mb-1.5 block">学年</label>
                <select name="year" value={form.year} onChange={handleChange} className={inputClass}>
                  <option value="">選択してください</option>
                  {["B1","B2","B3","B4","M1","M2"].map((y) => (
                    <option key={y} value={y}>{y === "B1" ? "学部1年" : y === "B2" ? "学部2年" : y === "B3" ? "学部3年" : y === "B4" ? "学部4年" : y === "M1" ? "修士1年" : "修士2年"}</option>
                  ))}
                </select>
              </div>
              {status === "error" && (
                <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-2.5">{message}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                {status === "loading" ? "送信中..." : "エントリーする"}
              </button>
              <p className="text-gray-400 text-xs text-center">
                エントリーすることで<a href="#" className="underline">プライバシーポリシー</a>に同意したことになります。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
