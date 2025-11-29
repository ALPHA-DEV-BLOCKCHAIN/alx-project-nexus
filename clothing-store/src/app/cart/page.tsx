"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [wishfulItems, setWishfulItems] = useState<any[]>([]);

  const handleToggle = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAddToWishful = (item: any) => {
    if (!wishfulItems.find((i) => i.id === item.id)) {
      setWishfulItems((prev) => [...prev, item]);
      removeFromCart(item.id);
      alert(`${item.name} moved to Wishful Buying!`);
    }
  };

  const handleBackToCart = (item: any) => {
    addToCart(item);
    setWishfulItems((prev) => prev.filter((i) => i.id !== item.id));
    alert(`${item.name} added back to Cart!`);
  };

  const handleRemoveWishful = (item: any) => {
    setWishfulItems((prev) => prev.filter((i) => i.id !== item.id));
    alert(`${item.name} removed from Wishful Buying!`);
  };

  const handleCheckout = () => {
    if (checkedItems.length === 0) {
      alert("Please select items to checkout.");
      return;
    }
    router.push("/checkout"); // Later, pass only checkedItems to checkout
  };

  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="rounded-[30px] shadow-lg bg-white p-4 flex flex-col"
          >
            <Image
              src={item.image}
              width={400}
              height={400}
              alt={item.name}
              className="rounded-[30px] object-cover h-48 w-full"
            />

            <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>

            <div className="mt-2 flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleToggle(item.id)}
                  className="w-5 h-5 accent-blue-600"
                />
                Buy
              </label>

              <button
                onClick={() => handleAddToWishful(item)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-[30px] transition-all text-sm"
              >
                Wishful
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-[30px] transition-all"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleCheckout}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-[30px] text-lg transition-all"
          >
            Checkout
          </button>
        </div>
      )}

      {/* Wishful Buying Section */}
      {wishfulItems.length > 0 && (
        <div className="mt-10">
          <hr className="my-6 border-gray-300" />
          <h2 className="text-3xl font-bold mb-4">Wishful Buying</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishfulItems.map((item) => (
              <div
                key={item.id}
                className="rounded-[30px] shadow-lg bg-white p-4 flex flex-col"
              >
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt={item.name}
                  className="rounded-[30px] object-cover h-48 w-full"
                />
                <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleBackToCart(item)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-[30px] transition-all"
                  >
                    Add Back to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveWishful(item)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-[30px] transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
