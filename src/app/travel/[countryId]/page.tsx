"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Utensils, Activity, ShieldCheck, Sun, Lightbulb, ArrowLeft } from "lucide-react";
import { destinations } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function CountryPage({ params }: { params: Promise<{ countryId: string }> }) {
  const { countryId } = use(params);
  const dest = destinations.find((d) => d.id === countryId);

  if (!dest) return notFound();

  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto mb-10"
      >
        <Link
          href="/travel"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all destinations
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <MapPin className="text-teal-400 h-6 w-6" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {dest.name}
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-3xl mx-auto text-center text-lg text-[var(--muted)] leading-relaxed mb-16 italic"
      >
        &quot;{dest.description}&quot;
      </motion.p>

      {/* Highlights Strip */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Activity, label: "Adventure & Sports", value: dest.highlights.adventure, color: "from-orange-500 to-red-500" },
          { icon: Utensils, label: "Veg Food Scene", value: dest.highlights.food, color: "from-emerald-500 to-teal-600" },
          { icon: MapPin, label: "Culture", value: dest.highlights.culture, color: "from-purple-500 to-indigo-600" },
        ].map((h, i) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)] hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${h.color} text-white mb-4 shadow-lg`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2">{h.label}</h3>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">{h.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Best Time */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white">
              <Sun className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--foreground)]">Best Time to Visit</h3>
          </div>
          <p className="text-[var(--muted)] leading-relaxed">{dest.details.bestTime}</p>
        </motion.div>

        {/* Visa Hack */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--foreground)]">Visa Hack</h3>
          </div>
          <p className="text-[var(--muted)] leading-relaxed">{dest.details.visaHack}</p>
        </motion.div>

        {/* Veg Survival */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <Utensils className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--foreground)]">Vegetarian Survival Guide</h3>
          </div>
          <p className="text-[var(--muted)] leading-relaxed">{dest.details.vegSurvival}</p>
        </motion.div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--foreground)]">Pro Tip</h3>
          </div>
          <p className="text-[var(--muted)] leading-relaxed">{dest.details.proTip}</p>
        </motion.div>
      </div>

      {/* Top Adventures */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-[var(--foreground)]">
          Top Adventures
        </h3>
        <div className="space-y-4">
          {dest.details.topAdventures.map((adventure, i) => (
            <motion.div
              key={adventure}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 bg-[var(--card)] rounded-xl p-4 border border-[var(--card-border)] hover:shadow-md transition-shadow"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-sm shadow">
                {i + 1}
              </span>
              <span className="text-[var(--foreground)] font-medium">{adventure}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
