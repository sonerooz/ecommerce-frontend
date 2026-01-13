export interface Store {
    id: number;
    name: string;
    slug: string;
    email: string;
    taxNumber: string;
    logoUrl: string;
    bannerUrl: string;
  }

export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
  }