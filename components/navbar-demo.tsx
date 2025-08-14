"use client"
import { useState } from "react"
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"

export default function DroxaNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#services">Process Automation</HoveredLink>
            <HoveredLink href="#services">Data Integration</HoveredLink>
            <HoveredLink href="#services">Workflow Optimization</HoveredLink>
            <HoveredLink href="#services">Custom Solutions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">Our Story</HoveredLink>
            <HoveredLink href="#about">Our Team</HoveredLink>
            <HoveredLink href="#about">Our Mission</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#contact">Get in Touch</HoveredLink>
            <HoveredLink href="#contact">Request Quote</HoveredLink>
            <HoveredLink href="#contact">Schedule Consultation</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
