"use client";

import { useEffect, useState } from "react";

const STATIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function TrainNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { threshold: 0.6 }
    );
    STATIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block fixed left-6 top-24 z-40">
      <div className="relative pl-6">
        {/* vertical rail */}
        <div className="absolute left-2 top-0 bottom-0 w-1 rounded-full bg-zinc-200 overflow-hidden">
          <div className="absolute inset-0 rail-gradient opacity-40 animate-[pulse-rail_2.8s_ease-in-out_infinite]" />
        </div>

        <ul className="space-y-3">
          {STATIONS.map((s) => {
            const isActive = s.id === active;
            return (
              <li key={s.id} className="relative">
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={
                      "inline-flex h-4 w-4 items-center justify-center rounded-full border transition " +
                      (isActive
                        ? "border-indigoBrand bg-indigoBrand"
                        : "border-zinc-300 bg-white group-hover:border-indigoBrand")
                    }
                    aria-hidden
                  />
                  <span
                    className={
                      "text-sm transition " +
                      (isActive ? "text-indigoBrand font-medium" : "text-zinc-600 group-hover:text-indigoBrand")
                    }
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* sparks */}
        <div className="absolute left-0 top-6 spark" />
      </div>
    </aside>
  );
}
