"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  { id: 1, name: "Men", image: "/categories/men.jpg" },
  { id: 2, name: "Women", image: "/categories/women.jpg" },
  { id: 3, name: "Kids", image: "/categories/kids.jpg" },
  { id: 4, name: "Shoes", image: "/categories/shoes.jpg" },
  { id: 5, name: "Accessories", image: "/categories/perfume.jpg" },
];

export default function Categories() {
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/products?category=${categoryName.toLowerCase()}`);
  };

  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.name)}
            className="relative cursor-pointer rounded-[30px] overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={500}
              height={500}
              className="rounded-[30px] object-cover h-64 w-full"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-4 text-xl font-semibold">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
