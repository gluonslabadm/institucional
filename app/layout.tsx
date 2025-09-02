import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans, Kode_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kode-mono",
})

export const metadata: Metadata = {
  title: "Gluons Lab - A Força Coesiva para o seu Sucesso Digital",
  description:
    "Somos os Arquitetos das Conexões Invisíveis. Desenvolvimento de software, integração de sistemas e soluções em nuvem.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-heading: ${spaceGrotesk.variable};
  --font-body: ${dmSans.variable};
  --font-mono: ${kodeMono.variable};
}
        `}</style>
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${kodeMono.variable} antialiased`}>
        <CursorGlow />
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
