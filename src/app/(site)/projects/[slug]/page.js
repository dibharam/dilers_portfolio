
import projects from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const proj = projects.find((p) => p.slug === params.slug);
  return { title: proj ? `${proj.title} — Diler` : "Project — Diler" };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <div className="py-20">Not found</div>;

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold text-indigoBrand">{project.title}</h1>
      <p className="text-zinc-600">{project.summary}</p>
      <div className="my-6 aspect-video rounded-xl bg-zinc-100" />
      <ul className="list-disc pl-6">
        {project.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <p className="mt-4 text-sm text-zinc-600">
        Tech: {project.tech.join(", ")}
      </p>
    </article>
  );
}
