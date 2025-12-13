import {
  PaymentFormInputs,
  paymentFormSchema,
  OrderDetailsType,
  ShippingFormInputs,
} from "@/types";
import ContinueButton from "@/ui/ContinueButton";
import RHFTextField from "@/ui/RHFTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useCartStore from "@/stores/cartStore";
import useOrderStore from "@/stores/orderStore";
import PaymentSuccessPage from "@/components/PaymentSuccessPage";
import { toast } from "react-toastify";

interface PaymentFormProps {
  shippingInfo?: ShippingFormInputs;
}

/**
 * Payment Form Component
 * - Collects payment details from user
 * - Creates order details combining shipping + payment + cart info
 * - Saves order to localStorage via orderStore
 * - Displays success page after payment
 */
const PaymentForm: React.FC<PaymentFormProps> = ({ shippingInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { cart, clearCart } = useCartStore();
  const { addOrder } = useOrderStore(); // Use order store instead of cart store

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    // Validate shipping info exists
    if (!shippingInfo) {
      toast.error("لطفاً ابتدا اطلاعات تحویل را پر کنید");
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      // Calculate amounts
      const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const shippingFee = 100;
      const finalAmount = totalAmount + shippingFee;

      // Create order details with all information
      const orderDetails: OrderDetailsType = {
        orderId: `ORD-${Date.now()}`,
        orderDate: new Date().toISOString(),
        shippingInfo,
        paymentInfo: {
          cardHolder: data.cardHolder,
          expirationDate: data.expirationDate,
        },
        items: cart,
        totalAmount,
        shippingFee,
        finalAmount,
      };

      // Save order to localStorage via order store
      addOrder(orderDetails);

      // Clear cart after successful payment
      clearCart();

      // Show success page
      setPaymentSuccess(true);

      // Show success toast
      toast.success("سفارش شما با موفقیت ثبت شد!");
    }, 2000);
  };

  if (paymentSuccess) {
    const { getCurrentOrder } = useOrderStore.getState();
    const orderDetails = getCurrentOrder();
    if (orderDetails) {
      return <PaymentSuccessPage orderDetails={orderDetails} />;
    }
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      {/* Card Holder Name */}
      <RHFTextField<PaymentFormInputs>
        label="نام صاحب کارت"
        name="cardHolder"
        dir="rtl"
        register={register}
        errors={errors.cardHolder}
        isRequired
        placeholder="نام صاحب کارت را وارد کنید"
      />

      {/* Card Number */}
      <RHFTextField<PaymentFormInputs>
        type="text"
        label="شماره کارت"
        name="cardNumber"
        dir="ltr"
        register={register}
        errors={errors.cardNumber}
        isRequired
        placeholder="1234 5678 9012 3456"
        maxLength={16}
      />

      {/* Expiration Date */}
      <RHFTextField<PaymentFormInputs>
        type="text"
        label="تاریخ انقضاء"
        name="expirationDate"
        dir="ltr"
        register={register}
        errors={errors.expirationDate}
        isRequired
        placeholder="MM/YY"
        maxLength={5}
      />

      {/* CVV */}
      <RHFTextField<PaymentFormInputs>
        type="text"
        label="CVV"
        name="cvv"
        dir="ltr"
        register={register}
        errors={errors.cvv}
        isRequired
        placeholder="123"
        maxLength={3}
      />

      {/* Payment Methods */}
      <div className="flex items-center gap-2 mt-2">
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

      {/* Submit Button */}
      <ContinueButton
        type="submit"
        icon={<ShoppingCart className="w-4 h-4" />}
        isLoading={isSubmitting}
      >
        {isSubmitting ? "درحال پرداخت..." : "تکمیل سفارش"}
      </ContinueButton>
    </form>
  );
};

export default PaymentForm;
