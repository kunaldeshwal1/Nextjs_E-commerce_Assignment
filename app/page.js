import { getCategories, getProducts } from "@/lib/getProducts";
import Home from "../components/Home";
export default async function Page() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <div className="p-6 max-w-[1440px]">
      <h1 className="text-2xl font-bold mb-4">Ecommerce Store</h1>
      <Home products={products} categories={categories} />;
    </div>
  );
}
