"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";

// Map the topojson country names → our destination ids.
const NAME_TO_ID: Record<string, string> = {
  Turkey: "turkey",
  Switzerland: "switzerland",
  Norway: "norway",
  Italy: "italy",
  "United States of America": "usa",
  "United Kingdom": "uk",
  Vietnam: "vietnam",
  "South Africa": "south-africa",
  France: "france",
  Greece: "greece",
  Belgium: "belgium",
  Netherlands: "netherlands",
  Sweden: "sweden",
  "United Arab Emirates": "uae",
  "Sri Lanka": "sri-lanka",
  Thailand: "thailand",
  Malaysia: "malaysia",
  Canada: "canada",
  Qatar: "qatar",
  Nepal: "nepal",
  Germany: "germany",
};

// Tiny countries that don't render as shapes on a 110m map — show as dots.
const MARKERS: { id: string; name: string; coords: [number, number] }[] = [
  { id: "maldives", name: "Maldives", coords: [73.22, 3.2] },
  { id: "singapore", name: "Singapore", coords: [103.82, 1.35] },
  { id: "vatican", name: "Vatican", coords: [12.45, 41.9] },
];

const WIDTH = 800;
const HEIGHT = 400;

type Tooltip = { label: string; x: number; y: number } | null;

export default function WorldMap() {
  const router = useRouter();
  const [geo, setGeo] = useState<FeatureCollection<Geometry, { name: string }> | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/world-110m.json")
      .then((r) => r.json())
      .then((topology) => {
        if (!active) return;
        const fc = feature(
          topology,
          topology.objects.countries
        ) as unknown as FeatureCollection<Geometry, { name: string }>;
        setGeo(fc);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const { paths, markerPoints } = useMemo(() => {
    if (!geo) return { paths: [], markerPoints: [] };
    const projection = geoEqualEarth().fitSize([WIDTH, HEIGHT], { type: "Sphere" });
    const pathGen = geoPath(projection);
    const paths = geo.features.map((f) => {
      const name = f.properties?.name ?? "";
      const id = NAME_TO_ID[name];
      return { d: pathGen(f) ?? "", name, id };
    });
    const markerPoints = MARKERS.map((m) => {
      const p = projection(m.coords);
      return { ...m, x: p?.[0] ?? 0, y: p?.[1] ?? 0 };
    });
    return { paths, markerPoints };
  }, [geo]);

  const go = (id?: string) => {
    if (id) router.push(`/travel/${id}`);
  };

  const move = (label: string, e: React.MouseEvent) => {
    setTooltip({ label, x: e.clientX, y: e.clientY });
  };

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto mb-16">
      <div className="bg-[var(--card)] rounded-3xl border border-[var(--card-border)] p-4 sm:p-6">
        {!geo ? (
          <div className="aspect-[2/1] rounded-2xl bg-slate-100 dark:bg-slate-800/60 animate-pulse" />
        ) : (
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="w-full h-auto"
            role="img"
            aria-label="World map of countries I've visited"
          >
            {paths.map((p, i) => {
              const visited = Boolean(p.id);
              return (
                <path
                  key={i}
                  d={p.d}
                  className={`stroke-white dark:stroke-slate-900 transition-colors duration-200 ${
                    visited
                      ? "fill-teal-500 hover:fill-teal-400 cursor-pointer"
                      : "fill-slate-200 dark:fill-slate-700"
                  }`}
                  strokeWidth={0.4}
                  onMouseEnter={(e) => visited && move(p.name, e)}
                  onMouseMove={(e) => visited && move(p.name, e)}
                  onMouseLeave={() => setTooltip(null)}
                  onClick={() => go(p.id)}
                />
              );
            })}
            {markerPoints.map((m) => (
              <circle
                key={m.id}
                cx={m.x}
                cy={m.y}
                r={4}
                className="fill-teal-500 hover:fill-teal-400 cursor-pointer stroke-white dark:stroke-slate-900"
                strokeWidth={1}
                onMouseEnter={(e) => move(m.name, e)}
                onMouseMove={(e) => move(m.name, e)}
                onMouseLeave={() => setTooltip(null)}
                onClick={() => go(m.id)}
              />
            ))}
          </svg>
        )}
        <p className="text-center text-xs text-[var(--muted)] mt-3">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-teal-500 align-middle mr-1.5" />
          Visited — tap a country to explore
        </p>
      </div>

      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-lg"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          {tooltip.label}
        </div>
      )}
    </div>
  );
}
