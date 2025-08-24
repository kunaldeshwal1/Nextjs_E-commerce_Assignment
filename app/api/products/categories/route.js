import categories from "@/lib/categories.json";
export async function GET() {
  if (!categories || categories.length === 0) {
    return Response.json({ error: "No category found" }, { status: 404 });
  }
  return Response.json(categories);
}
