"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const STATIONS = [
  { id: "home",     label: "Home",     href: "/" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "blog",     label: "Blog",     href: "/blog" },
  { id: "about",    label: "About",    href: "/about" },
  { id: "contact",  label: "Contact",  href: "/contact" },
];

const CAR_WIDTH = 140;
const CAR_HALF  = CAR_WIDTH / 2;

export default function TrainNav() {
  const pathname = usePathname();
  const activeIndex = Math.max(
    0,
    STATIONS.findIndex(s => pathname === s.href || pathname.startsWith(s.href + "/"))
  );

  // evenly spaced stops [0..1] just for drawing pylons
  const ratios = useMemo(
    () => STATIONS.map((_, i) => (STATIONS.length === 1 ? 0 : i / (STATIONS.length - 1))),
    []
  );

  // DOM‑measured pixel centers of each station marker
  const wrapRef = useRef(null);
  const markerRefs = useRef([]);
  const [centers, setCenters] = useState([]);

  useLayoutEffect(() => {
    if (!wrapRef.current) return;

    const calc = () => {
      const wrapLeft = wrapRef.current.getBoundingClientRect().left;
      const arr = markerRefs.current.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return r.left + r.width / 2 - wrapLeft; // center X relative to wrapper
      });
      setCenters(arr);
    };

    calc();

    // Recalculate on resize / layout shifts
    const ro = new ResizeObserver(calc);
    ro.observe(wrapRef.current);
    markerRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", calc);

    return () => {
      window.removeEventListener("resize", calc);
      ro.disconnect();
    };
  }, []);

  // pixel target for the active station (fallback to ratio if not yet measured)
  const px = centers[activeIndex] ?? ((ratios[activeIndex] || 0) * (wrapRef.current?.clientWidth || 0));

  return (
    <div className="relative my-6">
      <div className="mx-auto max-w-5xl">
        {/* TRACK */}
        <div ref={wrapRef} className="relative h-20 select-none">
          {/* invisible markers used for precise positioning */}
          {ratios.map((t, i) => (
            <div
              key={`m-${i}`}
              ref={(el) => (markerRefs.current[i] = el)}
              className="absolute top-0 h-full w-[2px]"
              style={{ left: `${t * 100}%`, transform: "translateX(-1px)" }}
              aria-hidden
            />
          ))}

          {/* SVG rail rendered under markers */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="railGloss" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"  stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="40%" stopColor="#cfd2d6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#9aa0a6" stopOpacity="0.7" />
              </linearGradient>
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
              </filter>
              <radialGradient id="pylonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-aquaBrand)" stopOpacity="0.95" />
                <stop offset="70%" stopColor="var(--color-aquaBrand)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* monorail beam */}
            <rect x="0" y="40" width="1000" height="10" rx="5" fill="url(#railGloss)" filter="url(#softShadow)" />
            <rect x="0" y="52" width="1000" height="2" fill="var(--color-aquaBrand)" opacity="0.35" />

            {/* pylons (visual only) */}
            {ratios.map((s, i) => (
              <g key={i} transform={`translate(${s * 1000},0)`}>
                <rect x="-2" y="26" width="4" height="18" rx="2" fill="rgba(0,0,0,.15)" />
                <circle cx="0" cy="24" r="12" fill="url(#pylonGlow)" opacity={i === activeIndex ? 0.9 : 0.45} />
                <circle cx="0" cy="24" r="5" className={i === activeIndex ? "fill-indigoBrand" : "fill-zinc-300"} />
              </g>
            ))}
          </svg>

          {/* TRAIN — move to measured pixel center */}
          <div
            className="absolute top-0 h-full transition-transform duration-700 ease-[cubic-bezier(.22,.9,.2,1)] will-change-transform"
            style={{ transform: `translateX(${Math.max(0, px - CAR_HALF)}px)` }}
          >
            <CapsuleCar />
          </div>

          {/* labels */}
          <div className="absolute inset-x-0 bottom-0 flex justify-between text-[12px] text-zinc-600">
            {STATIONS.map((s, i) => {
              const active = i === activeIndex;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`rounded-md px-2 py-1 transition ${active ? "bg-indigoBrand text-white" : "hover:bg-zinc-100"}`}
                >
                  {s.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function CapsuleCar() {
  return (
    <svg width={CAR_WIDTH} height="80" viewBox="0 0 140 80" className="animate-bob">
      <defs>
        <linearGradient id="steelSkin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8eaed" />
          <stop offset="50%" stopColor="#b8bdc4" />
          <stop offset="100%" stopColor="#d7d9dc" />
        </linearGradient>
        <linearGradient id="brassBand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f3d06a" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6f3ff" />
          <stop offset="100%" stopColor="#bcd2ff" />
        </linearGradient>
        <filter id="carShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>

      <ellipse cx="70" cy="60" rx="42" ry="6" fill="var(--color-aquaBrand)" opacity=".28" />
      <g filter="url(#carShadow)">
        <rect x="18" y="26" width="104" height="28" rx="14" fill="url(#steelSkin)" />
        <rect x="18" y="38" width="104" height="6" rx="3" fill="url(#brassBand)" />
        <path d="M18 40c0-10 8-18 18-18h10v36H36c-10 0-18-8-18-18z" fill="url(#steelSkin)" />
        <rect x="44" y="30" width="44" height="16" rx="8" fill="url(#glass)" stroke="#8aa0c8" strokeWidth="1" />
        <rect x="88" y="22" width="2" height="8" rx="1" fill="#9aa0a6" />
        <circle cx="89" cy="22" r="2" fill="var(--color-pinkBrand)" />
      </g>
      <g className="steam">
        <circle cx="32" cy="20" r="2.5" fill="#e5e7eb" />
        <circle cx="28" cy="16" r="1.8" fill="#e5e7eb" />
      </g>
    </svg>
  );
}
