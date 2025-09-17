import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Palette, Smartphone, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Geliştirme",
    icon: Code,
    color: "text-blue-600",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 92 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend Geliştirme",
    icon: Database,
    color: "text-green-600",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST API", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-purple-600",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 92 },
      { name: "Docker", level: 78 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 82 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    title: "UI/UX Tasarım",
    icon: Palette,
    color: "text-pink-600",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "User Research", level: 70 },
      { name: "Prototyping", level: 82 },
      { name: "Design Systems", level: 88 },
    ],
  },
  {
    title: "Mobil Geliştirme",
    icon: Smartphone,
    color: "text-orange-600",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "iOS Development", level: 65 },
      { name: "Android Development", level: 68 },
      { name: "App Store Optimization", level: 75 },
      { name: "Mobile UI/UX", level: 80 },
    ],
  },
  {
    title: "Araçlar & Diğer",
    icon: Settings,
    color: "text-gray-600",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Jira", level: 85 },
      { name: "Slack", level: 88 },
      { name: "Notion", level: 82 },
      { name: "Analytics", level: 78 },
    ],
  },
]

export function AboutSkills() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Yetenekler & Teknolojiler</h2>
          <p className="text-xl text-muted-foreground text-pretty">Uzmanlaştığım teknolojiler ve araçlar</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
