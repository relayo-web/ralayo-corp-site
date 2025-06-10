// src/components/Header.tsx
import Link from "next/link";              // ★ 追加

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* ★ ここを <Link> でラップ */}
        <Link href="/" aria-label="トップページへ">
          <img
            src="/logo.png"
            alt="Relayoロゴ"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        <nav className="space-x-4 text-sm font-medium">
          <a href="#about"    className="hover:text-indigo-400 transition">Relayoとは</a>
          <a href="#services" className="hover:text-indigo-400 transition">サービス</a>
          <a href="#pricing"  className="hover:text-indigo-400 transition">料金</a>
          <a href="#contact"  className="hover:text-indigo-400 transition">お問い合わせ</a>
        </nav>
      </div>
    </header>
  );
}
