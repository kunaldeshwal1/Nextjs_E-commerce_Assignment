const CATEGORIES = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export async function GET() {
  return Response.json(CATEGORIES);
}
