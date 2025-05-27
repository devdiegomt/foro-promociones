import { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import { samplePromotions } from "./mocks/sample-promotions";
import { Clock, Search, Tag, TrendingUp } from "lucide-react";
import PromotionCard from "./components/PromotionCard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["Todas", "Tecnología", "Moda", "Hogar", "Belleza"];

  const filteredAndSortedPromotions = useMemo(() => {
    const filtered = samplePromotions.filter((promotion) => {
      const matchesSearch =
        promotion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promotion.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        promotion.store.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Todas" || promotion.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "newest":
        return filtered.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "popular":
        return filtered.sort((a, b) => b.popularity - a.popularity);
      case "discount":
        return filtered.sort((a, b) => b.discount - a.discount);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

  const newProductsCount = samplePromotions.filter((p) => p.isNew).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto px-4 py-8">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Cards de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Nuevas Promociones
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  {newProductsCount}
                </p>
              </div>
              <Clock className="h-12 w-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Más Populares
                </h3>
                <p className="text-3xl font-bold text-orange-600">
                  {Math.max(...samplePromotions.map((p) => p.popularity))}%
                </p>
              </div>
              <TrendingUp className="h-12 w-12 text-orange-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Total de Ofertas
                </h3>
                <p className="text-3xl font-bold text-purple-600">
                  {samplePromotions.length}
                </p>
              </div>
              <Tag className="h-12 w-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {searchTerm || selectedCategory !== "Todas"
              ? `Resultados filtrados (${filteredAndSortedPromotions.length})`
              : "Todas las Promociones"}
          </h2>
          <p className="text-gray-600">
            {sortBy === "newest" && "Ordenadas por más recientes"}
            {sortBy === "popular" && "Ordenadas por más populares"}
            {sortBy === "discount" && "Ordenadas por mayor descuento"}
          </p>
        </div>

        {/* Grilla de promociones */}
        {filteredAndSortedPromotions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedPromotions.map((promotion) => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No se encontraron promociones
            </h3>
            <p className="text-gray-500">
              Intenta ajustar tus criterios o filtros de búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
