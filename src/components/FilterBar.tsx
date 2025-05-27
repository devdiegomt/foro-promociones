import type { FilterBarProps } from "../types/filterbar";
import Button from "./ui/Button";

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  /* sortBy, */
  onCategoryChange,
  /* onSortChange, */
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border-gray-100 mb-8">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        {/* Categorias */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Categorías
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Opciones de orden */}
        <div className="lg:w-64">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Ordenar Por
          </h3>
          {/* <select value={sortBy} onChange={onSortChange}></select> */}
          {/* Select pendiente para confirmar si uso contexto o librerías externas */}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
