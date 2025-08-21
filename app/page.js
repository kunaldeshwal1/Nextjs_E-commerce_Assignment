import Home from "../components/Home";
export default async function Page() {
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    { cache: "no-store" }
  );
  const products = await productsRes.json();
  const categoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/categories`,
    { cache: "no-store" }
  );
  const categories = await categoriesRes.json();

  return (
    <div>
      <Home products={products} categories={categories} />;
    </div>
  );
}
