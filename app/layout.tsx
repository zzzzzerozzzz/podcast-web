import type { Metadata, Viewport } from "next";
import { Outfit, Lora } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { BottomNav } from "@/components/AppShell/BottomNav";
import { InstallPrompt } from "@/components/PWA/InstallPrompt";
import { Navbar } from "@/components/AppShell/Navbar";
import { AudioProvider } from "@/lib/audio-context";
import { MiniPlayer } from "@/components/Audio/MiniPlayer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zero to Growth",
  description: "Nurturing your journey from zero to one.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Check if Clerk is configured
const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${lora.variable} antialiased font-sans bg-background text-foreground pb-24 md:pb-0`}
      >
        <AudioProvider>
          <Navbar />
          <div className="pt-16 md:pt-20">
            {children}
          </div>
          <MiniPlayer />
          <InstallPrompt />
          <div className="md:hidden">
            <BottomNav />
          </div>
        </AudioProvider>
      </body>
    </html>
  );

  // Only wrap with ClerkProvider if configured
  if (isClerkConfigured) {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
