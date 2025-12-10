import { ProductsType } from "@/types";

// Filter products by category
export const filterByCategory = (
  products: ProductsType,
  category: string
): ProductsType => {
  if (category === "all") {
    return products;
  }
  return products.filter((product) => product.category === category);
};

// Sort products based on sort parameter
export const sortProducts = (
  products: ProductsType,
  sortParam: string
): ProductsType => {
  const sorted = [...products];

  switch (sortParam) {
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt || b.createdAt || "2024-01-01").getTime() -
          new Date(a.createdAt || a.createdAt || "2024-01-01").getTime()
      );

    case "oldest":
      return sorted.sort(
        (a, b) =>
          new Date(a.createdAt || a.createdAt || "2024-01-01").getTime() -
          new Date(b.createdAt || b.createdAt || "2024-01-01").getTime()
      );

    case "asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "desc":
      return sorted.sort((a, b) => b.price - a.price);

    default:
      return sorted;
  }
};

// Check if products are empty after filtering
export const hasProducts = (products: ProductsType): boolean => {
  return products.length > 0;
};

// Get paginated products
export const getPaginatedProducts = (
  products: ProductsType,
  page: number,
  limit: number
): ProductsType => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return products.slice(start, end);
};
