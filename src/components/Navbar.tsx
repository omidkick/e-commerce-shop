import React from "react";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-3 mt-3 ">
      {/* Right: Logo*/}
      <Logo />
      {/* Left: searchBar + NavLinks + signin */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <NavLinks />
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
