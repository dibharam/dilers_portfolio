"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NameIntro from "@/components/intro/NameIntro";
import CurvedRailNav from "@/components/rails/CurvedRailNav";

/**
 * Behavior:
 * - If page prop skipIntro===true -> DO NOT show intro
 * - Otherwise -> show intro (default for plain "/")
 * - No localStorage needed; URL controls it.
 */
export default function HomeClient({
  profile = { name: "", tagline: "", bio: "" },
  skipIntro = false,
}) {
  // Decide after mount to avoid any SSR mismatch flicker
  const [ready, setReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setShowIntro(!skipIntro);
    setReady(true);
  }, [skipIntro]);

  const handleIntroDone = () => setShowIntro(false);

  if (!ready) return null;

  return (
    <>
      {showIntro && <NameIntro onDone={handleIntroDone} duration={4800} />}

      <section className="space-y-6">
        <div className="rounded-2xl border p-6 bg-gradient-to-br from-aquaBrand/5 via-transparent to-pinkBrand/5">
          <h1 className="text-3xl font-bold text-indigoBrand">{profile.name}</h1>
          <p className="mt-1 text-zinc-700">{profile.tagline}</p>
          <p className="mt-3 max-w-2xl text-zinc-700">{profile.bio}</p>
          <div className="mt-4 flex gap-3">
            <Link href="/projects" className="inline-block rounded-xl px-4 py-2 bg-indigoBrand text-white">
              View projects
            </Link>
            <Link href="/contact" className="inline-block rounded-xl px-4 py-2 border">
              Contact
            </Link>
          </div>
        </div>

        <CurvedRailNav />
      </section>
    </>
  );
}
