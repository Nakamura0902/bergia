import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [students, enterprises] = await Promise.all([
    prisma.student.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.enterprise.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <div style={{ background: "#0b0f10", minHeight: "100vh", padding: "40px 24px", fontFamily: "sans-serif", color: "#e0e3e5" }}>
      <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>BERGIA 管理画面</h1>
      <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 40 }}>登録データの一覧</p>

      {/* Students */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#d3bbff" }}>
          学生エントリー（{students.length}件）
        </h2>
        {students.length === 0 ? (
          <p style={{ color: "#6b7280", fontSize: 14 }}>まだ登録がありません</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={th}>ID</th>
                  <th style={th}>氏名</th>
                  <th style={th}>メール</th>
                  <th style={th}>大学・学年</th>
                  <th style={th}>登録日時</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={td}>{s.id}</td>
                    <td style={td}>{s.name}</td>
                    <td style={td}>{s.email}</td>
                    <td style={td}>{s.university}{s.year ? ` ${s.year}` : ""}</td>
                    <td style={td}>{new Date(s.createdAt).toLocaleString("ja-JP")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Enterprises */}
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#ffafd3" }}>
          企業問い合わせ（{enterprises.length}件）
        </h2>
        {enterprises.length === 0 ? (
          <p style={{ color: "#6b7280", fontSize: 14 }}>まだ登録がありません</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={th}>ID</th>
                  <th style={th}>会社名</th>
                  <th style={th}>メール</th>
                  <th style={th}>メッセージ</th>
                  <th style={th}>登録日時</th>
                </tr>
              </thead>
              <tbody>
                {enterprises.map((e) => (
                  <tr key={e.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={td}>{e.id}</td>
                    <td style={td}>{e.company}</td>
                    <td style={td}>{e.workEmail}</td>
                    <td style={td}>{e.message || "—"}</td>
                    <td style={td}>{new Date(e.createdAt).toLocaleString("ja-JP")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  color: "#9ca3af",
  fontWeight: 600,
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "10px 12px",
  color: "#e0e3e5",
  verticalAlign: "top",
  maxWidth: 240,
  wordBreak: "break-word",
};
