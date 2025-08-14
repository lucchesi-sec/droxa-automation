"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20" style={{background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%), linear-gradient(to bottom, hsl(var(--muted)), hsl(var(--background)), hsl(var(--muted) / 0.9))'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how businesses are transforming their operations with Droxa's automation solutions
          </p>
        </div>
        
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Droxa's automation platform transformed our entire workflow. What used to take our team 8 hours now completes in under 30 minutes. The ROI has been incredible, and our employees can finally focus on strategic initiatives instead of repetitive tasks.",
    name: "Sarah Chen",
    title: "Operations Director, TechFlow Solutions",
  },
  {
    quote:
      "The implementation was seamless, and the results were immediate. Our customer response times improved by 75%, and we've eliminated nearly all manual data entry errors. Droxa's automation is a game-changer for any business serious about efficiency.",
    name: "Marcus Rodriguez",
    title: "CEO, Digital Dynamics Corp",
  },
  {
    quote:
      "I was skeptical about automation replacing human work, but Droxa showed us how it enhances human capability instead. Our team productivity has doubled, and job satisfaction is at an all-time high because people can do more meaningful work.",
    name: "Emily Watson",
    title: "VP of Operations, InnovateTech",
  },
  {
    quote:
      "The cost savings are substantial, but the real value is in the consistency and reliability. Our processes now run 24/7 without errors, and we can scale operations without proportionally increasing headcount. Droxa pays for itself within months.",
    name: "David Park",
    title: "CFO, Enterprise Solutions LLC",
  },
  {
    quote:
      "What impressed me most was how intuitive the platform is. Our non-technical staff could create and modify automations within weeks. The drag-and-drop interface makes complex workflow automation accessible to everyone.",
    name: "Lisa Thompson",
    title: "Process Improvement Manager, GlobalTech Industries",
  },
  {
    quote:
      "Security was our biggest concern, but Droxa's enterprise-grade protection and compliance features exceeded our expectations. We can automate sensitive processes with complete confidence.",
    name: "Robert Kim",
    title: "IT Security Director, SecureFlow Inc",
  },
];
