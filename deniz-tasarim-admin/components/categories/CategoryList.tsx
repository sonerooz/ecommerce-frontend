"use client";
import { Category } from "@/types/category";
import React from 'react';

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: number) => void;
  editingId?: number | null; 
  // ✨ YENİ PROP
  isRefreshing?: boolean; 
}

export default function CategoryList({ categories, onEdit, onDelete, editingId, isRefreshing }: CategoryListProps) {
  const renderRows = (cats: Category[], level = 0) => {
    return cats.map((cat) => {
      const isEditing = editingId === cat.id;
      return (
        <React.Fragment key={cat.id}>
          <tr className={`border-b transition-colors duration-200 ${isEditing ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"}`}>
            <td className="p-3">
              <div style={{ paddingLeft: `${level * 24}px` }} className="flex items-center">
                {level > 0 && <span className="text-gray-400 mr-2">↳</span>}
                <span className={`font-medium ${isEditing ? "text-blue-700" : ""}`}>{cat.name}</span>
                {isEditing && <span className="ml-2 text-[10px] uppercase font-bold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Düzenleniyor</span>}
              </div>
            </td>
            <td className="p-3 text-gray-500">{cat.description}</td>
            <td className="p-3 text-gray-500">{cat.slug}</td>
            <td className="p-3 text-right">
              <button onClick={() => onEdit(cat)} disabled={isEditing} className={`mr-4 text-sm ${isEditing ? "text-gray-400 cursor-default" : "text-blue-600 hover:underline"}`}>{isEditing ? "Seçili" : "Düzenle"}</button>
              <button onClick={() => onDelete(cat.id)} className="text-red-600 hover:underline text-sm">Sil</button>
            </td>
          </tr>
          {cat.subCategories && cat.subCategories.length > 0 && renderRows(cat.subCategories, level + 1)}
        </React.Fragment>
      );
    });
  };

  return (
    // ✨ GÖRSEL EFEKT BURADA: 
    // isRefreshing true ise opaklık 50'ye düşer, değilse 100 olur. Geçiş animasyonludur.
    <div className={`overflow-x-auto border rounded-lg shadow mt-4 transition-opacity duration-300 ${isRefreshing ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 uppercase text-gray-600 font-bold">
          <tr>
            <th className="p-3">Kategori Adı</th>
            <th className="p-3">Açıklama</th>
            <th className="p-3">Slug</th>
            <th className="p-3 text-right">İşlemler</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {categories.length > 0 ? renderRows(categories) : <tr><td colSpan={4} className="p-4 text-center">Hiç kategori yok.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}