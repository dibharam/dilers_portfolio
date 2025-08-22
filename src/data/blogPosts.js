const blogPosts = [
  {
  slug: "StrideAI_start",
  title: "Notes from starting my startup, StrideAI",
  date: "2025-08-19",
  tags: ["NodeJS", "AI", "Next.js", "Express", "PERN"],
  excerpt:
    "Initial repo and project setup for my new startup StrideAI — frontend in Next.js, backend with Node/Express, using the PERN stack for scalability.",
  content: [
    "I officially kicked off StrideAI, starting from scratch with the PERN stack (PostgreSQL, Express, React/Next.js, Node). The focus was on a clean, scalable foundation.",
    "The first steps were setting up the GitHub repo, initializing the Next.js frontend, and wiring up the Node/Express backend with PostgreSQL for persistence.",
    "I also worked on fundamentals: naming, privacy policy, and terms of service to make the project startup-ready. Even ran a light DPIA (data protection impact assessment) to map what data is stored and how deletion works.",
    "This stage was less about features and more about structure: version control, conventions, and repo organization. Now with the base stack in place, the next phase is building the first AI-driven study-planning features."
  ],
},
{
  slug: "strideai_progress_auth_backend",
  title: "Building StrideAI: Backend Health & Next Steps",
  date: "2025-08-22",
  tags: ["NodeJS", "Express", "Next.js", "PERN", "API"],
  excerpt:
    "Making progress on StrideAI’s backend and frontend setup — testing API health routes, planning authentication, and structuring next development steps.",
  content: [
    "This week I focused on making sure both the backend and frontend are running smoothly. The frontend renders correctly on http://localhost:3000, while the backend API is being wired up at http://localhost:4000.",
    "I added a simple `/health` route to test connectivity between the two layers. Right now it’s returning an error, which is expected until everything is properly configured — but it’s a good checkpoint to verify requests are flowing.",
    "The next milestone is adding proper authentication: bcrypt hashing, JWT/session handling, and a solid user model in Prisma. This will set the stage for onboarding flows and daily planning endpoints.",
    "With the base repo in place, the project is shifting from setup into actual feature-building. Excited to move from structure into functionality in the coming days!",
    "I also noticed there is a company named StrideAI already so name change is due :("
  ],
},
];

export default blogPosts;
