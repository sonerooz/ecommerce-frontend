import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 bg-white p-4 flex items-center gap-3 z-40 md:shadow-sm">
      <div className="w-10 h-10 bg-pink-500 rounded-full flex-shrink-0"></div> {/* Logo Alanı */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Ürün, kategori, marka ara" 
          className="w-full bg-gray-100 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none border border-transparent focus:border-pink-300"
        />
      </div>
      <button className="relative p-2 bg-gray-100 rounded-full">
        <Bell size={22} className="text-gray-700" />
        <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
    </div>
  );
}