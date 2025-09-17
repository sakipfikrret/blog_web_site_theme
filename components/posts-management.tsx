"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, Calendar, Clock, Heart } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "Modern Web Geliştirme Trendleri 2024",
    status: "published",
    category: "Teknoloji",
    views: 1250,
    likes: 89,
    comments: 12,
    date: "15 Mart 2024",
    readTime: "8 dk",
  },
  {
    id: 2,
    title: "React ve Next.js ile Performanslı Uygulamalar",
    status: "published",
    category: "Geliştirme",
    views: 980,
    likes: 67,
    comments: 8,
    date: "10 Mart 2024",
    readTime: "12 dk",
  },
  {
    id: 3,
    title: "UI/UX Tasarımında Yeni Yaklaşımlar",
    status: "draft",
    category: "Tasarım",
    views: 0,
    likes: 0,
    comments: 0,
    date: "5 Mart 2024",
    readTime: "6 dk",
  },
  {
    id: 4,
    title: "JavaScript ES2024 Yenilikleri",
    status: "published",
    category: "Teknoloji",
    views: 892,
    likes: 73,
    comments: 15,
    date: "28 Şubat 2024",
    readTime: "10 dk",
  },
  {
    id: 5,
    title: "Veritabanı Optimizasyonu İpuçları",
    status: "scheduled",
    category: "Backend",
    views: 0,
    likes: 0,
    comments: 0,
    date: "20 Mart 2024",
    readTime: "15 dk",
  },
]

export function PostsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Yayında</Badge>
      case "draft":
        return <Badge variant="secondary">Taslak</Badge>
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">Zamanlanmış</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground text-balance">Yazı Yönetimi</h1>
          <p className="text-muted-foreground">Blog yazılarınızı yönetin ve düzenleyin</p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="animate-pulse-glow">
            <Plus className="w-4 h-4 mr-2" />
            Yeni Yazı Ekle
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Yazılarda ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                className={statusFilter !== "all" ? "bg-transparent" : ""}
              >
                Tümü
              </Button>
              <Button
                variant={statusFilter === "published" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("published")}
                className={statusFilter !== "published" ? "bg-transparent" : ""}
              >
                Yayında
              </Button>
              <Button
                variant={statusFilter === "draft" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("draft")}
                className={statusFilter !== "draft" ? "bg-transparent" : ""}
              >
                Taslak
              </Button>
              <Button
                variant={statusFilter === "scheduled" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("scheduled")}
                className={statusFilter !== "scheduled" ? "bg-transparent" : ""}
              >
                Zamanlanmış
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Yazılar ({filteredPosts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Başlık</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>İstatistik</TableHead>
                  <TableHead>Tarih</TableHead>
                  <TableHead>İşlemler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <h3 className="font-medium text-foreground text-balance">{post.title}</h3>
                        <div className="flex items-center space-x-2 mt-1 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(post.status)}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{post.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/blog/${post.id}`} className="flex items-center">
                              <Eye className="w-4 h-4 mr-2" />
                              Görüntüle
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/posts/${post.id}/edit`} className="flex items-center">
                              <Edit className="w-4 h-4 mr-2" />
                              Düzenle
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Sil
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
