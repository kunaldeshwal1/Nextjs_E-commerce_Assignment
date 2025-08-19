import products from "../../../public/products.json";
export async function GET() {
  return Response.json(products);
}
