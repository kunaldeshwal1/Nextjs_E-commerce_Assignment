import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // optional: avoids caching during dev
  });
  const products = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-2xl p-4 shadow-md bg-white"
        >
          <div className="w-full h-64 relative mb-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <p className="text-sm font-medium text-blue-600 mb-1">
            Category: {product.category}
          </p>
          <p className="text-xl font-bold mb-2">${product.price}</p>
          <div className="flex items-center gap-2 text-yellow-500">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </div>
        </div>
      ))}
    </div>
  );
}
