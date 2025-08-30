import Link from "next/link"
import Hero from "../components/Hero"

const QUICK_LINKS = [
  { href: "/about", title: "About", blurb: "Who I am & what I do." },
  { href: "/projects", title: "Projects & Hackathons", blurb: "College projects and wins." },
  { href: "/competitions", title: "Competitive Programming", blurb: "CodeChef & ACM ICPC highlights." },
  { href: "/hobbies", title: "Sports & Hobbies", blurb: "Cricket, chess, running & swimming." },
  { href: "/travel", title: "Travel", blurb: "25+ countries — tips & experiences." },
  { href: "/blog", title: "Blog", blurb: "Notes, chess/cricket content (coming soon)." },
  { href: "/contact", title: "Contact", blurb: "Let’s connect — coffee in Ahmedabad?" },
]

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Hero />

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Explore</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}