export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center animate-fade-in-up">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-4" />

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-foreground mb-2">Yükleniyor...</h2>
        <p className="text-muted-foreground">İçerik hazırlanıyor, lütfen bekleyin.</p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse-glow" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  )
}
