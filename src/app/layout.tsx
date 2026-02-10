import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GlobalCursor } from "@/components/GlobalCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "iPhone 17 Pro Max | Experience the Future",
  description: "Discover the revolutionary iPhone 17 Pro Max. Precision engineering meets breakthrough innovation. Every component, perfected.",
  keywords: ["iPhone 17 Pro Max", "Apple", "smartphone", "technology", "innovation"],
  openGraph: {
    title: "iPhone 17 Pro Max | Experience the Future",
    description: "Discover the revolutionary iPhone 17 Pro Max. Precision engineering meets breakthrough innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0d0d0d]">
      <head>
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased bg-[#0d0d0d] text-white min-h-screen transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          <GlobalCursor>
            {children}
          </GlobalCursor>
        </ThemeProvider>
      </body>
    </html>
  );
}
