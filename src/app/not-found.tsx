import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-7xl md:text-8xl font-extrabold gradient-text mb-4">404</p>
      <h1 className="text-2xl font-bold text-[var(--foreground)] mb-3">
        This page wandered off the map.
      </h1>
      <p className="text-[var(--muted)] max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-300"
        >
          <Home className="h-4 w-4" /> Back Home
        </Link>
        <Link
          href="/travel"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] rounded-xl hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Compass className="h-4 w-4" /> Explore Travels
        </Link>
      </div>
    </div>
  );
}
