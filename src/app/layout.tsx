import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "BERGIA | キャリアドラフト",
  description: "君の挑戦に、スポットライトを。学生と企業をつなぐキャリアドラフトプラットフォーム",
  keywords: ["就活", "インターン", "キャリア", "新卒", "採用"],
  openGraph: {
    title: "BERGIA | キャリアドラフト",
    description: "君の挑戦に、スポットライトを。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
