// src/components/rails/CurvedRailNav.js
"use client";

import { usePathname, useRouter } from "next/navigation";

const STATIONS = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

// S‑curve path (edit to taste)
const PATH_D = "M20,200 C220,120 280,40 500,90 C720,140 820,210 980,160";
const STOPS = [0.0, 0.25, 0.5, 0.75, 1.0];

export default function CurvedRailNav() {
  const pathname = usePathname();
  const router = useRouter();

  const activeIndex = Math.max(
    0,
    STATIONS.findIndex(s => pathname === s.href || pathname.startsWith(s.href + "/"))
  );
  const offset = STOPS[activeIndex] ?? 0;

  return (
    <div className="relative my-8">
      <div className="mx-auto max-w-5xl px-4">
        {/* curve */}
        <svg viewBox="0 0 1000 220" className="w-full h-[160px]">
          <defs>
            <linearGradient id="railSheen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#cfd2d6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#9aa0a6" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="pylonHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-aquaBrand)" stopOpacity="1" />
              <stop offset="70%" stopColor="var(--color-aquaBrand)" stopOpacity=".15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path d={PATH_D} stroke="url(#railSheen)" strokeWidth="10" fill="none" />
          <path d={PATH_D} stroke="var(--color-aquaBrand)" strokeOpacity=".35" strokeWidth="2" fill="none" />

          {/* halos (approx positions) */}
          {STOPS.map((t, i) => {
            const x = 20 + t * (980 - 20);
            const y = i % 2 ? 170 : 150;
            return <circle key={i} cx={x} cy={y} r="14" fill="url(#pylonHalo)" opacity={i === activeIndex ? .9 : .45} />;
          })}
        </svg>

        {/* capsule via CSS motion‑path */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 h-[160px]"
          style={{
            offsetPath: `path("${PATH_D}")`,
            offsetDistance: `${offset * 100}%`,
            offsetRotate: "auto 90deg",
            transition: "offset-distance 700ms cubic-bezier(.22,.9,.2,1)",
          }}
        >
          <div className="translate-x-[-70px] translate-y-[-40px]">
            <Capsule />
          </div>
        </div>

        {/* labels/buttons */}
        <div className="mt-2 grid grid-cols-5 gap-2 text-[12px] text-zinc-600">
          {STATIONS.map((s, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={s.href}
                onClick={() => router.push(s.href)}
                className={[
                  "rounded-md px-2 py-1 transition border",
                  active ? "bg-indigoBrand text-white border-indigoBrand" : "hover:bg-zinc-50 border-transparent"
                ].join(" ")}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Capsule() {
  return (
    <svg width="140" height="80" viewBox="0 0 140 80" className="drop-shadow-sm animate-bob">
      <defs>
        <linearGradient id="steelSkin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef1f4" />
          <stop offset="50%" stopColor="#c6cbd1" />
          <stop offset="100%" stopColor="#e3e6ea" />
        </linearGradient>
        <linearGradient id="brassBand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f3d06a" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6f3ff" />
          <stop offset="100%" stopColor="#bcd2ff" />
        </linearGradient>
      </defs>

      <ellipse cx="70" cy="62" rx="40" ry="6" fill="var(--color-aquaBrand)" opacity=".22" />
      <g>
        <rect x="18" y="26" width="104" height="28" rx="14" fill="url(#steelSkin)" />
        <rect x="18" y="38" width="104" height="6" rx="3" fill="url(#brassBand)" />
        <path d="M18 40c0-10 8-18 18-18h10v36H36c-10 0-18-8-18-18z" fill="url(#steelSkin)" />
        <rect x="44" y="30" width="44" height="16" rx="8" fill="url(#glass)" stroke="#8aa0c8" strokeWidth="1" />
        <rect x="88" y="22" width="2" height="8" rx="1" fill="#9aa0a6" />
        <circle cx="89" cy="22" r="2" fill="var(--color-pinkBrand)" />
      </g>
    </svg>
  );
}
