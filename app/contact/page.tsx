'use client'

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitSuccess(true)
    setFormState({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitSuccess(false), 3000)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-background via-primary/5 to-secondary/10 pt-32 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <p className="text-primary font-semibold">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Have questions? Want to book an event? Just want to chat about coffee? Reach out to us!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {/* Phone */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '0ms' }}>
              <Phone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+252617794702" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                +252 617 794 702
              </a>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '100ms' }}>
              <MapPin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Talex, Mogadishu<br/>Plus Code: 28M6+5P</p>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
              <Clock className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm">Sun - Sat<br/>8:00 AM – 11:30 PM</p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '300ms' }}>
              <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:hello@starlaban.com" className="text-primary hover:text-primary/80 transition-colors font-semibold text-sm break-all">
                hello@starlaban.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-primary/30"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 text-center font-semibold animate-in fade-in">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              {/* Map Placeholder */}
              <div className="h-80 rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors duration-300 cursor-pointer group">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl animate-bounce">📍</div>
                    <p className="text-foreground font-semibold">Starlaban Coffee</p>
                    <p className="text-muted-foreground text-sm">Talex, Mogadishu</p>
                    <p className="text-primary text-xs font-mono">28M6+5P</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors duration-300">
                  <h4 className="font-bold text-foreground mb-2">Coming to Visit?</h4>
                  <p className="text-sm text-muted-foreground">
                    We're located in the vibrant Talex neighborhood. Easy to find with our landmark location. Plenty of parking available nearby.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors duration-300">
                  <h4 className="font-bold text-foreground mb-2">Special Events?</h4>
                  <p className="text-sm text-muted-foreground">
                    Call us to discuss catering, private events, or custom coffee experiences. We love creating memorable moments!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl font-bold text-foreground">Ready for Your Next Cup?</h2>
          <p className="text-lg text-muted-foreground">
            Whether you're looking for your daily espresso or planning a special event, Starlaban is here to deliver exceptional coffee and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+252617794702"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-all duration-300"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
