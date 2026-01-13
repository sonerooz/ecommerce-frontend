"use client"; // usePathname kullanacağımız için client component olmalı

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname(); // Şu an hangi sayfadayız?

  // Aktif linki anlamak için yardımcı fonksiyon
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-emerald-900 text-white flex flex-col fixed h-full z-10">
      {/* Başlık */}
      <div className="p-6 text-xl font-bold border-b border-emerald-800">
        Satıcı Paneli
      </div>
      
      {/* Mağaza Bilgisi */}
      <div className="p-4 bg-emerald-800/50 mb-2">
        <p className="text-xs text-emerald-200">Mağaza:</p>
        <p className="font-semibold truncate">Deniz Tasarım Aksesuar</p>
      </div>

      {/* Menü Linkleri */}
      <nav className="flex-1 p-4 space-y-2">
        <Link 
          href="/" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/') ? 'bg-emerald-700 text-white' : 'hover:bg-emerald-800 text-emerald-100'
          }`}
        >
          📈 Özet
        </Link>

        <Link 
          href="/products" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/products') ? 'bg-emerald-700 text-white' : 'hover:bg-emerald-800 text-emerald-100'
          }`}
        >
          📦 Ürünlerim
        </Link>

        <Link 
          href="/orders" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/orders') ? 'bg-emerald-700 text-white' : 'hover:bg-emerald-800 text-emerald-100'
          }`}
        >
          🚚 Siparişler 
          {/* Bildirim rozeti */}
          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">1</span>
        </Link>
      </nav>

      {/* Alt Kısım */}
      <div className="p-4 border-t border-emerald-800">
         <button className="text-sm text-emerald-200 hover:text-white w-full text-left transition">
            ← Çıkış Yap
         </button>
      </div>
    </aside>
  );
}