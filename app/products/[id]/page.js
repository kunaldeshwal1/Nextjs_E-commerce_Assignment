import Image from "next/image";
import CartButtons from "./CartButtons"; // ✅ import client actions

export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">
          Ecommerce Store
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-full relative shadow-md bg-gray-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-14"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-blue-600 font-medium mb-2 capitalize">
                Category: {product.category}
              </p>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-2xl font-bold mb-4">${product.price}</p>
              <div className="flex items-center gap-2 text-yellow-500 mb-4 ">
                ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
              </div>
              <div className="border-b border-gray-300 mb-4"></div>
              <p className="mb-4">
                {product.description.charAt(0).toUpperCase() +
                  product.description.slice(1)}
              </p>
              <div className="border-b border-gray-300 mb-4"></div>
            </div>

            <CartButtons product={product} />
          </div>
        </div>
      </div>
      <p className="fixed bottom-0 left-1/2 -translate-x-1/2 text-gray-500 py-2">
        © 2025 Ecommerce Store. All rights reserved.
      </p>
    </div>
  );
}
