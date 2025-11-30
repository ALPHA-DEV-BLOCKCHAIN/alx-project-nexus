"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ShoppingBag,
  User,
  Settings,
  Heart,
  Truck,
  LogOut,
} from "lucide-react";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";

type PurchaseItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  paymentMethod: string;
  date: string;
};

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/portal");
      return;
    }

    const saved = JSON.parse(localStorage.getItem("pastPurchases") || "[]");
    setPurchases(saved);
  }, [user]);

  return (
    <section className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome, {user?.name}
        </h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Manage your shopping, orders, and account all in one place.
        </p>

        {/* Grid Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10">
          {/* Orders */}
          <div className="bg-pink-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform cursor-pointer">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-10 h-10 text-pink-600" />
              <h2 className="text-xl md:text-2xl text-pink-800">My Orders</h2>
            </div>
            <p className="text-pink-700 mt-2 text-sm md:text-base">
              View your recent orders and track delivery.
            </p>
          </div>

          {/* Profile */}
          <div className="bg-blue-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform cursor-pointer">
            <div className="flex items-center gap-3">
              <User className="w-10 h-10 text-blue-600" />
              <h2 className="text-xl md:text-2xl text-blue-800">My Profile</h2>
            </div>
            <p className="text-blue-700 mt-2 text-sm md:text-base">
              Update your personal information and preferences.
            </p>
          </div>

          {/* Wishlist */}
          <div className="bg-red-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform cursor-pointer">
            <div className="flex items-center gap-3">
              <Heart className="w-10 h-10 text-red-600" />
              <h2 className="text-xl md:text-2xl text-red-800">Wishlist</h2>
            </div>
            <p className="text-red-700 mt-2 text-sm md:text-base">
              Save items you love for later.
            </p>
          </div>

          {/* Track Delivery */}
          <div className="bg-green-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform cursor-pointer">
            <div className="flex items-center gap-3">
              <Truck className="w-10 h-10 text-green-600" />
              <h2 className="text-xl md:text-2xl text-green-800">
                Track Delivery
              </h2>
            </div>
            <p className="text-green-700 mt-2 text-sm md:text-base">
              Track your delivery from warehouse to doorstep.
            </p>
          </div>

          {/* Settings */}
          <div className="bg-gray-200 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform cursor-pointer">
            <div className="flex items-center gap-3">
              <Settings className="w-10 h-10 text-gray-700" />
              <h2 className="text-xl md:text-2xl text-gray-800">
                Account Settings
              </h2>
            </div>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Change password, manage addresses, and more.
            </p>
          </div>

          {/* Logout */}
          <div className="bg-yellow-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform">
            <div className="flex items-center gap-3">
              <LogOut className="w-10 h-10 text-yellow-800" />
              <h2 className="text-xl md:text-2xl text-yellow-900">Logout</h2>
            </div>
            <p className="text-yellow-700 mt-2 mb-4 text-sm md:text-base">
              Sign out securely from your account.
            </p>
            <LogoutButton />
          </div>
        </div>

        {/* Past Purchases */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Past Purchases</h2>
          <p className="text-gray-600 mt-1">
            View your previously purchased items.
          </p>

          {purchases.length === 0 ? (
            <p className="text-gray-500 mt-4">No purchases yet.</p>
          ) : (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {purchases.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
                >
                  <Image
                    src={item.image || "/placeholder.png"}
                    width={200}
                    height={200}
                    alt={item.name}
                    className="rounded-lg object-cover"
                  />
                  <h3 className="mt-2 font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mt-1">
                    {item.paymentMethod}
                  </span>
                  <p className="text-gray-500 text-xs mt-1">
                    {new Date(item.date).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
