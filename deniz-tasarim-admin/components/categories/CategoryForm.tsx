"use client";
import React, { useState, useEffect, useRef } from "react";
import { Category, CreateCategoryRequest } from "@/types/category";
import { uploadService } from "@/services/uploadService"; // ✨ Yeni servis
import toast from "react-hot-toast";

interface CategoryFormProps {
  categories: Category[];
  initialData?: Category | null;
  onSubmit: (data: CreateCategoryRequest) => void;
  onCancel: () => void;
}

export default function CategoryForm({ categories, initialData, onSubmit, onCancel }: CategoryFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [parentId, setParentId] = useState<number | null>(null);

  // ✨ Resim Yükleme State'i
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null); // Gizli inputa tıklamak için referans

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description || "");
      setImageUrl(initialData.imageUrl || "");
      setParentId(initialData.parentId);
    } else {
      setName("");
      setDescription("");
      setImageUrl("");
      setParentId(null);
    }
  }, [initialData]);

  // ✨ Dosya Seçilince Çalışacak Fonksiyon
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const toastId = toast.loading("Resim yükleniyor...");

    try {
      // Servise dosyayı gönderiyoruz
      const url = await uploadService.uploadImage(file);
      
      // Gelen URL'i state'e yazıyoruz
      setImageUrl(url);
      
      toast.success("Resim yüklendi!", { id: toastId });
    } catch (error) {
      console.error("Upload hatası:", error);
      toast.error("Resim yüklenemedi.", { id: toastId });
    } finally {
      setIsUploading(false);
      // Inputu temizle ki aynı dosyayı tekrar seçebilsin
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const renderCategoryOptions = (cats: Category[], prefix = "") => {
    let options: React.ReactNode[] = [];
    cats.forEach((cat) => {
      if (initialData && initialData.id === cat.id) return;
      options.push(
        <option key={cat.id} value={cat.id}>{prefix} {cat.name}</option>
      );
      if (cat.subCategories && cat.subCategories.length > 0) {
        options = [...options, ...renderCategoryOptions(cat.subCategories, prefix + "-- ")];
      }
    });
    return options;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, parentId, imageUrl });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md border mb-6 border-blue-500 relative">
      <h2 className="text-lg font-bold mb-4">{initialData ? "Kategoriyi Düzenle" : "Yeni Kategori Ekle"}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* İsim */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Kategori Adı</label>
          <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        {/* Açıklama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Açıklama</label>
          <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        {/* ✨ GÖRSEL YÜKLEME ALANI (GÜNCELLENDİ) */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kategori Görseli</label>
            
            <div className="flex items-center gap-4">
              {/* Önizleme Kutusu */}
              <div className="w-24 h-24 border rounded-md overflow-hidden bg-gray-50 flex items-center justify-center relative">
                {imageUrl ? (
                  <img src={imageUrl} alt="Önizleme" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400 text-xs">Görsel Yok</span>
                )}
                {/* Yükleniyor Spinner'ı */}
                {isUploading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Butonlar ve Gizli Input */}
              <div className="flex flex-col gap-2">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
                
                <button 
                  type="button" 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-900 transition disabled:opacity-50"
                >
                  {isUploading ? "Yükleniyor..." : "Görsel Seç / Yükle"}
                </button>

                {/* Manuel URL girme (Opsiyonel: hala elle girmek isterse diye) */}
                <input 
                  type="text" 
                  placeholder="veya URL yapıştır..." 
                  className="text-xs border border-gray-300 rounded p-1 w-48 text-gray-600"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
            </div>
        </div>
        
        {/* Üst Kategori */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Üst Kategori</label>
          <select 
            className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${initialData ? "bg-gray-200 text-gray-500 cursor-not-allowed opacity-90" : ""}`} 
            value={parentId || ""} 
            onChange={(e) => setParentId(e.target.value ? Number(e.target.value) : null)} 
            disabled={!!initialData}
          >
            <option value="">-- Ana Kategori (Yok) --</option>
            {renderCategoryOptions(categories)}
          </select>
          {initialData && <p className="text-xs text-red-500 mt-1 font-medium">🔒 Kategori yapısını korumak için üst kategori değiştirilemez.</p>}
        </div>

        {/* Kaydet Butonları */}
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">İptal</button>
          <button type="submit" disabled={isUploading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400">
            {isUploading ? "Bekleyiniz..." : "Kaydet"}
          </button>
        </div>
      </form>
    </div>
  );
}