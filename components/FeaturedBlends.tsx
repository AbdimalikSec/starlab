'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

export default function FeaturedBlends() {
  const blends = [
    {
      name: 'Mogadishu Sunrise',
      origin: 'Ethiopian Highland',
      description: 'Bright citrus notes with floral undertones, perfect for your morning ritual.',
      rating: 4.9,
      image: '/coffee-brewing.jpg'
    },
    {
      name: 'Dark Velvet',
      origin: 'Brazilian Santos',
      description: 'Rich, smooth, and chocolatey with hints of caramel and dark berries.',
      rating: 4.8,
      image: '/coffee-beans.jpg'
    },
    {
      name: 'Tropical Gold',
      origin: 'Colombian Geisha',
      description: 'Complex blend with tropical fruit notes, jasmine, and honey sweetness.',
      rating: 5.0,
      image: '/coffee-hero.jpg'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-primary font-semibold text-lg mb-2">OUR SPECIALTY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Coffee <span className="text-primary">Blends</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked from the world's finest coffee regions, each blend tells a unique story.
          </p>
        </div>

        {/* Blends Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blends.map((blend, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-primary/10">
                <Image
                  src={blend.image}
                  alt={blend.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{blend.name}</h3>
                    <p className="text-sm text-primary font-semibold">{blend.origin}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {blend.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{blend.rating}</span>
                </div>

                {/* CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 group/btn"
                >
                  Try It Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            Explore All Blends
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
