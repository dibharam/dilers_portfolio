import Link from 'next/link';
import profile from "@/data/profile";

export const metadata = { title: `Home — ${profile.name}`, description: profile.tagline };

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border p-6 bg-gradient-to-br from-aquaBrand/5 via-transparent to-pinkBrand/5">
        <h1 className="text-3xl font-bold text-indigoBrand">{profile.name}</h1>
        <p className="mt-1 text-zinc-700">{profile.tagline}</p>
        <p className="mt-3 max-w-2xl text-zinc-700">{profile.bio}</p>
        <div className="mt-4 flex gap-3">
          <Link href="/projects" className="inline-block rounded-xl px-4 py-2 bg-indigoBrand text-white">View projects</Link>
          <Link href="/contact" className="inline-block rounded-xl px-4 py-2 border">Contact</Link>
        </div>
      </div>
    </section>
  );
}
