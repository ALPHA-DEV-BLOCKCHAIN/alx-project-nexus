"use client";

import { useCart, CartItem } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pastPurchases, setPastPurchases] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedChecked = JSON.parse(localStorage.getItem("checkedItems") || "[]");
    setCheckedItems(storedChecked.length ? storedChecked : cart.map(item => item.id));

    const user = localStorage.getItem("userLoggedIn");
    setIsLoggedIn(!!user);

    const past = localStorage.getItem("pastPurchases");
    if (past) setPastPurchases(JSON.parse(past));
  }, [cart]);

  const itemsToCheckout = cart.filter(item => checkedItems.includes(item.id));

  const totalPrice = itemsToCheckout.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    if (!isLoggedIn) {
      router.push("/dashboard/login");
      return;
    }

    if (!name || !email || !address || !paymentMethod) {
      alert("Please fill all fields and select a payment method.");
      return;
    }

    const newPurchases = [...pastPurchases, ...itemsToCheckout];
    localStorage.setItem("pastPurchases", JSON.stringify(newPurchases));
    setPastPurchases(newPurchases);

    clearCart();
    setCheckedItems([]);
    alert(`Payment successful! Total: $${totalPrice.toFixed(2)} via ${paymentMethod}`);
    router.push("/");
  };

  const handleBackToCart = () => {
    router.push("/cart");
  };

  const toggleItem = (id: number) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (cart.length === 0) {
    return (
      <section className="p-10">
        <h1 className="text-4xl font-bold mb-6">Checkout</h1>
        <p className="text-gray-600">Your cart is empty.</p>
        <button
          onClick={handleBackToCart}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-[20px]"
        >
          Back to Cart
        </button>
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
          {itemsToCheckout.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white rounded-[30px] shadow-lg overflow-hidden flex flex-col"
            >
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-700 mt-2">${item.price.toFixed(2)}</p>
                <label className="mt-2 flex items-center gap-2 text-gray-800">
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(item.id)}
                    onChange={() => toggleItem(item.id)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  Include in Payment
                </label>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-[20px]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center font-bold text-xl mt-6">
          <span>Total: ${totalPrice.toFixed(2)}</span>
          <button
            onClick={handleBackToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-[20px]"
          >
            Back to Cart
          </button>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white p-6 rounded-[30px] shadow mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Details</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-[15px] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-[15px] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          />
          <textarea
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-[15px] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white resize-none"
            rows={4}
          />
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-6 rounded-[30px] shadow mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment Method</h2>
        <div className="flex flex-col gap-3">
          {["Credit Card", "PayPal", "Bank Transfer", "Airtel Money", "M-Pesa"].map(
            (method) => (
              <label
                key={method}
                className="flex items-center gap-2 cursor-pointer text-gray-800"
              >
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
            )
          )}
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-[30px] text-lg transition-all"
      >
        Pay Now
      </button>

      {/* Past Purchases */}
      {pastPurchases.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Past Purchases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pastPurchases.map((item, index) => (
              <div
                key={`${item.id}-past-${index}`}
                className="bg-white rounded-[30px] shadow-lg overflow-hidden flex flex-col p-4"
              >
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <h3 className="mt-3 text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
