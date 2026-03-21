import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Providers from "../components/Providers"
import "./globals.css"
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  title: "Dhyey Bhansali — Portfolio",
  description:
    "Personal website of Dhyey Bhansali: software developer, competitive programmer, sports enthusiast, and traveler.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
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
