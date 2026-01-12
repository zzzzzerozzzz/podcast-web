import type { Metadata, Viewport } from "next";
import { Outfit, Lora } from "next/font/google"; // Organic/Humanist fonts
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

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

import { BottomNav } from "@/components/AppShell/BottomNav";
import { InstallPrompt } from "@/components/PWA/InstallPrompt";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="zh-TW">
        <body
          className={`${outfit.variable} ${lora.variable} antialiased font-sans bg-background text-foreground pb-24 md:pb-0`}
        >
          {children}
          <InstallPrompt />
          <BottomNav />
        </body>
      </html>
    </ClerkProvider>
  );
}
