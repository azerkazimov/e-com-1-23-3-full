import { Button } from "@/components/ui/button";
import { useProductStore } from "@/store/product.store";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSidebar() {
  const { toggleCategory, selectedCategories, searchQuery, setSearchQuery, clearSearch, searchProducts, products } = useProductStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const handleCategoryChange = async (category: string) => {
    toggleCategory(category);
    
    // If there's an active search, re-run search with new categories
    if (searchQuery.trim()) {
      await searchProducts(searchQuery);
    }
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value.trim()) {
      setSearchQuery(value);
      await searchProducts(value);
      setShowDropdown(true);
    } else {
      // When cleared (including backspace), reset and apply category filters
      setSearchQuery("");
      setShowDropdown(false);
      clearSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    clearSearch();
    setShowDropdown(false);
  };

  const handleProductClick = (productId: string) => {
    setShowDropdown(false);
    navigate(`/products/${productId}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside className="lg:w-80 shrink-0">
      <div className="space-y-6">
        {/* Search */}
        <div className="relative" ref={dropdownRef}>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Type Here"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery && (
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Search Dropdown */}
          {showDropdown && searchQuery && (
            <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
              {products.length > 0 ? (
                <div className="py-2">
                  {products.map((product) => (
                    <div
                      key={product._id}
                      onClick={() => handleProductClick(product._id)}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {product.image && (
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500 capitalize">
                            {product.category}
                          </p>
                          <p className="text-sm font-semibold text-purple-600">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-6 text-center">
                  <p className="text-sm text-gray-500">Product not found</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Select Products */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Select Products
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 rounded"
                name="category"
                value="watches"
                checked={selectedCategories.includes("watches")}
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              <span className="text-gray-700">Watches</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 rounded"
                name="category"
                value="straps"
                checked={selectedCategories.includes("straps")}
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              <span className="text-gray-700">Straps</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Price Range
          </h3>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="$0"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="text-gray-500">to</span>
            <input
              type="text"
              placeholder="$150"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Case Color */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Case Color
          </h3>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-lg bg-gray-900 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-gray-300 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-blue-500 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
          </div>
        </div>

        {/* Filter By Strap Colors */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Filter By Strap Colors
          </h3>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-lg bg-amber-600 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-400 to-pink-500 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-blue-600 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-gray-600 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full py-3 bg-linear-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all">
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}
