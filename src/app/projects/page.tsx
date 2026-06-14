import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects & Hackathons",
  description:
    "A selection of projects and hackathon builds by Dhyey Bhansali — from IoT systems to full-stack web apps — plus live GitHub activity.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsContent />;
}
