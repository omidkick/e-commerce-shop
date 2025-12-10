import { ProductsType } from "@/types";

// Mock Products Database with Category and CreatedAt
export const products: ProductsType = [
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
  },
  {
    id: 4,
    name: "تی‌شرت نایک",
    shortDescription: "تی‌شرت سبک با قابلیت دفع رطوبت، مناسب ورزش و فعالیت.",
    description:
      "تی‌شرت Nike Dri Flex با طراحی ورزشی و قابلیت گردش هوا، گزینه‌ای عالی برای تمرینات ورزشی است. این محصول با تکنولوژی دفع رطوبت، حس خشکی و راحتی را برای شما حفظ می‌کند.",
    price: 298.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
    category: "t-shirts",
    createdAt: "2024-11-18T11:45:00Z",
  },
  {
    id: 5,
    name: "هودی آندرآرمور",
    shortDescription: "هودی بادوام و گرم برای استفاده در هوای سرد.",
    description:
      "هودی Under Armour StormFleece با ترکیب پارچه باکیفیت و طراحی مدرن، راحتی و گرمای مطلوبی ارائه می‌دهد. مناسب برای استفاده روزانه و فعالیت‌های سبک در فصل سرد.",
    price: 499.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
    category: "jackets",
    createdAt: "2024-11-12T16:30:00Z",
  },
  {
    id: 6,
    name: "کفش نایک ۲۷۰",
    shortDescription: "کفش ورزشی سبک با طراحی مدرن و کفی راحت.",
    description:
      "مدل Air Max 270 یکی از محبوب‌ترین مدل‌های نایک است که با طراحی شیک، کفی نرم و کیفیت ساخت بالا، انتخابی مناسب برای استفاده روزانه و پیاده‌روی به شمار می‌رود.",
    price: 599.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
    category: "shoes",
    createdAt: "2024-11-05T08:00:00Z",
  },
  {
    id: 7,
    name: "کفش نایک پالس",
    shortDescription: "کفش راحت با طراحی اسپرت برای استفاده روزمره.",
    description:
      "کفش Nike Ultraboost Pulse با طراحی اسپرت و کیفیت ساخت بالا، گزینه‌ای مناسب برای فعالیت‌های روزانه و تمرینات سبک است. راحتی و دوام بالا از ویژگی‌های شاخص آن است.",
    price: 699.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    category: "shoes",
    createdAt: "2024-11-08T13:20:00Z",
  },
  {
    id: 8,
    name: "جین لوییز",
    shortDescription: "شلوار جین مقاوم و خوش‌فرم مناسب استفاده روزمره.",
    description:
      "شلوار جین کلاسیک Levi's با جنس بادوام و طراحی استاندارد، یک انتخاب عالی برای استفاده روزانه است. راحتی در حرکت و فیت مناسب، تجربه‌ای مطلوب برای کاربران فراهم می‌کند.",
    price: 598.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    category: "dresses",
    createdAt: "2024-11-22T15:10:00Z",
  },
];
