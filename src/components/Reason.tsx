// src/components/Reason.tsx
import SectionHeading from "@/components/ui/SectionHeading";
export default function Reason() {
    return (
      <section id="reason" className="bg-gray-50 py-20 text-center">
        <SectionHeading>Relayoが選ばれる理由</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-bold text-indigo-600 mb-2 text-lg">圧倒的な低コスト</h3>
            <p className="text-sm text-gray-700">
              AIと自動化を活用し、品質を落とさずに従来の半額以下を実現。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-bold text-indigo-600 mb-2 text-lg">すべて丸投げOK</h3>
            <p className="text-sm text-gray-700">
              デザイン・文章・ドメイン設定まで、Webが初めての方でも安心。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-bold text-indigo-600 mb-2 text-lg">予約・SNSとの連携</h3>
            <p className="text-sm text-gray-700">
              LINE予約・Instagram連携など、集客まで見据えた設計に対応。
            </p>
          </div>
        </div>
      </section>
    );
  }
  