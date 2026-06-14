// Resolves the canonical site URL. Auto-detects the Vercel production domain
// so metadata/sitemap work without hardcoding; override with NEXT_PUBLIC_SITE_URL
// when a custom domain is set.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteName = "Dhyey Bhansali";

export const siteTagline = "Software Engineer & Competitive Programmer";

export const siteDescription =
  "Personal website of Dhyey Bhansali — software engineer and tech lead, competitive programmer, chess player, and traveler across 24 countries.";
