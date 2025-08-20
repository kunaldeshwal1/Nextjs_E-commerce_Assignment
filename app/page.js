import Home from "../components/Home";

export default async function Page() {
  const productsRes = await fetch("http://localhost:3000/api/products");
  const products = await productsRes.json();
  const categoriesRes = await fetch(
    "http://localhost:3000/api/products/categories"
  );
  const categories = await categoriesRes.json();

  return <Home products={products} categories={categories} />;
}
