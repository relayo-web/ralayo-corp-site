// src/components/Pricing.tsx
import SectionHeading from "@/components/ui/SectionHeading";
export default function Pricing() {
    return (
      <section id="pricing" className="bg-white py-20 text-center">
        <SectionHeading>料金プラン</SectionHeading>
        <div className="max-w-4xl mx-auto mt-10 overflow-hidden border border-gray-300 rounded-lg">
          <table className="w-full text-left text-base text-gray-900">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-4 font-bold">プラン</th>
                <th className="px-4 py-4 font-bold">価格</th>
                <th className="px-4 py-4 font-bold">内容</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              <tr className="border-t border-gray-300">
                <td className="px-4 py-5 font-semibold text-indigo-700">ライト</td>
                <td className="px-4 py-5">¥98,000〜</td>
                <td className="px-4 py-5">
                  1ページ構成、スマホ対応、<br />納期：7〜10日
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-5 font-semibold text-indigo-700">スタンダード</td>
                <td className="px-4 py-5">¥148,000〜</td>
                <td className="px-4 py-5">
                  3〜5ページ構成、予約機能付き、<br />納期：10〜14日
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-5 font-semibold text-indigo-700">プレミアム</td>
                <td className="px-4 py-5">¥198,000〜</td>
                <td className="px-4 py-5">
                  完全オーダーメイド、CMS・SEO対応、<br />納期：2〜3週間
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  