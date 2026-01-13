import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Sidebar bileşeninin yolunun doğru olduğundan emin ol
import Sidebar from "@/components/Sidebar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satıcı Paneli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* Debug: Ekranda kırmızı bir çerçeve görmelisin */}
        <div className="flex min-h-screen border-4 border-red-500">
          
          {/* 1. Sidebar Bileşeni: Burada çağırıyoruz */}
          <Sidebar />

          {/* 2. İçerik Alanı: Sidebar'ın altında kalmasın diye soldan boşluk (ml-64) */}
          <main className="flex-1 ml-64 p-8 bg-gray-50">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}