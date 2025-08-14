import GlowingEffectDemo from "@/components/glowing-effect-demo"

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

        {/* Our Automation Solutions with Glowing Effect */}
        <div className="mt-12">
          <div className="flex justify-center">
            <GlowingEffectDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
