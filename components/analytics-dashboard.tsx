"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { TrendingUp, TrendingDown, Eye, Users, Clock, Globe } from "lucide-react"

const trafficData = [
  { date: "1 Mar", views: 1200, visitors: 890, bounceRate: 45 },
  { date: "2 Mar", views: 1800, visitors: 1200, bounceRate: 42 },
  { date: "3 Mar", views: 2400, visitors: 1600, bounceRate: 38 },
  { date: "4 Mar", views: 1600, visitors: 1100, bounceRate: 48 },
  { date: "5 Mar", views: 2200, visitors: 1500, bounceRate: 35 },
  { date: "6 Mar", views: 2800, visitors: 1900, bounceRate: 32 },
  { date: "7 Mar", views: 3200, visitors: 2100, bounceRate: 28 },
]

const topPosts = [
  { title: "Modern Web Geliştirme Trendleri 2024", views: 1250, change: 15 },
  { title: "React ve Next.js ile Performanslı Uygulamalar", views: 980, change: -5 },
  { title: "UI/UX Tasarımında Yeni Yaklaşımlar", views: 756, change: 22 },
  { title: "JavaScript ES2024 Yenilikleri", views: 892, change: 8 },
  { title: "Veritabanı Optimizasyonu İpuçları", views: 634, change: -12 },
]

const deviceData = [
  { name: "Desktop", value: 65, color: "#059669" },
  { name: "Mobile", value: 28, color: "#10b981" },
  { name: "Tablet", value: 7, color: "#34d399" },
]

const referralData = [
  { source: "Google", visitors: 1200, percentage: 45 },
  { source: "Direct", visitors: 800, percentage: 30 },
  { source: "Social Media", visitors: 400, percentage: 15 },
  { source: "Other", visitors: 267, percentage: 10 },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground text-balance">Analitik Dashboard</h1>
        <p className="text-muted-foreground">Blog performansınızı detaylı olarak inceleyin</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="animate-fade-in-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Toplam Görüntülenme</p>
                <p className="text-2xl font-bold text-foreground">12.5K</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-600">+15% bu ay</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Eye className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Benzersiz Ziyaretçi</p>
                <p className="text-2xl font-bold text-foreground">8.2K</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-600">+12% bu ay</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ortalama Süre</p>
                <p className="text-2xl font-bold text-foreground">3:24</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-red-600" />
                  <span className="text-xs text-red-600">-5% bu ay</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Çıkış Oranı</p>
                <p className="text-2xl font-bold text-foreground">32%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-600">-8% bu ay</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                <Globe className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Traffic Overview */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>Trafik Genel Bakış</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="views" stackId="1" stroke="#059669" fill="#059669" fillOpacity={0.6} />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stackId="2"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device Distribution */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>Cihaz Dağılımı</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Posts and Referrals */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Posts */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>En Popüler Yazılar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-balance line-clamp-1">{post.title}</h4>
                    <p className="text-sm text-muted-foreground">{post.views} görüntülenme</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {post.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm ${post.change > 0 ? "text-green-600" : "text-red-600"}`}>
                      {post.change > 0 ? "+" : ""}
                      {post.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>Trafik Kaynakları</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {referralData.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="font-medium text-foreground">{source.source}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-muted-foreground">{source.visitors} ziyaretçi</span>
                    <Badge variant="outline">{source.percentage}%</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
