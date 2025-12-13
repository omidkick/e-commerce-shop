import { ShippingFormInputs, shippingFormSchema } from "@/types";
import RHFTextField from "@/ui/RHFTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ContinueButton from "@/ui/ContinueButton";

interface ShippingFormProps {
  /**
   * Callback function when form is submitted
   * Receives validated shipping form data
   */
  onSubmit: (data: ShippingFormInputs) => void;
}

/**
 * ShippingForm Component
 * Collects user shipping information:
 * - Name
 * - Email
 * - Phone number
 * - Address
 * - City
 *
 * Uses React Hook Form for validation
 * Passes data to parent component via callback
 */
const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const handleFormSubmit: SubmitHandler<ShippingFormInputs> = (data) => {
    // Call parent's onSubmit callback with validated data
    onSubmit(data);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      {/* Name Field */}
      <RHFTextField<ShippingFormInputs>
        label="نام و نام خانوادگی"
        name="name"
        dir="rtl"
        register={register}
        errors={errors.name}
        isRequired
        placeholder="نام و نام خانوادگی خود را وارد کنید"
      />

      {/* Email Field */}
      <RHFTextField<ShippingFormInputs>
        type="email"
        label="ایمیل"
        name="email"
        dir="ltr"
        register={register}
        errors={errors.email}
        isRequired
        placeholder="example@domain.com"
      />

      {/* Phone Field */}
      <RHFTextField<ShippingFormInputs>
        type="tel"
        label="شماره موبایل"
        name="phone"
        dir="ltr"
        register={register}
        errors={errors.phone}
        isRequired
        placeholder="09123456789"
      />

      {/* Address Field */}
      <RHFTextField<ShippingFormInputs>
        label="آدرس"
        name="address"
        dir="rtl"
        register={register}
        errors={errors.address}
        isRequired
        placeholder="آدرس کامل خود را وارد کنید"
      />

      {/* City Field */}
      <RHFTextField<ShippingFormInputs>
        label="شهر"
        name="city"
        dir="rtl"
        register={register}
        errors={errors.city}
        isRequired
        placeholder="شهر خود را وارد کنید"
      />

      {/* Submit Button */}
      <ContinueButton type="submit" isLoading={isSubmitting}>
        ادامه خرید
      </ContinueButton>
    </form>
  );
};

export default ShippingForm;