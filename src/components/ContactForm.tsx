"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactForm() {
  const [form, setForm] = useState({
    service: "",
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: Timestamp.now(),
      });

      alert("送信が完了しました。ありがとうございます！");
      setForm({ service: "", name: "", email: "", message: "" });
    } catch (error) {
      alert("送信に失敗しました。もう一度お試しください。");
      console.error("Firestore送信エラー:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 text-center">
      <SectionHeading>お問合せ</SectionHeading>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6 text-left">
        {/* ご相談内容 */}
        <div>
          <label className="block text-sm font-medium text-gray-900">ご相談内容</label>
          <select
            name="service"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="Webサイト制作">Webサイト制作</option>
            <option value="予約システム導入">予約システム導入</option>
            <option value="料金について">料金について</option>
            <option value="その他">その他</option>
          </select>
        </div>

        {/* お名前 */}
        <div>
          <label className="block text-sm font-medium text-gray-900">お名前</label>
          <input
            type="text"
            name="name"
            required
            placeholder="例）山田 太郎"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label className="block text-sm font-medium text-gray-900">メールアドレス</label>
          <input
            type="email"
            name="email"
            required
            placeholder="例）example@example.com"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* ご相談内容（任意） */}
        <div>
          <label className="block text-sm font-medium text-gray-900">ご相談内容（任意）</label>
          <textarea
            name="message"
            rows={4}
            placeholder="例）予約機能付きのホームページを作りたいです。LINE連携も希望します。"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* 送信ボタン */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "送信中..." : "送信する"}
          </button>
        </div>

        {/* LINEボタン */}
        <div className="text-center mt-6">
          <p className="text-gray-800 mb-2">LINEでのお問い合わせも可能です</p>
          <a href="https://lin.ee/ckYi7PB" target="_blank" rel="noopener noreferrer">
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height="36"
              className="inline-block"
            />
          </a>
        </div>
      </form>
    </section>
  );
}
