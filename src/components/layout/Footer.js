import profile from "@/data/profile";

const SOCIAL = [
  { href: profile.links.github, label: "GitHub" },
  { href: profile.links.linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-indigoBrand">Diler Bharam</p>
            <p className="text-sm text-zinc-600">
              Next.js-focused developer building clean, fast web apps and AI-powered products.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-3 text-sm">
            {SOCIAL.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5
                             border-zinc-200 text-zinc-700 hover:border-indigoBrand hover:text-indigoBrand transition"
                >
                  <span className="size-1.5 rounded-full bg-aquaBrand" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Diler. All rights reserved.</span>
          <span className="hidden sm:inline">
            Built with Next.js & Tailwind — <span className="text-pinkBrand">v1</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
