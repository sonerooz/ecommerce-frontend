// src/app/orders/page.tsx
import { orders } from "@/lib/data";

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sipariş Yönetimi</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Sipariş No</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Müşteri</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Tarih</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Tutar</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Durum</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 text-gray-600">
                    {order.customerName}
                    <div className="text-xs text-gray-400">{order.itemsCount} ürün</div>
                </td>
                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                <td className="px-6 py-4 font-bold text-gray-800">{order.totalAmount} ₺</td>
                <td className="px-6 py-4">
                  {/* Duruma göre renk değiştiren badge */}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {order.status === 'pending' ? 'Bekliyor' : 
                     order.status === 'shipped' ? 'Kargoda' : order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline font-medium text-sm">Detay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}