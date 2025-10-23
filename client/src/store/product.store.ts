import { create } from "zustand";
import type { Product } from "@/types/product.types";
import productsApi from "@/service/api.products";

interface ProductState {
    products: Product[];
    product: Product | null;
    loading: boolean;
    error: string | null;
    getProducts: () => Promise<void>;
    getProductById: (id: string) => Promise<void>;
    createProduct: (product: Product) => Promise<void>;
    updateProduct: (id: string, product: Product) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    product: null,
    loading: false,
    error: null,
    getProducts: async () => {
        try {
            const response = await productsApi.getProducts();
            set({ products: response.data, loading: false });
        } catch (error) {
            set({ loading: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
            throw error;
        } finally {
            set({ loading: false });
        }
    },
    getProductById: async (id: string) => {
        try {
            const response = await productsApi.getProductById(id);
            set({ product: response.data, loading: false });
        } catch (error) {
            set({ loading: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
            throw error;
        } finally {
            set({ loading: false });
        }
    },
    createProduct: async (product: Product) => {
        try {
            const response = await productsApi.createProduct(product);
            set((state) => ({ products: [...state.products, response.data.data] }));
        } catch (error) {
            set({ loading: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
            throw error;
        } finally {
            set({ loading: false });
        }
    },
    updateProduct: async (id: string, product: Product) => {
        try {
            const response = await productsApi.updateProduct(id, product);
            set((state) => ({ products: state.products.map((p) => p._id === id ? response.data.data : p) }));
        } catch (error) {
            set({ loading: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
            throw error;
        } finally {
            set({ loading: false });
        }
    },
    deleteProduct: async (id: string) => {
        try {
            await productsApi.deleteProduct(id);
            set((state) => ({ products: state.products.filter((p) => p._id !== id) }));
        } catch (error) {
            set({ loading: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
            throw error;
        } finally {
            set({ loading: false });
        }
    },
}))