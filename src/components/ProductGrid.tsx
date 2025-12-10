"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductListLoading from "../ui/Productlistloading";
import EmptyState from "./EmptyState";
import { ProductsType } from "@/types";

interface ProductGridProps {
  products: ProductsType;
  selectedCategory: string;
  productCount: number | null;
  context: "homepage" | "products";
  isLoading?: boolean;
}

const ProductGrid = ({
  products,
  productCount,
  context,
  isLoading = false,
}: ProductGridProps) => {
  // --- LOADING STATE ---
  if (isLoading) {
    // Case 1: We don't know the count yet (should be rare)
    if (productCount === null) {
      return <ProductListLoading count={4} />;
    }

    // Case 2: Category is empty
    if (productCount === 0) {
      return <EmptyState message="محصولی در این دسته‌بندی یافت نشد" />;
    }

    // Case 3: Calculate how many skeletons to show
    let skeletonCount: number;

    if (context === "homepage") {
      // Homepage shows max 8 products, so max 8 skeletons
      skeletonCount = Math.min(productCount, 8);
    } else {
      // Products page shows ALL products, so skeletons for all
      skeletonCount = productCount;
    }

    return <ProductListLoading count={skeletonCount} />;
  }

  // --- EMPTY STATE ---
  if (products.length === 0) {
    return <EmptyState message="محصولی در این دسته‌بندی یافت نشد" />;
  }

  // --- NORMAL STATE (Products loaded) ---
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
