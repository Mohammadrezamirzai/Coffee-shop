import React from "react";
import Image from "next/image";
import Link from "next/link";

const CoffeeShopInfo = () => {
  return (
    <div className="relative w-full h-120">
      <Image
        src="/images/header.jpeg"
        alt="header image"
        fill
        className="object-cover md:object-fill bg-center self-center"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
        <h2 className="text-3xl font-bold mb-2">HANDCRAFTED</h2>
        <p className="mb-4">
          Choose from our wide range of handcrafted coffees
        </p>
        <Link href="/order">
          <button className="px-4 py-2 bg-[#052800] text-white cursor-pointer duration-200  hover:bg-[#22452a] rounded-lg">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeShopInfo;
