import Link from "next/link"

export default function BlogPage() {
  // Later: you can fetch posts from markdown files, a CMS, or database.
  // For now: just a placeholder grid of categories.

  const categories = [
    { href: "/blog/chess", title: "Chess", desc: "FIDE journey, tutorials, and strategies." },
    { href: "/blog/cricket", title: "Cricket", desc: "U-19 experience, match insights & training." },
    { href: "/blog/travel", title: "Travel", desc: "25+ countries, food, shopping & tips." },
    { href: "/blog/tech", title: "Tech", desc: "Python, FastAPI, Kubernetes, AWS learnings." },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <p className="text-gray-600 mb-10">
        Welcome to my blog! Here I’ll share my thoughts, tutorials, and experiences on 
        <span className="font-semibold"> chess, cricket, travel,</span> and 
        <span className="font-semibold"> tech</span>.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="block border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
            <p className="text-gray-600">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}