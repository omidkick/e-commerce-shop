import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  return <form className="flex flex-col gap-4">
    
  </form>;
};

export default ShippingForm;
