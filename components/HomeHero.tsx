'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrolled = window.scrollY
      const parallax = scrolled * 0.5
      ref.current.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/10 to-primary/5 overflow-hidden flex items-center pt-16">
        {/* Background Elements */}
        <div
          ref={ref}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <p className="text-primary font-semibold text-lg">WELCOME TO STARLABAN</p>
                <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-foreground">
                  Experience Premium <span className="text-primary">Coffee</span> Culture
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover the finest specialty coffees sourced from around the world, crafted with passion and precision in the heart of Mogadishu.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
                >
                  Explore Our Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-all duration-300"
                >
                  Visit Us Today
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Premium Quality</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Specialty Blends</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">8 AM</p>
                  <p className="text-sm text-muted-foreground">Daily Opening</p>
                </div>
              </div>
            </div>

            {/* Image/Visual Element */}
            <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  src="/coffee-hero.jpg"
                  alt="Premium specialty espresso with latte art"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </div>
  )
}
