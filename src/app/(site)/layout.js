// src/app/(site)/layout.js
import "../globals.css"; // keep your updated globals
import SiteShell from "@/components/layout/SiteShell";
import ParallaxScene from "@/components/rails/ParallaxScene"; // or your RailScene if you swapped

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <ParallaxScene />
      <SiteShell>{children}</SiteShell>
    </div>
  );
}
