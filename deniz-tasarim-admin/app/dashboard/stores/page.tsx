"use client";

import { useState } from "react";
import { stores as initialStores } from "@/lib/data";

export default function StoresPage() {
  const [stores, setStores] = useState(initialStores);
  const [newStoreName, setNewStoreName] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStoreName) return;

    const newStore = {
      id: Date.now(),
      name: newStoreName,
      slug: newStoreName.toLowerCase().replace(/ /g, "-"),
      email: "demo@store.com",
      taxNumber: "000000",
      logoUrl: "",
      bannerUrl: ""
    };

    // @ts-ignore
    setStores([...stores, newStore]);
    setNewStoreName("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mağaza Yönetimi</h1>
        <a href="/dashboard" className="text-blue-600 hover:underline">← Geri Dön</a>
      </div>

      {/* Ekleme Formu */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold">Yeni Mağaza Tanımla</h2>
        <form onSubmit={handleAdd} className="flex gap-4">
          <input
            type="text"
            className="flex-1 rounded border p-2"
            placeholder="Mağaza Adı"
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}
          />
          <button type="submit" className="rounded bg-green-600 px-6 py-2 text-white">Oluştur</button>
        </form>
      </div>

      {/* Liste */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <div key={store.id} className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">{store.name}</h3>
            <p className="text-sm text-gray-500">{store.email}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">Aktif</span>
              <button className="text-sm text-red-600 hover:underline">Düzenle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}