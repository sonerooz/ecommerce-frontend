"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Yönetim Paneli</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Kategori Kartı */}
        <Link href="/dashboard/categories" className="block transform rounded-xl bg-white p-6 shadow-lg transition hover:scale-105 hover:shadow-xl">
          <h2 className="mb-2 text-xl font-bold text-blue-600">📂 Kategoriler</h2>
          <p className="text-gray-600">Kategori ekle, düzenle ve listele.</p>
        </Link>

        {/* Mağaza Kartı */}
        <Link href="/dashboard/stores" className="block transform rounded-xl bg-white p-6 shadow-lg transition hover:scale-105 hover:shadow-xl">
          <h2 className="mb-2 text-xl font-bold text-green-600">🏪 Mağazalar</h2>
          <p className="text-gray-600">Mağaza başvurularını gör ve yeni mağaza oluştur.</p>
        </Link>
      </div>
    </div>
  );
}