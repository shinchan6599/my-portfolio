"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Utensils, Activity, Compass, Search, Camera } from "lucide-react";
import {
  destinations,
  CONTINENT_OF,
  CONTINENT_ORDER,
  hasOwnPhotos,
  type Continent,
  type Destination,
} from "./data";
import { countryGallery } from "./gallery";
import TravelStats from "../../components/TravelStats";
import WorldMap from "../../components/WorldMap";
import Link from "next/link";

type Filter = "All" | Continent;
type Sort = "featured" | "az";

const FILTERS: Filter[] = ["All", ...CONTINENT_ORDER];

function DestinationCard({ dest, index }: { dest: Destination; index: number }) {
  const photoCount = countryGallery[dest.id]?.length ?? 0;
  const ownPhotos = hasOwnPhotos(dest);

  return (
    <Link href={`/travel/${dest.id}`} className="block w-full group outline-none">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
        className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-teal-400/50 transition-colors h-full"
      >
        <div className="relative h-64 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {ownPhotos && photoCount > 0 && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              <Camera className="h-3.5 w-3.5 text-teal-300" />
              {photoCount}
            </div>
          )}

          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <MapPin className="text-teal-400 h-5 w-5" />
            <h2 className="text-2xl font-bold text-white tracking-wide">{dest.name}</h2>
          </div>
        </div>

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
  );
}

export default function TravelPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<Sort>("featured");

  const stats = useMemo(() => {
    const continents = new Set(destinations.map((d) => CONTINENT_OF[d.id]));
    const adventures = destinations.reduce((s, d) => s + d.details.topAdventures.length, 0);
    const photoCountries = destinations.filter(hasOwnPhotos).length;
    // Round adventures down to a clean "70+" style figure.
    return {
      countries: destinations.length,
      continents: continents.size,
      adventures: Math.floor(adventures / 10) * 10,
      photoCountries,
    };
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = destinations.filter((d) => {
      const matchesQuery = !q || d.name.toLowerCase().includes(q);
      const matchesFilter = filter === "All" || CONTINENT_OF[d.id] === filter;
      return matchesQuery && matchesFilter;
    });
    if (sort === "az") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [query, filter, sort]);

  // Group by continent only in the default, unfiltered view.
  const grouped = filter === "All" && !query.trim() && sort === "featured";

  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Wanderlust &amp; Adventures
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          As a 27-year-old Gujarati vegetarian with a thirst for adrenaline, I&apos;ve journeyed across the globe hunting for the best sports, ultimate adventure activities, and incredible plant-based food cultures. Here are some of my favorite memories from {destinations.length} beautiful countries!
        </p>
      </motion.div>

      {/* Stats */}
      <TravelStats
        countries={stats.countries}
        continents={stats.continents}
        adventures={stats.adventures}
        photoCountries={stats.photoCountries}
      />

      {/* World Map */}
      <WorldMap />

      {/* Controls */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search countries…"
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-teal-400 transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md"
                  : "bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {f}
            </button>
          ))}
          <button
            onClick={() => setSort((s) => (s === "featured" ? "az" : "featured"))}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-all"
          >
            {sort === "az" ? "Sort: A–Z" : "Sort: Featured"}
          </button>
        </div>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <p className="text-center text-[var(--muted)] py-16">
          No countries match &quot;{query}&quot;.
        </p>
      ) : grouped ? (
        <div className="max-w-7xl mx-auto space-y-16">
          {CONTINENT_ORDER.map((continent) => {
            const inContinent = results.filter((d) => CONTINENT_OF[d.id] === continent);
            if (inContinent.length === 0) return null;
            return (
              <div key={continent}>
                <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)] flex items-center gap-3">
                  {continent}
                  <span className="text-sm font-medium text-[var(--muted)]">
                    {inContinent.length}
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {inContinent.map((dest, i) => (
                    <DestinationCard key={dest.id} dest={dest} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {results.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
