import React from "react";
import { Link, useLocation } from "react-router-dom";
import useCartStore from "../Store/Cart";
import photu from "../assets/logo.png"; // ✅ Ensure this path is correct

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#335765] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Branding */}
        {/* <Link to="/" className="flex items-center gap-3">
          <img
            src={photu}
            alt="Grocery Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <h1 className="text-xl font-bold tracking-wide">FreshBasket</h1>
        </Link> */}
        <Link to="/" className="flex items-center gap-3">
  <img
            src={photu}
            alt="Grocery Logo"
            className="w-10 h-10 object-contain"
          />
  <div>
    <h1 className="text-2xl font-bold text-white tracking-wide leading-tight">
      Fresh<span className="text-[#B6D9E0]">Basket</span>
    </h1>
    <p className="text-xs text-[#DBE2DC] font-light -mt-1">
      by Ritika Singh
    </p>
  </div>
</Link>


        {/* Navigation */}
        <nav className="flex gap-6 items-center text-lg">
          <Link
            to="/"
            className={`hover:text-[#B6D9E0] transition ${
              location.pathname === "/" ? "underline font-semibold" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-[#B6D9E0] transition"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#74A8A4] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
