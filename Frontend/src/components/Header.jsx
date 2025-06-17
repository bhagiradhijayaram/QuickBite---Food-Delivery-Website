import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const cartItemsCount = cartItems.length;

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/signin");
  };

  const toggleMenuBtn = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="p-3 text-white border-b border-gray-700 bg-[#242424] flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-white text-3xl font-bold">QuickBite</h1>

      {/* Desktop Nav */}
      <nav className="hidden sm:block">
        <ul className="flex justify-between items-center gap-4 text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Cart + Profile */}
      <div className="hidden sm:flex gap-4 items-center">
        <Link
          to="/cart"
          className="relative flex items-center gap-1 text-white"
        >
          <div className="relative">
            <BsCart3 size={25} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItemsCount}
              </span>
            )}
          </div>
          <span className="ml-1">Cart</span>
        </Link>

        <div className="relative group">
          <button className="flex items-center cursor-pointer">
            <CgProfile size={25} />
          </button>
          <div className="absolute right-0 top-full mt-6 w-40 bg-white text-black rounded shadow-sm p-2 opacity-0 group-hover:opacity-100 group-hover:block invisible group-hover:visible transition-all duration-200 z-10">
            <p className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
              Profile
            </p>
            <p className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Orders</p>
            <button
              className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button (3-bars) */}
      <div className="block sm:hidden">
        <button onClick={toggleMenuBtn}>
          <AiOutlineMenuUnfold size={25} />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-[#1e1e1e] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setToggle(false)}>
            <RxCross2 size={25} />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>
            <Link to="/" onClick={() => setToggle(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setToggle(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setToggle(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/offers" onClick={() => setToggle(false)}>
              Offers
            </Link>
          </li>
          <li>
            <Link to="/location" onClick={() => setToggle(false)}>
              Location
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              onClick={() => setToggle(false)}
              className="flex gap-2"
            >
              <div className="relative">
                <BsCart3 size={25} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItemsCount}
                  </span>
                )}
              </div>
              <span className="ml-1">Cart</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setToggle(false);
                handleLogout();
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
