"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "./data";

export default function ProjectsPage() {
  const projects = projectsData.filter((p) => p.type === "project");
  const hackathons = projectsData.filter((p) => p.type === "hackathon");

  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
          Projects &amp; Hackathons
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
          A selection of things I&apos;ve built — from IoT experiments to full-stack web apps.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold mb-8 text-[var(--foreground)]"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="group bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white mb-4 shadow-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">{project.title}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                      <Github className="h-4 w-4" /> Code
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors">
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hackathons */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8 text-[var(--foreground)]"
        >
          Hackathons
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white mb-4 shadow-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">{project.title}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
