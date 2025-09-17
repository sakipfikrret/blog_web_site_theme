import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InfiniteScrollPosts } from "@/components/infinite-scroll-posts"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InfiniteScrollPosts />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
