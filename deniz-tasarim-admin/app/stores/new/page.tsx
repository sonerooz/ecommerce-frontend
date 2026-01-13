import Link from "next/link";
import StoreForm from "@/components/StoreForm";

export default function NewStorePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/stores" className="text-gray-500 hover:text-gray-900">← Geri</Link>
        <h1 className="text-2xl font-bold text-gray-800">Yeni Mağaza Oluştur</h1>
      </div>

      {/* Formu boş olarak çağırıyoruz */}
      <StoreForm />
    </div>
  );
}