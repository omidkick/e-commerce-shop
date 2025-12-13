import { persianColorMap } from "@/types";

export const getPersianColor = (
  colorCode: string
): { name: string; hex: string } => {
  const colorLower = colorCode.toLowerCase();
  return (
    persianColorMap[colorLower] || {
      name: colorCode,
      hex: "#9CA3AF", // Default gray
    }
  );
};

/**
 * Get all available Persian color translations
 */
export const getPersianColorList = () => {
  return Object.entries(persianColorMap).map(([code, value]) => ({
    code,
    ...value,
  }));
};