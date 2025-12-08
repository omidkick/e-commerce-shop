import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";
import Logo from "./Logo";
import ShoppingCartIcon from "./ShoppingCartIcon";
import NotificationIcon from "./NotificationIcon";
import HomeIcon from "./HomeIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-3 md:mt-3 ">
      {/* Right: Logo*/}
      <Logo />
      {/* Left: searchBar + NavLinks + signin */}
      <div className="flex items-center gap-6">
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
