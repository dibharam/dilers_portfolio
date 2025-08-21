export default function RailScene() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 skypaper">
      {/* metallic beam across top */}
      <div className="absolute inset-x-0 top-0 h-[6px] rail-gradient opacity-80" />

      {/* parallax cloud layers */}
      <div className="cloud-row">
        <div className="clouds" style={{ bottom: "22%" }} />
        <div className="clouds" style={{ bottom: "38%", animationDuration: "55s", opacity: .35 }} />
        <div className="clouds" style={{ bottom: "54%", animationDuration: "70s", opacity: .25 }} />
      </div>

      {/* faint gearworks background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* row of big ghosted gears */}
        <div className="absolute left-[-10%] top-[20%] h-64 w-64 opacity-[0.06] animate-gear-slow">
          <GearSVG />
        </div>
        <div className="absolute left-[15%] top-[35%] h-32 w-32 opacity-[0.07] animate-gear-rev">
          <GearSVG />
        </div>
        <div className="absolute right-[10%] top-[28%] h-52 w-52 opacity-[0.05] animate-gear-slow">
          <GearSVG />
        </div>
      </div>
    </div>
  );
}

function GearSVG() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <radialGradient id="metal" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,.9)" />
          <stop offset="60%" stopColor="rgba(200,200,200,.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,.15)" />
        </radialGradient>
      </defs>
      <g fill="url(#metal)">
        {/* simple gear silhouette */}
        <circle cx="50" cy="50" r="20" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x = 50 + Math.cos(a) * 30;
          const y = 50 + Math.sin(a) * 30;
          return <rect key={i} x={x-3} y={y-10} width="6" height="20" rx="2" transform={`rotate(${(a*180/Math.PI)} ${x} ${y})`} />;
        })}
      </g>
    </svg>
  );
}
