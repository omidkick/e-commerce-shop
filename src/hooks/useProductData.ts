import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { sortProducts, filterByCategory } from "@/utils/productUtils";
import { products } from "@/data/mockData";
import { ProductsType } from "@/types/types";

// Constants
const PRODUCTS_PER_PAGE = 8;
const LOADING_DELAY = 500;

type ProductListContext = "homepage" | "products";

const useProductData = (
  initialCategory: string,
  context: ProductListContext
) => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [displayedProducts, setDisplayedProducts] = useState<ProductsType>([]);
  const [productCount, setProductCount] = useState<number | null>(null);

  const selectedCategory =
    initialCategory || searchParams.get("category") || "all";
  const sortParam = searchParams.get("sort") || "newest";

  useEffect(() => {
    setIsLoading(true);

    // STEP 1: Immediately calculate how many products are in this category
    const filtered = filterByCategory(products, selectedCategory);
    const totalInCategory = filtered.length;
    setProductCount(totalInCategory);

    // STEP 2: Simulate loading delay (like fetching from API)
    const timer = setTimeout(() => {
      // Sort the filtered products
      const sorted = sortProducts(filtered, sortParam);

      // STEP 3: Decide how many products to show based on context
      if (context === "homepage") {
        // Homepage: Show only first 8 products
        setDisplayedProducts(sorted.slice(0, PRODUCTS_PER_PAGE));
      } else {
        // Products page: Show ALL products
        setDisplayedProducts(sorted);
      }

      setIsLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, [selectedCategory, sortParam, context]);

  return {
    selectedCategory,
    displayedProducts,
    productCount,
    isLoading,
  };
};

export default useProductData;
