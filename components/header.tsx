"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import ExpandableNavbar from "@/components/expandable-navbar"
import { Spotlight } from "@/components/ui/spotlight-new"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { HamburgerButton } from "@/components/ui/hamburger-button"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="hidden md:block">
        <ExpandableNavbar />
      </div>

      <header className={`md:hidden sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2 relative">
            <Spotlight 
              translateY={-150}
              width={250}
              height={500}
              smallWidth={100}
              duration={6}
              xOffset={30}
              gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 100%, 85%, .06) 0, hsla(220, 100%, 55%, .02) 50%, hsla(220, 100%, 45%, 0) 80%)"
              gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .04) 0, hsla(220, 100%, 55%, .01) 80%, transparent 100%)"
              gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .03) 0, hsla(220, 100%, 45%, .01) 80%, transparent 100%)"
            />
            <div className="h-8 w-8 flex items-center justify-center relative z-10">
              <Image
                src="/droxa-logo.png" 
                alt="Droxa Automation Logo" 
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]">
              Droxa Automation
            </span>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <HamburgerButton 
              isOpen={isOpen} 
              onClick={() => setIsOpen(!isOpen)} 
            />
          </div>
        </div>
      </header>


      <div className="hidden md:block fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        navigation={navigation} 
      />
    </>
  )
}
