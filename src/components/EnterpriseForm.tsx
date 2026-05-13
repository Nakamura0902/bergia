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

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm bg-white";

  return (
    <section id="enterprise-form" className="py-24 bg-gray-50">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">Enterprise Entry</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">パートナー参画</h2>
          <p className="text-gray-500 text-sm">
            企業様のご参加お問い合わせはこちら。担当者よりご連絡差し上げます。
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-gray-900 font-bold text-lg mb-2">お問い合わせを受け付けました</p>
              <p className="text-gray-500 text-sm">担当者より3営業日以内にご連絡いたします。</p>
              <button onClick={() => setStatus("idle")} className="mt-6 text-indigo-600 text-sm underline">
                別のお問い合わせをする
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-gray-700 text-sm font-medium mb-1.5 block">会社名 *</label>
                <input type="text" name="company" required value={form.company} onChange={handleChange} placeholder="株式会社〇〇" className={inputClass} />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium mb-1.5 block">会社メールアドレス *</label>
                <input type="email" name="workEmail" required value={form.workEmail} onChange={handleChange} placeholder="hr@company.co.jp" className={inputClass} />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium mb-1.5 block">お問い合わせ内容</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="参加形式、費用、スケジュールなどお気軽にご質問ください。" className={inputClass + " resize-none"} />
              </div>
              {status === "error" && (
                <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-2.5">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                {status === "loading" ? "送信中..." : "お問い合わせする"}
              </button>
              <p className="text-gray-400 text-xs text-center">
                送信することで<a href="#" className="underline">プライバシーポリシー</a>に同意したことになります。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
