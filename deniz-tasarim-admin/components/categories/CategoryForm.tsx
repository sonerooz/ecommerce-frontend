"use client";
import React, { useState, useEffect } from "react";
import { Category, CreateCategoryRequest } from "@/types/category";

interface CategoryFormProps {
  categories: Category[]; // Dropdown'da göstermek için tüm liste
  initialData?: Category | null; // Düzenleme modundaysak dolu gelir
  onSubmit: (data: CreateCategoryRequest) => void;
  onCancel: () => void;
}

export default function CategoryForm({ categories, initialData, onSubmit, onCancel }: CategoryFormProps) {
  // Form State'i
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [parentId, setParentId] = useState<number | null>(initialData?.parentId || null);

  // Recursive Dropdown Render Fonksiyonu
  // Bu fonksiyon kendini çağırarak alt kategorileri -- işaretiyle girintili yazar.
  const renderCategoryOptions = (cats: Category[], prefix = "") => {
    let options: React.ReactNode[] = [];
    cats.forEach((cat) => {
      // Düzenlenen kategorinin kendisini parent olarak seçmesini engelle (Döngüyü önle)
      if (initialData && initialData.id === cat.id) return;

      options.push(
        <option key={cat.id} value={cat.id}>
          {prefix} {cat.name}
        </option>
      );
      if (cat.subCategories && cat.subCategories.length > 0) {
        options = [...options, ...renderCategoryOptions(cat.subCategories, prefix + "-- ")];
      }
    });
    return options;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      parentId,
      // imageUrl vs. eklenebilir
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md border mb-6">
      <h2 className="text-lg font-bold mb-4">{initialData ? "Kategoriyi Düzenle" : "Yeni Kategori Ekle"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* İsim */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Kategori Adı</label>
          <input
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Açıklama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Açıklama</label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Parent Seçimi (Recursive) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Üst Kategori</label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={parentId || ""}
            onChange={(e) => setParentId(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">-- Ana Kategori (Yok) --</option>
            {renderCategoryOptions(categories)}
          </select>
        </div>

        {/* Butonlar */}
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            İptal
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}