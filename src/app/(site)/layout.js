import SiteShell from "@/components/layout/SiteShell";
import ParallaxScene from "@/components/rails/ParallaxScene";
import TrainNav from "@/components/rails/TrainNav";

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <ParallaxScene />
      <TrainNav />
      <SiteShell>{children}</SiteShell>
    </div>
  );
}
