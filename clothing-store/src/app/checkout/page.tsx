"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [checkedItems, setCheckedItems] = useState(cart.map(item => item.id));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const itemsToCheckout = cart.filter(item => checkedItems.includes(item.id));

  const totalPrice = itemsToCheckout.reduce((sum, item) => {
    const priceNumber = Number(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + priceNumber;
  }, 0);

  const handlePayment = () => {
    if (!name || !email || !address || !paymentMethod) {
      alert("Please fill all fields and select a payment method.");
      return;
    }
    alert(`Payment successful!\nTotal: $${totalPrice.toFixed(2)}\nMethod: ${paymentMethod}`);
    clearCart();
    router.push("/");
  };

  if (itemsToCheckout.length === 0) {
    return (
      <section className="p-10">
        <h1 className="text-4xl font-bold mb-6">Checkout</h1>
        <p className="text-gray-600">No items selected for checkout.</p>
      </section>
    );
  }

  return (
    <section className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>

      {/* Items Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {itemsToCheckout.map((item) => (
            <div key={item.id} className="bg-white rounded-[30px] shadow-lg overflow-hidden flex flex-col">
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end font-bold text-xl mt-6">
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white p-6 rounded-[30px] shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-[15px]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-[15px]"
          />
          <textarea
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border rounded-[15px]"
          />
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-6 rounded-[30px] shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
        <div className="flex flex-col gap-3">
          {["Credit Card", "PayPal", "Bank Transfer", "Airtel Money", "M-Pesa"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5 accent-blue-600"
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-[30px] text-lg transition-all"
      >
        Pay Now
      </button>
    </section>
  );
}
