"use client";

import { Bell } from "lucide-react";
import Link from "next/link";
import { convertToPersianDigits } from "@/utils/toPersianNumbers";

interface NotificationIconProps {
  badge?: number;
}

const NotificationIcon = ({ badge }: NotificationIconProps) => {
  return (
    <Link
      href="/notifications"
      className="relative group"
      aria-label="اعلان‌ها"
    >
      <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-primary transition-colors" />
      </div>

      {/* Badge */}
      {badge && badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {convertToPersianDigits(badge)}
        </span>
      )}

      {/* Tooltip */}
      <span className="hidden lg:block absolute top-full mt-2 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        اعلان‌ها
      </span>
    </Link>
  );
};

export default NotificationIcon;
