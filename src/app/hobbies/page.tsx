export default function HobbiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Sports & Hobbies</h1>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Sports Fanatic</h2>
        <p className="text-gray-700 mb-2">I’m passionate about all sports—cricket, chess, running, and swimming.</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Cricket: Former U-19 player for the Central Board of Cricket, Ahmedabad (CBCA).</li>
          <li>Chess: FIDE-rated and rated 2100 on Chess.com.</li>
          <li>Running & Swimming: Completed a half marathon in 2h 28m.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-2">Content Creation</h2>
        <p className="text-gray-700">
          I’m planning to create blog posts or video tutorials on chess and cricket. (Let me know if you'd like help choosing between blog or video formats!)
        </p>
      </div>
    </div>
  )
}