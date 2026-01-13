import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Tekrar Hoşgeldiniz</h1>
          <p className="text-gray-500 text-sm mt-2">Deniz Tasarım hesabınıza giriş yapın</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta Adresi</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="ornek@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end">
            <Link href="#" className="text-sm text-blue-600 hover:underline">Şifremi Unuttum?</Link>
          </div>

          <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition active:scale-95">
            Giriş Yap
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Hesabınız yok mu?{" "}
          <Link href="/register" className="text-blue-600 font-semibold hover:underline">
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
}