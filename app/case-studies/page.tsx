import { Header } from "@/components/header"
import { Footer } from "@/components/ui/footer-section"
import { EnhancedTracingBeam } from "@/components/ui/enhanced-tracing-beam"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative overflow-hidden">
        <EnhancedTracingBeam className="px-2 sm:px-4 md:px-6">
          <main className="pb-12">
            <div className="py-24">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Case Studies</h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-center mb-12">
                  Discover how we've transformed businesses across industries with our automation solutions.
                </p>
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">Case studies coming soon...</p>
                </div>
              </div>
            </div>
          </main>
        </EnhancedTracingBeam>
      </div>
      <Footer />
    </div>
  )
}