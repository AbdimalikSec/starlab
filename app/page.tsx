import Navigation from "@/components/Navigation"
import HomeHero from "@/components/HomeHero"
import WhyStarlaban from "@/components/WhyStarlaban"
import FeaturedBlends from "@/components/FeaturedBlends"
import FeaturedSection from "@/components/FeaturedSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <HomeHero />
      <WhyStarlaban />
      <FeaturedBlends />
      <FeaturedSection />
      <Footer />
    </main>
  )
}
