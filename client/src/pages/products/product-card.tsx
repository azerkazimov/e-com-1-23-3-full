import { useProductStore } from "@/store/product.store";
import type { Product } from "@/types/product.types";
import { Link } from "react-router-dom";
import { TrashIcon } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { deleteProduct } = useProductStore();
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    deleteProduct(product._id);
  };

  return (
    <Link to={`/products/${product._id}`} className="group">
      <div className="relative h-96 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/30">
        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500/10 hover:bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group/delete"
          title="Delete product"
        >
          <TrashIcon className="w-5 h-5 text-red-400 group-hover/delete:text-red-300" />
        </button>

        {/* Product Image */}
        <div className="w-full h-full overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Product Info Overlay */}
        <div className="product-card-content absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/95 to-transparent backdrop-blur-md p-6">
          <h2 className="text-xl font-bold text-white mb-2 line-clamp-1">
            {product.name}
          </h2>
          <p className="text-white/70 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-indigo-400">
              ${product.price.toFixed(2)}
            </span>
            <svg className="w-5 h-5 text-white/60 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
