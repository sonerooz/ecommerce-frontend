// ESKİSİ: import axios from 'axios';
// YENİSİ:
import api from './api'; 
import { Category, CreateCategoryRequest } from '../types/category';

// Base URL zaten api.ts içinde tanımlı olduğu için burayı sadeleştiriyoruz:
// const API_URL = ... (Buna gerek kalmadı, api.ts hallediyor)

export const categoryService = {
  getAll: async (): Promise<Category[]> => {
    // api.get otomatik olarak base url + token ekler
    const response = await api.get<Category[]>('/api/categories');
    return response.data;
  },

  create: async (data: CreateCategoryRequest): Promise<Category> => {
    const response = await api.post<Category>('/api/categories', data);
    return response.data;
  },

  update: async (id: number, data: CreateCategoryRequest): Promise<Category> => {
    const response = await api.put<Category>(`/api/categories/${id}`, data);
    return response.data;
  },
  
  delete: async (id: number): Promise<void> => {
    await api.delete(`/api/categories/${id}`);
  }
};