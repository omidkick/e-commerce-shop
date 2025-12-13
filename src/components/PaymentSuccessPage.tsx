"use client";

import { OrderDetailsType } from "@/types";
import {
  convertToPersianDigits,
  formatPriceInToman,
} from "@/utils/toPersianNumbers";
import { CheckCircle2, MapPin, CreditCard, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ColorDisplay from "@/components/ColorDisplay";

interface PaymentSuccessPageProps {
  orderDetails: OrderDetailsType;
}

const PaymentSuccessPage: React.FC<PaymentSuccessPageProps> = ({
  orderDetails,
}) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center py-6 sm:py-12 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {/* Success Icon Animation */}
        <div className="relative">
          <div className="absolute inset-0 animate-pulse bg-green-100 rounded-full w-20 h-20 sm:w-24 sm:h-24"></div>
          <CheckCircle2 className="w-20 h-20 sm:w-24 sm:h-24 text-green-500 check-animated relative z-10" />
        </div>

        {/* Success Message */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
            پرداخت موفقیت‌آمیز
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            سفارش شما با موفقیت ثبت شد
          </p>
        </div>

        {/* Order ID */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
            <span className="text-gray-600 text-sm sm:text-base">
              شماره سفارش:
            </span>
            <span className="font-bold text-base sm:text-lg text-gray-900">
              #{convertToPersianDigits(orderDetails.orderId)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <span className="text-gray-600 text-sm sm:text-base">
              تاریخ سفارش:
            </span>
            <span className="text-xs sm:text-sm text-gray-700">
              {new Date(orderDetails.orderDate).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        {/* Order Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Shipping Information */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b-2 border-blue-100">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                اطلاعات تحویل
              </h2>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div>
                <p className="text-gray-500 mb-0.5 sm:mb-1">نام خریدار:</p>
                <p className="font-medium text-gray-900 break-words">
                  {orderDetails.shippingInfo.name}
                </p>
              </div>
              <div>
                <p className="text-gray-500 mb-0.5 sm:mb-1">ایمیل:</p>
                <p className="font-medium text-gray-900 break-all">
                  {orderDetails.shippingInfo.email}
                </p>
              </div>
              <div>
                <p className="text-gray-500 mb-0.5 sm:mb-1">آدرس:</p>
                <p className="font-medium text-gray-900 break-words">
                  {orderDetails.shippingInfo.address}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <p className="text-gray-500 mb-0.5 sm:mb-1">شهر:</p>
                  <p className="font-medium text-gray-900">
                    {orderDetails.shippingInfo.city}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5 sm:mb-1">تلفن:</p>
                  <p className="font-medium text-gray-900 dir-ltr text-xs sm:text-sm">
                    {convertToPersianDigits(orderDetails.shippingInfo.phone)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b-2 border-green-100">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                اطلاعات پرداخت
              </h2>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div>
                <p className="text-gray-500 mb-0.5 sm:mb-1">نام صاحب کارت:</p>
                <p className="font-medium text-gray-900 break-words">
                  {orderDetails.paymentInfo.cardHolder}
                </p>
              </div>
              <div>
                <p className="text-gray-500 mb-0.5 sm:mb-1">تاریخ انقضاء:</p>
                <p className="font-medium text-gray-900">
                  {orderDetails.paymentInfo.expirationDate}
                </p>
              </div>
              <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  اطلاعات کارت شماره و CVV برای امنیت ذخیره نمی‌شود
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Items Summary */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-purple-100">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              محصولات سفارش شده
            </h2>
          </div>

          <div className="space-y-4">
            {orderDetails.items.map((item) => (
              <div
                key={item.id + item.selectedSize + item.selectedColor}
                className="flex gap-3 sm:gap-4 pb-4 border-b border-gray-100 last:border-b-0"
              >
                {/* Product Image */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.images[item.selectedColor]}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {item.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-600 mt-1">
                      <span>
                        سایز:{" "}
                        <span className="font-medium">{item.selectedSize}</span>
                      </span>
                      <ColorDisplay
                        colorCode={item.selectedColor}
                        showLabel
                        size="sm"
                      />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    تعداد: {convertToPersianDigits(item.quantity.toString())}
                  </p>
                </div>

                {/* Quantity and Price */}
                <div className="text-left flex flex-col justify-between flex-shrink-0">
                  <p className="font-semibold text-sm sm:text-base text-gray-900">
                    {formatPriceInToman(
                      (item.price * item.quantity).toFixed(2)
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md p-4 sm:p-6 w-full">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-700">
              <span>جمع کل:</span>
              <span className="font-medium">
                {formatPriceInToman(orderDetails.totalAmount.toFixed(2))}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-700">
              <span>هزینه ارسال:</span>
              <span className="font-medium">
                {formatPriceInToman(orderDetails.shippingFee.toFixed(2))}
              </span>
            </div>
            <div className="border-t border-gray-300 pt-2 sm:pt-3 flex justify-between items-center text-base sm:text-lg font-bold text-gray-900">
              <span>مبلغ نهایی:</span>
              <span className="text-green-600">
                {formatPriceInToman(orderDetails.finalAmount.toFixed(2))}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 text-center text-sm sm:text-base"
          >
            بازگشت به خانه
          </Link>
          <Link
            href="/products"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 text-center text-sm sm:text-base"
          >
            ادامه خرید
          </Link>
        </div>

        {/* Footer Info */}
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4 w-full text-center text-xs sm:text-sm text-blue-900">
          <p className="mb-1">🎉 بسیار خوب! سفارش شما با موفقیت ثبت شد</p>
          <p>شما به زودی یک ایمیل تأیید دریافت خواهید کرد</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
