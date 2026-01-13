import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Header'ı import ettik

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniz Tasarım Aksesuar",
  description: "Özel tasarım takı ve aksesuarlar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header /> {/* Sayfanın tepesine koyduk */}
        {children}
      </body>
    </html>
  );
}