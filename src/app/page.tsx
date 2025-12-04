import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="text-5xl">
      <div className="relative aspect-3/1 mb-12 mt-10 ">
        <Image src="/featured.png" alt="Featured product" fill className="" />
      </div>
      <ProductList />
    </div>
  );
};

export default Homepage;
