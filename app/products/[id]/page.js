import Image from "next/image";
import CartButtons from "../../../components/CartButtons";
import { getProduct } from "@/lib/getProduct";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Ecommerce Store</h1>
          <p>🛒</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group flex justify-center w-full h-full relative shadow-md bg-gray-100">
            <Image
              src={product.image}
              alt={product.title}
              height={400}
              width={400}
              className="object-contain p-14 group-hover:scale-110 transition duration-200"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-blue-600 font-medium mb-2 capitalize">
                Category: {product.category}
              </p>
              <h1 className="text-xl sm:text-3xl font-bold mb-4">
                {product.title}
              </h1>
              <p className="text-lg sm:text-2xl font-bold mb-4">
                ${product.price}
              </p>
              <div className="flex items-center gap-2 text-yellow-500 mb-4 ">
                ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
              </div>
              <div className="border-b border-gray-300 mb-4"></div>
              <h2 className="font-bold mb-2">Description</h2>
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
      <p className="p-2 text-center">
        © 2025 Ecommerce Store. All rights reserved.
      </p>
    </div>
  );
}
