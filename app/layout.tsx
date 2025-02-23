import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Home, User, Mail, Rocket, BookOpen } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kozmik Kaşif Portfolyosu",
  description: "Uzay temalı bir portfolyo sitesinde dijital kozmosun yolculuğuna çıkın",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen flex flex-col bg-space-dark text-space-light`}>
        <div className="stars"></div>
        <header className="bg-space-dark-blue/80 backdrop-blur-sm p-4 sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold flex items-center">
              <Rocket className="mr-2 text-space-accent" /> Cosmic Explorer
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="flex items-center hover:text-space-accent transition-colors">
                  <Home className="mr-1" size={18} />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center hover:text-space-accent transition-colors">
                  <User className="mr-1" size={18} />
                  Star Map
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center hover:text-space-accent transition-colors">
                  <BookOpen className="mr-1" size={18} />
                  Cosmic Diary
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center hover:text-space-accent transition-colors">
                  <Mail className="mr-1" size={18} />
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8 z-10 relative">{children}</main>
        <footer className="bg-space-dark-blue/80 backdrop-blur-sm text-space-light p-4 z-10">
          <div className="container mx-auto text-center">
            © {new Date().getFullYear()} Cosmic Explorer. All rights reserved across the multiverse. 🚀
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'