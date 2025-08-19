const profile = {
  name: "Diler Bharam",
  tagline: "Front end/backend developer with Next.js and Nodejs building clean, fast web apps and AI-powered products.",
  location: "UK",
  email: "di.bharam@gmail.com",
  // mask your phone on the public site if you like:
  phone: "+44 7479 ••••••",
  links: {
    linkedin: "https://linkedin.com/in/dilerbharam",
    github: "https://github.com/dibharam",
    tiktok: "https://www.tiktok.com/@di.bhar",
    instagram: "https://www.instagram.com/di.bhar7/",
  },
  bio: `
I’m a software developer specializing in React/Next.js on the frontend and Node.js/FastAPI on the backend. 
I care about clarity, accessibility, and performance, and I enjoy turning fuzzy ideas into shippable, tested features. 
Most recently I contributed with DataKirk to HomePointr, an AI-powered PropTech platform tackling trust and fraud in diaspora real-estate, 
helping onboard a 15+ dev team and attracting 2,100+ waitlist signups. I like building end-to-end: from clean UI and data 
flows to secure APIs and PostgreSQL schemas, and experimenting with GPT models to automate due diligence and risk assessment.
  `.trim(),
  education: [
    {
      school: "The Open University",
      degree: "BSc (Hons) Computer Science",
      period: "Expected Jul 2026",
      result: "Expected First Class",
      coursework: [
        "Algorithms, Data Structures & Computability",
        "Object-Oriented Programming (Java)",
        "Web Technologies & Cyber Security",
        "Machine Learning",
        "Software Engineering",
        "Data Management & Analysis",
        "Web, Mobile & Cloud Technologies",
      ],
    },
  ],
  skills: {
    frontend: ["Next.js", "React", "Tailwind CSS", "HTML5", "Vue.js"],
    backend: ["Node.js", "FastAPI (Python)", "PostgreSQL", "REST APIs"],
    languages: ["JavaScript", "Python", "Java", "SQL", "TypeScript"],
    tooling: ["Git", "Docker", "Jira", "Power BI", "Firebase", "Chart.js"],
    domains: ["AI (GPT-4o integrations)", "Blockchain (Polygon, smart escrow)"],
  },
};
export default profile;
