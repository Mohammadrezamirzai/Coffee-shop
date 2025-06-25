"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import { products } from "../data/Products";


const Products = () => {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  // Generate stable star ratings for each product
  const productStars = useMemo(() => {
    return products.map(product => ({
      id: product.id,
      stars: Math.floor(Math.random() * 2) + 4 // 4 or 5
    }));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8  p-8 ">
      {products.map((product) => {
        const productStar = productStars.find(ps => ps.id === product.id);
        const stars = productStar ? productStar.stars : 4;
        const cartItem = items.find((item) => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        return (
          <div
            key={product.id}
            className="bg-gray-100 h-75 md:h-80 w-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-40  object-cover rounded-t-xl"
              />
            </Link>
              <div className="p-2">
                <h3 className=" md:text-xl font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color: i < stars ? "#facc15" : "#e5e7eb",
                        fontSize: 15,
                        marginRight: 2,
                      }}>
                      {i < stars ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 md:text-lg">${product.price}</p>
              </div>
            <div className="p-4  pt-0 flex items-center gap-2">
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: parseFloat(product.price),
                    image: product.image,
                  })
                }
                className=" cursor-pointer text-sm md:text-md  w-full bg-indigo-600 text-white px-3 py-1 md:py-3 md:px-6 rounded-lg font-semibold hover:bg-indigo-900 transition-colors duration-200">
                Add Item
              </button>
              {quantity > 0 && (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-500 rounded-full">
                  {quantity}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
