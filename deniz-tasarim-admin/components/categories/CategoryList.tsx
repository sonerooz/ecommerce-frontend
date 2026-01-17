"use client";
import { Category } from "@/types/category";
import React from 'react';

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: number) => void;
}

export default function CategoryList({ categories, onEdit, onDelete }: CategoryListProps) {

  // Recursive Satır Render Fonksiyonu
  // level: Girinti seviyesini belirler (0, 1, 2...)
  const renderRows = (cats: Category[], level = 0) => {
    return cats.map((cat) => (
      <React.Fragment key={cat.id}>
        <tr className="border-b hover:bg-gray-50">
          <td className="p-3">
            {/* Girinti Ayarı: level * 20px kadar soldan boşluk bırak */}
            <div style={{ paddingLeft: `${level * 24}px` }} className="flex items-center">
              {level > 0 && <span className="text-gray-400 mr-2">↳</span>}
              <span className="font-medium">{cat.name}</span>
            </div>
          </td>
          <td className="p-3 text-gray-500">{cat.description}</td>
          <td className="p-3 text-gray-500">{cat.slug}</td>
          <td className="p-3">
            <button 
              onClick={() => onEdit(cat)} 
              className="text-blue-600 hover:underline mr-4 text-sm"
            >
              Düzenle
            </button>
            <button 
              onClick={() => onDelete(cat.id)} 
              className="text-red-600 hover:underline text-sm"
            >
              Sil
            </button>
          </td>
        </tr>
        {/* Eğer alt kategori varsa, fonksiyonu tekrar çağır (Level'i 1 artır) */}
        {cat.subCategories && cat.subCategories.length > 0 && renderRows(cat.subCategories, level + 1)}
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto border rounded-lg shadow">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 uppercase text-gray-600 font-bold">
          <tr>
            <th className="p-3">Kategori Adı</th>
            <th className="p-3">Açıklama</th>
            <th className="p-3">Slug</th>
            <th className="p-3">İşlemler</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {categories.length > 0 ? renderRows(categories) : (
             <tr><td colSpan={3} className="p-4 text-center">Hiç kategori yok.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}