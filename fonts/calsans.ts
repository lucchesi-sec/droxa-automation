// Using Inter as a Cal Sans alternative since we don't have the font files
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Export as calsans for compatibility with the original component
export const calsans = inter;

// Alternative export name
export const calSansAlternative = inter;
