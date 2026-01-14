"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isLogin ? "Giriş Yap" : "Üye Ol"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Deniz Tasarım dünyasına {isLogin ? "tekrar hoş geldin" : "katıl"}
          </p>
        </div>
        
        <form className="mt-8 space-y-4">
          {!isLogin && (
            <input type="text" placeholder="Ad Soyad" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none" />
          )}
          <input type="email" placeholder="E-posta Adresi" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none" />
          <input type="password" placeholder="Şifre" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none" />
          
          <button className="w-full bg-pink-600 text-white p-3 rounded-lg font-bold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200">
            {isLogin ? "Oturum Aç" : "Kayıt Ol"}
          </button>
        </form>

        <div className="text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-pink-600 font-semibold hover:underline"
          >
            {isLogin ? "Hesabın yok mu? Hemen üye ol" : "Zaten üye misin? Giriş yap"}
          </button>
        </div>
      </div>
    </div>
  );
}