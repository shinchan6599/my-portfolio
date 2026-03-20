"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Utensils, Activity, Compass } from "lucide-react";
import { destinations } from "./data";
import Link from "next/link";

export default function TravelPage() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Wanderlust &amp; Adventures
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          As a 27-year-old Gujarati vegetarian with a thirst for adrenaline, I&apos;ve journeyed across the globe hunting for the best sports, ultimate adventure activities, and incredible plant-based food cultures. Here are some of my favorite memories from 24 beautiful countries!
        </p>
      </motion.div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {destinations.map((dest, index) => (
          <Link href={`/travel/${dest.id}`} key={dest.id} className="block w-full group outline-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-teal-400/50 transition-colors"
            >
              <div className="relative h-64 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="text-teal-400 h-5 w-5" />
                  <h2 className="text-2xl font-bold text-white tracking-wide">{dest.name}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                  &quot;{dest.description}&quot;
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-orange-100 dark:bg-orange-500/20 p-2 rounded-xl text-orange-600 dark:text-orange-400 shrink-0">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Adventure &amp; Sports</h3>
                      <p className="text-sm font-medium mt-1">{dest.highlights.adventure}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-500/20 p-2 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Veg Food Scene</h3>
                      <p className="text-sm font-medium mt-1">{dest.highlights.food}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-purple-100 dark:bg-purple-500/20 p-2 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
                      <Compass className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Culture</h3>
                      <p className="text-sm font-medium mt-1">{dest.highlights.culture}</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
