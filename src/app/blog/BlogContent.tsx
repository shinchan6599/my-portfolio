"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, PenLine } from "lucide-react";
import { blogPosts, categories } from "./data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Writings &amp; Insights
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
          Sharing my thoughts on software engineering, the business of tech, and everything in between. Check out my latest series, <strong className="text-[var(--foreground)]">Binary Business</strong>.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12 flex flex-wrap gap-3 justify-center"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-[var(--foreground)] text-[var(--background)] shadow-md scale-105"
                : "bg-[var(--card)] text-[var(--muted)] border border-[var(--card-border)] hover:border-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Posts List */}
      <div className="max-w-4xl mx-auto space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, i) => (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <a
                href={post.link}
                target={post.external ? "_blank" : "_self"}
                rel={post.external ? "noopener noreferrer" : ""}
                className="group block bg-[var(--card)] rounded-3xl p-6 sm:p-8 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                  <div className="flex-grow space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-bold tracking-wider uppercase">
                        {post.category}
                      </span>
                      <span className="text-sm font-medium text-[var(--muted)]">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[var(--muted)] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="shrink-0 p-4 rounded-full bg-slate-50 dark:bg-slate-800/50 text-[var(--muted)] group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 sm:self-center">
                    {post.external ? <ExternalLink className="w-6 h-6" /> : <PenLine className="w-6 h-6" />}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-[var(--muted)]"
          >
            No posts found for this category yet!
          </motion.div>
        )}
      </div>
    </div>
  );
}
