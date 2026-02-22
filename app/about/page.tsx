import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Award, Users, Globe } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-4">
              <p className="text-primary font-semibold">OUR STORY</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
                Brewing Excellence Since Day One
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Starlaban Coffee is more than just a coffee shop—it's a celebration of passion, quality, and community. Founded with a vision to bring world-class specialty coffee to Mogadishu, we've been dedicated to sourcing the finest beans and crafting unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary transition-colors duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '100ms' }}>
              <Award className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source only the finest specialty coffee beans from sustainable farms around the world, ensuring every cup meets our exacting standards.
              </p>
            </div>

            {/* Community */}
            <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary transition-colors duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
              <Users className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Community First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Starlaban is a gathering place where friendships are forged, ideas are shared, and memories are made over excellent coffee.
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary transition-colors duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '300ms' }}>
              <Globe className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to ethical sourcing and environmental responsibility, supporting farmers and protecting our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Visit Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors duration-300">
                <h3 className="text-primary font-semibold mb-2">Location</h3>
                <p className="text-foreground font-bold text-lg mb-2">Talex, Mogadishu</p>
                <p className="text-muted-foreground mb-4">Plus Code: 28M6+5P Mogadishu</p>
                <p className="text-sm text-muted-foreground">Located in the heart of Talex, our cozy café welcomes coffee enthusiasts and curious explorers daily.</p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors duration-300">
                <h3 className="text-primary font-semibold mb-2">Hours</h3>
                <p className="text-foreground font-bold text-lg mb-2">Sunday - Saturday</p>
                <p className="text-muted-foreground">8:00 AM – 11:30 PM</p>
                <p className="text-sm text-muted-foreground mt-4">Come by any time during our operating hours. We're always ready to brew your perfect cup.</p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors duration-300">
                <h3 className="text-primary font-semibold mb-2">Contact</h3>
                <p className="text-foreground font-bold text-lg">+252 617 794 702</p>
                <p className="text-muted-foreground mt-2">Reach out for special orders, catering, or just to say hello!</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-96 md:h-full min-h-96 rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors duration-300 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📍</div>
                  <p className="text-foreground font-semibold">Starlaban Coffee</p>
                  <p className="text-muted-foreground text-sm">Talex, Mogadishu, Somalia</p>
                  <p className="text-primary text-xs">28M6+5P</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
