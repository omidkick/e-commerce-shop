"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSort = searchParams.get("sort") || "newest";

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-start gap-2 text-sm text-gray-500 my-6">
      <span className="font-medium">مرتب‌سازی بر اساس:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-2 rounded-md text-sm bg-white cursor-pointer"
        onChange={(e) => handleFilter(e.target.value)}
        value={currentSort}
      >
        <option value="newest">جدیدترین</option>
        <option value="oldest">قدیمی‌ترین</option>
        <option value="asc">قیمت: ارزان ترین</option>
        <option value="desc">قیمت: گران ترین</option>
      </select>
    </div>
  );
};

export default Filter;
