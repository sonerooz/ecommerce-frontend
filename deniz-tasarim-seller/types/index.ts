export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    status: "active" | "passive" | "review"; // Satıcı ürünü onaya gönderir
    imageUrl: string;
  }
  
  export interface Order {
    id: number;
    customerName: string;
    totalAmount: number;
    status: "pending" | "shipped" | "delivered" | "cancelled";
    date: string;
    itemsCount: number;
  }