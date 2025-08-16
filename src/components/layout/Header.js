"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import profile from "@/data/profile";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL = [
  { href: profile.links.github, label: "GitHub", icon: GitHubIcon, external: true },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedInIcon, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: MailIcon, external: true },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      {/* subtle top accent */}
      <div className="h-0.5 bg-gradient-to-r from-indigoBrand via-aquaBrand to-pinkBrand" />
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block size-6 rounded-full bg-indigoBrand" aria-hidden="true" />
          <span className="font-semibold tracking-tight text-indigoBrand">diler.dev</span>
        </Link>

        {/* Nav + Socials (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={
                  isActive(l.href)
                    ? "relative text-indigoBrand font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-indigoBrand"
                    : "text-zinc-700 hover:text-indigoBrand transition"
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="w-px h-6 bg-zinc-200" aria-hidden="true" />
          <ul className="flex items-center gap-3">
            {SOCIAL.map(({ href, label, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 hover:border-indigoBrand hover:text-indigoBrand transition"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu (very minimal) */}
        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}

/* --- Mobile menu --- */
function MobileMenu({ pathname }) {
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <details className="md:hidden">
      <summary className="list-none p-2 -m-2 rounded-lg hover:bg-zinc-100 cursor-pointer">
        <span className="sr-only">Open menu</span>
        <HamburgerIcon className="size-6" />
      </summary>
      <div className="mt-3 rounded-2xl border bg-white p-3 shadow-md">
        <nav className="flex flex-col">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "px-3 py-2 rounded-lg " +
                (isActive(l.href)
                  ? "bg-indigoBrand/10 text-indigoBrand"
                  : "text-zinc-700 hover:bg-zinc-100")
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="my-3 h-px bg-zinc-200" />
        <ul className="flex items-center gap-2">
          <li className="text-xs text-zinc-500 px-2">Social</li>
          {SOCIAL.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 hover:border-indigoBrand hover:text-indigoBrand transition"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

/* --- tiny inline icons (no extra deps) --- */
function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.58 2 12.116c0 4.48 2.865 8.27 6.839 9.61.5.095.683-.22.683-.486 0-.24-.01-1.039-.015-1.885-2.782.61-3.37-1.2-3.37-1.2-.455-1.176-1.11-1.49-1.11-1.49-.908-.63.069-.617.069-.617 1.004.071 1.532 1.05 1.532 1.05.893 1.555 2.343 1.106 2.914.845.091-.66.35-1.106.636-1.36-2.222-.257-4.56-1.125-4.56-5.007 0-1.106.387-2.01 1.023-2.72-.103-.258-.444-1.296.097-2.7 0 0 .837-.27 2.742 1.038A9.32 9.32 0 0 1 12 6.84c.848.004 1.702.116 2.5.34 1.904-1.308 2.74-1.038 2.74-1.038.543 1.404.202 2.442.1 2.7.637.71 1.022 1.614 1.022 2.72 0 3.893-2.342 4.747-4.57 5.0.36.318.68.944.68 1.903 0 1.372-.012 2.476-.012 2.814 0 .268.18.585.69.485A10.03 10.03 0 0 0 22 12.115C22 6.58 17.523 2 12 2Z"/>
    </svg>
  );
}
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.983 3.5C4.983 4.604 4.09 5.5 3 5.5S1.017 4.604 1.017 3.5C1.017 2.395 1.91 1.5 3 1.5s1.983.895 1.983 2Z"/>
      <path d="M.5 8.5h5V22h-5V8.5Zm7 0h4.8v1.84h.07c.67-1.27 2.31-2.61 4.75-2.61C21.5 7.73 23 10.09 23 14.14V22h-5v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.57V22h-5V8.5Z"/>
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.5 7.3 5.1L18.8 6H4.2Zm15.3 2.1-7.36 5.15a1.5 1.5 0 0 1-1.68 0L3.1 8.1V17.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V8.1Z"/>
    </svg>
  );
}
function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.5 20c1.21-1.47 2-4.22 2.21-7H6.2a7.51 7.51 0 0 0 2.3 7Zm-2.3-9h4.51c-.1-2.59-.71-4.97-1.66-6.5A7.51 7.51 0 0 0 6.2 11Zm8.8 9a7.51 7.51 0 0 0 2.3-7h-4.51c.21 2.78 1 5.53 2.21 7ZM12 4c1.37 0 2.65 1.86 3.33 4.69H8.67C9.35 5.86 10.63 4 12 4Zm3.33 6.31H8.67c.09 1.06.13 2.18.13 3.19 0 1.02-.04 2.13-.13 3.19h6.66c-.09-1.06-.13-2.18-.13-3.19 0-1.02.04-2.13.13-3.19Zm1.8-2.81a7.51 7.51 0 0 1 2.3 6.5h-4.51c-.1-2.59-.71-4.97-1.66-6.5a7.51 7.51 0 0 1 3.87 0Z"/>
    </svg>
  );
}
function HamburgerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 6.5h18v2H3v-2Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/>
    </svg>
  );
}
