// components/ProductCard.tsx
import { Product } from "@/types"; // @ işareti kök dizini temsil eder
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const price = product.variants[0]?.price || 0;
  const image = product.images[0]?.url || "https://placehold.co/400";

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="relative w-full h-64 mb-4">
        <Image 
           src={image} 
           alt={product.name}
           fill
           className="object-cover rounded-md"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">
          {price} ₺
        </span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}