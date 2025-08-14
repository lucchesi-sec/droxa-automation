"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24" style={{background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%), linear-gradient(to bottom, hsl(var(--background)), hsl(var(--muted) / 0.6), hsl(var(--muted) / 0.8))'}}>
      <div className="container mx-auto px-4 flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8 inline-block relative"
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img 
                src="/droxa-logo.png" 
                alt="Droxa Automation Logo" 
                className="h-20 w-20 md:h-24 md:w-24 object-contain mx-auto drop-shadow-lg"
              />
            </motion.div>
            {/* Subtle glowing effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl rounded-full -z-10"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            {"Droxa\nAutomation".split("\n").map((line) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: line === "Droxa" ? 0.4 : 0.6,
                  ease: "easeInOut",
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <TextGenerateEffect 
              words="Transform your business operations with cutting-edge automation solutions that streamline workflows, maximize efficiency, and deliver exceptional results through precision technology."
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
              duration={0.4}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group w-48"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="group w-48"
            >
              <Play className="mr-2 h-4 w-4" />
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-full max-w-6xl mx-auto px-4 pb-10"
      >
        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg">
          <img
            src="/automation-dashboard-dark.png"
            alt="Droxa Automation Dashboard Preview"
            className="aspect-video h-auto w-full object-cover"
            height={600}
            width={1200}
          />
        </div>
      </motion.div>
    </section>
  )
}