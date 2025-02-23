import Image from "next/image"
import Link from "next/link"
import { Rocket, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-space-accent animate-pulse">Welcome To My Cosmic Journey!</h1>
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-space-accent opacity-20 animate-ping"></div>
        <Image
          src="/my-photo.jpeg"
          alt="Uzay Kaşifi"
          width={200}
          height={200}
          className="rounded-full border-4 border-space-accent relative z-10 object-cover"
        />
        <Rocket className="absolute bottom-0 right-0 text-space-accent animate-float" size={48} />
      </div>
      <p className="text-xl mb-8 text-center max-w-2xl">
      Hello, intergalactic visitor! I'm Buse Nur Çetin, a cosmic explorer in the realm of Frontend development. Get ready for an extraordinary journey at my digital space station! 🚀
      </p>
      <div className="flex space-x-4">
        <Link
          href="/about"
          className="bg-space-accent hover:bg-space-accent-hover text-space-dark font-bold py-2 px-4 rounded-full flex items-center transition-colors"
        >
          <Star className="mr-2" /> Explore Universe
        </Link>
        <Link
          href="/contact"
          className="bg-space-light hover:bg-space-light-hover text-space-dark font-bold py-2 px-4 rounded-full flex items-center transition-colors"
        >
          <Rocket className="mr-2" /> Contact Me
        </Link>
      </div>
    </div>
  )
}

