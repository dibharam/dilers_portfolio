import Link from 'next/link';
import profile from "@/data/profile";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact — Diler" };

export default function ContactPage() {
  const emailHref = `mailto:${profile.email}?subject=Hello%20Diler&body=Hi%20Diler,%0D%0A%0D%0A`;

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-indigoBrand">Let’s talk</h1>
        <p className="text-zinc-700">I’m open to internships, junior roles, and collaboration.</p>
      </header>

      {/* interactive form lives in a client component */}
      <ContactForm />

      <div className="rounded-2xl border p-5">
        <h2 className="font-semibold">Or reach me directly</h2>
        <ul className="mt-2 list-disc pl-5 text-zinc-700 space-y-1">
          <li><Link className="underline" href={emailHref}>{profile.email}</Link></li>
          <li><Link className="underline" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
          <li><Link className="underline" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</Link></li>
          <li><Link className="underline" href={profile.links.tiktok} target="_blank" rel="noopener noreferrer">TikTok</Link></li>
          <li><Link className="underline" href={profile.links.instagram} target="_blank" rel="noopener noreferrer">instagram</Link></li>
        </ul>
      </div>
    </section>
  );
}
