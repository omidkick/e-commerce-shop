import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const selectedCategory = (await searchParams).category || "all";

  return (
    <div>
      {/* Pass category as prop - this enables SSR */}
      <ProductList category={selectedCategory} context="products" />
    </div>
  );
};

export default ProductsPage;
