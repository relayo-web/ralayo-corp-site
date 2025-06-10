"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ProtectedRoute from "@/components/ProtectedRoute";  // ★ 追加

// 型定義
interface Contact {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  createdAt?: { seconds: number };  // Firestore Timestamp の seconds 部分
}

/* --------------------------------------------------
  管理画面の中身だけをコンポーネント化
-------------------------------------------------- */
function AdminContent() {
  const [list, setList] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setList(snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Contact[]);
      setLoading(false);
    })();
  }, []);

  return (
    <main className="pt-24 pb-12 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">お問い合わせ一覧</h1>

      {loading ? (
        <p className="text-gray-700">読み込み中...</p>
      ) : list.length === 0 ? (
        <p className="text-gray-700">データがありません。</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl">
            <thead className="bg-indigo-600 text-white text-base">
              <tr>
                <th className="px-5 py-3 text-left rounded-tl-xl">日時</th>
                <th className="px-5 py-3 text-left">名前</th>
                <th className="px-5 py-3 text-left">メール</th>
                <th className="px-5 py-3 text-left">ご相談内容</th>
                <th className="px-5 py-3 text-left rounded-tr-xl">詳細</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-800 leading-relaxed">
              {list.map((c, i) => (
                <tr
                  key={c.id}
                  className={`${
                    i % 2 ? "bg-gray-50" : "bg-white"
                  } hover:bg-indigo-50 transition`}
                >
                  <td className="px-5 py-3">
                    {c.createdAt
                      ? new Date(c.createdAt.seconds * 1000).toLocaleString("ja-JP")
                      : "—"}
                  </td>
                  <td className="px-5 py-3">{c.name}</td>
                  <td className="px-5 py-3 break-all">{c.email}</td>
                  <td className="px-5 py-3">{c.service}</td>
                  <td className="px-5 py-3 whitespace-pre-wrap">{c.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

/* --------------------------------------------------
  /admin ページ本体：ProtectedRoute でガード
-------------------------------------------------- */
export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminContent />
    </ProtectedRoute>
  );
}
