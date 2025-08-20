"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartButtons({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product); // ✅ add to cart
    router.push("/cart"); // ✅ redirect to cart page
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
          onClick={() => alert("Will be available in some days!")}
          className="bg-black w-full text-white px-6 py-3 rounded-sm cursor-pointer uppercase text-xs"
        >
          Buy Now
        </button>
      </div>
      <button className="flex">❤️ Wishlist</button>
    </div>
  );
}
