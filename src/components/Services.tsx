// src/components/Services.tsx
import SectionHeading from "@/components/ui/SectionHeading";
import { Scissors, CalendarCheck2, LineChart } from "lucide-react";

// 3 つの主要サービスを配列で定義してマッピング
const services = [
  {
    icon: Scissors,
    title: "Webサイト制作",
    description:
      "美容室ブランドを引き立てるレスポンシブ Web サイトを、デザインから実装まですべて担当します。",
  },
  {
    icon: CalendarCheck2,
    title: "予約システム導入",
    description:
      "オンライン整理券・24時間予約受付・キャンセル管理まで、来店体験をワンランク向上。",
  },
  {
    icon: LineChart,
    title: "LINE & SNS 連携",
    description:
      "LINE公式アカウントと Instgram を活用し、リピート率を最大化する自動メッセージ配信を実装します。",
  },
] as const;

export default function Services() {
  return (
    // ★ id を追加し、ヘッダーの #services に対応
    <section id="services" className="py-20 bg-white text-center">
      {/* 見出しを共通コンポーネントで統一 */}
      <SectionHeading>サービス内容</SectionHeading>

      {/* カードレイアウト */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8"
          >
            <Icon className="w-12 h-12 text-indigo-600 mb-4" aria-hidden />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
