"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Trophy,
  MapPin,
  Linkedin,
  Dumbbell,
  Code2,
  Newspaper
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Dhyey Bhansali
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-6">
          Senior Software Engineer &amp; Tech Lead @ Akridata
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          I am a 27-year-old engineer who has spent the last 5+ years scaling cloud-native data platforms from zero to petabytes. From designing multi-tenant gateways to eliminating production OOM failures on enterprise ML workloads, I build infrastructure that scales. Beyond the screen, I am a competitive chess player, division-level cricketer, and a massive travel and adventure enthusiast.
        </p>
      </motion.div>

      {/* Engineering & Achievements Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

        {/* Left Column: Tech Stack & Work */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl text-blue-600 dark:text-blue-400">
              <Terminal className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Engineering</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Cloud-Native ML Infrastructure</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              As a Tech Lead at Akridata, I architected the company-wide authentication gateway and delivered end-to-end data-synthesis pipelines for Fortune 500 customers like Medtronic and Ford.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "AWS ECS / ECR", "Kubernetes", "Celery", "PostgreSQL", "Docker", "S3"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Achievements & CP */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-2xl text-amber-600 dark:text-amber-400">
              <Trophy className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Competitive Programming</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
            <div className="flex items-start gap-4">
              <Code2 className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">ACM ICPC All-India Rank 41</h3>
                <p className="text-slate-600 dark:text-slate-400">Asia Regional, IIT Kharagpur (out of 3,500+ teams)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Code2 className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">ACM ICPC All-India Rank 83</h3>
                <p className="text-slate-600 dark:text-slate-400">Amritapuri Regional</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Trophy className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Multiple Hackathon Winner</h3>
                <p className="text-slate-600 dark:text-slate-400">Fintech &apos;19, IoT &apos;18, and Lakshya Codewars Winner &apos;18</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Beyond the Keyboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-10 text-center justify-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">Beyond The Keyboard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <Trophy className="h-8 w-8 text-indigo-200 mb-6" />
            <h3 className="text-xl font-bold mb-4">Chess Mastermind</h3>
            <ul className="text-indigo-100 text-sm space-y-2 leading-relaxed">
              <li>• <strong>Chess.com:</strong> ~2300 ELO (@dhyey6599)</li>
              <li>• <strong>FIDE:</strong> 1516 Rapid Rating (ID: 33435650)</li>
              <li>• <strong>World Chess (FOA):</strong> 87% avg accuracy with a 65% win rate</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <MapPin className="h-8 w-8 text-emerald-200 mb-6" />
            <h3 className="text-xl font-bold mb-2">Global Explorer</h3>
            <p className="text-emerald-100">Traveled to 25+ countries, chasing adrenaline sports and the best vegetarian food globally.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <Dumbbell className="h-8 w-8 text-orange-200 mb-6" />
            <h3 className="text-xl font-bold mb-2">Athlete</h3>
            <p className="text-orange-100">Played Division 2 cricket in Northamptonshire, UK, and completed two half-marathons.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <Linkedin className="h-8 w-8 text-blue-200 mb-6" />
            <h3 className="text-xl font-bold mb-2">Content Creator</h3>
            <p className="text-blue-100">Creator of &quot;Binary Business&quot; on LinkedIn, breaking down business strategies through an engineer&apos;s lens.</p>
          </div>
        </div>
      </motion.div>

      {/* Press & Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mt-24"
      >
        <div className="flex items-center gap-4 mb-10 text-center justify-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">Featured In The Press</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="https://www.ahmedabadmirror.com/dbms-march-on/56005977.html" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-orange-400/50 hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full text-orange-600 dark:text-orange-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Newspaper className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-500 mb-1">Ahmedabad Mirror</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Match winning performance from Dhyey Bhansali</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                Dhyey took 6 wickets in an innings to help my team reach semi finals.
              </p>
            </div>
          </a>

          <a href="https://www.ahmedabadmirror.com/mpower-ydoodle-in-final/51564726.html" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-orange-400/50 hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full text-orange-600 dark:text-orange-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Newspaper className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-500 mb-1">Ahmedabad Mirror</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Wicket of an IPL Player.</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                Dhyey took wicket of Harshal Patel and other state players to help his team reach finals.
              </p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
