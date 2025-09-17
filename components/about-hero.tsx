"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, MapPin, Mail, Calendar, Github, Linkedin, Twitter } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Merhaba, Ben <span className="text-primary animate-pulse-glow">Fikret Çalkın</span>
            </h1>
            <h2 className="text-2xl text-muted-foreground mb-6 text-pretty">
              Full-Stack Developer & Teknoloji Tutkunu
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              5+ yıllık deneyimle modern web teknolojileri kullanarak kullanıcı odaklı, performanslı ve ölçeklenebilir
              uygulamalar geliştiriyorum. React, Next.js, Node.js ve cloud teknolojilerinde uzmanım.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>İzmir, Türkiye</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>5+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>ahmet@example.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="animate-pulse-glow">
                <Download className="w-4 h-4 mr-2" />
                CV İndir
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                İletişime Geç
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image & Stats */}
          <div className="animate-fade-in-up">
            <Card className="relative overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/professional-developer-portrait.jpg"
                    alt="Fikret Çalkın"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-sm text-white/80">Proje</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">5+</div>
                      <div className="text-sm text-white/80">Yıl</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">100+</div>
                      <div className="text-sm text-white/80">Blog</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
