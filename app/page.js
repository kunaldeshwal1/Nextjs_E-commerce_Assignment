import { getCategories, getProducts } from "@/lib/getProducts";
import Home from "../components/Home";
export default async function Page() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <div>
      <Home products={products} categories={categories} />;
    </div>
  );
}
