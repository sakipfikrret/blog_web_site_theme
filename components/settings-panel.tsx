"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Upload, Trash2, Plus } from "lucide-react"

export function SettingsPanel() {
  const [siteSettings, setSiteSettings] = useState({
    siteName: "Kişisel Blog",
    siteDescription: "Modern web geliştirme ve teknoloji blog'u",
    siteUrl: "https://myblog.com",
    adminEmail: "admin@myblog.com",
    postsPerPage: 10,
    commentsEnabled: true,
    registrationEnabled: false,
  })

  const [socialLinks, setSocialLinks] = useState([
    { platform: "GitHub", url: "https://github.com/username" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/username" },
    { platform: "Twitter", url: "https://twitter.com/username" },
  ])

  const [newSocialLink, setNewSocialLink] = useState({ platform: "", url: "" })

  const handleSiteSettingsChange = (field: string, value: any) => {
    setSiteSettings({ ...siteSettings, [field]: value })
  }

  const addSocialLink = () => {
    if (newSocialLink.platform && newSocialLink.url) {
      setSocialLinks([...socialLinks, newSocialLink])
      setNewSocialLink({ platform: "", url: "" })
    }
  }

  const removeSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index))
  }

  const handleSave = () => {
    console.log("Settings saved:", { siteSettings, socialLinks })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground text-balance">Ayarlar</h1>
          <p className="text-muted-foreground">Site ayarlarınızı yönetin ve özelleştirin</p>
        </div>
        <Button onClick={handleSave} className="animate-pulse-glow">
          <Save className="w-4 h-4 mr-2" />
          Değişiklikleri Kaydet
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Genel</TabsTrigger>
          <TabsTrigger value="appearance">Görünüm</TabsTrigger>
          <TabsTrigger value="social">Sosyal Medya</TabsTrigger>
          <TabsTrigger value="advanced">Gelişmiş</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Site Bilgileri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Site Adı</Label>
                <Input
                  id="siteName"
                  value={siteSettings.siteName}
                  onChange={(e) => handleSiteSettingsChange("siteName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="siteDescription">Site Açıklaması</Label>
                <Textarea
                  id="siteDescription"
                  value={siteSettings.siteDescription}
                  onChange={(e) => handleSiteSettingsChange("siteDescription", e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="siteUrl">Site URL'si</Label>
                <Input
                  id="siteUrl"
                  value={siteSettings.siteUrl}
                  onChange={(e) => handleSiteSettingsChange("siteUrl", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="adminEmail">Admin E-posta</Label>
                <Input
                  id="adminEmail"
                  type="email"
                  value={siteSettings.adminEmail}
                  onChange={(e) => handleSiteSettingsChange("adminEmail", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blog Ayarları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="postsPerPage">Sayfa Başına Yazı Sayısı</Label>
                <Input
                  id="postsPerPage"
                  type="number"
                  value={siteSettings.postsPerPage}
                  onChange={(e) => handleSiteSettingsChange("postsPerPage", Number.parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="commentsEnabled">Yorumları Etkinleştir</Label>
                  <p className="text-sm text-muted-foreground">Ziyaretçilerin yorum yapmasına izin ver</p>
                </div>
                <Switch
                  id="commentsEnabled"
                  checked={siteSettings.commentsEnabled}
                  onCheckedChange={(checked) => handleSiteSettingsChange("commentsEnabled", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="registrationEnabled">Kayıt Olmayı Etkinleştir</Label>
                  <p className="text-sm text-muted-foreground">Yeni kullanıcı kayıtlarına izin ver</p>
                </div>
                <Switch
                  id="registrationEnabled"
                  checked={siteSettings.registrationEnabled}
                  onCheckedChange={(checked) => handleSiteSettingsChange("registrationEnabled", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Logo ve Favicon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Site Logosu</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Logo yüklemek için tıklayın</p>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Dosya Seç
                  </Button>
                </div>
              </div>
              <div>
                <Label>Favicon</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Favicon yüklemek için tıklayın</p>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Dosya Seç
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tema Ayarları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Ana Renk</Label>
                <div className="flex space-x-2 mt-2">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full border-2 border-primary cursor-pointer" />
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-transparent cursor-pointer" />
                  <div className="w-8 h-8 bg-purple-600 rounded-full border-2 border-transparent cursor-pointer" />
                  <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-transparent cursor-pointer" />
                </div>
              </div>
              <div>
                <Label>Font Ailesi</Label>
                <select className="w-full mt-2 p-2 border border-border rounded-md">
                  <option>Inter</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Lato</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Social Media Settings */}
        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sosyal Medya Bağlantıları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((link, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                  <Badge variant="outline">{link.platform}</Badge>
                  <Input value={link.url} readOnly className="flex-1" />
                  <Button variant="ghost" size="sm" onClick={() => removeSocialLink(index)}>
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              ))}

              <div className="flex space-x-3">
                <Input
                  placeholder="Platform (ör: Instagram)"
                  value={newSocialLink.platform}
                  onChange={(e) => setNewSocialLink({ ...newSocialLink, platform: e.target.value })}
                />
                <Input
                  placeholder="URL"
                  value={newSocialLink.url}
                  onChange={(e) => setNewSocialLink({ ...newSocialLink, url: e.target.value })}
                />
                <Button variant="outline" onClick={addSocialLink} className="bg-transparent">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO Ayarları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="metaTitle">Varsayılan Meta Başlık</Label>
                <Input id="metaTitle" placeholder="Site meta başlığı..." />
              </div>
              <div>
                <Label htmlFor="metaDescription">Varsayılan Meta Açıklama</Label>
                <Textarea id="metaDescription" placeholder="Site meta açıklaması..." rows={3} />
              </div>
              <div>
                <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                <Input id="googleAnalytics" placeholder="G-XXXXXXXXXX" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Güvenlik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>İki Faktörlü Kimlik Doğrulama</Label>
                  <p className="text-sm text-muted-foreground">Hesap güvenliğini artır</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Giriş Denemesi Sınırı</Label>
                  <p className="text-sm text-muted-foreground">Brute force saldırılarını engelle</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Yedekleme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Otomatik Yedekleme</Label>
                  <p className="text-sm text-muted-foreground">Günlük otomatik yedekleme</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                <Upload className="w-4 h-4 mr-2" />
                Manuel Yedekleme Oluştur
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
