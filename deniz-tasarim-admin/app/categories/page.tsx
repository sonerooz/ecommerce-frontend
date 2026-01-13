// src/app/categories/page.tsx
import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Kategoriler</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          + Yeni Kategori
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Kategori Adı</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Slug</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {categories.map((cat) => (
              <tr key={cat.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-600">#{cat.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{cat.name}</td>
                <td className="px-6 py-4 text-blue-600 bg-blue-50 w-min whitespace-nowrap rounded-md px-2 py-1 text-xs">
                  /{cat.slug}
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline font-medium">Düzenle</button>
                  <button className="text-red-600 hover:underline font-medium ml-4">Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}