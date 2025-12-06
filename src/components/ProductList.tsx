"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Category from "./Category";
import Filter from "./Filter";
import { sortProducts, filterByCategory } from "@/utils/productUtils";
import { products } from "@/data/mockData";
import ProductGrid from "./ProductGrid";
import ViewAllProductsLink from "./ViewAllProductsLink";
import { ProductsType } from "@/types/types";
import ProductListLoading from "@/ui/Productlistloading";

// Constants
const PRODUCTS_PER_PAGE = 8;
const LOADING_DELAY = 500; // ms

type ProductListContext = "homepage" | "products";

interface ProductListContentProps {
  initialCategory?: string;
  context?: ProductListContext;
}

// Custom hook for product data and loading state
const useProductData = (initialCategory: string) => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true); // Start with true
  const [displayedProducts, setDisplayedProducts] = useState<ProductsType>([]);

  const selectedCategory =
    initialCategory || searchParams.get("category") || "all";
  const sortParam = searchParams.get("sort") || "newest";

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const filtered = filterByCategory(products, selectedCategory);
      const sorted = sortProducts(filtered, sortParam);
      setDisplayedProducts(sorted.slice(0, PRODUCTS_PER_PAGE));
      setIsLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, [selectedCategory, sortParam]);

  return {
    selectedCategory,
    displayedProducts,
    isLoading,
  };
};

// Component for displaying filtered and sorted products
const ProductListContent = ({
  initialCategory = "all",
  context = "homepage",
}: ProductListContentProps) => {
  const { selectedCategory, displayedProducts, isLoading } =
    useProductData(initialCategory);
  const isHomepage = context === "homepage";
  const isProductsPage = context === "products";

  return (
    <>
      {isProductsPage && <Filter />}

      <ProductGrid
        products={displayedProducts}
        selectedCategory={selectedCategory}
        isLoading={isLoading}
      />

      {!isLoading && displayedProducts.length > 0 && isHomepage && (
        <ViewAllProductsLink selectedCategory={selectedCategory} />
      )}
    </>
  );
};

// Main ProductList component
const ProductList = ({
  category = "all",
  context = "homepage",
}: {
  category?: string;
  context?: ProductListContext;
}) => {
  return (
    <div className="w-full space-y-8">
      <Category />
      <Suspense fallback={<ProductListLoading count={8} />}>
        <ProductListContent initialCategory={category} context={context} />
      </Suspense>
    </div>
  );
};

export default ProductList;
