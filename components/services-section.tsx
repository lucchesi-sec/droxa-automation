import { GlowingEffect } from "@/components/ui/glowing-effect"

export function ServicesSection() {
  return (
    <section id="services" className="py-24" style={{background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%), linear-gradient(to bottom, hsl(var(--muted) / 0.8), hsl(var(--muted)), hsl(var(--background)))'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Automation Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive automation services designed to transform your business operations
          </p>
        </div>

        {/* Our Automation Solutions with Professional Presentation */}
        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative p-8 rounded-lg bg-card border hover:shadow-lg transition-shadow">
              <GlowingEffect className="absolute inset-0 rounded-lg" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
                <p className="text-muted-foreground">Streamline repetitive tasks and workflows for increased efficiency.</p>
              </div>
            </div>
            <div className="relative p-8 rounded-lg bg-card border hover:shadow-lg transition-shadow">
              <GlowingEffect className="absolute inset-0 rounded-lg" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Analytics</h3>
                <p className="text-muted-foreground">Leverage intelligent insights to optimize your business operations.</p>
              </div>
            </div>
            <div className="relative p-8 rounded-lg bg-card border hover:shadow-lg transition-shadow">
              <GlowingEffect className="absolute inset-0 rounded-lg" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
                <p className="text-muted-foreground">Modernize your business with cutting-edge automation solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
