import { notFound } from "next/navigation";

export async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}
