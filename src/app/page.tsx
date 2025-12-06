import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="text-5xl">
      <div className="relative aspect-3/1 mb-12 mt-10 md:mb-20 md:mt-20">
        <Image src="/featured.png" alt="Featured product" fill className="" />
      </div>
      <ProductList />
    </div>
  );
};

export default Homepage;

// const Homepage = async ({
//   searchParams,
// }: {
//   searchParams: Promise<{ category: string }>;
// }) => {
//   const selectedCategory = (await searchParams).category || "all";
//   return (
//     <div className="text-5xl">
//       <div className="relative aspect-3/1 mb-12 mt-10 md:mb-20 md:mt-20">
//         <Image src="/featured.png" alt="Featured product" fill className="" />
//       </div>
//       <ProductList category={selectedCategory} />
//     </div>
//   );
// };

// export default Homepage;
