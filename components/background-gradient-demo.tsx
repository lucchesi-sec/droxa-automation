"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Settings, Zap, BarChart3 } from "lucide-react";
import { SlidingNumber } from "@/components/ui/sliding-number";

export default function BackgroundGradientDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Process Automation Card */}
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <Settings className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-center">
          Process Automation
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          Streamline your business operations with intelligent workflow automation. 
          Reduce manual tasks and increase efficiency by up to 80%.
        </p>
        <div className="flex justify-center items-center mt-4">
          <span className="text-lg font-bold text-black dark:text-white mr-2">
            Efficiency Gains:
          </span>
          <SlidingNumber value={75} padStart={true} />
          <span className="text-lg font-bold text-black dark:text-white ml-1">
            %
          </span>
        </div>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 mx-auto">
          <span>Learn More</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            →
          </span>
        </button>
      </BackgroundGradient>

      {/* Data Integration Card */}
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-teal-600">
            <Zap className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-center">
          Data Integration
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          Connect all your systems seamlessly. Our AI-powered integration 
          platform synchronizes data across multiple platforms in real-time.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 mx-auto">
          <span>Learn More</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            →
          </span>
        </button>
      </BackgroundGradient>

      {/* Analytics Dashboard Card */}
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-center">
          Analytics Dashboard
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          Get actionable insights with our comprehensive analytics dashboard. 
          Monitor performance, track KPIs, and make data-driven decisions.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 mx-auto">
          <span>Learn More</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            →
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
