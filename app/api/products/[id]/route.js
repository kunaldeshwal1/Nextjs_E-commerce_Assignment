import products from "../../../../public/products.json";

export async function GET({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return Response.json({ error: "Product Not Found" }, { status: 404 });
  }

  return Response.json(product);
}
