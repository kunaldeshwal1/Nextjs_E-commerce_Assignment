"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const SORT_FILTER = [
  { label: "Low to High", value: "low" },
  { label: "High to Low", value: "high" },
];

export default function Home({ products, categories }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectSort, setSelectSort] = useState("all");

  const filteredProducts = products
    .filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (selectSort === "low") return a.price - b.price;
      if (selectSort === "high") return b.price - a.price;
      return 0;
    });
  return (
    <div className="p-6 max-w-[1440px]">
      <h1 className="text-2xl font-bold mb-4">Ecommerce Store</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <p>Filter</p>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-1 py-2 min-w-[200px]"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end w-full relative">
          <img
            src="/search.png"
            alt=""
            className="absolute right-2 top-2.5 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2  w-full md:max-w-[500px]"
          />
        </div>
        <div>
          <select
            className="border px-1 py-2 w-full md:min-w-[200px]"
            value={selectSort}
            onChange={(e) => {
              setSelectSort(e.target.value);
            }}
          >
            <option value="all">Select to Sort</option>
            {SORT_FILTER.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border border-b-yellow-500 shadow-xl bg-white cursor-pointer hover:shadow-lg transition h-[500px] flex flex-col">
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain bg-gray-100 p-4"
                />
              </div>
              <div className="p-4 mt-auto">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-sm font-medium text-blue-600 mb-1 capitalize">
                  Category: {product.category}
                </p>
                <p className="text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="">
                  <p className="text-xl font-bold mb-2">${product.price}</p>
                  <div className="flex items-center gap-2 text-yellow-500">
                    ⭐ {product.rating.rate} ({product.rating.count} reviews)
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
