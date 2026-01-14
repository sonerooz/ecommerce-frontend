import { Heart } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm relative group">
      <button className="absolute top-2 right-2 z-10 p-1.5 bg-white/80 rounded-full shadow-sm">
        <Heart size={18} className="text-gray-400 group-hover:text-red-500 transition-colors" />
      </button>
      
      <div className="relative aspect-[3/4] w-full bg-gray-50">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-[10px] font-bold py-1 text-center">
          Hızlı Teslimat
        </div>
      </div>

      <div className="p-2 space-y-1">
        <h3 className="font-bold text-sm truncate uppercase tracking-tighter">
          <span className="text-black">{product.brand}</span>
          <span className="text-gray-600 font-normal ml-1">{product.name}</span>
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-orange-500 text-xs">🧡 126 kişi</span>
          <span className="text-gray-400 text-[10px]">favoriledi!</span>
        </div>
        <div className="text-pink-600 font-bold text-base">
          {product.price} TL
        </div>
      </div>
    </div>
  );
}