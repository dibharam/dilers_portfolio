"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

function DrawerContent({ onClose }) {
  const pathname = usePathname();
  return (
    <div className="fixed inset-0 z-50 md:hidden" aria-modal role="dialog" tabIndex={-1}>
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-72 p-4" style={{ backgroundColor: "#2f295c", color: "white" }}>
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="text-lg font-semibold">Homepointr</Link>
          <button aria-label="Close" className="rounded-lg px-3 py-1 bg-white/10" onClick={onClose}>✕</button>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block rounded-xl px-4 py-3 transition"
                style={{
                  backgroundColor: active ? "#30d5d1" : "transparent",
                  color: active ? "#2f295c" : "white",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden sticky top-0 z-40" style={{ backgroundColor: "#2f295c", color: "white" }}>
      <div className="flex items-center justify-between px-4 py-3">
        <button className="rounded-lg px-3 py-2 bg.white/10" onClick={() => setOpen(true)} aria-label="Open menu">
          ☰
        </button>
        <Link href="/" className="font-semibold">Homepointr</Link>
        <div className="w-8" />
      </div>

      <Suspense fallback={null}>
        {open && <DrawerContent onClose={() => setOpen(false)} />}
      </Suspense>
    </div>
  );
}
