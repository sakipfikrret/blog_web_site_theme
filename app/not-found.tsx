"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full animate-fade-in-up">
        <CardContent className="p-12 text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary/20 mb-4 animate-pulse">404</div>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-pulse-glow" />
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Sayfa Bulunamadı</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönebilir veya blog yazılarına göz
            atabilirsiniz.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="animate-pulse-glow">
                <Home className="w-4 h-4 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="bg-transparent">
                <Search className="w-4 h-4 mr-2" />
                Blog Yazılarını İncele
              </Button>
            </Link>
          </div>

          {/* Back Button */}
          <div className="mt-8 pt-8 border-t border-border">
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Geri Dön
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
