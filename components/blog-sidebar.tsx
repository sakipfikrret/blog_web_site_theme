import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Tag, TrendingUp, Mail } from "lucide-react"

const categories = [
  { name: "Teknoloji", count: 12, color: "bg-blue-100 text-blue-800" },
  { name: "Geliştirme", count: 8, color: "bg-green-100 text-green-800" },
  { name: "Tasarım", count: 6, color: "bg-purple-100 text-purple-800" },
  { name: "Backend", count: 4, color: "bg-orange-100 text-orange-800" },
  { name: "Mobil", count: 3, color: "bg-pink-100 text-pink-800" },
]

const popularTags = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "CSS",
  "Node.js",
  "Python",
  "UI/UX",
  "Database",
  "API",
  "Performance",
  "Security",
]

const recentPosts = [
  {
    id: 1,
    title: "Modern Web Geliştirme Trendleri 2024",
    date: "15 Mart 2024",
    image: "/modern-web-development-code.jpg",
  },
  {
    id: 2,
    title: "React ve Next.js ile Performanslı Uygulamalar",
    date: "10 Mart 2024",
    image: "/react-nextjs-development.png",
  },
  {
    id: 3,
    title: "UI/UX Tasarımında Yeni Yaklaşımlar",
    date: "5 Mart 2024",
    image: "/ui-ux-design-modern.jpg",
  },
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-primary" />
            <span>Arama</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input type="text" placeholder="Yazılarda ara..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="animate-fade-in-up bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <span>Bülten</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 text-pretty">
            Yeni yazılarımdan haberdar olmak için e-posta adresinizi bırakın.
          </p>
          <div className="space-y-3">
            <Input type="email" placeholder="E-posta adresiniz" />
            <Button className="w-full">Abone Ol</Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Tag className="w-5 h-5 text-primary" />
            <span>Kategoriler</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground hover:text-primary cursor-pointer transition-colors">
                  {category.name}
                </span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Popüler Etiketler</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Son Yazılar</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex space-x-3 group cursor-pointer">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
