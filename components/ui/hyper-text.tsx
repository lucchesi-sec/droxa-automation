"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface HyperTextProps {
  readonly text: string;
  readonly duration?: number;
  readonly className?: string;
  readonly animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function HyperText({
  text,
  duration = 800,
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    if (isAnimating) return;
    
    iterations.current = 0;
    setIsAnimating(true);
    
    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iterations.current) return text[index];
            return alphabets[getRandomInt(26)];
          })
          .join("");
      });
      
      if (iterations.current >= text.length) {
        clearInterval(interval);
        setIsAnimating(false);
        setDisplayText(text);
      }
      
      iterations.current += 1;
    }, duration / text.length);
  };

  useEffect(() => {
    if (animateOnLoad && isFirstRender.current) {
      isFirstRender.current = false;
      const timeout = setTimeout(() => {
        triggerAnimation();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [animateOnLoad, duration, text]);

  return (
    <button
      type="button"
      className={cn("cursor-pointer select-none bg-transparent border-none p-0 text-left w-full", className)}
      onMouseEnter={triggerAnimation}
      onClick={triggerAnimation}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
      </motion.div>
    </button>
  );
}
