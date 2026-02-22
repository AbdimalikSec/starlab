'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Clock, PhoneIcon } from 'lucide-react'

export default function FeaturedSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Find Us</h4>
                <p className="text-sm text-muted-foreground">Talex, Mogadishu</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Located in the vibrant Talex neighborhood. Use Plus Code 28M6+5P for GPS navigation.
            </p>
          </div>

          {/* Hours */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Clock className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Hours</h4>
                <p className="text-sm text-primary font-semibold">Open Now</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sunday through Saturday, 8:00 AM – 11:30 PM. Perfect for your morning espresso or evening relaxation.
            </p>
          </div>

          {/* Contact */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <PhoneIcon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Call Us</h4>
                <p className="text-sm text-muted-foreground">Anytime</p>
              </div>
            </div>
            <a href="tel:+252617794702" className="text-primary hover:text-primary/80 font-semibold transition-colors block mb-2">
              +252 617 794 702
            </a>
            <p className="text-sm text-muted-foreground">
              Reach out for orders, reservations, or any special requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
