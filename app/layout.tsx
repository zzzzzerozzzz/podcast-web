import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "粵港外勞事務所 | 跨境勞務領航者",
  description: "25年專業深耕，提供專業外勞申請、港澳輸入勞工計劃及跨境人力資源管理服務。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-slate-800`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
