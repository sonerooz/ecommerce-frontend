"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Store } from "@/types";

interface StoreFormProps {
  initialData?: Store; // Bu opsiyoneldir (New modunda gelmez)
}

export default function StoreForm({ initialData }: StoreFormProps) {
  const router = useRouter();
  
  // Eğer initialData varsa onu kullan, yoksa boş string kullan
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    taxNumber: initialData?.taxNumber || "",
    slug: initialData?.slug || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEdit = !!initialData; // initialData varsa edit modundayız
    
    alert(
      (isEdit ? "GÜNCELLENİYOR..." : "OLUŞTURULUYOR...") + 
      "\nVeriler API'ye gidecek:\n" + 
      JSON.stringify(formData, null, 2)
    );
    
    // İşlem bitince listeye geri dön
    router.push("/stores");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mağaza Adı */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mağaza Adı</label>
          <input 
            type="text" 
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* Slug */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input 
            type="text" 
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50"
            value={formData.slug}
            onChange={(e) => setFormData({...formData, slug: e.target.value})}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
          <input 
            type="email" 
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Vergi No */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vergi Numarası</label>
          <input 
            type="text" 
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.taxNumber}
            onChange={(e) => setFormData({...formData, taxNumber: e.target.value})}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
          <Link href="/stores" className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              İptal
          </Link>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
             {initialData ? "Güncelle" : "Kaydet"}
          </button>
      </div>
    </form>
  );
}