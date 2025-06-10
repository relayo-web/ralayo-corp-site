// src/components/About.tsx
import SectionHeading from "@/components/ui/SectionHeading";
export default function About() {
  return (
    <section
      id="about"
      className="bg-cover bg-center py-20 text-white text-center"
      style={{ backgroundImage: "url('/about-bg.jpg')" }}
    >
      <div className="bg-black/50 p-10 rounded-xl max-w-3xl mx-auto">
      
      <SectionHeading>Relayoについて</SectionHeading>

        <div className="text-lg leading-relaxed px-6">
          <p className="mb-6">
            <strong className="text-indigo-300">Relayo</strong>は、中小企業・個人事業主のために、
            <strong>Webサイト制作、予約システム構築、LINE連携</strong>などを一括支援するDXパートナーです。
          </p>
          <p>
            「どこに頼めばいいか分からない」「なるべく安く、でもしっかりとしたWebが欲しい」
            ―そんな声に応えるため、AIと最新技術を活用した高コスパなサービスをご提供します。
          </p>
        </div>

        {/* チーム紹介 */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-white">私たちのチーム</h3>
          <img
            src="/team.jpg"
            alt="Relayoチーム"
            className="rounded-xl shadow-lg mx-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
