import profile from "@/data/profile";

export const metadata = { title: "Contact — Diler" };

export default function ContactPage() {
  const emailHref = `mailto:${profile.email}?subject=Hello%20Diler&body=Hi%20Diler,%0D%0A%0D%0A`;
  const socials = [
    { label: "Email", href: emailHref, hint: profile.email },
    { label: "LinkedIn", href: profile.links.linkedin },
    { label: "GitHub", href: profile.links.github },
    { label: "Portfolio", href: profile.links.portfolio },
  ];

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-indigoBrand">Let’s talk</h1>
        <p className="text-zinc-700">I’m open to internships, junior roles, and collaboration.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={emailHref}
          className="rounded-2xl border p-5 hover:shadow-sm transition flex flex-col gap-1"
        >
          <span className="text-sm text-zinc-600">Email</span>
          <span className="font-semibold">{profile.email}</span>
          <span className="mt-2 inline-block w-fit rounded-xl bg-indigoBrand px-3 py-1 text-white text-sm">
            Compose message
          </span>
        </a>

        {socials.slice(1).map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border p-5 hover:shadow-sm transition flex flex-col gap-1"
          >
            <span className="text-sm text-zinc-600">{s.label}</span>
            <span className="font-semibold break-all">{s.href}</span>
          </a>
        ))}
      </div>

      <div className="rounded-2xl border p-5">
        <h2 className="font-semibold">What to include</h2>
        <ul className="mt-2 list-disc pl-5 text-zinc-700 space-y-1">
          <li>Project or role you have in mind</li>
          <li>Timeline and any constraints</li>
          <li>Links or references (specs, repos, designs)</li>
        </ul>
      </div>
    </section>
  );
}
