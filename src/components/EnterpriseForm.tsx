"use client";

import { useState } from "react";

export default function EnterpriseForm() {
  const [form, setForm] = useState({ company: "", workEmail: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enterprises", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ company: "", workEmail: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "エラーが発生しました。");
      }
    } catch {
      setStatus("error");
      setErrorMsg("通信エラーが発生しました。");
    }
  };

  const inputClass = "w-full bg-[#1e1e30] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all text-sm";

  return (
    <div id="enterprise-form" className="flex flex-col gap-4">
      <p className="text-white font-bold text-base">Partner Participation</p>
      <p className="text-gray-400 text-sm">企業の方はこちら。導入のご相談や詳細資料のご請求を承ります。</p>

      {status === "success" ? (
        <div className="text-center py-6">
          <p className="text-white font-bold mb-1">お問い合わせを受け付けました</p>
          <p className="text-gray-400 text-sm">担当者より3営業日以内にご連絡いたします。</p>
          <button onClick={() => setStatus("idle")} className="mt-4 text-purple-400 text-sm underline">別のお問い合わせをする</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-gray-400 text-xs mb-1.5 block">Company / 会社名</label>
            <input type="text" name="company" required value={form.company} onChange={handleChange} placeholder="株式会社〇〇" className={inputClass} />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1.5 block">Work Email / 担当者メールアドレス</label>
            <input type="email" name="workEmail" required value={form.workEmail} onChange={handleChange} placeholder="biz@company.com" className={inputClass} />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1.5 block">Message / お問い合わせ内容</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={inputClass + " resize-none"} />
          </div>
          {status === "error" && <p className="text-red-400 text-xs">{errorMsg}</p>}
          <button type="submit" disabled={status === "loading"} className="grad-btn text-white font-bold py-3 rounded-xl text-sm disabled:opacity-50">
            {status === "loading" ? "送信中..." : "資料請求・お問い合わせ"}
          </button>
        </form>
      )}
    </div>
  );
}
