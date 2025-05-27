/* import { useMemo, useState } from "react";
import { samplePromotions } from "./mocks/sample-promotions"; */
import Header from "./components/Header";

const App = () => {
/*   const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");

  const categories = ["All", "Electronics", "Fashion", "Home", "Beauty"];

  const filteredAndSortedPromotions = useMemo(() => {
    let filtered = samplePromotions.filter((promotion) => {
      const matchesSearch =
        promotion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promotion.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        promotion.store.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || promotion.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "newest":
        return filtered.sort(
          (a, b) => b.createdAt.getItem() - a.createdAt.getItem()
        );
      case "popular":
        return filtered.sort((a, b) => b.popularity - a.popularity);
      case "discount":
        return filtered.sort((a, b) => b.discount - a.discount);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

  const avgDiscount = Math.round(
    samplePromotions.reduce((acc, p) => acc + p.discount, 0) /
      samplePromotions.length
  ); */

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
    </div>

  );
};

export default App;
