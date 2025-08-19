import profile from "@/data/profile";
import experience from "@/data/experience";

export const metadata = { title: "About — Diler" };

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-indigoBrand">About</h1>
        <p className="text-zinc-700 max-w-2xl">{profile.bio}</p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Experience */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Experience</h2>
          <ul className="space-y-4">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="rounded-2xl border p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium">{job.role} — <span className="text-indigoBrand">{job.company}</span></p>
                    <p className="text-sm text-zinc-600">{job.location} • {job.period}</p>
                  </div>
                </div>
                <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <ul className="space-y-4">
            {profile.education.map((ed) => (
              <li key={ed.school} className="rounded-2xl border p-4">
                <p className="font-medium">{ed.degree}</p>
                <p className="text-sm text-zinc-600">{ed.school} • {ed.period} • {ed.result}</p>
                <p className="mt-2 text-sm text-zinc-700">
                  Coursework: {ed.coursework.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
