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
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all text-sm";

  return (
    <section id="student-form" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)]" />
      <div className="max-w-xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            Student Entry
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            挑戦を始める
          </h2>
          <p className="text-white/40 text-sm">
            エントリー情報を入力してください。後ほど担当者より連絡いたします。
          </p>
        </div>

        {/* Form */}
        <div className="glass rounded-2xl p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-white font-semibold text-lg mb-2">エントリー完了！</p>
              <p className="text-white/50 text-sm">{message}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-indigo-400 hover:text-indigo-300 text-sm underline"
              >
                別の方のエントリーをする
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white/50 text-xs mb-1.5 block font-medium">氏名 *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1.5 block font-medium">メールアドレス *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="taro@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1.5 block font-medium">大学名 *</label>
                <input
                  type="text"
                  name="university"
                  required
                  value={form.university}
                  onChange={handleChange}
                  placeholder="○○大学"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1.5 block font-medium">学年</label>
                <select
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" className="bg-[#1a1a2e]">選択してください</option>
                  <option value="B1" className="bg-[#1a1a2e]">学部1年</option>
                  <option value="B2" className="bg-[#1a1a2e]">学部2年</option>
                  <option value="B3" className="bg-[#1a1a2e]">学部3年</option>
                  <option value="B4" className="bg-[#1a1a2e]">学部4年</option>
                  <option value="M1" className="bg-[#1a1a2e]">修士1年</option>
                  <option value="M2" className="bg-[#1a1a2e]">修士2年</option>
                </select>
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm bg-red-500/10 rounded-lg px-4 py-2.5">{message}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-purple-500/20"
              >
                {status === "loading" ? "送信中..." : "エントリーする"}
              </button>

              <p className="text-white/20 text-xs text-center">
                エントリーすることで、
                <a href="#" className="underline hover:text-white/40">プライバシーポリシー</a>
                に同意したことになります。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
