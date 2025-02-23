"use client"

import { useEffect, useState } from "react"

export default function FloatingAstronaut() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const animateAstronaut = () => {
      const time = Date.now() / 1000
      const newX = Math.sin(time) * 50 + 50
      const newY = Math.cos(time / 2) * 30 + 50
      setPosition({ x: newX, y: newY })
    }

    const intervalId = setInterval(animateAstronaut, 50)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src="/astronaut.svg" alt="Floating Astronaut" className="w-16 h-16 md:w-24 md:h-24 animate-pulse" />
    </div>
  )
}

