import { Rocket, Star, Moon, Sun, Zap } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-space-accent">Mission Log: About the Explorer</h1>
      <p className="mb-4">
        Greetings, fellow space traveler! I'm Buse Nur Çetin, a cosmic Frontend Developer charting a course through the vast
        expanse of Computer Science. My mission: to explore strange new technologies, to seek out innovative solutions and
        new creative frontiers.
      </p>
      <p className="mb-4">
      My journey through the digital cosmos began when I first discovered my passion for coding and design, experimenting with small web projects and interactive interfaces. Since then, I've navigated through nebulas of complex projects, including developing dynamic web applications, contributing to open-source projects, and crafting intuitive user experiences for various platforms.
      </p>
      <p className="mb-4">
      When I'm not piloting through lines of code, you might find me exploring the latest tech trends, experimenting with UI/UX designs, or diving into sci-fi books and movies. I believe in continuous learning and innovation, always striving to push the boundaries of creativity and technology, always ready to boldly go where no developer has gone before. 🚀
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-space-accent">Stellar Skills</h2>
      <ul className="grid grid-cols-2 gap-4 mb-4">
        <li className="flex items-center">
          <Rocket className="mr-2 text-space-accent" /> Skill 1
        </li>
        <li className="flex items-center">
          <Star className="mr-2 text-space-accent" /> Skill 2
        </li>
        <li className="flex items-center">
          <Moon className="mr-2 text-space-accent" /> Skill 3
        </li>
        <li className="flex items-center">
          <Sun className="mr-2 text-space-accent" /> Skill 4
        </li>
        <li className="flex items-center">
          <Zap className="mr-2 text-space-accent" /> Skill 5
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-space-accent">Cosmic Education</h2>
      <ul className="mb-4">
        <li className="mb-2 flex items-center">
          <Star className="mr-2 text-space-accent" />
          <strong>Degree Name</strong> - Galactic University, 2025
        </li>
        <li className="mb-2 flex items-center">
          <Moon className="mr-2 text-space-accent" />
          <strong>Space Certification</strong> - Intergalactic Institute, 2020
        </li>
      </ul>
    </div>
  )
}

