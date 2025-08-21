"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty 🛒</h2>
        <Link href="/" className="text-blue-600 underline">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-1">Shopping Cart</h1>
      <p className="mb-6">Review and manage your cart items</p>
      <div className="flex gap-4">
        <div className="space-y-6 border p-6 rounded-2xl w-fit h-fit">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p>${item.price} each</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1"
                />
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border rounded-2xl p-4 w-[250px] h-fit flex-shrink-0">
          <h2 className="mb-4">Order Summary</h2>
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping:</p>
            <p>$0</p>
          </div>
          <div className="border"></div>
          <div className="flex justify-between mt-2 mb-4">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-center bg-black w-full text-white p-2 rounded-sm cursor-pointer ">
            <Link href={"/"} className="uppercase text-xs">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
