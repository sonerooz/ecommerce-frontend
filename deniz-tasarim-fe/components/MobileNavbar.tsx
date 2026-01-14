"use client";
import { Home, LayoutGrid, ShoppingCart, Heart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Ana Sayfa", icon: Home, href: "/" },
    { name: "Kategoriler", icon: LayoutGrid, href: "/categories" },
    { name: "Sepetim", icon: ShoppingCart, href: "/cart", count: 2 },
    { name: "Favoriler", icon: Heart, href: "/favorites" },
    { name: "Hesabım", icon: User, href: "/login" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden z-50">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className={`flex flex-col items-center relative ${pathname === item.href ? 'text-pink-600' : 'text-gray-500'}`}>
          <item.icon size={22} />
          <span className="text-[10px] font-medium mt-1">{item.name}</span>
          {item.count && (
            <span className="absolute -top-1 right-1 bg-yellow-400 text-[9px] font-bold px-1 rounded-full border border-white text-black">
              {item.count}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}