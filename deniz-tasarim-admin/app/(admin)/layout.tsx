import Link from "next/link";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      
      {/* Sol Sidebar (Buraya Taşındı) */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
        <div className="p-6 text-xl font-bold border-b border-slate-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {/* Dashboard linkini düzelttim, Login'e gitmesin diye */}
          <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-slate-800 transition">
            📊 Dashboard
          </Link>
          <Link href="/stores" className="block px-4 py-2 rounded hover:bg-slate-800 transition">
            🏪 Mağazalar
          </Link>
          <Link href="/categories" className="block px-4 py-2 rounded hover:bg-slate-800 transition">
            🗂 Kategoriler
          </Link>
          <Link href="/users" className="block px-4 py-2 rounded hover:bg-slate-800 transition text-gray-400">
            👥 Kullanıcılar
          </Link>
        </nav>
        {/* Çıkış Yap Butonu Ekleyelim */}
        <div className="p-4 border-t border-slate-700">
           <Link href="/" className="block px-4 py-2 text-red-400 hover:bg-slate-800 rounded">
             Exit
           </Link>
        </div>
      </aside>

      {/* Sağ İçerik Alanı */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
      
    </div>
  );
}