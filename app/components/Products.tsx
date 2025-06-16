"use client";

import React from 'react';
import Image from 'next/image';
import { useCartStore } from '../store/cartStore';
import Link from 'next/link';

export const products = [
  {
    id: 1,
    name: 'Hot Chocolate',
    price: '5.00',
    image: '/images/Hot-chocolate.jpg',
  },
  {
    id: 2,
    name: 'Cake',
    price: '7.50',
    image: '/images/Cake.jpg',
  },
  {
    id: 3,
    name: 'Chocolate Cake',
    price: '8.00',
    image: '/images/Cake-chocolate.jpg',
  },
  {
    id: 4,
    name: 'Cookie Box',
    price: '12.00',
    image: '/images/Coockie-box.jpg',
  },
  {
    id: 5,
    name: 'Iced Americano',
    price: '4.50',
    image: '/images/ice-amircano.jpg',
  },
  {
    id: 6,
    name: 'Iced Latte',
    price: '5.50',
    image: '/images/ice-latte.jpg',
  },
  {
    id: 7,
    name: 'Espresso',
    price: '3.00',
    image: '/images/espersso.jpg',
  },
  {
    id: 8,
    name: 'Frappuccino',
    price: '6.00',
    image: '/images/Frappuccino.jpg',
  },
  {
    id: 9,
    name: 'Americano',
    price: '4.00',
    image: '/images/amircano.jpg',
  },
  {
    id: 10,
    name: 'Latte',
    price: '5.00',
    image: '/images/latte.jpg',
  },
  {
    id: 11,
    name: 'Espresso 2',
    price: '3.50',
    image: '/images/esspersso2.jpg',
  },
];

const Products = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={250}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-gray-700 text-lg">${product.price}</p>
            </div>
          </Link>
          <div className="p-4 pt-0">
            <button
              onClick={() => addItem({ id: product.id, name: product.name, price: parseFloat(product.price), image: product.image })}
              className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
            >
              Add Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
