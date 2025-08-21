// components/ui/TicketCard.jsx
import Link from 'next/link';

export default function TicketCard({ project }) {
  return (
    <article className="ticket relative p-4"> {/* <-- relative is vital */}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-zinc-600">{project.summary}</p>

      {/* Clickable overlay confined to the card bounds */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0"
        aria-label={`Open ${project.title}`}
      />
    </article>
  );
}
