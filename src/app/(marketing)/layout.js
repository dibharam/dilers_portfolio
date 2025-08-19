import Link from "next/link";

export default function MarketingHome() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold text-pinkBrand">Marketing Landing</h1>
      <p className="text-zinc-700">This lives at <strong>/marketing</strong>…</p>
      <Link href="/" className="underline">Back to site</Link>
    </section>
  );
}
