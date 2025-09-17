"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Zap, Sparkles } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden glass-morphism border-t border-accent/20">
      <div className="absolute inset-0 animate-neural-network opacity-5"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <Link href="/" className="text-2xl font-bold hologram-text mb-4 block flex items-center space-x-2">
              <Zap className="w-6 h-6 animate-spin text-accent" />
              <span>Blog</span>
              <Sparkles className="w-4 h-4 animate-pulse text-primary" />
            </Link>
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              Modern web geliştirme, teknoloji ve kişisel deneyimler hakkında yazılar. Bilgi paylaşımı ve öğrenme
              yolculuğumda benimle birlikte olun.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-accent hover:neon-glow transition-all duration-300 glass-morphism border-accent/20"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-accent hover:neon-glow transition-all duration-300 glass-morphism border-accent/20"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-accent hover:neon-glow transition-all duration-300 glass-morphism border-accent/20"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-accent hover:neon-glow transition-all duration-300 glass-morphism border-accent/20"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold text-foreground mb-4 relative">
              Hızlı Bağlantılar
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent animate-shimmer"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimda"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold text-foreground mb-4 relative">
              Kategoriler
              <div
                className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent animate-shimmer"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog?category=teknoloji"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Teknoloji
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=gelistirme"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Geliştirme
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=tasarim"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Tasarım
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=backend"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 block"
                >
                  Backend
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-semibold text-foreground mb-4 relative">
              Bülten
              <div
                className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent animate-shimmer"
                style={{ animationDelay: "1s" }}
              ></div>
            </h3>
            <p className="text-muted-foreground mb-4 text-pretty">
              Yeni yazılarımdan haberdar olmak için e-posta adresinizi bırakın.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="glass-morphism border-accent/30 focus:border-accent/60 bg-transparent"
              />
              <Button className="w-full animate-morphing-glow glass-morphism border-0 bg-accent/90 hover:bg-accent text-accent-foreground">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© 2024 Fikret Çalkın. Tüm hakları saklıdır.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in İzmir</span>
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:text-accent hover:neon-glow transition-all duration-300 glass-morphism border-accent/20"
            >
              <ArrowUp className="w-4 h-4 mr-2 animate-bounce" />
              Yukarı Çık
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
