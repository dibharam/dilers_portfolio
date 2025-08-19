import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border overflow-hidden hover:shadow-md transition"
    >
      <div className="relative aspect-video bg-zinc-100">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
        ) : null}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg group-hover:text-indigoBrand">{project.title}</h3>
          {project.year ? <span className="text-xs text-zinc-500">{project.year}</span> : null}
        </div>
        <p className="text-sm text-zinc-600 mt-1">{project.summary}</p>
        {project.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-aquaBrand/10 text-aquaBrand border border-aquaBrand/30">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
