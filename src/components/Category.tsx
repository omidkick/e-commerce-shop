"use client";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Suspense } from "react";

const categories = [
  {
    id: 1,
    name: "همه",
    icon: <ShoppingBasket className="w-5 h-5" />,
    slug: "all",
  },
  {
    id: 2,
    name: "تی-شرت",
    icon: <Shirt className="w-5 h-5" />,
    slug: "t-shirts",
  },
  {
    id: 3,
    name: "کفش",
    icon: <Footprints className="w-5 h-5" />,
    slug: "shoes",
  },
  {
    id: 4,
    name: "لوازم جانبی",
    icon: <Glasses className="w-5 h-5" />,
    slug: "accessories",
  },
  {
    id: 5,
    name: "کیف",
    icon: <Briefcase className="w-5 h-5" />,
    slug: "bags",
  },
  {
    id: 6,
    name: "پیراهن",
    icon: <Venus className="w-5 h-5" />,
    slug: "dresses",
  },
  {
    id: 7,
    name: "ژاکت",
    icon: <Shirt className="w-5 h-5" />,
    slug: "jackets",
  },
  {
    id: 8,
    name: "دستکش",
    icon: <Hand className="w-5 h-5" />,
    slug: "gloves",
  },
];

const CategoriesContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get selected category from URL, default to "all"
  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string) => {
    // Clone the current search params
    const params = new URLSearchParams(searchParams);

    // Update the category parameter
    params.set("category", value);

    // Push updated URL to the router
    // { scroll: false } prevents automatic scroll-to-top
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-8 text-base mt-5">
      {categories.map((category) => {
        const isSelected = category.slug === selectedCategory;

        return (
          <motion.div
            key={category.id}
            className={`relative flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md overflow-hidden ${
              isSelected
                ? "text-white font-bold"
                : "text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleChange(category.slug)}
            // Hover animation for non-selected items
            whileHover={!isSelected ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            // Initial animation when component mounts
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: category.id * 0.05 }}
          >
            {/* Animated background for selected category */}
            {isSelected && (
              <motion.div
                className="absolute inset-0 bg-yellow-400 rounded-md"
                layoutId="activeCategory" // This creates smooth transition between categories
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}

            {/* Content wrapper - ensures icon and text stay on top */}
            <div className="relative z-10 flex items-center justify-center gap-2">
              <motion.div
                animate={isSelected ? { rotate: [0, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>
              {category.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Categories = () => {
  return (
    <Suspense>
      <CategoriesContent />
    </Suspense>
  );
};
export default Categories;
