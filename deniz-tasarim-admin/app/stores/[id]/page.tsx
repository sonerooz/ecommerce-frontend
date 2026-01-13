import Link from "next/link";
import StoreForm from "@/components/StoreForm";
import { stores } from "@/lib/data";

// Next.js 15+ için params bir Promise'dir
export default async function EditStorePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  // 1. Önce params'ın çözülmesini bekliyoruz (await)
  const { id } = await params;

  // 2. String olan ID'yi sayıya çevir
  const storeId = parseInt(id);

  // 3. Mock verimizin içinden bu ID'ye sahip mağazayı bul
  const store = stores.find((s) => s.id === storeId);

  // 4. Debug için: Konsola basıp ne geldiğini görebilirsin (VS Code terminalinde yazar)
  console.log("Gelen ID:", id, "Bulunan Store:", store?.name);

  // 5. Eğer mağaza yoksa hata göster
  if (!store) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Mağaza Bulunamadı!</h2>
        <p className="text-gray-500 mt-2">Aranan ID: {id}</p>
        <Link href="/stores" className="text-blue-600 underline mt-4 block">Listeye Dön</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/stores" className="text-gray-500 hover:text-gray-900">← Geri</Link>
        <h1 className="text-2xl font-bold text-gray-800">Mağazayı Düzenle: {store.name}</h1>
      </div>

      {/* Formu bulunan mağaza verisiyle çağırıyoruz */}
      <StoreForm initialData={store} />
    </div>
  );
}