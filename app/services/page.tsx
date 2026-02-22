import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Coffee, Droplets, Zap } from "lucide-react"

const services = [
  {
    category: "Espresso Classics",
    icon: Zap,
    items: [
      { name: "Espresso", description: "Pure shot of bold, rich coffee" },
      { name: "Americano", description: "Espresso with hot water for a smooth finish" },
      { name: "Macchiato", description: "Espresso marked with a touch of steamed milk" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk" },
    ]
  },
  {
    category: "Milk-Based Drinks",
    icon: Droplets,
    items: [
      { name: "Latte", description: "Smooth espresso blended with steamed milk" },
      { name: "Cappuccino", description: "Bold espresso with velvety milk foam" },
      { name: "Flat White", description: "Rich espresso with microfoam milk" },
      { name: "Mocha", description: "Espresso, steamed milk, and chocolate" },
    ]
  },
  {
    category: "Specialty Crafts",
    icon: Coffee,
    items: [
      { name: "Cold Brew", description: "Smooth, refreshing cold coffee concentrate" },
      { name: "Iced Latte", description: "Chilled espresso with cold milk and ice" },
      { name: "Affogato", description: "Vanilla gelato topped with hot espresso" },
      { name: "Seasonal Blend", description: "Limited edition specialty drinks" },
    ]
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 pt-32 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-4">
              <p className="text-primary font-semibold">OUR MENU</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
                Crafted to <span className="text-primary">Perfection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                From classic espresso drinks to innovative specialty creations, every beverage is expertly crafted with passion and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <div
                  key={idx}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.category}</h3>
                    </div>

                    <div className="space-y-4">
                      {service.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="pb-4 border-b border-border last:border-0 hover:translate-x-1 transition-transform duration-300"
                        >
                          <h4 className="font-bold text-foreground mb-1">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">More Offerings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-left-8 duration-1000">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Pastries & Snacks</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pair your coffee with our fresh pastries, croissants, sandwiches, and homemade baked goods made daily with premium ingredients.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Fresh Croissants</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Artisan Sandwiches</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Homemade Cakes</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Chocolate Treats</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-right-8 duration-1000">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Events & Catering</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perfect for meetings, celebrations, or intimate gatherings. We offer custom catering packages and can host private events.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Corporate Events</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Private Parties</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Wedding Services</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Custom Catering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Beans Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Premium Coffee Beans</h2>
          
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
            Take home our hand-selected specialty beans from around the world. Available in various roasts and grind sizes, perfect for brewing at home.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {["Single Origin", "Dark Roast", "Medium Roast", "Light Roast", "House Blend", "Seasonal Special", "Decaf Options", "Whole Beans"].map((blend, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom-2 duration-700"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{blend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
