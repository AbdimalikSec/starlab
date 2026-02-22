'use client'

import Image from 'next/image'
import { Leaf, Zap, Heart } from 'lucide-react'

export default function WhyStarlaban() {
  const reasons = [
    {
      icon: Leaf,
      title: 'Ethically Sourced',
      description: 'We partner directly with sustainable coffee farms, ensuring premium quality while supporting local farmers and environmental conservation.'
    },
    {
      icon: Zap,
      title: 'Artisan Roasted',
      description: 'Every batch is carefully roasted to perfection by our expert baristas, bringing out unique flavor profiles in each specialty blend.'
    },
    {
      icon: Heart,
      title: 'Community Focused',
      description: 'Beyond great coffee, we create a welcoming space where friends gather, ideas flow, and memories are made over quality conversations.'
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Choose <span className="text-primary">Starlaban</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to delivering exceptional coffee experiences through quality, sustainability, and genuine hospitality.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 animate-in fade-in slide-in-from-left-8 duration-700">
            <Image
              src="/coffee-beans.jpg"
              alt="Premium roasted coffee beans"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Features */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
