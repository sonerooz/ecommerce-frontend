"use client";

import { useState } from "react";
import { categories as initialCategories } from "@/lib/data"; // Mevcut datayı çekiyoruz

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [newName, setNewName] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;

    const newCategory = {
      id: Date.now(), // Rastgele ID
      name: newName,
      slug: newName.toLowerCase().replace(/ /g, "-"),
      description: "Yeni eklenen kategori"
    };

    // @ts-ignore (Tip hatası verirse geçici olarak yoksayması için)
    setCategories([...categories, newCategory]);
    setNewName("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kategori Yönetimi</h1>
        <a href="/dashboard" className="text-blue-600 hover:underline">← Geri Dön</a>
      </div>

      {/* Ekleme Formu */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold">Yeni Kategori Ekle</h2>
        <form onSubmit={handleAdd} className="flex gap-4">
          <input
            type="text"
            className="flex-1 rounded border p-2"
            placeholder="Kategori Adı"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button type="submit" className="rounded bg-blue-600 px-6 py-2 text-white">Ekle</button>
        </form>
      </div>

      {/* Liste */}
      <div className="rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İsim</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td className="px-6 py-4 text-sm text-gray-500">{cat.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{cat.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{cat.slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}