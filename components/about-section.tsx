import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"

export function AboutSection() {
  return (
    <section id="about" className="py-24" style={{background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%), linear-gradient(to bottom, hsl(var(--background)), hsl(var(--muted) / 0.8), hsl(var(--muted)))'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Droxa Automation?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              We specialize in creating intelligent automation solutions that drive real business results. Our team of
              experts combines technical excellence with deep industry knowledge to deliver transformative automation
              experiences.
            </p>
          </div>

          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
    </section>
  )
}
