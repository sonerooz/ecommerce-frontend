import api from './api'; // Az önce oluşturduğumuz akıllı axios
import { LoginRequest, TokenResponse } from '../types/auth';

export const authService = {
  login: async (credentials: LoginRequest): Promise<TokenResponse> => {
    // Backend endpoint'imiz: /api/auth/login
    const response = await api.post<TokenResponse>('/api/auth/login', credentials);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
};