import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description:
      "Modern ve kullanıcı dostu e-ticaret platformu. Ödeme entegrasyonu, envanter yönetimi ve admin paneli içerir.",
    image: "/project-ecommerce-platform.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/ahmetyilmaz/ecommerce-platform",
    featured: true,
    category: "Web Uygulaması",
    year: "2024",
  },
  {
    id: 2,
    title: "Proje Yönetim Aracı",
    description:
      "Takımlar için geliştirilmiş proje yönetim ve işbirliği platformu. Kanban board, zaman takibi ve raporlama özellikleri.",
    image: "/project-management-tool.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://projectmanager-demo.example.com",
    githubUrl: "https://github.com/ahmetyilmaz/project-manager",
    featured: true,
    category: "SaaS Uygulaması",
    year: "2023",
  },
  {
    id: 3,
    title: "Mobil Fitness Uygulaması",
    description: "Kişiselleştirilmiş antrenman programları ve beslenme takibi yapabilen cross-platform mobil uygulama.",
    image: "/mobile-fitness-app.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    liveUrl: "https://apps.apple.com/fitness-tracker",
    githubUrl: "https://github.com/ahmetyilmaz/fitness-app",
    featured: true,
    category: "Mobil Uygulama",
    year: "2023",
  },
  {
    id: 4,
    title: "Blog CMS Sistemi",
    description: "Headless CMS mimarisi ile geliştirilmiş blog yönetim sistemi. RESTful API ve admin paneli.",
    image: "/blog-cms-system.jpg",
    technologies: ["Next.js", "Strapi", "GraphQL", "PostgreSQL", "AWS"],
    liveUrl: "https://blog-cms-demo.example.com",
    githubUrl: "https://github.com/ahmetyilmaz/blog-cms",
    featured: false,
    category: "CMS",
    year: "2022",
  },
  {
    id: 5,
    title: "Kripto Para Takip Uygulaması",
    description: "Gerçek zamanlı kripto para fiyatları, portföy takibi ve analiz araçları içeren web uygulaması.",
    image: "/crypto-tracker-app.jpg",
    technologies: ["Vue.js", "Chart.js", "CoinGecko API", "Vuex", "Bootstrap"],
    liveUrl: "https://crypto-tracker-demo.example.com",
    githubUrl: "https://github.com/ahmetyilmaz/crypto-tracker",
    featured: false,
    category: "Fintech",
    year: "2022",
  },
  {
    id: 6,
    title: "Sosyal Medya Dashboard",
    description: "Çoklu sosyal medya hesaplarını tek yerden yönetebilen analitik dashboard uygulaması.",
    image: "/social-media-dashboard.jpg",
    technologies: ["React", "D3.js", "Express.js", "Redis", "Docker"],
    liveUrl: "https://social-dashboard-demo.example.com",
    githubUrl: "https://github.com/ahmetyilmaz/social-dashboard",
    featured: false,
    category: "Analytics",
    year: "2021",
  },
]

export function AboutPortfolio() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Portföy & Projeler</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Geliştirdiğim bazı öne çıkan projeler ve uygulamalar
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Öne Çıkan Projeler</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge className="bg-primary text-primary-foreground">Öne Çıkan</Badge>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors text-balance">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Canlı Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Kod
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Diğer Projeler</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="text-xs bg-background/80">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors text-balance">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                      <Github className="w-3 h-3 mr-1" />
                      Kod
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">Birlikte Çalışmak İster misiniz?</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Yeni projeler için her zaman açığım. Fikirlerinizi hayata geçirmek için benimle iletişime geçin.
              </p>
              <Button size="lg" className="animate-pulse-glow">
                İletişime Geç
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
