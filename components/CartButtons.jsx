"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartButtons({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between">
        <button
          onClick={handleAddToCart}
          className="bg-black text-white w-full px-6 py-3 rounded-sm cursor-pointer uppercase text-xs"
        >
          Add to Cart
        </button>

        <button
          onClick={() => alert("Coming Soon!")}
          className="bg-black w-full text-white px-6 py-3 rounded-sm cursor-pointer uppercase text-xs"
        >
          Buy Now
        </button>
      </div>
      <button
        className="flex cursor-pointer"
        onClick={() => alert("Coming Soon!")}
      >
        ❤️ Wishlist
      </button>
    </div>
  );
}
