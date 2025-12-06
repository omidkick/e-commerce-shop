"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductListLoading from "../ui/Productlistloading"; // Import the loading component
import EmptyState from "./EmptyState";
import { ProductsType } from "@/types/types";

interface ProductGridProps {
  products: ProductsType;
  selectedCategory: string;
  isLoading?: boolean;
}

const ProductGrid = ({ products, isLoading = false }: ProductGridProps) => {
  // Show loading skeleton when isLoading is true
  if (isLoading) {
    return <ProductListLoading count={8} />;
  }

  if (products.length === 0) {
    return <EmptyState message="محصولی در این دسته‌بندی یافت نشد" />;
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
            layout
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductGrid;
