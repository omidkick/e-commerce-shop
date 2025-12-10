"use client";

import { ProductType } from "../types";
import { formatPriceInToman } from "@/utils/toPersianNumbers";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
            sizes=""
          />
        </div>
      </Link>

      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-3 p-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center  gap-8 text-xs mb-4">
          {/* SIZES */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">سایز :</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">رنگ :</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer border-2 ${
                    productTypes.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } rounded-full p-[1.2px]`}
                  key={color}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CART BUTTON */}
        <div className="flex items-center justify-between">
          <button
            // onClick={handleAddToCart}
            className="flex items-center gap-2 bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-base md:text-base cursor-pointer"
          >
            خرید
            <ShoppingCart className="w-5 h-5" />
          </button>
          <p className="font-medium text-lg">
            {formatPriceInToman(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
