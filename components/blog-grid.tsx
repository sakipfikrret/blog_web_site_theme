import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Eye, Heart } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Modern Web Geliştirme Trendleri 2024",
    excerpt:
      "Bu yıl web geliştirme dünyasında öne çıkan teknolojiler ve yaklaşımlar hakkında detaylı bir inceleme. React, Next.js, TypeScript ve daha fazlası...",
    content: "Web geliştirme dünyası sürekli evrim geçiriyor...",
    date: "15 Mart 2024",
    readTime: "8 dk",
    image: "/modern-web-development-code.jpg",
    category: "Teknoloji",
    tags: ["React", "Next.js", "TypeScript", "Web Development"],
    views: 1250,
    likes: 89,
    featured: true,
  },
  {
    id: 2,
    title: "React ve Next.js ile Performanslı Uygulamalar",
    excerpt:
      "React ve Next.js kullanarak yüksek performanslı web uygulamaları geliştirme teknikleri ve best practice'ler.",
    content: "Performanslı web uygulamaları geliştirmek...",
    date: "10 Mart 2024",
    readTime: "12 dk",
    image: "/react-nextjs-development.png",
    category: "Geliştirme",
    tags: ["React", "Next.js", "Performance", "Optimization"],
    views: 980,
    likes: 67,
    featured: true,
  },
  {
    id: 3,
    title: "UI/UX Tasarımında Yeni Yaklaşımlar",
    excerpt:
      "Kullanıcı deneyimini iyileştiren modern tasarım prensipleri ve uygulama örnekleri ile tasarım dünyasındaki yenilikler.",
    content: "Modern UI/UX tasarımı kullanıcı odaklı...",
    date: "5 Mart 2024",
    readTime: "6 dk",
    image: "/ui-ux-design-modern.jpg",
    category: "Tasarım",
    tags: ["UI", "UX", "Design", "User Experience"],
    views: 756,
    likes: 45,
    featured: false,
  },
  {
    id: 4,
    title: "JavaScript ES2024 Yenilikleri",
    excerpt: "JavaScript'in en son sürümünde gelen yeni özellikler ve bunların pratik kullanım alanları.",
    content: "ES2024 ile JavaScript dünyasına...",
    date: "28 Şubat 2024",
    readTime: "10 dk",
    image: "/javascript-es2024-features.jpg",
    category: "Teknoloji",
    tags: ["JavaScript", "ES2024", "Programming", "Frontend"],
    views: 892,
    likes: 73,
    featured: false,
  },
  {
    id: 5,
    title: "Veritabanı Optimizasyonu İpuçları",
    excerpt: "SQL ve NoSQL veritabanlarında performans optimizasyonu için pratik ipuçları ve teknikler.",
    content: "Veritabanı performansı web uygulamalarının...",
    date: "20 Şubat 2024",
    readTime: "15 dk",
    image: "/database-optimization-tips.jpg",
    category: "Backend",
    tags: ["Database", "SQL", "NoSQL", "Performance"],
    views: 634,
    likes: 52,
    featured: false,
  },
  {
    id: 6,
    title: "Mobil Uygulama Geliştirme Rehberi",
    excerpt: "React Native ve Flutter ile cross-platform mobil uygulama geliştirme sürecine kapsamlı bakış.",
    content: "Mobil uygulama geliştirme artık...",
    date: "12 Şubat 2024",
    readTime: "11 dk",
    image: "/mobile-app-development-guide.jpg",
    category: "Mobil",
    tags: ["React Native", "Flutter", "Mobile", "Cross-platform"],
    views: 1120,
    likes: 94,
    featured: false,
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Tüm Yazılar</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>{blogPosts.length} yazı bulundu</span>
        </div>
      </div>

      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <Card
            key={post.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Image */}
              <div className="relative overflow-hidden rounded-l-lg md:rounded-l-lg md:rounded-r-none rounded-r-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">Öne Çıkan</Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors text-balance leading-tight">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center space-x-2">
          <Button variant="outline" disabled>
            Önceki
          </Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Sonraki</Button>
        </div>
      </div>
    </div>
  )
}
