import Link from "next/link";
import blogPosts from "@/data/blogPosts";

export const metadata = { title: "Blog — Diler" };

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-indigoBrand">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-2xl border hover:shadow-sm transition">
            <Link href={`/blog/${p.slug}`} className="block p-5">
              <div className="flex items-center gap-3 text-sm text-zinc-600">
                <time dateTime={p.date}>{formatDate(p.date)}</time>
                <span className="h-1 w-1 rounded-full bg-zinc-300" />
                <ul className="flex gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border px-2 py-0.5 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
              <p className="mt-1 text-zinc-700">{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
