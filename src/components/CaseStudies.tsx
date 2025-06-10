"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const caseStudies = [
  {
    salon: "Salon Lumière",
    before: "/case/lumiere-before.jpg",
    after: "/case/lumiere-after.jpg",
    result: "オンライン予約率 30% → 85% ／ 無断キャンセル 40%削減",
  },
  {
    salon: "Hair Studio Ripple",
    before: "/case/ripple-before.jpg",
    after: "/case/ripple-after.jpg",
    result: "Google 口コミ★4.1 → ★4.8／月間新規客 +52%",
  },
  {
    salon: "Blossom by K",
    before: "/case/blossom-before.jpg",
    after: "/case/blossom-after.jpg",
    result: "LINE 友だち登録 +1,200件 ／ リピート率 +28%",
  },
] as const;

export default function CaseStudies() {
  return (
    <section>
      <SectionHeading>導入事例</SectionHeading>

      <div className="space-y-16">
        {caseStudies.map((cs) => (
          <CaseCard key={cs.salon} {...cs} />
        ))}
      </div>
    </section>
  );
}

function CaseCard({ salon, before, after, result }: { salon: string; before: string; after: string; result: string }) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    mode: "snap",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-center">{salon}</h3>

      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
        <div className="keen-slider__slide flex-shrink-0 w-full">
          <Image src={before} alt={`${salon} Before`} width={960} height={720} className="object-cover" />
        </div>
        <div className="keen-slider__slide flex-shrink-0 w-full">
          <Image src={after} alt={`${salon} After`} width={960} height={720} className="object-cover" />
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-sm text-center">{result}</p>
    </div>
  );
}
