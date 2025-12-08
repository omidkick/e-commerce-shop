"use client";

import { CartItemsType } from "@/types/types";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

// TEMPORARY
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "تی‌شرت آدیداس",
    shortDescription:
      "تی‌شرت سبک و راحت برای استفاده روزمره، تهیه‌شده از پارچه باکیفیت.",
    description:
      "این تی‌شرت Adidas CoreFit با طراحی کلاسیک و جنس پارچه سبک، گزینه‌ای عالی برای استفاده روزانه است. تنفس‌پذیری مناسب و دوخت باکیفیت، تجربه‌ای راحت و دلچسب برای شما فراهم می‌کند.",
    price: 390.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    category: "t-shirts",
    createdAt: "2024-11-15T10:30:00Z",
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "هودی پوما",
    shortDescription: "هودی گرم و نرم با کیفیت بالا مناسب فصل سرد.",
    description:
      "هودی Puma Ultra Warm با طراحی زیبا و جنس گرم، انتخابی مناسب برای روزهای سرد سال است. کیفیت دوخت بالا و حس راحتی، تجربه‌ای ممتاز برای شما ایجاد می‌کند.",
    price: 590.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    category: "jackets",
    createdAt: "2024-11-10T14:20:00Z",

    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "سوییشرت نایک",
    shortDescription: "سوییشرت سبک، راحت و مناسب استفاده روزانه.",
    description:
      "سوییشرت Nike Air Essentials با طراحی ساده و وزن سبک، یک انتخاب ایده‌آل برای استفاده روزمره است. جنس نرم و خوش‌فرم آن، تجربه‌ای راحت در طول روز به شما ارائه می‌دهد.",
    price: 696.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    category: "t-shirts",
    createdAt: "2024-11-20T09:15:00Z",
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

const CartPage = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">سبد خرید شما</h1>
        {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
      </div>
    </div>
  );
};

export default CartPage;
