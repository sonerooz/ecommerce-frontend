"use client"; // BU SATIR ÇOK ÖNEMLİ: Burası artık tarayıcıda çalışacak demektir.

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, categories } from "@/lib/data";

export default function ProductShowcase() {
  // Java'daki variable tanımlama gibi: 
  // String activeCategory = "tumu";
  const [activeCategory, setActiveCategory] = useState("tumu");

  // FİLTRELEME MANTIĞI (Java Stream Filter gibi)
  const filteredProducts = activeCategory === "tumu"
    ? products // "tumu" seçiliyse hepsini göster
    : products.filter((product) => 
        // Ürünün kategorileri içinde, seçilen kategori slug'ı var mı?
        product.categories.some((c) => c.slug === activeCategory)
      );

  return (
    <div className="container mx-auto px-4 mt-10">
      
      {/* Kategoriler Butonları */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            // TIKLAMA OLAYI BURADA:
            onClick={() => setActiveCategory(cat.slug)}
            className={`whitespace-nowrap px-6 py-2 rounded-full border transition ${
              activeCategory === cat.slug
              ? 'bg-blue-900 text-white border-blue-900' // Seçiliyse Mavi
              : 'bg-white text-gray-700 border-gray-200 hover:border-blue-900 hover:text-blue-900' // Değilse Beyaz
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Ürün Listesi Başlığı */}
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
           {categories.find(c => c.slug === activeCategory)?.name} 
           <span className="text-sm font-normal text-gray-500 ml-2">
             ({filteredProducts.length} ürün)
           </span>
        </h2>
      </div>

      {/* Filtrelenmiş Ürünleri Listele */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-100 rounded-lg">
           <p className="text-gray-500">Bu kategoride henüz ürün bulunmuyor.</p>
        </div>
      )}
    </div>
  );
}