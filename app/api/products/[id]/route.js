import products from "@/lib/products.json";
export async function GET(request, { params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return Response.json({ error: "Product Not Found" }, { status: 404 });
  }

  return Response.json(product);
}
