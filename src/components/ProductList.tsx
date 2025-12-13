"use client";

import { Suspense } from "react";
import Category from "./Category";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";
import ViewAllProductsLink from "./ViewAllProductsLink";
import ProductListLoading from "@/ui/Productlistloading";
import useProductData from "@/hooks/useProductData";

type ProductListContext = "homepage" | "products";

interface ProductListContentProps {
  initialCategory?: string;
  context?: ProductListContext;
}

// Component for displaying filtered and sorted products
const ProductListContent = ({
  initialCategory = "all",
  context = "homepage",
}: ProductListContentProps) => {
  // Use the custom hook to get product data
  const { selectedCategory, displayedProducts, productCount, isLoading } =
    useProductData(initialCategory, context);

  const isHomepage = context === "homepage";
  const isProductsPage = context === "products";

  return (
    <>
      {isProductsPage && <Filter />}

      <ProductGrid
        products={displayedProducts}
        selectedCategory={selectedCategory}
        productCount={productCount}
        context={context}
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
      <h1 className="py-5 md:py-10 text-gray-700 font-black text-3xl ">صفحه محصولات</h1>
      <Category />
      <Suspense fallback={<ProductListLoading count={8} />}>
        <ProductListContent initialCategory={category} context={context} />
      </Suspense>
    </div>
  );
};

export default ProductList;
