import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniz Tasarım - Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="flex min-h-screen">
          
          {/* Sol Sidebar */}
          <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
            <div className="p-6 text-xl font-bold border-b border-slate-700">
              Admin Panel
            </div>
            <nav className="flex-1 p-4 space-y-2">
              <Link href="/" className="block px-4 py-2 rounded hover:bg-slate-800 transition">
                📊 Dashboard
              </Link>
              <Link href="/stores" className="block px-4 py-2 rounded hover:bg-slate-800 transition bg-slate-800">
                🏪 Mağazalar
              </Link>
              <Link href="/categories" className="block px-4 py-2 rounded hover:bg-slate-800 transition">
                🗂 Kategoriler
              </Link>
              <Link href="/users" className="block px-4 py-2 rounded hover:bg-slate-800 transition text-gray-400">
                👥 Kullanıcılar
              </Link>
            </nav>
          </aside>

          {/* Sağ İçerik Alanı */}
          <main className="flex-1 ml-64 p-8">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}