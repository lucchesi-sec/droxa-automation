"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
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
];
