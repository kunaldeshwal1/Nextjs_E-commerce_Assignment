"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home({ products, categories }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6">
      {/* 🔍 Search + Category Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/2"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 🛍️ Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border rounded-2xl p-4 shadow-md bg-white cursor-pointer hover:shadow-lg transition">
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-sm font-medium text-blue-600 mb-1">
                Category: {product.category}
              </p>
              <p className="text-xl font-bold mb-2">${product.price}</p>
              <div className="flex items-center gap-2 text-yellow-500">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
