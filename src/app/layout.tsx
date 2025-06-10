import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relayo | 美容室専門Webパートナー",
  description: "美容室向けに特化したWebサイト制作と予約システム導入をサポート。LINE連携やSNS導線も完備。",
  keywords: ["美容室", "美容院", "Web制作", "予約システム", "LINE連携", "Relayo"],
  openGraph: {
    title: "Relayo | 美容室専門Webパートナー",
    description: "美容室特化のWeb制作・予約導入支援ならRelayo。デジタル化、全部まかせて。",
    url: "https://relayo.com", // ←仮URL、本番取得後に修正
    siteName: "Relayo",
    images: [
      {
        url: "https://relayo.com/ogp.png", // ←publicフォルダにogp画像設置予定
        width: 1200,
        height: 630,
        alt: "Relayo公式Webサイト",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relayo | 美容室専門Webパートナー",
    description: "美容室に特化したWeb制作・予約機能導入を一括支援。スマホ対応・LINE連携付き。",
    images: ["https://relayo.com/ogp.png"], // 同上
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
