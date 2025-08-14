"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedInput } from "@/components/ui/animated-input"
import { AnimatedTextarea } from "@/components/ui/animated-textarea"
import { AnimatedLabel } from "@/components/ui/animated-label"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      })
    }, 2000)
  }

  return (
    <section id="contact" className="py-12 md:py-24" style={{background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%), linear-gradient(to bottom, hsl(var(--muted) / 0.9), hsl(var(--muted)), hsl(var(--background)))'}}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">
              Get in touch with our automation experts to discuss your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="w-full rounded-none bg-card p-4 md:rounded-2xl md:p-8 border border-border shadow-input">
              <h2 className="text-lg md:text-xl font-bold text-foreground">Get Started Today</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your automation needs and we'll create a custom solution for your business
              </p>

              <form className="my-6 md:my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <LabelInputContainer>
                    <AnimatedLabel htmlFor="firstname">First name</AnimatedLabel>
                    <AnimatedInput id="firstname" name="firstname" placeholder="John" type="text" required />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <AnimatedLabel htmlFor="lastname">Last name</AnimatedLabel>
                    <AnimatedInput id="lastname" name="lastname" placeholder="Doe" type="text" required />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <AnimatedLabel htmlFor="email">Email Address</AnimatedLabel>
                  <AnimatedInput id="email" name="email" placeholder="john@company.com" type="email" required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <AnimatedLabel htmlFor="company">Company</AnimatedLabel>
                  <AnimatedInput id="company" name="company" placeholder="Your Company Name" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                  <AnimatedLabel htmlFor="message">Message</AnimatedLabel>
                  <AnimatedTextarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your automation needs..."
                    required
                  />
                </LabelInputContainer>

                <div className="w-full flex justify-center">
                  <HoverBorderGradient
                    containerClassName="w-full"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full py-2"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </HoverBorderGradient>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">enzo@droxa.net</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Ready to get started?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a free consultation to discuss your automation needs and see how we can help transform your
                    business.
                  </p>
                  <div className="w-full flex justify-center">
                    <HoverBorderGradient
                      containerClassName="w-full"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full py-2"
                    >
                      Schedule Consultation
                    </HoverBorderGradient>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
