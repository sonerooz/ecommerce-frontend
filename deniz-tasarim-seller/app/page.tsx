import { orders, products } from "@/lib/data";

export default function SellerDashboard() {
  // Basit hesaplamalar yapalım
  const pendingOrders = orders.filter(o => o.status === 'pending').length;
  const lowStockProducts = products.filter(p => p.stock < 5).length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-emerald-900 mb-8">Mağaza Özeti</h1>
      
      {/* Karşılama Kartı */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Hoşgeldin, Deniz Tasarım Aksesuar 👋</h2>
        <p className="text-gray-600">
          Bugün ilgilenmen gereken <span className="font-bold text-orange-600">{pendingOrders} yeni sipariş</span> var.
          Bol kazançlar!
        </p>
      </div>

      {/* İstatistik Kartları Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Kart 1: Bekleyen Sipariş */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Bekleyen Sipariş</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">{pendingOrders}</p>
          </div>
          <div className="mt-4 text-xs text-gray-400">Kargolanmayı bekliyor</div>
        </div>

        {/* Kart 2: Stok Uyarısı */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Kritik Stok</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">{lowStockProducts}</p>
          </div>
          <div className="mt-4 text-xs text-gray-400">5 adetten az kalan ürünler</div>
        </div>

        {/* Kart 3: Toplam Ciro (Mock) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Toplam Ciro</h3>
            <p className="text-3xl font-bold text-emerald-600 mt-2">{totalRevenue} ₺</p>
          </div>
          <div className="mt-4 text-xs text-gray-400">Bu ayki kazanç</div>
        </div>

      </div>
    </div>
  );
}