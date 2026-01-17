"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Backend'e istek at
      const data = await authService.login({ email, password });

      // 2. Token'ı kaydet (Browser hafızası)
      localStorage.setItem("token", data.token);

      // 3. Başarılıysa yönlendir
      // (Kategoriler sayfasına yönlendiriyorum çünkü dashboard boş olabilir)
      router.push("/categories"); 

    } catch (err: any) {
      console.error("Login hatası:", err);
      // Hata mesajını yakala
      const msg = err.response?.data?.message || "Giriş başarısız. Bilgileri kontrol edin.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">Deniz Tasarım Admin</h1>
        <p className="mb-6 text-center text-gray-500 text-sm">Yönetim paneline erişmek için giriş yapın</p>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Alanı */}
          <div>
            <label className="block text-sm font-medium text-gray-700">E-Posta</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@deniztasarim.com"
            />
          </div>

          {/* Şifre Alanı */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Şifre</label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-md px-4 py-2 text-white transition 
              ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}