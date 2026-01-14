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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        {/* Header her zaman içeride kalmalı */}
        <div className="max-w-7xl mx-auto px-4">
          <Header />
        </div>

        {/* Banner alanı tam genişlik (layout dışında veya özel class ile) */}
        <main>
          {children} 
        </main>

        {/* Footer tam genişlik olacaksa children içinde veya burada bağımsız durmalı */}
        <MobileNavbar />
      </body>
    </html>
  );
}