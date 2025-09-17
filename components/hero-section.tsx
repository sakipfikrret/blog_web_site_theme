"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowDown, Code, Sparkles } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <div className="relative mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance">
                <span className="text-foreground block mb-2">Merhaba, Ben</span>
                <span className="gradient-text block relative">
                  Fikret Çalkın
                  <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-primary opacity-60" />
                </span>
              </h1>
              <div className="absolute -right-12 top-8">
                <Code className="w-8 h-8 text-primary/60" />
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Web geliştirici, içerik üreticisi ve teknoloji tutkunu. Bu platformda deneyimlerimi, projelerimi ve
              düşüncelerimi paylaşıyorum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Blog Yazılarını Keşfet
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                Hakkımda Daha Fazla
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              {!isVideoPlaying ? (
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <img
                    src="/professional-developer-workspace.jpg"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <Button
                    size="lg"
                    className="relative z-10 rounded-full w-20 h-20 bg-primary hover:bg-primary/90 border-0"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Play className="w-8 h-8 ml-1 text-primary-foreground" />
                  </Button>
                </div>
              ) : (
                <video className="w-full aspect-video" controls autoPlay poster="/professional-developer-workspace.jpg">
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              )}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Tanıtım videomu izleyerek beni daha yakından tanıyabilirsiniz
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
