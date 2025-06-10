// components/Hero.tsx
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px]">
      {/* 背景画像 */}
      <Image
        src="/hero.jpg"
        alt="落ち着いた雰囲気の美容室内観"
        fill
        priority
        className="object-cover"
        sizes="(min-width:1024px) 1280px, 100vw"
      />

      {/* 半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black/60" />

      {/* キャッチ・テキスト・ボタン */}
      <Container className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
          デジタル化、全部まかせて。
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Webサイト制作・予約システム・LINE連携をワンストップでご提供します。
        </p>

        {/* ボタン風リンク */}
        <a
          href="#contact"
          className="
            inline-block
            mt-8
            px-8 py-4
            bg-indigo-600 hover:bg-indigo-700
            focus:outline-none focus:ring-4 focus:ring-indigo-500/50
            rounded-full
            text-white text-lg font-semibold
            shadow-lg hover:shadow-xl
            transition-colors duration-200
          "
        >
          無料相談はこちら
        </a>
      </Container>
    </section>
  );
}
