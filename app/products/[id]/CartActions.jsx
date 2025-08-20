"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartActions({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product); // ✅ add to cart
    router.push("/cart"); // ✅ redirect to cart page
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>

      <button
        onClick={() => alert("Direct checkout logic here!")}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Buy Now
      </button>

      <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
        ❤️ Wishlist
      </button>
    </div>
  );
}
