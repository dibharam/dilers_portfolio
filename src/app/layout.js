import "./globals.css";

export const metadata = {
  title: "diler’s portfolio",
  description: "Next.js + Tailwind v4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
