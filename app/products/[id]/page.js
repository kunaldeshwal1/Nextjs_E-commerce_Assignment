import Image from "next/image";
import CartActions from "./CartActions"; // ✅ import client actions

export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="w-full h-96 relative border rounded-xl shadow-md bg-white p-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-blue-600 font-medium mb-2">
              Category: {product.category}
            </p>
            <div className="flex items-center gap-2 text-yellow-500 mb-4">
              ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </div>
            <p className="text-3xl font-bold mb-6">${product.price}</p>
          </div>

          {/* ✅ Buttons moved into client component */}
          <CartActions product={product} />
        </div>
      </div>
    </div>
  );
}
