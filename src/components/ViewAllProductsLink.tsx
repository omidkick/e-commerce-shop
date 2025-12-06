import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

interface ViewAllProductsLinkProps {
  selectedCategory: string;
  show?: boolean;
}

const ViewAllProductsLink = ({
  selectedCategory,
  show = true,
}: ViewAllProductsLinkProps) => {
  if (!show) return null;

  const href =
    selectedCategory && selectedCategory !== "all"
      ? `/products/?category=${selectedCategory}`
      : "/products";

  return (
    <Link
      href={href}
      className="mt-8 flex items-center gap-2 text-yellow-500 font-medium hover:underline text-lg transition-all duration-200 hover:gap-3"
    >
      مشاهده همه محصولات
      <ArrowLeftIcon className="w-5 h-5" />
    </Link>
  );
};

export default ViewAllProductsLink;
