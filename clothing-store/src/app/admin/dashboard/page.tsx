"use client";

import { Package, Users, BarChart3, ShoppingCart, LogOut } from "lucide-react";

export default function AdminDashboard() {
  return (
    <section className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Manage products, users, orders, analytics, and system settings.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          {/* Products */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <Package className="w-10 h-10 text-blue-600" />
            <h2 className="text-xl font-semibold mt-4">Products</h2>
            <p className="text-gray-600 mt-1">Manage inventory & categories.</p>
          </div>

          {/* Users */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <Users className="w-10 h-10 text-purple-600" />
            <h2 className="text-xl font-semibold mt-4">Customers</h2>
            <p className="text-gray-600 mt-1">View & manage user accounts.</p>
          </div>

          {/* Orders */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <ShoppingCart className="w-10 h-10 text-green-600" />
            <h2 className="text-xl font-semibold mt-4">Orders</h2>
            <p className="text-gray-600 mt-1">Track and manage orders.</p>
          </div>

          {/* Analytics */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <BarChart3 className="w-10 h-10 text-orange-500" />
            <h2 className="text-xl font-semibold mt-4">Analytics</h2>
            <p className="text-gray-600 mt-1">View sales performance.</p>
          </div>

        </div>

        <button className="mt-10 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </section>
  );
}
