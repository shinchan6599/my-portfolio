import React from 'react';
import { FolderGit2, Trophy, Cpu, MonitorPlay, Smartphone } from "lucide-react";

export type ProjectType = "project" | "hackathon";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ElementType; // We will use Lucide icons
}

export const projectsData: Project[] = [
  {
    id: "smart-shopping-system",
    title: "Smart Shopping System",
    description: "An IoT-based application designed to revolutionize offline mall shopping. Built using RFID Tags & Labels, an RFID Reader, Bluetooth Module (HC-05), Arduino UNO, and an Android Studio application.",
    type: "project",
    techStack: ["Android Studio", "Arduino UNO", "RFID", "Bluetooth HC-05", "Java"],
    githubUrl: "https://github.com/shinchan6599/SmartShoppingSystem",
    icon: Smartphone,
  },
  {
    id: "speedy-spenders",
    title: "Speedy Spenders (Ingenious Hackathon)",
    description: "A fast-paced expense management and budgeting solution created during the Ingenious Hackathon. Focuses on rapid transaction logging and financial tracking.",
    type: "hackathon",
    techStack: ["Java", "Android"],
    githubUrl: "https://github.com/shinchan6599/IngeniousHackathon_SpeedySpenders_V2",
    icon: Trophy,
  },
  {
    id: "face-recognition-svd",
    title: "Face Recognition using SVD",
    description: "A mathematical approach to Facial Recognition implemented with Singular Value Decomposition (SVD). Uses matrix column vectorization to calculate the similarity measures of input images against a dataset.",
    type: "project",
    techStack: ["Mathematics", "SVD", "Algorithms", "Image Processing"],
    githubUrl: "https://github.com/shinchan6599/FaceRecognitionusingSingularValueDecomposition",
    icon: Cpu,
  },
  {
    id: "engagement-website",
    title: "Engagement Event Website",
    description: "A beautifully designed, responsive engagement website to share event details, galleries, and RSVPs. Deployed seamlessly to Vercel.",
    type: "project",
    techStack: ["TypeScript", "Next.js", "React", "Vercel"],
    githubUrl: "https://github.com/shinchan6599/engagement-website",
    liveUrl: "https://dhyey-riya.vercel.app",
    icon: MonitorPlay,
  },
  {
    id: "doctor-management",
    title: "Doctor Management System",
    description: "A comprehensive management system tailored for clinics and hospitals to handle doctor schedules, patient appointments, and general administration.",
    type: "project",
    techStack: ["Java", "Database Management", "Backend"],
    githubUrl: "https://github.com/shinchan6599/doctor-management",
    icon: FolderGit2,
  },
  {
    id: "frontend-experiments",
    title: "Frontend Lab & Experiments",
    description: "A collection of creative frontend experiments, UI components, and micro-interactions built with raw HTML, CSS, and JS.",
    type: "project",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX"],
    githubUrl: "https://github.com/shinchan6599/frontend-experiments",
    icon: MonitorPlay,
  },
  {
    id: "cow-bull-game",
    title: "Cow Bull Logic Game",
    description: "A digital implementation of the classic mind-bending code-breaking logic game 'Cows and Bulls'.",
    type: "project",
    techStack: ["Logic", "Algorithms", "Game Design"],
    githubUrl: "https://github.com/shinchan6599/CowBullGame",
    icon: FolderGit2,
  }
];
