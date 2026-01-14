interface CategoryProps {
    name: string;
    image: string;
  }
  
  export default function CategoryItem({ name, image }: CategoryProps) {
    return (
      <div className="flex flex-col items-center gap-2 cursor-pointer group shrink-0">
        {/* Yuvarlak İmaj Alanı */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-100 overflow-hidden group-hover:border-pink-500 transition-all shadow-sm">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
          />
        </div>
        {/* Kategori İsmi */}
        <span className="text-[11px] md:text-sm font-medium text-gray-700 text-center leading-tight max-w-[80px]">
          {name}
        </span>
      </div>
    );
  }