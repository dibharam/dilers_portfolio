"use client";

import { useMemo, useState } from "react";
import projects from "@/data/projects";
import ProjectCard from "@/components/blocks/ProjectCard";

export default function ProjectsClient() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [year, setYear] = useState("All");

  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach(p => (p.tech || []).forEach(t => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const years = useMemo(() => {
    const set = new Set(projects.map(p => p.year).filter(Boolean));
    return ["All", ...Array.from(set).sort((a, b) => b - a)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(p => {
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary?.toLowerCase().includes(q) ||
        (p.highlights || []).some(h => h.toLowerCase().includes(q));
      const matchesTag = tag === "All" || (p.tech || []).includes(tag);
      const matchesYear = year === "All" || String(p.year) === String(year);
      return matchesQ && matchesTag && matchesYear;
    });
  }, [query, tag, year]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-indigoBrand">Projects</h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-72 max-w-full rounded-xl border px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-indigoBrand"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">⌘K</span>
          </div>

          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigoBrand"
            aria-label="Filter by tag"
          >
            {tags.map(t => <option key={t}>{t}</option>)}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigoBrand"
            aria-label="Filter by year"
          >
            {years.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length ? (
          filtered.map((p) => <ProjectCard key={p.slug} project={{ ...p, tags: p.tech }} />)
        ) : (
          <p className="text-zinc-600">No projects match your filters.</p>
        )}
      </div>
    </section>
  );
}
