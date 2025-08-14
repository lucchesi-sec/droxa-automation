"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function HamburgerButton({ isOpen, onClick, className }: HamburgerButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative p-2 rounded-lg hover:bg-muted/50 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        {/* Top line */}
        <motion.span
          className="block h-0.5 w-6 bg-foreground rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Middle line */}
        <motion.span
          className="block h-0.5 w-6 bg-foreground rounded-full mt-1.5"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        
        {/* Bottom line */}
        <motion.span
          className="block h-0.5 w-6 bg-foreground rounded-full mt-1.5"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
      
      <span className="sr-only">
        {isOpen ? "Close menu" : "Open menu"}
      </span>
    </motion.button>
  )
}