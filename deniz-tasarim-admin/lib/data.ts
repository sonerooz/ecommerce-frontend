import { Store, Category } from "@/types"; // Category'i import etmeyi unutma

export const stores: Store[] = [
  {
    id: 1,
    name: "Deniz Tasarım Aksesuar",
    slug: "deniz-tasarim-aksesuar",
    email: "info@deniztasarim.com",
    taxNumber: "1234567890",
    logoUrl: "https://cdn.deniztasarim.com/logo-main.png",
    bannerUrl: "https://cdn.deniztasarim.com/store-banner.jpg"
  }
];

export const categories: Category[] = [
  { id: 1, name: "Kadın Giyim", slug: "kadin-giyim", description: "En şık kadın giyim ürünleri" },
  { id: 2, name: "Erkek Giyim", slug: "erkek-giyim", description: "Tarz sahibi erkekler için" },
  { id: 3, name: "Elektronik", slug: "elektronik", description: "Son teknoloji ürünler" },
  { id: 4, name: "Takı & Mücevher", slug: "taki-mucevher", description: "Özel tasarım takılar" },
];