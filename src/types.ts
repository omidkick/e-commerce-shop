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

// Color mapping to Persian names and hex values
export type PersianColorMapping = {
  [key: string]: {
    name: string;
    hex: string;
  };
};

export const persianColorMap: PersianColorMapping = {
  gray: { name: "خاکستری", hex: "#9CA3AF" },
  grey: { name: "خاکستری", hex: "#9CA3AF" },
  purple: { name: "بنفش", hex: "#A855F7" },
  green: { name: "سبز", hex: "#22C55E" },
  blue: { name: "آبی", hex: "#3B82F6" },
  black: { name: "سیاه", hex: "#1F2937" },
  white: { name: "سفید", hex: "#FFFFFF" },
  pink: { name: "صورتی", hex: "#EC4899" },
  red: { name: "قرمز", hex: "#EF4444" },
  orange: { name: "نارنجی", hex: "#F97316" },
  yellow: { name: "زرد", hex: "#FBBF24" },
  brown: { name: "قهوه‌ای", hex: "#92400E" },
  navy: { name: "سرمه‌ای", hex: "#001F3F" },
  lime: { name: "سبز فسفری", hex: "#84CC16" },
  cyan: { name: "فیروزه‌ای", hex: "#06B6D4" },
  teal: { name: "سبز تیره", hex: "#14B8A6" },
};

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

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "وارد کردن نام صاحب کارت الزامی است!"),
  cardNumber: z
    .string()
    .min(16, "وارد کردن شماره کارت الزامی است!")
    .max(16, "شماره کارت باید 16 رقم باشد!"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "تاریخ انقضاء باید به فرمت MM/YY باشد!"),
  cvv: z
    .string()
    .min(3, "وارد کردن CVV الزامی است!")
    .max(3, "CVV باید 3 رقم باشد!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

// Payment Success / Order Details Type
export type OrderDetailsType = {
  orderId: string;
  orderDate: string;
  shippingInfo: ShippingFormInputs;
  paymentInfo: Omit<PaymentFormInputs, "cardNumber" | "cvv">; 
  items: CartItemsType;
  totalAmount: number;
  shippingFee: number;
  finalAmount: number;
};

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
  orderDetails?: OrderDetailsType;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
  saveOrderDetails: (orderDetails: OrderDetailsType) => void;
  getOrderDetails: () => OrderDetailsType | undefined;
  clearOrderDetails: () => void;
};

// Authentication Types
export const authFormSchema = z.object({
  email: z
    .string()
    .email("ایمیل معتبر وارد کنید!")
    .min(1, "وارد کردن ایمیل الزامی است!"),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد!")
    .min(1, "وارد کردن رمز عبور الزامی است!"),
});

export type AuthFormInputs = z.infer<typeof authFormSchema>;

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
};

export type AuthStateType = {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  hasHydrated: boolean;
};

export type AuthStoreActionsType = {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
};