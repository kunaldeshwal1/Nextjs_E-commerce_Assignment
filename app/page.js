import { getCategories, getProducts } from "@/lib/getProducts";
import Home from "../components/Home";
export default async function Page() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <div className="p-6 max-w-[1440px]">
      <div className="flex justify-between">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">
          Ecommerce Store
        </h1>
        <p>🛒</p>
      </div>
      <Home products={products} categories={categories} />
    </div>
  );
}
