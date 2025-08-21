import profile from "@/data/profile";
import HomeClient from "./HomeClient";

export const metadata = {
  title: `Home — ${profile.name}`,
  description: profile.tagline,
};

export default function HomePage() {
  return <HomeClient profile={profile} />;
}
