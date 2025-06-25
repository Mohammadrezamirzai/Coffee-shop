"use client";

import React from "react";
import Image from "next/image";
import { useCartStore } from "../../store/cartStore";
import { products } from "../../data/Products"; // Import products data
import { notFound } from "next/navigation";

// Define Product type for type safety
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const exampleComments = [
  "So delicious!",
  "Amazing taste!",
  "Would buy again.",
  "Best I've ever had!",
  "Highly recommend!",
];

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const product = (products as Product[]).find(
    (p: Product) => p.id === parseInt(id)
  );

  if (!product) {
    notFound();
  }

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
    });

  };

  return (
    <div className="container mx-auto p-4 my-4 mt-20  bg-white shadow-lg rounded-lg max-w-3xl  flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="md:w-1/2 pl-2 md:pl-0 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>
        <p className="text-gray-700 text-xl mb-2">${product.price}</p>
        <p className="text-gray-600  leading-relaxed mb-2 text-xs">
          This is a detailed description for {product.name}. Enjoy its rich
          flavor and unique qualities. Each product is carefully selected to
          ensure the highest quality and an unforgettable experience. Perfect
          for any time of day.
        </p>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            User Comments
          </h2>
          <ul className="space-y-2">
            {exampleComments.map((comment, idx) => (
              <li
                key={idx}
                className="bg-gray-200 rounded px-3 py-2 text-gray-700 text-xs">
                {comment}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 cursor-pointer transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
