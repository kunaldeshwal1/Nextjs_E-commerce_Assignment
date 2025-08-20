// /app/api/products/[id]/route.js
import products from "../../../../public/products.json";

export async function GET(request, { params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return Response.json(product);
}
