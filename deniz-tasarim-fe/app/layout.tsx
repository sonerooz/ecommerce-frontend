import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Header bileşenini içeri aktar
import MobileNavbar from "@/components/MobileNavbar"; // Navbar bileşenini içeri aktar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniz Tasarım | E-Ticaret",
  description: "En şık tasarımlar burada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* Üst Kısım */}
        <Header /> 
        
        {/* Sayfa İçeriği (Kaydırılabilir alan) */}
        <main className="pb-20 md:pb-0"> 
          {children}
        </main>

        {/* Alt Navigasyon (Sadece mobilde görünür) */}
        <MobileNavbar /> 
      </body>
    </html>
  );
}