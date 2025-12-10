import z from "zod";

// types for Single Product:
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  category: string;
  createdAt: string;
};

// types for Multiple Products:
export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

// Shipping Form Validation Schema and Types using Zod:
export const shippingFormSchema = z.object({
  name: z.string().min(1, "وارد کردن نام الزامی است!"),
  email: z
    .string()
    .email("ایمیل معتبر وارد کنید!")
    .min(1, "وارد کردن ایمیل الزامی است!"),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست!"),
  address: z.string().min(1, "وارد کردن آدرس الزامی است!"),
  city: z.string().min(1, "وارد کردن شهر الزامی است!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
