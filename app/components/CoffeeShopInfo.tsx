import React from 'react';
import Image from 'next/image';

const CoffeeShopInfo = () => {
  const addressImageUrl = "/images/address.png";
  const insideShop1 = "/Info/inside-shop.webp";
  const insideShop2 = "/Info/inside2-shop.jpeg";

  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-8   mx-auto max-w-5xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Welcome to Our Coffee Shop!</h2>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Discover the perfect blend of rich aromas and cozy ambiance at our coffee shop. We pride ourselves on serving
        ethically sourced, high-quality coffee beans from around the world, crafted into delightful beverages by our
        expert baristas. Whether you're looking for a quiet spot to work, a place to catch up with friends, or just a
        moment to savor a delicious cup, we've got you covered.
      </p>

      <div className="mt-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-3">A Glimpse Inside:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
            <Image
              src={insideShop1}
              alt="Inside Coffee Shop 1"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
            <Image
              src={insideShop2}
              alt="Inside Coffee Shop 2"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Experience the cozy and inviting atmosphere of our coffee shop.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">More About Us:</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Freshly roasted beans delivered weekly.</li>
        <li>A wide selection of pastries and snacks baked fresh daily.</li>
        <li>Comfortable seating and free Wi-Fi for our valued customers.</li>
        <li>Regular live music events and open mic nights.</li>
        <li>Friendly and passionate staff dedicated to your perfect coffee experience.</li>
      </ul>

      <div className="border-t border-gray-300 pt-6 mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visit Us:</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> 123 Coffee Lane, Brewton, CA 90210
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Phone:</span> (123) 456-7890
        </p>
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Location:</h4>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src={addressImageUrl}
              alt="Our Coffee Shop Location"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            This is an illustrative image of our coffee shop location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopInfo;
