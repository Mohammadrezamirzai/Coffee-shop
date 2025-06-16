"use client";

import React from 'react';
import Image from 'next/image';
import { useCartStore } from '../../store/cartStore';
import { products } from '../../components/Products'; // Import products data
import { notFound } from 'next/navigation';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: parseFloat(product.price), image: product.image });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto p-4 my-8 bg-white shadow-lg rounded-lg max-w-3xl flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
        <p className="text-gray-700 text-2xl mb-4">${product.price}</p>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          This is a detailed description for {product.name}. Enjoy its rich flavor and unique qualities. Each product
          is carefully selected to ensure the highest quality and an unforgettable experience. Perfect for any time of day.
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
