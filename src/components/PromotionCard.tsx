import { useState } from "react";
import type { PromotionCardProps } from "../types/promotion";
import { Card } from "./ui/card/Card";
import { Clock, TrendingUp, ExternalLink, Heart } from "lucide-react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const daysLeft = Math.ceil(
    (promotion.expiresAt.getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const savings = promotion.originalPrice - promotion.discountPrice;

  const copFormat = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
      <div className="relative">
        {!imageError ? (
          <img
            src={promotion.imageUrl}
            alt={promotion.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">
                {promotion.category === "Tecnología"
                  ? "💻"
                  : promotion.category === "Moda"
                  ? "👕"
                  : promotion.category === "Hogar"
                  ? "🏠"
                  : promotion.category === "Fitness"
                  ? "💪"
                  : promotion.category === "Belleza"
                  ? "💄"
                  : "🏷️"}
              </div>
              <p className="text-gray-600 font-medium">{promotion.category}</p>
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {promotion.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg">
              <Clock className="h-3 w-3 mr-1" />
              NUEVO
            </Badge>
          )}
          <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 shadow-lg font-bold">
            - {promotion.discount}%
          </Badge>
        </div>

        {/* Botón de like */}
        <Button
          className="absolute top-3 right-3"
          onClick={() => setIsLiked((prev) => !prev)}
        >
          <Heart
            className={`h-4 w-4 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>

        {/* Indicador de popularidad */}
        {promotion.popularity > 85 && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg">
              <TrendingUp className="h-3 w-3 mr-1" />
              POPULAR
            </Badge>
          </div>
        )}
      </div>

      <Card.Content className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-2">
              {promotion.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {promotion.description}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge
              /* variant="outline" */ className="bg-purple-200 text-purple-700"
            >
              {promotion.store}
            </Badge>
            <Badge /* variant="secondary" */ className="bg-gray-100">
              {promotion.category}
            </Badge>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-green-600">
                {copFormat.format(promotion.discountPrice)}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {copFormat.format(promotion.originalPrice)}
              </span>
            </div>
            <p className="text-sm text-green-600 font-medium">
              Ahorras {copFormat.format(savings)}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {daysLeft > 0 ? `${daysLeft} días restantes` : "Expira pronto"}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {promotion.popularity}% de popularidad
            </span>
          </div>
        </div>
      </Card.Content>
      <Card.Footer className="p-6 pt-0">
        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 border-0 shadow-lg flex items-center justify-center py-2 rounded-xl"
          onClick={() => window.open(promotion.offerUrl, "_blank")}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Ver Oferta
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default PromotionCard;
