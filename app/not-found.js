import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-2">
      <h2>Resource Not Found</h2>
      <Link
        href="/"
        className="bg-black w-full text-white px-6 py-3 rounded-sm cursor-pointer uppercase text-xs text-center"
      >
        Return Home
      </Link>
    </div>
  );
}
