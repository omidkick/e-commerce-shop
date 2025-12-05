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

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    // Clone the current search params:
    const params = new URLSearchParams(searchParams);
    // Update the category parameter:
    params.set("category", value || "all");
    // Push updated URL to the router:
    // { scroll: false } prevents automatic scroll-to-top
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-8 md:mb-20 text-base">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selectedCategory
              ? "bg-yellow-400 text-white font-bold"
              : "text-gray-500"
          }`}
          key={category.id}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
