import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { ROICalculator } from "@/components/roi-calculator"
import { Footer } from "@/components/ui/footer-section"
import { EnhancedTracingBeam } from "@/components/ui/enhanced-tracing-beam"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative overflow-hidden">
        <EnhancedTracingBeam className="px-2 sm:px-4 md:px-6">
          <main className="pb-12">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            <ROICalculator />
            <ContactSection />
          </main>
        </EnhancedTracingBeam>
      </div>
      <Footer />
    </div>
  )
}
