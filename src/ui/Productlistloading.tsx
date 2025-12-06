import React from "react";

interface ProductListLoadingProps {
  count: number;
  className?: string;
}

const ProductListLoading: React.FC<ProductListLoadingProps> = ({
  count,
  className = "",
}) => {
  // Create array of skeleton items based on count prop
  const skeletonItems = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-12 ${className}`}
    >
      {skeletonItems.map((item) => (
        <div
          key={item}
          className="animate-pulse bg-white rounded-lg overflow-hidden shadow-sm"
        >
          {/* Image skeleton - using aspect-2/3 to match ProductCard */}
          <div className="aspect-2/3 bg-gray-200" />

          {/* Content skeleton */}
          <div className="p-4 space-y-3">
            {/* Title skeleton */}
            <div className="h-6 bg-gray-200 rounded w-3/4" />

            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>

            {/* Product types skeleton */}
            <div className="flex items-center gap-4 pt-2">
              <div className="h-6 bg-gray-200 rounded w-16" />
              <div className="h-6 bg-gray-200 rounded w-16" />
            </div>

            {/* Price and button skeleton */}
            <div className="flex items-center justify-between pt-4">
              <div className="h-10 bg-gray-200 rounded w-24" />
              <div className="h-6 bg-gray-200 rounded w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListLoading;
