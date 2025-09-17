"use client"

import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { FileText, Eye, Heart, MessageSquare, Users, TrendingUp, Calendar, Plus, Edit, BarChart3 } from "lucide-react"
import Link from "next/link"

const statsData = [
  { title: "Toplam Yazı", value: "24", change: "+3", icon: FileText, color: "text-blue-600" },
  { title: "Toplam Görüntülenme", value: "12.5K", change: "+15%", icon: Eye, color: "text-green-600" },
  { title: "Toplam Beğeni", value: "1.2K", change: "+8%", icon: Heart, color: "text-red-600" },
  { title: "Toplam Yorum", value: "156", change: "+12", icon: MessageSquare, color: "text-purple-600" },
]

const monthlyData = [
  { month: "Oca", posts: 4, views: 1200, likes: 89 },
  { month: "Şub", posts: 3, views: 1800, likes: 134 },
  { month: "Mar", posts: 5, views: 2400, likes: 187 },
  { month: "Nis", posts: 2, views: 1600, likes: 98 },
  { month: "May", posts: 4, views: 2200, likes: 156 },
  { month: "Haz", posts: 6, views: 2800, likes: 234 },
]

const categoryData = [
  { name: "Teknoloji", value: 12, color: "#059669" },
  { name: "Geliştirme", value: 8, color: "#10b981" },
  { name: "Tasarım", value: 6, color: "#34d399" },
  { name: "Backend", value: 4, color: "#6ee7b7" },
]

const recentPosts = [
  {
    id: 1,
    title: "Modern Web Geliştirme Trendleri 2024",
    status: "published",
    views: 1250,
    likes: 89,
    date: "15 Mart 2024",
  },
  {
    id: 2,
    title: "React ve Next.js ile Performanslı Uygulamalar",
    status: "published",
    views: 980,
    likes: 67,
    date: "10 Mart 2024",
  },
  {
    id: 3,
    title: "UI/UX Tasarımında Yeni Yaklaşımlar",
    status: "draft",
    views: 0,
    likes: 0,
    date: "5 Mart 2024",
  },
]

export function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground text-balance">Admin Dashboard</h1>
            <p className="text-muted-foreground">Blog ve içerik yönetim paneline hoş geldiniz</p>
          </div>
          <div className="flex space-x-3">
            <Link href="/admin/posts/new">
              <Button className="animate-pulse-glow">
                <Plus className="w-4 h-4 mr-2" />
                Yeni Yazı
              </Button>
            </Link>
            <Link href="/admin/analytics">
              <Button variant="outline" className="bg-transparent">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analitik
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card
              key={stat.title}
              className="hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Monthly Performance */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span>Aylık Performans</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#059669" name="Görüntülenme" />
                  <Bar dataKey="likes" fill="#10b981" name="Beğeni" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Kategori Dağılımı</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>Son Yazılar</span>
              </CardTitle>
              <Link href="/admin/posts">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Tümünü Gör
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-balance">{post.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={post.status === "published" ? "default" : "secondary"}>
                      {post.status === "published" ? "Yayında" : "Taslak"}
                    </Badge>
                    <Link href={`/admin/posts/${post.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
