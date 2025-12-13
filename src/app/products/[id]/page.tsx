import { ProductType } from "@/types";
import { formatPriceInToman } from "@/utils/toPersianNumbers";
import Image from "next/image";

// TEMPORARY
const product: ProductType = {
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
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { color, size } = await searchParams;
  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="relative w-full md:w-5/12 aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-contain rounded-md"
        />
      </div>

      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">
          {formatPriceInToman(product.price.toFixed(3))}
        </h2>

        {/* INTERACTIONS */}

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        {/* POLICIES*/}
        <p className="text-gray-500 text-xs">
          با کلیک روی «پرداخت اکنون»، شما با{" "}
          <span className="underline hover:text-black">شرایط و ضوابط</span> و{" "}
          <span className="underline hover:text-black">
            سیاست حفظ حریم خصوصی
          </span>{" "}
          ما موافقت می‌کنید. شما به ما اجازه می‌دهید مبلغ نهایی نمایش‌داده‌شده
          را از روش پرداخت انتخابی شما کسر کنیم. تمامی فروش‌ها تابع{" "}
          <span className="underline hover:text-black">
            سیاست‌های بازگشت و بازپرداخت
          </span>{" "}
          ما هستند.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
