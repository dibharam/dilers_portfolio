import profile from "@/data/profile";

export const metadata = {
  title: `Home — ${profile.name}`,
  description: profile.tagline,
};

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-indigoBrand">{profile.name}</h1>
      <p className="text-zinc-700">{profile.tagline}</p>
      <p className="max-w-2xl text-zinc-700">{profile.bio}</p>
    </section>
  );
}
