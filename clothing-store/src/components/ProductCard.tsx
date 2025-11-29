"use client";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  addToCart: (product: { id: number; name: string; price: number; image: string; quantity: number }) => void;
}

export default function ProductCard({ id, name, price, image, addToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <h3 className="font-semibold mt-2">{name}</h3>
      <p className="text-gray-700 mt-1">${price}</p>

      {/* Quantity Selector */}
      <div className="flex items-center mt-3 space-x-2">
        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          className="px-2 py-1 border rounded hover:bg-gray-200"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-2 py-1 border rounded hover:bg-gray-200"
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart({ id, name, price, image, quantity })}
        className="mt-3 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
      >
        Add to Cart
      </button>
    </div>
  );
}
