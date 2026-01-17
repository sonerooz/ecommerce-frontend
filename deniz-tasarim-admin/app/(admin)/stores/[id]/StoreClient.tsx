"use client"; // Bu dosya tarayıcıda çalışacak

import React from 'react';

// Burası senin asıl sayfa tasarımın olacak
export default function StoreClient({ id }: { id: string }) {
  return (
    <div className="p-4">
       <h1 className="text-2xl font-bold">Mağaza Detayı</h1>
       <p>Mağaza ID: {id}</p>
       {/* Buraya istediğin kadar useState, useEffect ekleyebilirsin, sorun olmaz */}
    </div>
  );
}