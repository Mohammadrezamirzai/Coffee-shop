import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkBlue">
      <div className="container flex flex-col items-center justify-center space-x-0 md:space-x-10 lg:space-x-20 xl:space-x-40 mx-auto space-y-16 px-4 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-6">
          <Image src="/icon/3.png" alt="Logo" width={60} height={60} />

        </div>
        <div className="flex flex-col items-center justify-center space-y-8 text-lg font-light md:flex-row space-x-0 md:space-y-0 md:space-x-14 text-grayishBlue">
          <Link href="#features" className="uppercase hover:text-gray-500">
            Features
          </Link>
          <Link href="#download" className="uppercase hover:text-gray-500">
            Download
          </Link>
          <Link href="/Information" className="uppercase hover:text-gray-500">
            Information
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          {" "}
          <Link href="/" className="">
            <Image
              className="ficon"
              src="/icon/icon-facebook.svg"
              alt="svg"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              className="ficon"
              src="/icon/icon-twitter.svg"
              alt="svg"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
