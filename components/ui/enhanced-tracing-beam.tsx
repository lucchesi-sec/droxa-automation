"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  element: HTMLElement;
  offsetTop: number;
  height: number;
}

export const EnhancedTracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [activeSectionProgress, setActiveSectionProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Initialize sections and track scroll
  useEffect(() => {
    if (!contentRef.current) return;

    const updateSections = () => {
      const sectionElements = contentRef.current?.querySelectorAll('section[id]');
      if (!sectionElements) return;

      const newSections: Section[] = Array.from(sectionElements).map((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        return {
          id: element.id,
          element,
          offsetTop: rect.top + scrollTop,
          height: rect.height,
        };
      });

      setSections(newSections);
      setSvgHeight(contentRef.current?.offsetHeight || 0);
    };

    // Initial setup
    updateSections();

    // Update on resize
    const handleResize = () => {
      setTimeout(updateSections, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const viewportCenter = scrollTop + windowHeight / 2;

      let currentActiveSection = "";
      let currentProgress = 0;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.height;
        
        // Check if viewport center is within this section
        if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
          currentActiveSection = section.id;
          // Calculate progress within the section (0 to 1)
          currentProgress = (viewportCenter - sectionTop) / section.height;
          break;
        }
      }

      setActiveSection(currentActiveSection);
      setActiveSectionProgress(Math.max(0, Math.min(1, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Calculate tracer position based on active section
  const getTracerPosition = () => {
    if (!sections.length || !activeSection) return 50;

    const activeSectionData = sections.find(s => s.id === activeSection);
    if (!activeSectionData) return 50;

    // Calculate relative position within the content
    const sectionStart = activeSectionData.offsetTop;
    const sectionHeight = activeSectionData.height;
    const currentPositionInSection = sectionStart + (sectionHeight * activeSectionProgress);
    
    // Convert to SVG coordinates
    const totalContentHeight = contentRef.current?.offsetHeight || 1;
    const relativePosition = currentPositionInSection / totalContentHeight;
    
    return Math.max(50, Math.min(svgHeight - 50, relativePosition * svgHeight));
  };

  const tracerY = useSpring(getTracerPosition(), {
    stiffness: 400,
    damping: 40,
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-6xl", className)}
    >
      {/* Hide tracing beam on mobile (sm and below), show on md and up */}
      <div className="hidden md:block absolute top-3 -left-20">
        {/* Active section indicator */}
        <motion.div
          style={{ y: tracerY }}
          className="absolute ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border-2 shadow-lg z-10"
          animate={{
            borderColor: activeSection ? "#10b981" : "#d1d5db",
            backgroundColor: activeSection ? "#10b981" : "#f3f4f6",
            boxShadow: activeSection 
              ? "0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)" 
              : "rgba(0, 0, 0, 0.1) 0px 2px 4px",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="h-2 w-2 rounded-full"
            animate={{
              backgroundColor: activeSection ? "#ffffff" : "#9ca3af",
              scale: activeSection ? 1 : 0.8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        </motion.div>

        {/* Background path */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>

        {/* Section indicators */}
        {sections.map((section, index) => {
          const sectionY = (section.offsetTop / (contentRef.current?.offsetHeight || 1)) * svgHeight;
          const isActive = activeSection === section.id;
          
          return (
            <motion.div
              key={section.id}
              className="absolute ml-[31px]"
              style={{ top: sectionY }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: isActive ? 0 : 1, // Hide when active to avoid duplicate with main tracer
                x: 0,
                scale: 1,
              }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3,
                opacity: { duration: 0.2 }
              }}
            >
              <motion.div
                className="h-2 w-2 rounded-full border"
                animate={{
                  backgroundColor: "#e5e7eb",
                  borderColor: "#d1d5db",
                  scale: 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          );
        })}
      </div>
      
      <div ref={contentRef} className="w-full">{children}</div>
    </motion.div>
  );
};