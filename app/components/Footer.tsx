import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Coffee</h3>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Coffee. All rights reserved.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-4 md:mb-0">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul>
              <li><Link href="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/our-company" className="text-gray-400 hover:text-white">Our Company</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/deliver" className="text-gray-400 hover:text-white">Deliver</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl" aria-label="Facebook">
              {/* Placeholder for Facebook icon */}
              <i className="fab fa-facebook"></i>
              FB
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl" aria-label="Twitter">
              {/* Placeholder for Twitter icon */}
              <i className="fab fa-twitter"></i>
              TW
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl" aria-label="Instagram">
              {/* Placeholder for Instagram icon */}
              <i className="fab fa-instagram"></i>
              IG
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
