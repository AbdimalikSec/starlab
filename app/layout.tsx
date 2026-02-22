import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ScrollProgress from "@/components/ScrollProgress"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Starlaban Coffee | Premium Specialty Coffee in Mogadishu",
  description: "Experience world-class specialty coffee at Starlaban Coffee. Located in Talex, Mogadishu. Open 8 AM - 11:30 PM daily. +252 617 794 702",
  keywords: ["coffee", "specialty coffee", "Mogadishu", "café", "coffee shop", "espresso"],
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#6B4423",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
