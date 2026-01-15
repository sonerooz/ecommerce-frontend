import React from 'react';
import Link from 'next/link';
import { ImageOff } from 'lucide-react';

interface CategoryProps {
  name: string;
  image: string | null;
  slug: string; // <-- Yeni ekledik, link için şart
}

export default function CategoryItem({ name, image, slug }: CategoryProps) {
  return (
    <Link 
      href={`/category/${slug}`} // Tıklayınca dinamik sayfaya gitsin
      className="flex flex-col items-center gap-2 cursor-pointer group shrink-0 w-20 md:w-24"
    >
      {/* Yuvarlak Çerçeve */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-100 overflow-hidden group-hover:border-pink-500 transition-all shadow-sm flex items-center justify-center bg-gray-50">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
          />
        ) : (
          <ImageOff className="text-gray-300" size={24} />
        )}
      </div>
      
      {/* İsim */}
      <span className="text-[11px] md:text-sm font-medium text-gray-700 text-center leading-tight line-clamp-2 h-8 flex items-center">
        {name}
      </span>
    </Link>
  );
}