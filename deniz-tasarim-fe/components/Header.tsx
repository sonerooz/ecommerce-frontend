"use client";
import { Search, Bell, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Üst Satır: Logo ve İkonlar */}
        <div className="flex items-center justify-between gap-4 mb-3 md:mb-0">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-pink-600 tracking-tighter shrink-0">
            DENİZ
          </Link>

          {/* Desktop Arama (Büyük ekranlarda logodan sonra gelir) */}
          <div className="relative flex-1 hidden md:block max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Ürün, kategori veya marka ara..." 
              className="w-full bg-gray-100 border-none rounded-full py-2 pl-12 pr-4 text-sm focus:ring-2 focus:ring-pink-200 outline-none"
            />
          </div>

          {/* Sağ Menü: Giriş ve Sepet */}
          <div className="flex items-center gap-1 md:gap-4">
            <Link href="/login" className="p-2 hover:bg-gray-100 rounded-full text-gray-700">
              <User size={22} />
            </Link>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-full group">
              <ShoppingBag size={24} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] text-black font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">
                2
              </span>
            </button>
            
            {/* Desktop'ta Bildirim İkonu */}
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full relative text-gray-700">
              <Bell size={22} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>

        {/* Alt Satır: Mobil Arama Çubuğu (Sadece Mobilde Görünür) */}
        <div className="relative md:hidden">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Ürün, kategori, marka ara" 
            className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-pink-200 outline-none"
          />
        </div>
      </div>
    </div>
  );
}