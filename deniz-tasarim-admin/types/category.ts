export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    imageUrl: string | null;
    parentId: number | null;
    path: string;
    subCategories: Category[];
  }
  
  export interface CreateCategoryRequest {
    name: string;
    description?: string;
    parentId?: number | null;
    imageUrl?: string;
  }