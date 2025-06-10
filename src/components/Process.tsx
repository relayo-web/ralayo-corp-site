// src/components/Process.tsx
import SectionHeading from "@/components/ui/SectionHeading";
export default function Process() {
    return (
      <section id="process" className="bg-gray-100 py-20 text-center">
        <SectionHeading>制作の流れ</SectionHeading>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10 px-4 text-left">
          <div>
            <h3 className="text-indigo-600 font-bold mb-1">STEP 1</h3>
            <p className="text-sm text-gray-800">ご相談・お問い合わせ</p>
          </div>
          <div>
            <h3 className="text-indigo-600 font-bold mb-1">STEP 2</h3>
            <p className="text-sm text-gray-800">ヒアリング・ご提案</p>
          </div>
          <div>
            <h3 className="text-indigo-600 font-bold mb-1">STEP 3</h3>
            <p className="text-sm text-gray-800">制作・調整</p>
          </div>
          <div>
            <h3 className="text-indigo-600 font-bold mb-1">STEP 4</h3>
            <p className="text-sm text-gray-800">公開・運用サポート</p>
          </div>
        </div>
      </section>
    );
  }
  