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

  const inputClass = "w-full bg-[#1e1e30] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all text-sm";

  return (
    <div id="student-form" className="flex flex-col gap-4">
      <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
      <p className="text-gray-400 text-sm">学生の方はこちらからエントリー。あなたの可能性を広げましょう。</p>

      {status === "success" ? (
        <div className="text-center py-6">
          <p className="text-white font-bold mb-1">エントリー完了！</p>
          <p className="text-gray-400 text-sm">{message}</p>
          <button onClick={() => setStatus("idle")} className="mt-4 text-purple-400 text-sm underline">別の方のエントリーをする</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-gray-400 text-xs mb-1.5 block">Name / 氏名</label>
            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="山田 太郎" className={inputClass} />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1.5 block">Email / メールアドレス</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1.5 block">University / 大学名・学年</label>
            <input type="text" name="university" required value={form.university} onChange={handleChange} placeholder="○○大学 3年" className={inputClass} />
          </div>
          {status === "error" && <p className="text-red-400 text-xs">{message}</p>}
          <button type="submit" disabled={status === "loading"} className="grad-btn text-white font-bold py-3 rounded-xl text-sm disabled:opacity-50">
            {status === "loading" ? "送信中..." : "エントリーする"}
          </button>
        </form>
      )}
    </div>
  );
}
