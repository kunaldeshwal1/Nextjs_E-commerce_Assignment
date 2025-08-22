"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, loading } =
    useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (loading) {
    return (
      <div className="h-[100vh] flex items-center">
        <p>Loading...</p>
      </div>
    );
  }
  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty 🛒</h2>
        <Link href="/" className="w-full">
          <div className="flex justify-center bg-black w-full text-white p-2 rounded-sm cursor-pointer">
            <span className="uppercase text-xs">Browse Products</span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className=" mx-auto p-6">
      <h1 className="text-3xl font-bold mb-1">Shopping Cart</h1>
      <h2 className="mb-4">Review and manage your cart items</h2>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="space-y-2 border p-4 w-fit h-fit">
          <h3 className="mb-4 font-bold">Cart Items</h3>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 shadow-sm bg-white"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between items-center  w-full gap-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div>
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p>${item.price} each</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className={`text-black shadow-sm px-2 py-0.5 ${
                        item.quantity <= 1 ? "invisible" : ""
                      }`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={`text-black shadow-sm px-2 py-0.5 ${
                        item.quantity >= 10 ? "invisible" : ""
                      }`}
                      disabled={item.quantity >= 10}
                    >
                      +
                    </button>
                  </div>

                  <p className="font-medium w-[50px]">
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
            </div>
          ))}
        </div>
        <div className="border p-4 w-full md:w-[250px] h-fit flex-shrink-0">
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
          <Link href={"/"} className="w-full">
            <div className="flex justify-center bg-black w-full text-white p-2 rounded-sm cursor-pointer uppercase text-xs">
              Continue Shopping
            </div>
          </Link>
          <button
            onClick={clearCart}
            className=" justify-center bg-black w-full text-white p-2 mt-2 rounded-sm cursor-pointer uppercase text-xs"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
