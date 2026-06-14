import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dhyey Bhansali — connect on GitHub, LinkedIn, Instagram, or email.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactContent />;
}
