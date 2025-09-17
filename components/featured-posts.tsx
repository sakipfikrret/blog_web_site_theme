import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const featuredPosts = [
  {
    id: 1,
    title: "Modern Web Geliştirme Trendleri 2024",
    excerpt: "Bu yıl web geliştirme dünyasında öne çıkan teknolojiler ve yaklaşımlar hakkında detaylı bir inceleme.",
    date: "15 Mart 2024",
    readTime: "8 dk",
    image: "/modern-web-development-code.jpg",
    category: "Teknoloji",
  },
  {
    id: 2,
    title: "React ve Next.js ile Performanslı Uygulamalar",
    excerpt: "React ve Next.js kullanarak yüksek performanslı web uygulamaları geliştirme teknikleri.",
    date: "10 Mart 2024",
    readTime: "12 dk",
    image: "/react-nextjs-development.png",
    category: "Geliştirme",
  },
  {
    id: 3,
    title: "UI/UX Tasarımında Yeni Yaklaşımlar",
    excerpt: "Kullanıcı deneyimini iyileştiren modern tasarım prensipleri ve uygulama örnekleri.",
    date: "5 Mart 2024",
    readTime: "6 dk",
    image: "/ui-ux-design-modern.jpg",
    category: "Tasarım",
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 animate-neural-network opacity-10"></div>
      <div className="absolute inset-0 cyber-grid opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold hologram-text mb-4 text-balance relative">
              Öne Çıkan Yazılar
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-accent animate-spin" />
              <Zap className="absolute -bottom-2 -left-6 w-5 h-5 text-primary animate-pulse" />
            </h2>
          </div>
          <p className="text-xl text-muted-foreground text-pretty">En popüler ve güncel blog yazılarım</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group glass-morphism hover:animate-morphing-glow transition-all duration-500 hover:-translate-y-4 animate-fade-in-up border-accent/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-1 h-1 bg-accent rounded-full animate-matrix-rain"></div>
                <div
                  className="absolute top-4 right-4 w-0.5 h-0.5 bg-primary rounded-full animate-matrix-rain"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/60 rounded-full animate-matrix-rain"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium neon-glow animate-pulse">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:hologram-text transition-all duration-300 text-balance">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 group-hover:text-accent transition-colors">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 group-hover:text-accent transition-colors">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-accent/20 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300 glass-morphism border-accent/10"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 group-hover:animate-pulse transition-all duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="animate-morphing-glow glass-morphism border-accent/30 hover:border-accent/60 bg-transparent"
            >
              Tüm Yazıları Görüntüle
              <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
