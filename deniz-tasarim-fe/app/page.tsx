import ProductShowcase from "@/components/ProductShowcase"; // Yeni bileşeni çağırdık

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Banner Alanı (Sabit kalabilir) */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Yeni Sezon İnciler</h1>
        <p className="text-blue-100 text-lg mb-8">Zarafetinizi tamamlayacak eşsiz parçalar.</p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Koleksiyonu Keşfet
        </button>
      </section>

      {/* Bütün filtreleme ve listeleme işini bu arkadaş yapacak */}
      <ProductShowcase />
      
    </main>
  );
}