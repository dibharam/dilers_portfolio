const projects = [
  {
    slug: "homepointr",
    title: "HomePointr",
    year: 2025,
    role: "Software Engineer Intern",
    summary:
      "AI-powered PropTech platform addressing trust and fraud in diaspora real estate with smart escrow and automated due diligence.",
    highlights: [
      "Onboarded 15+ developers; helped attract 2,100+ waitlist sign-ups",
      "Frontend in React/Next.js for investment dashboard UX",
      "Backend in Node.js & Prisma with PostgreSQL",
      "Blockchain-backed Smart Escrow on Polygon; GPT-4o-driven risk checks",
    ],
    tech: ["Next.js", "React", "Node.js", "FastAPI", "PostgreSQL", "Polygon", "OpenAI"],
    links: {
      // add real links when available
      repo: null,
      live: null,
    },
    cover: "/images/projects/homepointr-cover.jpg",
  },
  {
    slug: "strideai",
    title: "StrideAI",
    year: 2025,
    role: "Full-Stack Developer",
    summary:
      "Personal goal-setting web app that breaks complex objectives into actionable steps with an adaptive roadmap.",
    highlights: [
      "Full-stack: React/Next.js UI, FastAPI backend, PostgreSQL storage",
      "Focus on clean UX, auth, and progress tracking",
    ],
    tech: ["Next.js", "React", "FastAPI", "PostgreSQL"],
    links: { repo: null, live: null },
    cover: "/images/projects/kaiserai-cover.jpg",
  },
  {
    slug: "chess-ai-bot",
    title: "Chess AI Bot",
    year: 2024,
    role: "Developer",
    summary:
      "Python chess engine with rules, board representation, and Minimax-based AI; iterated via testing and debugging.",
    highlights: ["Move rules + validations", "Minimax for decision making"],
    tech: ["Python"],
    links: { 
      repo: "https://github.com/dibharam/Chess-AI-python",
      live: null
     },
    cover: "/images/projects/chess-bot-cover.jpg",
  },
  {
    slug: "visualise-expenses",
    title: "Visualise Expenses Web App",
    year: 2024,
    role: "Developer",
    summary:
      "Interactive web app to visualize personal expenses with charts and auth.",
    highlights: [
      "Chart.js visualizations",
      "Firebase authentication",
      "Responsive UI",
    ],
    tech: ["JavaScript", "Chart.js", "Firebase", "CSS"],
    links: { repo: "https://github.com/dibharam/expense-visualiser", 
      live: null 
    },
    cover: "/images/projects/expenses-cover.jpg",
  },
];
export default projects;
