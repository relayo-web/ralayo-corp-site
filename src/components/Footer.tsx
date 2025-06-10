// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm">&copy; 2025 Relayo. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* LINE */}
            <a
              href="https://lin.ee/ckYi7PB"
              className="hover:text-indigo-400 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINEで相談"
            >
              LINE
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="hover:text-indigo-400 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagramリンク"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs mt-2 text-gray-400">
            LINEやInstagramからもお気軽にご相談ください。
          </p>
        </div>
      </footer>
    );
  }
  