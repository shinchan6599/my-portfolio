import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writings and insights on software engineering and the business of tech by Dhyey Bhansali, including the Binary Business series.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <BlogContent />;
}
