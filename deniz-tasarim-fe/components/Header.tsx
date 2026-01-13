import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900 tracking-tighter">
          Deniz<span className="text-blue-600">Tasarım</span>
        </Link>

        {/* Arama Çubuğu (Masaüstü) */}
        <div className="hidden md:flex flex-1 mx-10 max-w-lg">
          <input 
            type="text" 
            placeholder="Ürün, kategori veya marka ara..." 
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700">
            Ara
          </button>
        </div>

        {/* Sağ Menü */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/login" className="flex items-center gap-1 hover:text-blue-600">
            <span>👤 Giriş Yap</span>
          </Link>
          <Link href="/cart" className="flex items-center gap-1 hover:text-blue-600">
            <span>🛒 Sepetim</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">0</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}