import type React from "react"
import Link from "next/link"
import { Home, User, Mail, Rocket, BookOpen } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-space-dark-blue/80 backdrop-blur-sm p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center">
            <Rocket className="mr-2 text-space-accent" /> Kozmik Kaşif
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="flex items-center hover:text-space-accent transition-colors">
                <Home className="mr-1" size={18} />
                Ana Üs
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center hover:text-space-accent transition-colors">
                <User className="mr-1" size={18} />
                Yıldız Haritası
              </Link>
            </li>
            <li>
              <Link href="/blog" className="flex items-center hover:text-space-accent transition-colors">
                <BookOpen className="mr-1" size={18} />
                Kozmik Günlük
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center hover:text-space-accent transition-colors">
                <Mail className="mr-1" size={18} />
                İletişim Merkezi
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 z-10 relative">{children}</main>
      <footer className="bg-space-dark-blue/80 backdrop-blur-sm text-space-light p-4 z-10">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} Kozmik Kaşif. Tüm hakları çoklu evren boyunca saklıdır.
        </div>
      </footer>
    </>
  )
}

