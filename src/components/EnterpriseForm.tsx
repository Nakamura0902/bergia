"use client";

import { useState } from "react";

export default function EnterpriseForm() {
  const [form, setForm] = useState({ company: "", workEmail: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all text-sm";

  return (
    <section id="enterprise-form" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)]" />
      <div className="max-w-xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-3 block">
            Enterprise Entry
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            パートナー参画
          </h2>
          <p className="text-white/40 text-sm">
            企業様のご参加お問い合わせはこちら。担当者よりご連絡差し上げます。
          </p>
        </div>

        {/* Form */}
        <div className="glass rounded-2xl p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-white font-semibold text-lg mb-2">お問い合わせを受け付けました</p>
              <p className="text-white/50 text-sm">
                担当者より3営業日以内にご連絡いたします。
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-purple-400 hover:text-purple-300 text-sm underline"
              >
                別のお問い合わせをする
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white/50 text-xs mb-1.5 block font-medium">会社名 *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1.5 block font-medium">会社メールアドレス *</label>
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={form.workEmail}
                  onChange={handleChange}
                  placeholder="hr@company.co.jp"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1.5 block font-medium">お問い合わせ内容</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="参加形式、費用、スケジュールなど、お気軽にご質問ください。"
                  className={inputClass + " resize-none"}
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm bg-red-500/10 rounded-lg px-4 py-2.5">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-indigo-500/20"
              >
                {status === "loading" ? "送信中..." : "お問い合わせする"}
              </button>

              <p className="text-white/20 text-xs text-center">
                送信することで、
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
