import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Award } from "lucide-react"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "İstanbul, Türkiye",
    period: "2022 - Günümüz",
    type: "Tam Zamanlı",
    description:
      "React, Next.js ve Node.js kullanarak enterprise seviyede web uygulamaları geliştiriyorum. Takım liderliği yaparak 5 kişilik geliştirici ekibini yönetiyorum.",
    achievements: [
      "Şirketin ana ürününün performansını %40 artırdım",
      "Mikroservis mimarisine geçiş projesini başarıyla tamamladım",
      "Junior geliştiricilerin mentorluk programını kurdum",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "İstanbul, Türkiye",
    period: "2020 - 2022",
    type: "Tam Zamanlı",
    description:
      "Çeşitli müşteriler için modern ve responsive web siteleri geliştirdim. UI/UX tasarımcılarla yakın işbirliği içinde çalıştım.",
    achievements: [
      "20+ başarılı proje teslim ettim",
      "Müşteri memnuniyet oranını %95'e çıkardım",
      "Şirketin React component library'sini oluşturdum",
    ],
    technologies: ["React", "Vue.js", "SASS", "JavaScript", "Figma", "Git"],
  },
  {
    title: "Junior Web Developer",
    company: "StartupHub",
    location: "Ankara, Türkiye",
    period: "2019 - 2020",
    type: "Tam Zamanlı",
    description:
      "Web geliştirme kariyerime başladığım yer. HTML, CSS, JavaScript temellerini güçlendirdim ve ilk React projelerimi geliştirdim.",
    achievements: [
      "İlk 6 ayda React'i öğrendim ve projede kullanmaya başladım",
      "Şirketin blog sistemini sıfırdan geliştirdim",
      "Agile metodolojilerini öğrendim ve uyguladım",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL"],
  },
]

const education = [
  {
    degree: "Bilgisayar Mühendisliği",
    school: "İstanbul Teknik Üniversitesi",
    period: "2015 - 2019",
    gpa: "3.4/4.0",
    description: "Yazılım geliştirme, algoritma ve veri yapıları, veritabanı yönetimi konularında eğitim aldım.",
  },
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CSA-2023-001",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-REACT-2022-456",
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    date: "2021",
    credentialId: "GOOGLE-GA-2021-789",
  },
]

export function AboutExperience() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">İş Deneyimi</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Profesyonel kariyerim boyunca edindiğim deneyimler
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      Başarılar
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-pretty">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Kullanılan Teknolojiler</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-balance">Eğitim</h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-medium">{edu.school}</span>
                    <span>{edu.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2 text-pretty">{edu.description}</p>
                  <Badge variant="outline">GPA: {edu.gpa}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-balance">Sertifikalar</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-balance">{cert.name}</h4>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mt-1">ID: {cert.credentialId}</p>
                      </div>
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
