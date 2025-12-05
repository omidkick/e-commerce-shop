import { ProductsType } from "@/types/types";
import Category from "./Category";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

// Data Base Temporary
const products: ProductsType = [
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
  },
  {
    id: 8,
    name: "جین لوییز",
    shortDescription: "شلوار جین مقاوم و خوش‌فرم مناسب استفاده روزمره.",
    description:
      "شلوار جین کلاسیک Levi’s با جنس بادوام و طراحی استاندارد، یک انتخاب عالی برای استفاده روزانه است. راحتی در حرکت و فیت مناسب، تجربه‌ای مطلوب برای کاربران فراهم می‌کند.",
    price: 598.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
];

const ProductList = ({ category }: { category: string }) => {
  return (
    <div className="w-full">
      <Category />
      {/* Products List */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "products"}
        className="mt-8 flex items-center gap-2 text-yellow-500 font-medium hover:underline text-lg"
      >
        مشاهده همه محصولات
        <ArrowLeftIcon className=" w-5 h-5 " />
      </Link>
    </div>
  );
};

export default ProductList;
