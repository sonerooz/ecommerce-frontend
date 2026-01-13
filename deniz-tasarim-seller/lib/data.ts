import { Product, Order } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Okyanus İncisi Kolye",
    price: 1250.00,
    stock: 15,
    status: "active",
    imageUrl: "https://placehold.co/100"
  },
  {
    id: 2,
    name: "Gümüş Baget Yüzük",
    price: 850.00,
    stock: 0,
    status: "passive",
    imageUrl: "https://placehold.co/100"
  }
];

export const orders: Order[] = [
  {
    id: 101,
    customerName: "Ahmet Yılmaz",
    totalAmount: 1250.00,
    status: "pending", // Bekliyor
    date: "2026-01-12",
    itemsCount: 1
  },
  {
    id: 102,
    customerName: "Ayşe Demir",
    totalAmount: 2400.00,
    status: "shipped", // Kargolandı
    date: "2026-01-11",
    itemsCount: 3
  }
];