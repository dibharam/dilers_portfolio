import projects from "@/data/projects";
import Link from "next/link";

export const metadata = { title: "Projects — Diler" };

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-indigoBrand">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block rounded-2xl border overflow-hidden hover:shadow-md transition"
          >
            <div className="aspect-video bg-zinc-100" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-zinc-600 mt-1">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
