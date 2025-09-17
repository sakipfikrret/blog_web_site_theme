"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export function BlogHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Blog Yazıları</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Teknoloji, geliştirme ve kişisel deneyimlerim hakkında yazılar
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Blog yazılarında ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrele
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
