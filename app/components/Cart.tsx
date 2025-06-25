"use client";

import React from "react";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { items, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
    useCartStore();
  const router = useRouter();

  const calculateTotal = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleConfirmOrder = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Please add items before confirming.");
      return;
    }
    router.push("/checkout");
    clearCart();
  };

  return (
    <div
      className={`container mx-auto p-4 pt-10 min-h-96 bg-gray-300 text-gray-950 shadow-lg rounded-lg mt-24 ${
        items.length === 0
          ? " flex flex-col items-center justify-center"
          : ""
      }`}>
      <h1 className="text-2xl md:text-3xl font-bold text-center  mb-6">
        Your Shopping Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. Start adding some delicious items!
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-grow ml-4">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <div className="flex  items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="cursor-pointer bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition-colors">
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b border-gray-200 text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="cursor-pointer bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition-colors">
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer ml-4 text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-6 pt-4 border-t-2 space-x-4 border-gray-300">
            <h2 className="text-xl md:text-2xl font-bold">Total:</h2>
            <p className="text-xl md:text-2xl font-bold">${calculateTotal()}</p>
          </div>
          <div className="flex items-center justify-center">

            <button
              onClick={handleConfirmOrder}
              className="mt-6 cursor-pointer max-w-50 bg-blue-500 border-2 border-blue-500 text-gray-100 hover:text-blue-500 py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-100 transition-colors duration-200">
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
