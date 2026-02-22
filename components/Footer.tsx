import Link from 'next/link'
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Coffee className="w-6 h-6" />
              <span>Starlaban</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium specialty coffee crafted with passion in the heart of Mogadishu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sunday - Saturday</li>
              <li>8:00 AM – 11:30 PM</li>
              <li className="pt-2 border-t border-border mt-2">
                <span className="text-primary font-semibold">Open Now</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+252617794702" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                  +252 617 794 702
                </a>
              </li>
              <li className="text-muted-foreground">
                Talex, Mogadishu<br/>
                <span className="text-xs text-primary">28M6+5P</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Starlaban Coffee. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors group">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors group">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors group">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
