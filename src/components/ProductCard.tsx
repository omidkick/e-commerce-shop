"Use client";

import { ProductType } from "@/types/types";

const ProductCard = ({ product }: { product: ProductType }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
