import Script from "next/script"
import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Exo_2 } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { AnalyticsTracker } from "@/components/AnalyticsTracker"
import { PerformanceMonitor } from "@/components/performance-monitor"
import "./globals.css"

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo-2",
})

export const metadata: Metadata = {
  title: "Droxa Automation - Transform Your Business with Intelligent Automation",
  description:
    "Droxa Automation delivers cutting-edge solutions to streamline operations, reduce costs, and boost productivity through intelligent automation. Process automation, workflow optimization, and AI-powered analytics for modern businesses.",
  keywords: "automation, business automation, process automation, workflow optimization, AI automation, digital transformation, Droxa Automation",
  authors: [{ name: "Droxa Automation" }],
  creator: "Droxa Automation",
  publisher: "Droxa Automation",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/droxa-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/droxa-favicon.svg",
      sizes: "180x180",
      type: "image/svg+xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://droxa-automation.com",
    siteName: "Droxa Automation",
    title: "Droxa Automation - Transform Your Business with Intelligent Automation",
    description: "Streamline operations, reduce costs, and boost productivity with intelligent automation solutions.",
    images: [
      {
        url: "/automation-dashboard-dark.png",
        width: 1200,
        height: 600,
        alt: "Droxa Automation Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@droxaautomation",
    title: "Droxa Automation - Transform Your Business with Intelligent Automation",
    description: "Streamline operations, reduce costs, and boost productivity with intelligent automation solutions.",
    images: ["/automation-dashboard-dark.png"],
  },
  alternates: {
    canonical: "https://droxa-automation.com",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${exo2.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${exo2.style.fontFamily};
  --font-sans: ${exo2.variable};
  --font-mono: ${GeistMono.variable};
  scroll-behavior: smooth;
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
          <PerformanceMonitor />
          {children}
        </ThemeProvider>
        
        {/* Google Analytics - Only load if GA_ID is configured */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
