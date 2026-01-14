import { Home, LayoutGrid, ShoppingCart, Heart, User } from "lucide-react";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden z-50">
      <div className="flex flex-col items-center text-pink-600">
        <Home size={24} />
        <span className="text-[10px] font-medium">Ana Sayfa</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <LayoutGrid size={24} />
        <span className="text-[10px] font-medium">Kategoriler</span>
      </div>
      <div className="relative flex flex-col items-center text-gray-600">
        <ShoppingCart size={24} />
        <span className="absolute -top-1 right-0 bg-yellow-400 text-[10px] rounded-full px-1.5 font-bold">2</span>
        <span className="text-[10px] font-medium">Sepetim</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <Heart size={24} />
        <span className="text-[10px] font-medium">Listelerim</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <User size={24} />
        <span className="text-[10px] font-medium">Hesabım</span>
      </div>
    </div>
  );
}