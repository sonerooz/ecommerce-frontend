import React from 'react';
import Link from 'next/link';
import { ChevronRight, ImageOff, Tag } from 'lucide-react';

// 1. Backend'den gelecek veri tipi
type Category = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  parentId: number | null;
};

// 2. Veri Çekme Fonksiyonu
async function getCategories(): Promise<Category[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!apiUrl) return [];

  try {
    // "withTree=false" diyoruz çünkü grid listeleme için düz liste lazım
    const res = await fetch(`${apiUrl}/categories?withTree=false`, {
      cache: 'no-store', 
    });

    if (!res.ok) return [];
    
    return res.json();
  } catch (error) {
    console.error("Fetch Hatası:", error);
    return [];
  }
}

export default async function CategoriesPage() {
  // 3. Veriyi Bekle
  const categories = await getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pb-24">
      <div className="flex items-end justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tüm Kategoriler</h1>
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
            {categories.length} Kategori
        </span>
      </div>
      
      {/* Kategori Yoksa Uyarı Göster */}
      {categories.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-500">Henüz kategori bulunmuyor.</p>
          </div>
      )}

      {/* 4. SENİN ESKİ TASARIMIN (Grid Yapısı) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            // Linki backend'den gelen "slug" ile oluşturuyoruz (SEO dostu)
            href={`/category/${cat.slug}`}
            className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-pink-300 transition-all group"
          >
            {/* Kategori Görseli (Yuvarlak) */}
            <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 shrink-0 bg-gray-50 flex items-center justify-center">
              {cat.imageUrl ? (
                <img 
                    src={cat.imageUrl} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                />
              ) : (
                // Resim yoksa ikon gösteriyoruz (Tasarım bozulmasın diye)
                <ImageOff className="text-gray-300" size={24} />
              )}
            </div>

            {/* Kategori Bilgisi */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors truncate">
                {cat.name}
              </h3>
              
              {/* "120 Ürün" verisi henüz backend'de yok. 
                  O yüzden Description varsa onu, yoksa genel bir yazı yazıyoruz */}
              <p className="text-xs text-gray-500 truncate flex items-center gap-1">
                 {cat.description || "Koleksiyonu İncele"}
              </p>
            </div>

            <ChevronRight size={20} className="text-gray-300 group-hover:text-pink-500 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}