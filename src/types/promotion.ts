export type Promotion = {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  category: string;
  isNew: boolean;
  popularity: number;
  imageUrl: string;
  createdAt: string;
  expiresAt: string;
  store: string;
};
