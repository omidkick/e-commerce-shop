"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { convertToPersianDigits } from "@/utils/toPersianNumbers";
// import useCartStore from "@/stores/cartStore";

const ShoppingCartIcon = () => {
  // const { cart, hasHydrated } = useCartStore();

  // Show nothing until hydration is complete (to avoid SSR mismatch)
  // if (!hasHydrated) {
  //   return (
  //     <div className="p-2">
  //       <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
  //     </div>
  //   );
  // }

  // Calculate total items in cart
  // const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart" className="relative group" aria-label="سبد خرید">
      {/* Main icon container with padding and hover bg */}
      <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
      </div>

      {/* Badge - show only if cart has items */}
      {/* {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {convertToPersianDigits(cartItemCount)}
        </span>
      )} */}

      {/* Tooltip */}
      <span className="hidden lg:block absolute top-full mt-2 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        سبد خرید
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;