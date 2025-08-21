export default function ParallaxScene() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 skypaper">
      {/* faint gradient beam */}
      <div className="absolute inset-x-0 top-0 h-1 rail-gradient opacity-80" />
      {/* cloud layers */}
      <div className="cloud-row">
        <div className="clouds" style={{ bottom: "20%" }} />
        <div className="clouds" style={{ bottom: "35%", animationDuration: "55s", opacity: .35 }} />
        <div className="clouds" style={{ bottom: "50%", animationDuration: "70s", opacity: .25 }} />
      </div>
    </div>
  );
}
