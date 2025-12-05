"use client";

import { ProductsType } from "@/types/types";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Category from "./Category";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { products } from "@/data/mockData";
import ProductListLoading from "../ui/Productlistloading";

const ProductList = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";

  // Loading state to simulate filtering delay and show skeleton
  const [isLoading, setIsLoading] = useState(false);
  const [displayedProducts, setDisplayedProducts] =
    useState<ProductsType>(products);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  // Simulate loading when category changes
  useEffect(() => {
    setIsLoading(true);

    // Simulate API delay (1000ms) for smooth UX
    const timer = setTimeout(() => {
      setDisplayedProducts(filteredProducts.slice(0, 8));
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filteredProducts]);

  return (
    <div className="w-full">
      {/* Category Filter */}
      <Category />

      {/* Products List */}
      {isLoading ? (
        <ProductListLoading count={filteredProducts.length} />
      ) : (
        <>
          {/* Animated Product Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="popLayout">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product, index) => (
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
                ))
              ) : (
                // Empty state when no products match filter
                <motion.div
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-500 text-lg">
                    محصولی در این دسته‌بندی یافت نشد
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* View All Products Link */}
          {displayedProducts.length > 0 && (
            <Link
              href={
                selectedCategory && selectedCategory !== "all"
                  ? `/products/?category=${selectedCategory}`
                  : "/products"
              }
              className="mt-8 flex items-center gap-2 text-yellow-500 font-medium hover:underline text-lg"
            >
              مشاهده همه محصولات
              <ArrowLeftIcon className="w-5 h-5" />
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
