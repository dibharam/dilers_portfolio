import blogPosts from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} — Diler` : "Blog — Diler" };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return <div className="py-16">Not found</div>;

  return (
    <article className="space-y-4">
      <div className="text-sm text-zinc-600">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="mx-2">•</span>
        <span>{post.tags.join(" · ")}</span>
      </div>

      <h1 className="text-3xl font-bold text-indigoBrand">{post.title}</h1>

      <div className="mt-2 space-y-4 text-zinc-800">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
