"use client";

import { getPersianColor } from "@/utils/colorUtils";

interface ColorDisplayProps {
  colorCode: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({
  colorCode,
  showLabel = true,
  size = "md",
}) => {
  const { name, hex } = getPersianColor(colorCode);

  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-full color-indicator border-2 border-gray-300 shadow-sm hover:shadow-md transition-all duration-200`}
        style={{
          backgroundColor: hex,
          borderColor: hex === "#ffffff" ? "#9CA3AF" : hex,
        }}
        title={name}
      />
      {showLabel && (
        <span className="text-xs">{name}</span>
      )}
    </div>
  );
};

export default ColorDisplay;
