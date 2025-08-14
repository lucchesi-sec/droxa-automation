"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Professional automation solutions that transform your business operations with cutting-edge technology, reliable service, and innovative approaches to streamline your workflow and maximize efficiency.`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <TextGenerateEffect 
        words={words} 
        className="text-center"
        duration={0.3}
      />
    </div>
  );
}
