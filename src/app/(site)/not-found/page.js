import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-24 text-center space-y-4">
      <h1 className="text-3xl font-bold text-indigoBrand">Page not found</h1>
      <p className="text-zinc-700">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="inline-block rounded-xl px-4 py-2 bg-indigoBrand text-white">
        Back home
      </Link>
    </main>
  );
}
