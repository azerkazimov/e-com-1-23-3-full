import { useProductStore } from "@/store/product.store";
import { useEffect } from "react";
import ProductCard from "./product-card";
import { useModalStore } from "@/store/modal.store";
import ProductForm from "./product-form";
import PageHeader from "@/components/ui/page-header";
import ProductSidebar from "./product-sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Products() {
  const {
    products,
    getProducts,
    sortProducts,
    setSortBy,
    currentSort,
    setCurrentSort,
  } = useProductStore();
  const { openModal } = useModalStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleOpenModal = () => {
    openModal();
  };

  const handleSortProducts = (sortBy: string) => {
    sortProducts(sortBy);
    setSortBy(sortBy);
    setCurrentSort(sortBy);
  };

  const totalProducts = products?.length || 0;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <PageHeader
        title="PRODUCTS"
        description={`${totalProducts} Total Products`}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex lg:flex-row gap-12">
          <ProductSidebar />

          {/* Products Grid */}
          <main className="flex-1">
            {/* Sort By */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        className="px-4 py-2 pr-10 border border-gray-200 rounded-md cursor-pointer text-gray-600"
                      >
                        {currentSort === "latest" && "Sort By: Latest"}
                        {currentSort === "price-low-to-high" &&
                          "Price: Low to High"}
                        {currentSort === "price-high-to-low" &&
                          "Price: High to Low"}
                        {currentSort === "name-a-to-z" && "Name: A to Z"}
                        {currentSort === "name-z-to-a" && "Name: Z to A"}
                      </Button>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => handleSortProducts("latest")}
                    >
                      Latest
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleSortProducts("price-low-to-high")}
                    >
                      Price: Low to High
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleSortProducts("price-high-to-low")}
                    >
                      Price: High to Low
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleSortProducts("name-a-to-z")}
                    >
                      Name: A to Z
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleSortProducts("name-z-to-a")}
                    >
                      Name: Z to A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {products && products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-12 h-12 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Get started by adding your first product
                </p>
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add Your First Product
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <ProductForm />
    </div>
  );
}
