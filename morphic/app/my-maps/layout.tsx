import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./my-maps-globals.css";
import { ThemeProviderWrapper } from "@/components/amogamapapp/providers/ThemeProviderWrapper";
import { Toaster } from "@/components/amogamapapp/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata will be handled by the main morphic layout or page-specific metadata
// export const metadata: Metadata = {
//   title: "Next.js Leaflet Starter",
//   description:
//     "Enterprise-grade Next.js 16 starter template with vanilla Leaflet integration",
// };

export default function MyMapsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* ThemeProviderWrapper and Toaster will need to be imported and possibly adapted */}
      {/* We are assuming morphic's root layout already provides basic theming and body styles */}
      <ThemeProviderWrapper>
        {children}
        <Toaster />
      </ThemeProviderWrapper>
    </div>
  );
}
