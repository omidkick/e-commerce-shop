import iranYekanFont from "@/constants/localFont";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${iranYekanFont.variable} font-sans`}>
        <div className="mx-auto p-4 sm:p-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          <div className="px-3 md:px-4">{children}</div>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" rtl={true} />
      </body>
    </html>
  );
}
