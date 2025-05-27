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
  createdAt: Date;
  expiresAt: Date;
  store: string;
};

export interface PromotionCardProps {
  promotion: Promotion;
}
