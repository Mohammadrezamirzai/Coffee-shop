"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCartStore } from "../store/cartStore";
import { useUiStore } from "../store/uiStore";

const Navbar = () => {
  const { isMenuOpen, setMenuOpen } = useUiStore();
  const cartItemCount = useCartStore((state) => state.items.length);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ... existing code ...
  };

  return (
    <nav className="flex justify-between px-20 items-center bg-white py-4 relative">
      <div className="">
        <Link href="/">
          <Image src="/icon/1.png" alt="Logo" width={150} height={150} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }></path>
          </svg>
        </button>
      </div>

      <div
        className={`
          absolute top-full left-0 w-full
          shadow-md md:shadow-none transition-all duration-300 ease-in-out
          text-xl
          md:relative md:top-auto md:left-auto md:w-auto
          md:flex md:items-center md:bg-transparent
          ${isMenuOpen ? 'block flex flex-col items-center bg-white opacity-90' : 'hidden'}
        `}>
        <Link
          href="/"
          className={`block px-6 py-2 border-none rounded cursor-pointer transition-colors ${pathname === '/' ? 'font-bold text-blue-500' : 'text-gray-700 hover:text-gray-400'}`}
          onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          href="/order"
          className={`block px-6 py-2 border-none rounded cursor-pointer transition-colors ${pathname === '/order' ? 'font-bold text-blue-500' : 'text-gray-700 hover:text-gray-400'}`}
          onClick={() => setMenuOpen(false)}>
          Order
        </Link>

        <Link
          href="/info"
          className={`block px-6 py-2 border-none rounded cursor-pointer transition-colors ${pathname === '/info' ? 'font-bold text-blue-500' : 'text-gray-700 hover:text-gray-400'}`}
          onClick={() => setMenuOpen(false)}>
          Information
        </Link>
        <Link
          href="/cart"
          className={`block px-6 py-2 border-none rounded cursor-pointer transition-colors ${pathname === '/cart' ? 'font-bold text-blue-500' : 'text-gray-700 hover:text-gray-400'}`}
          onClick={() => setMenuOpen(false)}>
          Cart({cartItemCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
