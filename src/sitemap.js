export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["", "/projects", "/blog", "/contact", "/marketing", "/about"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
