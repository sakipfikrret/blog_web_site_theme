import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { BlogSidebar } from "@/components/blog-sidebar"
import { RelatedPosts } from "@/components/related-posts"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogPost postId={params.id} />
              <RelatedPosts currentPostId={params.id} />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
