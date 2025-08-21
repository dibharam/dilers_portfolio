"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: { pathname: "/", query: { skipIntro: "1" } }, label: "Home" },   // ← skip intro
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Brand: clicking goes to homepage WITHOUT intro */}
        <Link
          href={{ pathname: "/", query: { skipIntro: "1" } }}
          className="font-semibold text-indigoBrand"
        >
          diler.dev
        </Link>

        <nav className="flex items-center gap-1">
          {NAV.map((item) => {
            // Active check: treat pathname "/" as active for Home
            const isHome = typeof item.href === "object" && item.href.pathname === "/";
            const hrefPath = typeof item.href === "string" ? item.href : item.href.pathname;
            const active = isHome ? pathname === "/" : (pathname === hrefPath || pathname.startsWith(hrefPath + "/"));

            return (
              <Link
                key={typeof item.href === "string" ? item.href : JSON.stringify(item.href)}
                href={item.href}
                className={[
                  "px-3 py-2 rounded-md text-sm transition",
                  active ? "bg-indigoBrand text-white" : "hover:bg-zinc-100 text-zinc-700"
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
