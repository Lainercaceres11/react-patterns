export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  categoryId: string;
  category: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stock: number;
  brand: string;
  tags: string[];
  features: string[];
  createdAt: Date;
}
