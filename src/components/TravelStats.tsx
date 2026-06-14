"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe2, Map, Compass, Camera } from "lucide-react";

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function Stat({
  icon: Icon,
  target,
  suffix,
  label,
  start,
  color,
  delay,
}: {
  icon: React.ElementType;
  target: number;
  suffix?: string;
  label: string;
  start: boolean;
  color: string;
  delay: number;
}) {
  const value = useCountUp(target, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-[var(--card)] rounded-3xl p-6 border border-[var(--card-border)] flex flex-col items-center text-center"
    >
      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${color} text-white mb-4 shadow-lg`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-4xl font-extrabold text-[var(--foreground)] tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-[var(--muted)] mt-1">{label}</div>
    </motion.div>
  );
}

export default function TravelStats({
  countries,
  continents,
  adventures,
  photoCountries,
}: {
  countries: number;
  continents: number;
  adventures: number;
  photoCountries: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
      <Stat icon={Globe2} target={countries} label="Countries" start={start} color="from-emerald-500 to-teal-600" delay={0} />
      <Stat icon={Map} target={continents} label="Continents" start={start} color="from-blue-500 to-indigo-600" delay={0.1} />
      <Stat icon={Compass} target={adventures} suffix="+" label="Adventures" start={start} color="from-orange-500 to-red-500" delay={0.2} />
      <Stat icon={Camera} target={photoCountries} label="Photo Stories" start={start} color="from-fuchsia-500 to-pink-600" delay={0.3} />
    </div>
  );
}
