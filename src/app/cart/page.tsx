"use client";

import { ShippingFormInputs } from "@/types";
import {
  convertToPersianDigits,
  formatPriceInToman,
} from "@/utils/toPersianNumbers";
import { useRouter, useSearchParams } from "next/navigation";
import ShippingForm from "./_components/ShippingForm";
import PaymentForm from "./_components/PaymentForm";
import { useState, Suspense } from "react";
import { CgDanger } from "react-icons/cg";
import Image from "next/image";
import Fallback from "@/ui/Fallback";
import ContinueButton from "@/ui/ContinueButton";
import { Trash2 } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import ColorDisplay from "@/components/ColorDisplay";

const steps = [
  {
    id: 1,
    title: "سبد خرید",
  },
  {
    id: 2,
    title: "آدرس تحویل",
  },
  {
    id: 3,
    title: " پرداخت و تکمیل سفارش",
  },
];

// Wrap the main component content in a separate component
function CartPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1");

  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">سبد خرید شما</h1>
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {convertToPersianDigits(step.id)}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* Steps */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.map((item) => (
              // SINGLE CART ITEM
              <div
                className="flex items-center justify-between"
                key={item.id + item.selectedSize + item.selectedColor}
              >
                {/* IMAGE AND DETAILS */}
                <div className="flex gap-8">
                  {/* IMAGE */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* ITEM DETAILS */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        <span className="ml-1"> تعداد:</span>
                        {convertToPersianDigits(item.quantity)} عدد
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="ml-1"> سایز:</span>
                        {item.selectedSize}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">رنگ:</span>
                        <ColorDisplay
                          colorCode={item.selectedColor}
                          showLabel={true}
                          size="sm"
                        />
                      </div>
                    </div>
                    {/* <hr className="border-gray-200" /> */}
                    <p className="font-medium text-sm">
                      {formatPriceInToman(item.price.toFixed(3))}
                    </p>
                  </div>
                </div>
                {/* DELETE BUTTON */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <div className="flex items-center gap-2 text-gray-500 ">
              <CgDanger className="w-6 h-6 text-red-500" />
              <p>لطفاً فرم آدرس را تکمیل کنید تا ادامه دهید.</p>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          {/* Title */}
          <h2 className="font-semibold">جزئیات پرداخت</h2>
          <div className="flex flex-col gap-4">
            {/* Total Price */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">جمع کل</p>
              <p className="font-medium">
                {formatPriceInToman(
                  cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)
                )}
              </p>
            </div>
            {/* Discount */}
            <div className="flex justify-between text-sm text-red-500">
              <p className="">تخفیف </p>
              <p className="font-medium">{convertToPersianDigits("0")} تومان</p>
            </div>
            {/* Shipping price */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500"> هزینه ارسال</p>
              <p className="font-medium">
                {convertToPersianDigits("100")} تومان
              </p>
            </div>
            <hr className="border-gray-200" />
            {/* Final Price */}
            <div className="flex justify-between font-bold text-gray-800">
              <p>قابل پرداخت</p>
              <p>
                {formatPriceInToman(
                  cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)
                )}
              </p>
            </div>
          </div>

          {/* button */}
          {activeStep === 1 && (
            <ContinueButton
              onClick={() => router.push("/cart?step=2", { scroll: false })}
            >
              ادامه خرید
            </ContinueButton>
          )}
        </div>
      </div>
    </div>
  );
}

const CartPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Fallback variant="centered" size="lg" />
        </div>
      }
    >
      <CartPageContent />
    </Suspense>
  );
};

export default CartPage;
