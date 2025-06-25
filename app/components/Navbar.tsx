"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import { useUiStore } from "../store/uiStore";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { isMenuOpen, setMenuOpen } = useUiStore();
  const cartItemCount = useCartStore((state) => state.items.length);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSignedUp(localStorage.getItem("isSignedUp") === "true");
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setMenuOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      // Listen for localStorage changes (e.g., signup in another tab or programmatically)
      const handleStorage = () => {
        setIsSignedUp(localStorage.getItem("isSignedUp") === "true");
      };
      window.addEventListener("storage", handleStorage);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("storage", handleStorage);
      };
    }
  }, [setMenuOpen]);

  // Also update isSignedUp on route change (for client-side navigation)
  useEffect(() => {
    setIsSignedUp(localStorage.getItem("isSignedUp") === "true");
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const linkClass = (href: string) =>
    `block px-6 py-2 border-none rounded cursor-pointer transition-colors ${
      pathname === href ? " text-gray-400" : "text-gray-200 hover:text-gray-400"
    }`;

  return (
    <nav className="flex justify-between px-16 items-center bg-black h-20 fixed opacity-90 top-0 left-0 right-0 shadow-xl z-50 ">
      <div className="">
        <Link className="flex items-center space-x-2 " href="/">
          <Image src="/icon/3.png" alt="Logo" width={50} height={50} />
          <p className="font-bold text-lg">STAR BUCKS</p>
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-200 hover:text-gray-400 cursor-pointer focus:outline-none">
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
          text-lg
          md:relative md:top-auto md:left-auto md:w-auto
          md:flex md:items-center md:bg-transparent
          z-50
          ${
            isMenuOpen
              ? "block absolute flex flex-col items-center bg-black opacity-95"
              : "hidden"
          }
        `}>
        <Link
          href="/"
          className={linkClass("/") + " px-4"}
          onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          href="/order"
          className={linkClass("/order")}
          onClick={() => setMenuOpen(false)}>
          Order
        </Link>
        <Link
          href="/info"
          className={linkClass("/info")}
          onClick={() => setMenuOpen(false)}>
          Information
        </Link>
        <Link
          href="/cart"
          className={linkClass("/cart") + " md:pr-2"}
          onClick={() => setMenuOpen(false)}>
          Cart({cartItemCount})
        </Link>
        {isSignedUp ? (
          <Link
            href="/dashboard"
            className={linkClass("/dashboard") + " md:pr-2 flex items-center justify-center"}
            onClick={() => setMenuOpen(false)}
            aria-label="User Dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A2.25 2.25 0 016.75 16.5h10.5a2.25 2.25 0 012.25 2.25v1.5"
              />
            </svg>
          </Link>
        ) : (
          <Link
            href="/signup"
            className={linkClass("/signup") + " md:pr-2"}
            onClick={() => setMenuOpen(false)}>
            signup
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
