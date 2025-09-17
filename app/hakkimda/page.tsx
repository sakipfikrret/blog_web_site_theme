import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { AboutSkills } from "@/components/about-skills"
import { AboutExperience } from "@/components/about-experience"
import { AboutPortfolio } from "@/components/about-portfolio"
import { AboutContact } from "@/components/about-contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <AboutHero />
        <AboutSkills />
        <AboutExperience />
        <AboutPortfolio />
        <AboutContact />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
