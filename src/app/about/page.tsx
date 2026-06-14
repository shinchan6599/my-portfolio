import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Software Engineer at Anyscale building AI coding agents. 6+ years across distributed data platforms, Toptal Top 3%, ICPC All-India Rank 41, FIDE-rated chess player, and traveler.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutContent />;
}
