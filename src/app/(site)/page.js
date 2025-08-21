import profile from "@/data/profile";
import HomeClient from "./HomeClient";

export const metadata = {
  title: `Home — ${profile.name}`,
  description: profile.tagline,
};

export default function HomePage({ searchParams }) {
  const skipIntro = searchParams?.skipIntro === "1";
  return <HomeClient profile={profile} skipIntro={skipIntro} />;
}
