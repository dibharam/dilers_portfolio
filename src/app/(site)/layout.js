
import SiteShell from "@/components/layout/SiteShell";
import RailScene from "@/components/rails/RailScene"; // (or keep ParallaxScene if you didn’t rename)
import TrainNav from "@/components/rails/TrainNav";

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <RailScene />
      <SiteShell>
        {/* Train sits UNDER the header, ABOVE the content */}
        <div className="mx-auto max-w-5xl px-4">
          <TrainNav />
        </div>
        {children}
      </SiteShell>
    </div>
  );
}
