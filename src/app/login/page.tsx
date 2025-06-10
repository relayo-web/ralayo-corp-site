'use client';

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';

export default function LoginPage() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/admin';
    } catch (error) {
      alert('ログインに失敗しました');
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleLogin}
        className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition"
      >
        Googleでログイン
      </button>
    </main>
  );
}
