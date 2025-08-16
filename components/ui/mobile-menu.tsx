"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X, Home, Briefcase, Users, Phone, Star } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1]
    }
  }
}

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

const itemVariants = {
  closed: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.2
    }
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.2,
      duration: 0.3,
      ease: [0, 0, 0.2, 1]
    }
  })
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Home": Home,
  "Services": Briefcase,
  "About": Users,
  "Contact": Phone,
  "Testimonials": Star
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border/50 z-50 shadow-2xl flex flex-col mobile-menu-panel"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 flex items-center justify-center">
                  <Image
                    src="/droxa-logo.png" 
                    alt="Droxa Automation Logo" 
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Droxa
                </span>
              </div>
              
              <motion.button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Navigation - Scrollable area */}
            <nav className="flex-1 p-6 space-y-2 overflow-y-auto min-h-0 mobile-menu-scroll" aria-label="Main navigation">
              {navigation.map((item, index) => {
                const Icon = iconMap[item.name] || Home
                return (
                  <motion.button
                    key={item.name}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full flex items-center space-x-4 p-4 rounded-xl text-left",
                      "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5",
                      "transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-primary/20"
                    )}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </motion.button>
                )
              })}
            </nav>

            {/* Footer - Fixed at bottom */}
            <div className="p-6 border-t border-border/50 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="text-center"
              >
                <p className="text-sm text-muted-foreground mb-3">
                  Ready to automate your business?
                </p>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className={cn(
                    "w-full py-3 px-4 rounded-lg",
                    "bg-gradient-to-r from-primary to-primary/80",
                    "text-primary-foreground font-medium",
                    "hover:shadow-lg hover:shadow-primary/25",
                    "transition-all duration-200"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}