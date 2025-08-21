// src/components/layout/SiteShell.js
import Header from "./Header";

export default function SiteShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-600">
          © {new Date().getFullYear()} Diler Bharam
        </div>
      </footer>
    </div>
  );
}
