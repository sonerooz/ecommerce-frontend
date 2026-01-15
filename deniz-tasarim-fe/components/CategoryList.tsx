import CategoryItem from "./CategoryItem";

// Veri tipi
type Category = {
  id: number;
  name: string;
  slug: string;
  imageUrl: string | null;
};

// Veri çekme fonksiyonu
async function getCategories(): Promise<Category[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return [];

  try {
    // Anasayfa slider'ı için yine düz liste çekiyoruz
    const res = await fetch(`${apiUrl}/categories?withTree=false`, {
      cache: 'no-store',
    });
    
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function CategoryList() {
  const categories = await getCategories();

  // Kategori yoksa bu bloğu hiç gösterme (Boşluk olmasın)
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h2 className="text-lg font-bold text-gray-800">Kategoriler</h2>
      </div>

      {/* Yatay Kaydırmalı Alan (Slider) */}
      <div className="flex items-start gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-4 px-4 md:justify-start">
        {categories.map((cat) => (
          <CategoryItem 
            key={cat.id} 
            name={cat.name} 
            image={cat.imageUrl} 
            slug={cat.slug} 
          />
        ))}
      </div>
    </section>
  );
}