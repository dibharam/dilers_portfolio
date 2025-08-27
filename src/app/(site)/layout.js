// src/app/(site)/layout.js
import "../globals.css";
import SidebarSlim from "@/components/SidebarSlim";

export default function SiteLayout({ children }) {
  return (
    <>
      <SidebarSlim />
      <main style={{ marginLeft: 72, minHeight: "100vh" }}>
        {children}
      </main>
    </>
  );
}
