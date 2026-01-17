import axios from 'axios';

// API adresini al
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8090";

// Özel bir axios örneği oluşturuyoruz
const api = axios.create({
  baseURL: API_URL,
});

// REQUEST INTERCEPTOR (İstek Atılmadan Önce Araya Gir)
// Burası her istekten önce çalışır ve LocalStorage'da token varsa header'a ekler.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Token'ı sakladığımız yer
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR (Cevap Geldikten Sonra Araya Gir)
// Eğer 401 (Yetkisiz) hatası alırsak, kullanıcıyı login'e atabiliriz.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token geçersizse veya süresi dolduysa
      // localStorage.removeItem("token");
      // window.location.href = "/"; // Login sayfasına at
    }
    return Promise.reject(error);
  }
);

export default api;