"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
}

export function TypewriterText({ text, className = "" }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < text.length) {
            setDisplayText(text.slice(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(text.slice(0, currentIndex - 1))
            setCurrentIndex(currentIndex - 1)
          } else {
            setIsDeleting(false)
          }
        }
      },
      isDeleting ? 100 : 150,
    ) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
