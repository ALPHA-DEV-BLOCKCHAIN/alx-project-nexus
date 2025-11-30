"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const allProducts: Record<string, { id: number; name: string; price: number; image: string }[]> = {
  men: [
    { id: 1, name: "Men Jacket", price: 79, image: "/men/blackjacket.jpg" },
    { id: 2, name: "Men Shoes", price: 59, image: "/men/leather.jpg" },
    { id: 3, name: "Men Hoodie", price: 49, image: "/men/hoodie.jpg" },
    { id: 4, name: "Men Jeans", price: 69, image: "/men/jeans.jpg" },
    { id: 5, name: "Men T-Shirt", price: 29, image: "/men/tshirt.jpg" },
  ],
  women: [
    { id: 6, name: "Women Dress", price: 69, image: "/women/dress.jpg" },
    { id: 7, name: "Handbag", price: 49, image: "/women/bag.jpg" },
    { id: 8, name: "Women Heels", price: 79, image: "/women/heel.jpg" },
    { id: 9, name: "Women Jacket", price: 89, image: "/women/leatherjacket.jpg" },
    { id: 10, name: "Women Skirt", price: 39, image: "/women/skirt.jpg" },
  ],
  kids: [
    { id: 11, name: "Kids T-shirt", price: 25, image: "/kids/tshirt.jpg" },
    { id: 12, name: "Kids Sneakers", price: 35, image: "/kids/sneaker.jpg" },
    { id: 13, name: "Kids Shorts", price: 22, image: "/kids/short.jpg" },
    { id: 14, name: "Kids Hoodie", price: 29, image: "/kids/hoody.jpg" },
    { id: 15, name: "Kids Cap", price: 15, image: "/kids/cap.jpg" },
  ],
  shoes: [
    { id: 16, name: "Running Shoes", price: 89, image: "/shoes/running.jpg" },
    { id: 17, name: "Leather Shoes", price: 99, image: "/shoes/leather.jpg" },
    { id: 18, name: "Sneakers", price: 69, image: "/shoes/sneaker.jpg" },
    { id: 19, name: "Sandals", price: 29, image: "/shoes/sandals.jpg" },
    { id: 20, name: "Boots", price: 120, image: "/shoes/boots.jpg" },
  ],
  accessories: [
    { id: 21, name: "Watch", price: 120, image: "/accessories/watch.jpg" },
    { id: 22, name: "Perfume", price: 75, image: "/accessories/perfumes.jpg" },
    { id: 23, name: "Sunglasses", price: 49, image: "/accessories/sunglass.jpg" },
    { id: 24, name: "Necklace", price: 55, image: "/accessories/necklace.jpg" },
    { id: 25, name: "Bracelet", price: 35, image: "/accessories/bracelets.jpg" },
  ],
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const { addToCart } = useCart();

  const products = category ? allProducts[category] : null;

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 capitalize">
        {category} Products
      </h1>

      {!products && <p className="text-gray-500">No category selected.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((item) => (
          <div
            key={item.id}
            className="rounded-[20px] overflow-hidden shadow-md bg-white p-4 hover:shadow-xl transition-all"
          >
            <Image
              src={item.image}
              width={400}
              height={400}
              alt={item.name}
              className="rounded-[20px] object-cover h-56 w-full"
            />

            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {item.name}
            </h3>

            <p className="text-gray-700 font-medium">
              ${item.price.toFixed(2)}
            </p>

            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-[20px] w-full transition-all"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<p className="p-10">Loading products...</p>}>
      <ProductsContent />
    </Suspense>
  );
}
