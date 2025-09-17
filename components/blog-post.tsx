import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, Heart, Share2, ArrowLeft, User } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  postId: string
}

// Mock data - gerçek uygulamada API'den gelecek
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "Modern Web Geliştirme Trendleri 2024",
      content: `
        <h2>Giriş</h2>
        <p>Web geliştirme dünyası sürekli evrim geçiriyor ve 2024 yılı da birçok yenilik getirdi. Bu yazıda, bu yılın en önemli trendlerini ve teknolojilerini inceleyeceğiz.</p>
        
        <h2>React ve Next.js'in Yükselişi</h2>
        <p>React ekosistemi 2024'te de liderliğini sürdürüyor. Next.js 14 ile gelen App Router, Server Components ve diğer yenilikler geliştirici deneyimini büyük ölçüde iyileştirdi.</p>
        
        <h3>Server Components</h3>
        <p>Server Components, React uygulamalarında performansı artıran en önemli yeniliklerden biri. Bu teknoloji sayesinde:</p>
        <ul>
          <li>Daha hızlı sayfa yükleme süreleri</li>
          <li>Daha az JavaScript bundle boyutu</li>
          <li>Daha iyi SEO performansı</li>
        </ul>
        
        <h2>TypeScript'in Yaygınlaşması</h2>
        <p>TypeScript artık modern web geliştirmenin vazgeçilmez bir parçası haline geldi. Tip güvenliği ve geliştirici deneyimi açısından sağladığı avantajlar nedeniyle büyük ve küçük projelerde tercih ediliyor.</p>
        
        <h2>Sonuç</h2>
        <p>2024 yılı web geliştirme açısından heyecan verici bir yıl oldu. Bu trendleri takip etmek ve projelerinizde uygulamak, rekabetçi kalmanız için önemli.</p>
      `,
      excerpt: "Bu yıl web geliştirme dünyasında öne çıkan teknolojiler ve yaklaşımlar hakkında detaylı bir inceleme.",
      date: "15 Mart 2024",
      readTime: "8 dk",
      image: "/modern-web-development-code.jpg",
      category: "Teknoloji",
      tags: ["React", "Next.js", "TypeScript", "Web Development"],
      views: 1250,
      likes: 89,
      author: {
        name: "Fikret Çalkın",
        avatar: "/author-avatar.jpg",
        bio: "Full-stack developer ve teknoloji yazarı",
      },
    },
  }

  return posts[id as keyof typeof posts] || null
}

export function BlogPost({ postId }: BlogPostProps) {
  const post = getBlogPost(postId)

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Yazı Bulunamadı</h2>
        <p className="text-muted-foreground mb-6">Aradığınız blog yazısı mevcut değil.</p>
        <Link href="/blog">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Blog'a Dön
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <article className="animate-fade-in-up">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/blog">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Blog'a Dön
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative mb-8 rounded-2xl overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <Badge className="mb-2">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-balance leading-tight">{post.title}</h1>
        </div>
      </div>

      {/* Article Meta */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
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

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Article Content */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
      </Card>

      {/* Social Share */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Beğen ({post.likes})
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Paylaş
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Bu yazı {post.views} kez okundu</p>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}
