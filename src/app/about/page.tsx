import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Software Engineer & Tech Lead at Akridata scaling cloud-native ML data platforms. ICPC All-India Rank 41, FIDE-rated chess player, and traveler.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutContent />;
}
