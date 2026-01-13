// lib/data.ts
import { Product } from "@/types";

// Buradaki "export" kelimesi Java'daki "public" gibidir.
// Bunu yazmazsan diğer dosyalar bu veriyi göremez.
export const products: Product[] = [
  {
    id: 1,
    name: "Okyanus İncisi Deniz Kabuğu Seti",
    description: "Doğal inciler ve özel tasarım altın kaplama deniz kabuğu figürü.",
    storeId: 1,
    categories: [
      { id: 2, name: "Kolye", slug: "kolye" },
      { id: 3, name: "Setler", slug: "setler" }
    ],
    variants: [
      {
        id: 1,
        price: 1250.00,
        stockQuantity: 10,
        sku: "DNZ-KABUK-GLD-45",
        attributes: {
          renk: "Altın",
          materyal: "925 Ayar Gümüş + Altın Kaplama",
          zincir_uzunlugu: "45cm"
        }
      },
      {
        id: 2,
        price: 1100.00,
        stockQuantity: 5,
        sku: "DNZ-KABUK-SLV-50",
        attributes: {
          renk: "Gümüş",
          materyal: "925 Ayar Gümüş",
          zincir_uzunlugu: "50cm"
        }
      }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=600&auto=format&fit=crop", displayOrder: 1 },
      { id: 2, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop", displayOrder: 2 }
    ]
  },
  {
    id: 2,
    name: "Zarif Baget Taşlı Gümüş Kolye",
    description: "Günlük kullanım için ideal, parıltılı baget taşlı tasarım.",
    storeId: 1,
    categories: [
      { id: 1, name: "Takı", slug: "taki" },
      { id: 2, name: "Kolye", slug: "kolye" }
    ],
    variants: [
      {
        id: 3,
        price: 850.00,
        stockQuantity: 50,
        sku: "BGT-SLV-40",
        attributes: {
            renk: "Gümüş",
            materyal: "925 Ayar Gümüş"
        }
      }
    ],
    images: [
      { id: 3, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop", displayOrder: 1 }
    ]
  }
];

export const categories = [
    { id: 1, name: "Tümü", slug: "tumu" },
    { id: 2, name: "Kolyeler", slug: "kolye" },
    { id: 3, name: "Küpe", slug: "kupe" },
    { id: 4, name: "Bileklik", slug: "bileklik" },
    { id: 5, name: "Setler", slug: "setler" },
  ];