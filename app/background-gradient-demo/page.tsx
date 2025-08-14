"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import BackgroundGradientDemo from "@/components/background-gradient-demo";
import { Sparkles, Star, Heart } from "lucide-react";

export default function BackgroundGradientDemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">BackgroundGradient Component Demo</h1>
          <p className="text-muted-foreground text-lg">
            Beautiful gradient animations that respond to user interaction. Hover over the cards to see the magic!
          </p>
        </div>

        {/* Droxa Automation Cards */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Droxa Automation Services</h2>
          <div className="flex justify-center">
            <BackgroundGradientDemo />
          </div>
        </section>

        {/* Original Demo Style */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Original Style Demo</h2>
          <div className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
              </div>
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-center">
                Premium Product
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                Experience the future of automation with our premium solutions. 
                Designed for enterprises that demand excellence and performance.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 mx-auto">
                <span>Get Started</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $299
                </span>
              </button>
            </BackgroundGradient>
          </div>
        </section>

        {/* Multiple Variants */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Different Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* Static Gradient */}
            <BackgroundGradient animate={false} className="rounded-[22px] max-w-sm p-6 bg-white dark:bg-zinc-900">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2 dark:text-white">Static Gradient</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                Same beautiful gradient effect without animation for better performance.
              </p>
            </BackgroundGradient>

            {/* Animated Gradient */}
            <BackgroundGradient animate={true} className="rounded-[22px] max-w-sm p-6 bg-white dark:bg-zinc-900">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2 dark:text-white">Animated Gradient</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                Full animation with moving gradient background for maximum visual impact.
              </p>
            </BackgroundGradient>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Component Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Animated Gradients</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful moving gradient backgrounds that create stunning visual effects.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Hover Effects</h3>
              <p className="text-sm text-muted-foreground">
                Interactive hover states that enhance user engagement and experience.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Fully customizable with optional animation and flexible styling options.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
