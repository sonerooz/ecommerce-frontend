import ProductCard from "@/components/ProductCard";
import CategoryList from "@/components/CategoryList";

export default function Home() {
  // Test amaçlı sahte veri
  const products = [
    { id: 1, brand: "FERRO", name: "Gümüş Çelik Erkek Bileklik", price: "735.64", image: "https://placehold.co/400x600" },
    { id: 2, brand: "ARAS", name: "Özel Tasarım Kapı İsimliği", price: "270.00", image: "https://placehold.co/400x600" },
    { id: 3, brand: "DIAMOND", name: "5 Carat Tektaş Yüzük", price: "15.400", image: "https://placehold.co/400x600" },
    { id: 4, brand: "APPLE", name: "iPhone 15 Pro Max", price: "85.000", image: "https://placehold.co/400x600" },
  ];

  return (
    <div className="flex flex-col gap-6 pb-10">
      
      {/* 1. FULL WIDTH BANNER: Ekranın tamamını kaplar */}
      <section className="w-full bg-gradient-to-r from-pink-100 to-indigo-100 h-[350px] md:h-[450px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="z-10 text-center px-4">
          <h1 className="text-3xl md:text-6xl font-black text-gray-800 tracking-tighter uppercase">
            Evinizin Akıllı İhtiyaçları <br/> 
            <span className="text-pink-600 italic">Burada!</span>
          </h1>
          <p className="mt-4 text-gray-600 font-medium md:text-lg">Peşin fiyatına 6 aya varan taksitlerle.</p>
        </div>
      </section>

      {/* 2. CENTERED CATEGORIES: Banner ve Ürünler arası geçiş */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <CategoryList />
      </div>

      {/* 3. CENTERED PRODUCTS: Sağda solda boşluklu ürün listesi */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Sizin İçin Seçtiklerimiz</h2>
            <p className="text-xs md:text-sm text-gray-500">En sevilen ürünlere göz atın</p>
          </div>
          <button className="text-pink-600 text-sm font-bold hover:bg-pink-50 px-4 py-2 rounded-full transition-all">
            Tümünü Gör
          </button>
        </div>

        {/* Mobil 2, Desktop 4 kolon yapı */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </div>
  );
}