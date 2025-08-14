"use client";

import { useState } from "react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Users, 
  Briefcase,
  Phone,
  Star
} from "lucide-react";

export default function ExpandableNavbar({ className }: { className?: string }) {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  // Navigation tabs with icons matching the company's automation theme
  const navTabs = [
    { title: "Home", icon: Home },
    { title: "Solutions", icon: Briefcase },
    { type: "separator" as const },
    { title: "About", icon: Users },
    { title: "Contact", icon: Phone },
    { type: "separator" as const },
    { title: "Testimonials", icon: Star },
  ];

  const handleTabChange = (index: number | null) => {
    setSelectedTab(index);
    
    if (index !== null && navTabs[index] && navTabs[index].title) {
      const sectionMap: Record<string, string> = {
        "Home": "#home",
        "Solutions": "#services",
        "About": "#about",
        "Contact": "#contact",
        "Testimonials": "#testimonials"
      };
      
      const targetSection = sectionMap[navTabs[index].title!];
      if (targetSection) {
        scrollToSection(targetSection);
      }
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-3xl mx-auto z-50 px-4", className)}>
      <div className="flex justify-center">
        <ExpandableTabs 
          tabs={navTabs}
          onChange={handleTabChange}
          className="bg-background/90 backdrop-blur-md border-border/30 shadow-xl ring-1 ring-foreground/5"
          activeColor="text-primary"
        />
      </div>
    </div>
  );
}
