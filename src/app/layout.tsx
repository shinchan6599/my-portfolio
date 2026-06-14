import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Providers from "../components/Providers"
import "./globals.css"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { siteUrl, siteName, siteTagline, siteDescription } from "../lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — ${siteTagline}`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Dhyey Bhansali",
    "software engineer",
    "competitive programmer",
    "chess",
    "travel",
    "Akridata",
  ],
  authors: [{ name: siteName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  jobTitle: "Senior Software Engineer & Tech Lead",
  worksFor: { "@type": "Organization", name: "Akridata" },
  sameAs: [
    "https://github.com/shinchan6599",
    "https://www.linkedin.com/in/dhyey-bhansali",
    "https://www.chess.com/member/dhyey6599",
    "https://codeforces.com/profile/Shinchan6599",
    "https://leetcode.com/u/dhyey18bhansali/",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
