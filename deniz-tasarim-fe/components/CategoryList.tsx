import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const categories = [
    { id: 1, name: "Apple Telefonlar", image: "https://placehold.co/200x200" },
    { id: 2, name: "Çok Satanlar", image: "https://placehold.co/200x200" },
    { id: 3, name: "Hediye Çeklerim", image: "https://placehold.co/200x200" },
    { id: 4, name: "Kurumsal Çözümler", image: "https://placehold.co/200x200" },
    { id: 5, name: "Yeni Gelenler", image: "https://placehold.co/200x200" },
    { id: 6, name: "Fırsat Ürünleri", image: "https://placehold.co/200x200" },
  ];

  return (
    <section className="w-full py-6 bg-white">
      {/* Mobilde kaydırma, Desktop'ta düzgün dizilim */}
      <div className="flex items-start gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2 px-2 md:justify-center">
        {categories.map((cat) => (
          <CategoryItem key={cat.id} name={cat.name} image={cat.image} />
        ))}
      </div>
    </section>
  );
}