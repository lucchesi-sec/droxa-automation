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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden -mt-24">
      {/* Extended background to cover header area and eliminate gap */}
      <div className="absolute inset-0 -top-24 bg-gradient-to-b from-background via-background/99 via-background/98 via-background/96 via-background/93 via-background/90 to-muted/20" />
      {/* Gentle radial overlays for depth without harsh lines */}
      <div className="absolute inset-0 -top-24 bg-[radial-gradient(ellipse_140%_120%_at_50%_130%,transparent_0%,hsl(var(--muted)/0.02)_35%,hsl(var(--muted)/0.06)_65%,hsl(var(--muted)/0.10)_90%,hsl(var(--muted)/0.12)_100%)]" />
      <div className="absolute inset-0 -top-24 bg-[radial-gradient(circle_180%_at_50%_90%,transparent_0%,transparent_25%,hsl(var(--background)/0.98)_50%,hsl(var(--background)/0.99)_75%,hsl(var(--background))_100%)]" />
      
      {/* Animated gradient orbs for depth with better blending */}
      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-purple-600/12 rounded-full blur-[48px]"
      />
      <motion.div
        animate={{
          opacity: [0.12, 0.35, 0.12],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-indigo-600/12 rounded-full blur-[48px]"
      />
      {/* Additional atmospheric layers for seamless blending */}
      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-bl from-cyan-400/6 to-blue-500/8 rounded-full blur-[60px]"
      />
      <div className="container mx-auto px-4 flex-1 flex items-center justify-center pt-32 md:pt-20">
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
            {/* Enhanced multi-layer glowing effect with better blending */}
            <motion.div
              animate={{
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/25 blur-2xl rounded-full -z-10"
            />
            <motion.div
              animate={{
                opacity: [0.08, 0.2, 0.08],
                scale: [1.2, 1.4, 1.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-400/15 to-cyan-500/15 blur-3xl rounded-full -z-20"
            />
            {/* Additional soft outer glow for seamless blending */}
            <motion.div
              animate={{
                opacity: [0.05, 0.15, 0.05],
                scale: [1.4, 1.6, 1.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-purple-400/10 blur-[40px] rounded-full -z-30"
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