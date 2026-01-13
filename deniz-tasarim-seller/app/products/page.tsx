// src/app/products/page.tsx
import { products } from "@/lib/data";
import Link from "next/link";

export default function SellerProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Ürünlerim</h1>
        <Link 
        href="/products/new" 
        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
        >
        + Yeni Ürün Ekle
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
               <h3 className="font-semibold text-gray-800">{product.name}</h3>
               <span className={`text-xs px-2 py-1 rounded ${
                   product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
               }`}>
                   Stok: {product.stock}
               </span>
            </div>
            
            <p className="text-2xl font-bold text-emerald-600 mb-4">{product.price} ₺</p>
            
            <div className="flex gap-2 text-sm border-t pt-3">
                <button className="flex-1 text-gray-600 hover:text-emerald-600 font-medium">Düzenle</button>
                <button className="flex-1 text-gray-600 hover:text-red-600 font-medium border-l pl-2">Pasife Al</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}