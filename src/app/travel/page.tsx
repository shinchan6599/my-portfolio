import type { Metadata } from "next";
import TravelContent from "./TravelContent";

export const metadata: Metadata = {
  title: "Travel",
  description:
    "Travel stories, adventure sports, and the vegetarian food scene across 24 countries — explored by Dhyey Bhansali.",
  alternates: { canonical: "/travel" },
};

export default function Page() {
  return <TravelContent />;
}
