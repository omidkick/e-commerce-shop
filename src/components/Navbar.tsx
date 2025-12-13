"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";
import Logo from "./Logo";
import ShoppingCartIcon from "./ShoppingCartIcon";
import NotificationIcon from "./NotificationIcon";
import HomeIcon from "./HomeIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true when scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between py-3 md:py-2 border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-lg"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      {/* Right: Logo */}
      <Logo />

      {/* Left: SearchBar + NavLinks + signin */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        <SearchBar />

        {/* Icon buttons */}
        <div className="flex items-center gap-1 lg:gap-3">
          <HomeIcon />
          <NotificationIcon />
          <ShoppingCartIcon />
        </div>

        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
