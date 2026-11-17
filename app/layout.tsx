import type { Metadata, Viewport } from "next";
import { Outfit, Lora } from "next/font/google";
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
  title: "港人北上媒体矩阵｜深圳·大湾区商家推广",
  description:
    "3 个 FB 专页＋12,000 人港人北上交流群组＋2 个 IG。28 天 879 万浏览、30 万互动。深圳/大湾区商家触达香港消费者的最直接渠道。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${lora.variable} antialiased font-sans bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
