const blogPosts = [
  {
    slug: "nextjs-15-tailwind-v4-portfolio-structure",
    title: "How I structured a Next.js 15 + Tailwind v4 portfolio",
    date: "2025-08-17",
    tags: ["Next.js", "Tailwind v4", "App Router"],
    excerpt:
      "Group routes, a shared site shell, and Tailwind v4 @theme tokens — here’s the minimal setup I used.",
    content: [
      "I organized the app with group routes: (site) for the portfolio and (marketing) for landing pages. Group names are invisible in the URL, so (site)/page.js renders at '/'.",
      "Tailwind v4 simplified config: I import `tailwindcss` in globals and define brand colors with an @theme block. That gives me utilities like bg-indigoBrand or text-aquaBrand without a JS config.",
      "I added a shared shell (Header/ Footer) at (site)/layout.js so every portfolio page inherits the same look and feel. Projects, Blog, and Contact live inside (site) and automatically use the shell.",
    ],
  },
  {
    slug: "homepointr-notes",
    title: "Notes from building HomePointr",
    date: "2025-08-10",
    tags: ["PropTech", "AI", "Next.js", "FastAPI"],
    excerpt:
      "Frontend in Next.js, backend with Node/FastAPI, GPT risk checks and Polygon smart escrow — a quick snapshot.",
    content: [
      "I focused on a clear investment dashboard UX in React/Next.js and wired the backend using Node/FastAPI with PostgreSQL.",
      "We experimented with GPT-4o for due diligence and risk scoring, and Polygon for secure escrow flows. The combination made automated transactions both safer and faster.",
      "Team-wise, onboarding conventions and a clean component structure helped scale the work across 15+ contributors.",
    ],
  },
];

export default blogPosts;
