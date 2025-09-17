import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

interface RelatedPostsProps {
  currentPostId: string
}

const relatedPosts = [
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
  {
    id: 4,
    title: "JavaScript ES2024 Yenilikleri",
    excerpt: "JavaScript'in en son sürümünde gelen yeni özellikler ve bunların pratik kullanım alanları.",
    date: "28 Şubat 2024",
    readTime: "10 dk",
    image: "/javascript-es2024-features.jpg",
    category: "Teknoloji",
  },
]

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  // Filter out current post
  const filteredPosts = relatedPosts.filter((post) => post.id.toString() !== currentPostId)

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-balance">İlgili Yazılar</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.slice(0, 3).map((post, index) => (
          <Card
            key={post.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-lg group-hover:text-primary transition-colors text-balance leading-tight">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
