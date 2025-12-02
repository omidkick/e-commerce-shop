import iranYekanFont from "@/constants/localFont";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${iranYekanFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
