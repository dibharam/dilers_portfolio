// src/components/intro/NameIntro.js
"use client";

import { useEffect, useState } from "react";

/**
 * Elegant intro overlay.
 * - Shows for `duration` ms, starts a smooth fade ~18% before the end.
 * - Uses your global CSS utilities: .rail-gradient, .bg-mesh, .animate-mesh, .bg-grid,
 *   .animate-intro-pop, .animate-intro-pop-sm, .animate-intro-fade, .animate-intro-sheen
 * - Sits slightly higher on screen (pt-[18vh]).
 */
export default function NameIntro({ onDone, duration = 3000 }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Begin fading 18% before the end (clamped to 600–900ms)
    const fadeLead = Math.min(900, Math.max(600, duration * 0.18));
    const t1 = setTimeout(() => setFading(true), Math.max(0, duration - fadeLead));
    const t2 = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, duration);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [duration, onDone]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Intro"
      className={[
        "fixed inset-0 z-[100] flex flex-col bg-white overflow-hidden",
        "transition-opacity duration-700",
        fading ? "opacity-0" : "opacity-100",
      ].join(" ")}
    >
      {/* top rail accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] rail-gradient opacity-80" aria-hidden />

      {/* subtle animated background texture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-mesh animate-mesh" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(255,255,255,0.75),transparent_60%)]" />
      </div>

      {/* lockup (nudged higher) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-[18vh] text-center">
        {/* DB monogram */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-indigoBrand flex items-center justify-center shadow-lg animate-intro-pop-sm">
          <span className="text-white font-bold text-2xl sm:text-3xl tracking-tight">DB</span>
        </div>

        {/* Name */}
        <h1
          className={[
            "mt-6 text-4xl sm:text-6xl font-semibold tracking-tight",
            "text-transparent bg-clip-text",
            "bg-[linear-gradient(90deg,var(--color-indigoBrand),var(--color-aquaBrand))]",
            "animate-intro-pop",
          ].join(" ")}
        >
          Diler&nbsp;Bharam
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-sm sm:text-base text-zinc-600 animate-intro-fade">
          Full Stack Engineer · Next.js · React Native · NodeJS · PostgreSQL
        </p>

        {/* Elegant underline accent */}
        <div
          className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-zinc-300 to-transparent animate-intro-sheen"
          aria-hidden
        />

        {/* Skip (optional quick exit) */}
        <button
          onClick={() => { setVisible(false); onDone?.(); }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm text-zinc-700 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigoBrand/30"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
