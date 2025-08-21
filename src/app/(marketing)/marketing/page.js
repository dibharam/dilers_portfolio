"use client";

import { useEffect, useState } from "react";

export default function NameIntro({ onDone, duration = 3800 }) {  // ⬅️ slower by default
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFade(true), duration - 600); // start fading 600ms before
    const t2 = setTimeout(() => {
      setShow(false);
      onDone?.();
    }, duration);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [duration, onDone]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* beam */}
      <div className="absolute inset-x-0 top-0 h-1 rail-gradient" />

      {/* name lockup */}
      <div className="text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-indigoBrand animate-intro-pop">
          {/* letters flicker */}
          {"Diler Bharam".split("").map((ch, i) => (
            <span
              key={i}
              className={`inline-block animate-letter-flicker`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>
        <p className="mt-3 text-zinc-700 animate-intro-fade">
          Frontend Engineer · Next.js · React Native
        </p>

        <button
          onClick={() => { setShow(false); onDone?.(); }}
          className="mt-6 rounded-xl border px-4 py-2 text-sm hover:bg-zinc-50"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
