export interface LoginRequest {
    email: string;
    password?: string; // Bazen password backend'de opsiyonel olabilir ama biz göndereceğiz
  }
  
  export interface TokenResponse {
    token: string;
  }
  
  // UserDto (İsteğe bağlı, login cevabında user bilgisi dönüyorsa)
  export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  }