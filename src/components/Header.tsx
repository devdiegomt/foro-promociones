import { Tag } from "lucide-react";
import { samplePromotions } from "../mocks/sample-promotions";
import SearchBar from "./SearchBar";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const newProductsCount = samplePromotions.filter((p) => p.isNew).length;
  const avgDiscount = Math.round(
    samplePromotions.reduce((acc, p) => acc + p.discount, 0) /
      samplePromotions.length
  );

  return (
    <header className="bg-white shadow-lg border-b border-purple-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
              <Tag className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                PromoForum
              </h1>
              <p className="text-gray-600">Descubre las mejores promociones</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {newProductsCount}
              </div>
              <div className="text-sm text-gray-600">Nuevos Hoy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {avgDiscount}%
              </div>
              <div className="text-sm text-gray-600">Desc. Promedio</div>
            </div>
          </div>
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
};
export default Header;
