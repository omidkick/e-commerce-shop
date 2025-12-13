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



/**
 * Success page displayed after successful payment
 * Shows order details with animated elements
 */
const PaymentSuccessPage: React.FC<PaymentSuccessPageProps> = ({
  orderDetails,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="flex flex-col items-center justify-center py-12 px-4 gap-8">
        {/* Success Icon Animation */}
        <div className="relative">
          <div className="absolute inset-0 animate-pulse bg-green-100 rounded-full w-24 h-24"></div>
          <CheckCircle2 className="w-24 h-24 text-green-500 check-animated relative z-10" />
        </div>

        {/* Success Message */}
        <div className="text-center fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            پرداخت موفقیت‌آمیز
          </h1>
          <p className="text-gray-600 text-lg">سفارش شما با موفقیت ثبت شد</p>
        </div>

        {/* Order ID */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">شماره سفارش:</span>
            <span className="font-bold text-lg text-gray-900">
              #{convertToPersianDigits(orderDetails.orderId)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">تاریخ سفارش:</span>
            <span className="text-sm text-gray-700">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Shipping Information */}
          <div className="bg-white rounded-lg shadow-md p-6 fade-in-up">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-blue-100">
              <MapPin className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                اطلاعات تحویل
              </h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 mb-1">نام تماس:</p>
                <p className="font-medium text-gray-900">
                  {orderDetails.shippingInfo.name}
                </p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">آدرس:</p>
                <p className="font-medium text-gray-900">
                  {orderDetails.shippingInfo.address}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-gray-500 mb-1">شهر:</p>
                  <p className="font-medium text-gray-900">
                    {orderDetails.shippingInfo.city}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">تلفن:</p>
                  <p className="font-medium text-gray-900 dir-ltr">
                    {convertToPersianDigits(orderDetails.shippingInfo.phone)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-md p-6 fade-in-up">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-green-100">
              <CreditCard className="w-5 h-5 text-green-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                اطلاعات پرداخت
              </h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 mb-1">نام صاحب کارت:</p>
                <p className="font-medium text-gray-900">
                  {orderDetails.paymentInfo.cardHolder}
                </p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">تاریخ انقضاء:</p>
                <p className="font-medium text-gray-900">
                  {orderDetails.paymentInfo.expirationDate}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  اطلاعات کارت شماره و CVV برای امنیت ذخیره نمی‌شود
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Items Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl fade-in-up">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-purple-100">
            <ShoppingBag className="w-5 h-5 text-purple-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              محصولات سفارش شده
            </h2>
          </div>

          <div className="space-y-4">
            {orderDetails.items.map((item) => (
              <div
                key={item.id + item.selectedSize + item.selectedColor}
                className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex gap-4 flex-1">
                  {/* Product Image */}
                  <div className="relative w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-center gap-1 flex-1">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
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
                </div>

                {/* Quantity and Price */}
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">
                    تعداد: {convertToPersianDigits(item.quantity.toString())}
                  </p>
                  <p className="font-semibold text-gray-900">
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
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md p-6 w-full max-w-4xl fade-in-up">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-gray-700">
              <span>جمع کل:</span>
              <span className="font-medium">
                {formatPriceInToman(orderDetails.totalAmount.toFixed(2))}
              </span>
            </div>
            <div className="flex justify-between items-center text-gray-700">
              <span>هزینه ارسال:</span>
              <span className="font-medium">
                {formatPriceInToman(orderDetails.shippingFee.toFixed(2))}
              </span>
            </div>
            <div className="border-t border-gray-300 pt-3 flex justify-between items-center text-lg font-bold text-gray-900">
              <span>مبلغ نهایی:</span>
              <span className="text-green-600">
                {formatPriceInToman(orderDetails.finalAmount.toFixed(2))}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl fade-in-up">
          <Link
            href="/"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center"
          >
            بازگشت به خانه
          </Link>
          <Link
            href="/products"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center"
          >
            ادامه خرید
          </Link>
        </div>

        {/* Footer Info */}
        <div className="bg-blue-50 rounded-lg p-4 w-full max-w-4xl text-center text-sm text-blue-900 fade-in-up">
          <p className="mb-2">🎉 بسیار خوب! سفارش شما با موفقیت ثبت شد</p>
          <p>شما به زودی یک ایمیل تأیید دریافت خواهید کرد</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
