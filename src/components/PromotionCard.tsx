/* import { useState } from "react"; */
import type { PromotionCardProps } from "../types/promotion";
import { Card } from "./ui/card/Card";

const PromotionCard: React.FC<PromotionCardProps> = (/* { promotion } */) => {
/*   const [isLinked, setIsLinked] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const daysLeft = Math.ceil(
    (promotion.expiresAt.getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const savings = promotion.originalPrice - promotion.discountedPrice;
 */
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
      <></>
    </Card>
  );
};

export default PromotionCard;
