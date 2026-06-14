import type { Metadata } from "next";
import HobbiesContent from "./HobbiesContent";

export const metadata: Metadata = {
  title: "Sports & Hobbies",
  description:
    "Cricket, chess, running and swimming — the sports and hobbies that keep Dhyey Bhansali going beyond the keyboard.",
  alternates: { canonical: "/hobbies" },
};

export default function Page() {
  return <HobbiesContent />;
}
