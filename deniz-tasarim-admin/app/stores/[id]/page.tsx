"use client"; // Admin paneli olduğu için muhtemelen client component kullanıyorsun
import React from 'react';

// ... senin diğer importların ...

// SENİN MEVCUT COMPONENTİN:
export default function StoreDetail({ params }: { params: { id: string } }) {
  // ... senin kodların burada kalacak ...
  return (
    <div>
       {/* ... senin sayfa tasarımın ... */}
       Mağaza Detayı: {params.id}
    </div>
  );
}

// ⚠️ KRİTİK NOKTA: BU FONKSİYONU EN ALTA VE "DIŞARIYA" EKLE ⚠️
// Parantezlerin içine değil, dosyanın en sonuna yapıştır.
export async function generateStaticParams() {
  // Build sırasında hata vermemesi için "sahte" bir ID dönüyoruz.
  // Static export modunda Next.js en az bir tane static sayfa üretmek ister.
  return [{ id: 'default' }];
}