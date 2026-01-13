"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/types";

interface ProductFormProps {
  initialData?: Product; // Güncelleme için opsiyonel veri
}

export default function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    price: initialData?.price || "",
    stock: initialData?.stock || "",
    imageUrl: initialData?.imageUrl || "",
    status: initialData?.status || "active"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEdit = !!initialData;
    
    alert(
      (isEdit ? "GÜNCELLENİYOR..." : "EKLENİYOR...") + 
      "\nVeriler:\n" + 
      JSON.stringify(formData, null, 2)
    );
    
    // İşlem bitince listeye dön
    router.push("/products");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-6">
      
      {/* Ürün Adı */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ürün Adı</label>
        <input 
          type="text" 
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
          placeholder="Örn: Okyanus İncisi Kolye"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Fiyat */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fiyat (₺)</label>
          <input 
            type="number" 
            required
            min="0"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="0.00"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
          />
        </div>

        {/* Stok */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Stok Adedi</label>
          <input 
            type="number" 
            required
            min="0"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="0"
            value={formData.stock}
            onChange={(e) => setFormData({...formData, stock: e.target.value})}
          />
        </div>
      </div>

      {/* Resim URL */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Görsel URL</label>
        <input 
          type="url" 
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
          placeholder="https://..."
          value={formData.imageUrl}
          onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
        />
      </div>

      {/* Durum Seçimi */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Durum</label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
          value={formData.status}
          onChange={(e) => setFormData({...formData, status: e.target.value as any})}
        >
          <option value="active">Satışta (Aktif)</option>
          <option value="passive">Satışa Kapalı (Pasif)</option>
          <option value="review">Onay Bekliyor</option>
        </select>
      </div>

      {/* Butonlar */}
      <div className="flex justify-end gap-3 pt-4 border-t">
          <Link href="/products" className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              İptal
          </Link>
          <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
             {initialData ? "Ürünü Güncelle" : "Ürünü Kaydet"}
          </button>
      </div>
    </form>
  );
}