import React from 'react';
import StoreClient from './StoreClient'; // Az önce oluşturduğumuz dosyayı çağırıyoruz

// 1. BU SATIR ÇOK ÖNEMLİ: Next.js'e hangi ID'leri build edeceğini söylüyoruz.
// Server Component olduğu için burada bu fonksiyon çalışır!
export async function generateStaticParams() {
  return [{ id: 'default' }];
}

// 2. Sayfa bileşeni (Server Component - "use client" YOK)
export default function Page({ params }: { params: { id: string } }) {
  // Server tarafında params'ı alıp, Client tarafındaki tasarıma gönderiyoruz.
  return <StoreClient id={params.id} />;
}