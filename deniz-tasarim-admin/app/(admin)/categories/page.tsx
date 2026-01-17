"use client";

import React, { useEffect, useState } from "react";
import { categoryService } from "@/services/categoryService";
import { Category, CreateCategoryRequest } from "@/types/category";
import CategoryList from "@/components/categories/CategoryList";
import CategoryForm from "@/components/categories/CategoryForm";
import toast from "react-hot-toast";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // ✨ YENİ STATE: Sessizce tazeleniyor mu?
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const fetchCategories = async (silent = false) => {
    if (!silent) {
      setIsLoading(true);
    } else {
      setIsRefreshing(true); // ✨ Sessiz moddaysa tazelemeyi aç
    }
    
    try {
      const data = await categoryService.getAll();
      setCategories(data);
    } catch (error) {
      console.error("Hata:", error);
      toast.error("Veriler yüklenemedi.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false); // ✨ İşlem bitince tazelemeyi kapat
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleFormSubmit = async (formData: CreateCategoryRequest) => {
    const toastId = toast.loading("İşlem yapılıyor...");
    try {
      if (editingCategory) {
        await categoryService.update(editingCategory.id, formData);
        toast.success("Kategori güncellendi!", { id: toastId });
      } else {
        await categoryService.create(formData);
        toast.success("Yeni kategori eklendi!", { id: toastId });
      }
      setShowForm(false);
      setEditingCategory(null);
      fetchCategories(true); // Sessiz güncelleme
    } catch (error: any) {
      console.error("Hata:", error);
      const msg = error.response?.data?.message || "Bir hata oluştu.";
      toast.error(msg, { id: toastId });
    }
  };

  const handleDelete = async (id: number) => {
    if(!confirm("Silmek istediğine emin misin?")) return;
    const toastId = toast.loading("Siliniyor...");
    try {
      await categoryService.delete(id);
      toast.success("Silindi.", { id: toastId });
      fetchCategories(true); // Sessiz güncelleme
    } catch (error: any) {
      console.error("Silme hatası:", error);
      toast.error("Silme başarısız.", { id: toastId });
    }
  };

  const handleEditClick = (cat: Category) => {
    setEditingCategory(cat);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingCategory(null);
  };

  const handleNewClick = () => {
    setEditingCategory(null);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Kategori Yönetimi
          {/* Ufak bir dönen ikon, sadece tazeleme sırasında görünür */}
          {isRefreshing && <span className="text-sm text-gray-400 animate-spin">⟳</span>}
        </h1>
        {!showForm && (
          <button onClick={handleNewClick} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            + Yeni Kategori
          </button>
        )}
      </div>

      {showForm && (
        <CategoryForm
          key={editingCategory ? editingCategory.id : "new-form"}
          categories={categories}
          initialData={editingCategory}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      {isLoading && categories.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">Yükleniyor...</div>
      ) : (
        <CategoryList
          categories={categories}
          onEdit={handleEditClick}
          onDelete={handleDelete}
          editingId={editingCategory?.id}
          // ✨ LİSTEYE BİLGİ GÖNDERİYORUZ
          isRefreshing={isRefreshing} 
        />
      )}
    </div>
  );
}