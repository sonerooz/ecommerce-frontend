"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    { id: 1, name: "Apple Telefonlar", count: 120, image: "https://placehold.co/400x400" },
    { id: 2, name: "Takı & Mücevher", count: 85, image: "https://placehold.co/400x400" },
    { id: 3, name: "Ev & Yaşam", count: 240, image: "https://placehold.co/400x400" },
    { id: 4, name: "Elektronik", count: 310, image: "https://placehold.co/400x400" },
    { id: 5, name: "Kişiye Özel Tasarım", count: 45, image: "https://placehold.co/400x400" },
    { id: 6, name: "Saat & Aksesuar", count: 110, image: "https://placehold.co/400x400" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Tüm Kategoriler</h1>
      
      {/* 2 Kolonlu Kategori Izgarası */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            href={`/categories/${cat.id}`}
            className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-pink-300 transition-all group"
          >
            {/* Kategori Görseli (Yuvarlak) */}
            <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 shrink-0">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>

            {/* Kategori Bilgisi */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500">{cat.count} Ürün</p>
            </div>

            <ChevronRight size={20} className="text-gray-300 group-hover:text-pink-500" />
          </Link>
        ))}
      </div>
    </div>
  );
}