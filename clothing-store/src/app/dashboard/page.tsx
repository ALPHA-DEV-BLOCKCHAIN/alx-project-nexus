"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ShoppingBag, User, Settings, Heart, Truck, LogOut } from "lucide-react";

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/portal");
  }, [user]);

  return (
    <section className="min-h-screen bg-gray-50 p-10">
      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome, {user?.name}
        </h1>
        <p className="mt-2 text-gray-600">
          Manage your shopping, orders, and account all in one place.
        </p>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Orders */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-7 h-7 text-pink-600" />
              <h2 className="text-xl font-semibold">My Orders</h2>
            </div>
            <p className="text-gray-600 mt-2">
              View your recent orders and track delivery.
            </p>
          </div>

          {/* Profile */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-3">
              <User className="w-7 h-7 text-blue-600" />
              <h2 className="text-xl font-semibold">My Profile</h2>
            </div>
            <p className="text-gray-600 mt-2">
              Update your personal information and preferences.
            </p>
          </div>

          {/* Wishlist */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-3">
              <Heart className="w-7 h-7 text-red-600" />
              <h2 className="text-xl font-semibold">Wishlist</h2>
            </div>
            <p className="text-gray-600 mt-2">
              Save items you love for later.
            </p>
          </div>

          {/* Track Order */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-3">
              <Truck className="w-7 h-7 text-green-600" />
              <h2 className="text-xl font-semibold">Track Delivery</h2>
            </div>
            <p className="text-gray-600 mt-2">
              Follow your order from warehouse to doorstep.
            </p>
          </div>

          {/* Account Settings */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-3">
              <Settings className="w-7 h-7 text-gray-600" />
              <h2 className="text-xl font-semibold">Account Settings</h2>
            </div>
            <p className="text-gray-600 mt-2">
              Change password, manage addresses, and more.
            </p>
          </div>

          {/* Logout */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-3">
              <LogOut className="w-7 h-7 text-black" />
              <h2 className="text-xl font-semibold">Logout</h2>
            </div>
            <p className="text-gray-600 mt-2">
              Sign out securely from your account.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
