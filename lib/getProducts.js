import { notFound } from "next/navigation";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export async function getProducts() {
  return fetchJson(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
}

export async function getCategories() {
  return fetchJson(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/categories`
  );
}
export async function getProduct(id) {
  return fetchJson(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`);
}
