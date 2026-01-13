import Link from "next/link";
import ProductForm from "@/components/ProductForm";

export default function NewProductPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/products" className="text-gray-500 hover:text-gray-900">← Geri</Link>
        <h1 className="text-2xl font-bold text-gray-800">Yeni Ürün Ekle</h1>
      </div>

      <ProductForm />
    </div>
  );
}