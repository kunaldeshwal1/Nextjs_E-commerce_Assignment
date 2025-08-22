import products from "../../../public/products.json";
export async function GET() {
  if (!products || products.length === 0) {
    return Response.json({ error: "No products found" }, { status: 404 });
  }
  return Response.json(products);
}
