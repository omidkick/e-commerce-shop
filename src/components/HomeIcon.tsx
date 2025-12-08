"use client";

import { Home } from "lucide-react";
import Link from "next/link";

const HomeIcon = () => {
  return (
    <Link href="/" className="relative group" aria-label="خانه">
      <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <Home className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-primary transition-colors" />
      </div>

      {/* Tooltip */}
      <span className="hidden lg:block absolute top-full mt-2 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        خانه
      </span>
    </Link>
  );
};

export default HomeIcon;
