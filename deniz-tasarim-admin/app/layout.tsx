import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ✨ 1. ADIM: Kütüphaneyi import ediyoruz
import { Toaster } from "react-hot-toast"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniz Tasarım - Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-100`}>
        {/* Sayfa içeriği */}
        {children}
        
        {/* ✨ 2. ADIM: Bildirimlerin çıkacağı yeri (Hoparlörü) buraya koyuyoruz */}
        <Toaster 
          position="top-right" 
          reverseOrder={false}
        />
      </body>
    </html>
  );
}