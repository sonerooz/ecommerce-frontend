"use client";

import React, { useEffect, useState } from "react";

import { categoryService } from "@/services/categoryService";

import { Category, CreateCategoryRequest } from "@/types/category";

import CategoryList from "@/components/categories/CategoryList";

import CategoryForm from "@/components/categories/CategoryForm";



export default function CategoriesPage() {

  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState(true);

 

  // Form Durumları

  const [showForm, setShowForm] = useState(false);

  const [editingCategory, setEditingCategory] = useState<Category | null>(null);



  // Verileri Çek

  const fetchCategories = async () => {

    setIsLoading(true);

    try {

      const data = await categoryService.getAll();

      setCategories(data);

    } catch (error) {

      console.error("Veri çekme hatası:", error);

      // Kullanıcıyı her açılışta alert ile darlamayalım, konsola yazalım

    } finally {

      setIsLoading(false);

    }

  };



  useEffect(() => {

    fetchCategories();

  }, []);



  // Form Submit (Ekleme ve Güncelleme)

  const handleFormSubmit = async (formData: CreateCategoryRequest) => {

    try {

      if (editingCategory) {

        // --- GÜNCELLEME İŞLEMİ (PUT) ---

        await categoryService.update(editingCategory.id, formData);

        alert("Kategori başarıyla güncellendi! ✅");

      } else {

        // --- EKLEME İŞLEMİ (POST) ---

        await categoryService.create(formData);

        alert("Yeni kategori eklendi! 🎉");

      }

     

      setShowForm(false);

      setEditingCategory(null);

      fetchCategories(); // Listeyi yenile

    } catch (error: any) {

      console.error("İşlem hatası:", error);

      // Hatanın detayını gösterelim

      const msg = error.response?.data?.message || "İşlem sırasında bir hata oluştu.";

      alert("Hata: " + msg);

    }

  };



  // Silme İşlemi

  const handleDelete = async (id: number) => {

    if(!confirm("Bu kategoriyi silmek istediğine emin misin?")) return;

   

    try {

      await categoryService.delete(id);

      alert("Kategori silindi. 🗑️");

      fetchCategories();

    } catch (error: any) {

      console.error("Silme hatası:", error);

      const msg = error.response?.data?.message || "Silme başarısız.";

      alert("Hata: " + msg);

    }

  };



  const handleEditClick = (cat: Category) => {

    setEditingCategory(cat);

    setShowForm(true);

  };



  return (

    <div className="p-8">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold text-gray-800">Kategori Yönetimi</h1>

        {!showForm && (

          <button

            onClick={() => { setEditingCategory(null); setShowForm(true); }}

            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"

          >

            + Yeni Kategori

          </button>

        )}

      </div>



      {showForm && (

        <CategoryForm

          categories={categories}

          initialData={editingCategory}

          onSubmit={handleFormSubmit}

          onCancel={() => { setShowForm(false); setEditingCategory(null); }}

        />

      )}



      {isLoading ? (

        <div className="text-center text-gray-500">Yükleniyor...</div>

      ) : (

        <CategoryList

          categories={categories}

          onEdit={handleEditClick}

          onDelete={handleDelete}

        />

      )}

    </div>

  );

}