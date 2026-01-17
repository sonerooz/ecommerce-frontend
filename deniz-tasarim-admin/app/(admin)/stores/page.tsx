import Link from "next/link";
import { stores } from "@/lib/data";

export default function StoresPage() {
  return (
    <div>
      {/* Sayfa Başlığı ve Ekle Butonu */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mağazalar</h1>
        <Link 
          href="/stores/new" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Yeni Mağaza Ekle
        </Link>
      </div>

      {/* Mağaza Tablosu */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Mağaza Adı</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Email</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Vergi No</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {stores.map((store) => (
              <tr key={store.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-600">#{store.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{store.name}</td>
                <td className="px-6 py-4 text-gray-600">{store.email}</td>
                <td className="px-6 py-4 text-gray-600">{store.taxNumber}</td>
                <td className="px-6 py-4">
                  <Link 
                    href={`/stores/${store.id}`} 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Düzenle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}