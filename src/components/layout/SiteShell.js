import Header from "./Header";
import Footer from "./Footer";

export default function SiteShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
