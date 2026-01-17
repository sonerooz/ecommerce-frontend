import axios from "axios";

// API URL'in (Daha önce oluşturduğun base URL ayarı varsa onu kullanabilirsin)
const API_URL = "http://localhost:5000/api"; // Kendi portuna göre ayarla

export const uploadService = {
  uploadImage: async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file); // Backend'de parametre adı 'file' olmalı

    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Backend'den { "url": "..." } veya direkt string url döndüğünü varsayıyoruz
    return response.data.url; 
  },
};