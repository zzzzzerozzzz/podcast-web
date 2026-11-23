import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Noto_Serif_TC, Outfit } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-sans",
  weight: ["400", "500", "700", "900"],
  preload: false,
  display: "swap",
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-serif",
  weight: ["600", "700", "900"],
  preload: false,
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zerotogrowth.app"),
  title: "Zero to Growth｜港人北上媒體矩陣・深圳大灣區美食旅遊推廣",
  description:
    "香港本土美食旅遊內容工作室：3 大 FB 專頁（32,500 粉絲）＋ 2 個 IG（8,480 粉絲）＋ 12,000 人北上私域群組。28 日 879 萬真實瀏覽，幫深圳與大灣區商家精準觸達週末北上香港客。",
  keywords: [
    "香港客源",
    "港人北上",
    "深圳推廣",
    "大灣區營銷",
    "香港KOL",
    "深圳探店",
    "Facebook 推廣",
    "IG Reels",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    alternateLocale: ["zh_CN"],
    url: "/",
    siteName: "Zero to Growth Studio",
    title: "Zero to Growth｜港人北上媒體矩陣・深圳大灣區美食旅遊推廣",
    description:
      "40,980+ 公開粉絲、28 日 879 萬真實瀏覽、12,000 人港人交流群。用港人真正愛看、主動轉發的內容，把你的好店帶到香港人眼前。",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "港人北上媒體矩陣 — Zero to Growth Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero to Growth｜港人北上媒體矩陣・深圳大灣區商家推廣",
    description: "40,980+ 公開粉絲、28 日 879 萬瀏覽、12,000 人港人北上交流群。",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161310",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-HK" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${notoSansTC.variable} ${notoSerifTC.variable} ${outfit.variable} antialiased font-sans bg-[#161310] text-[#F4ECE0]`}
      >
        {children}
      </body>
    </html>
  );
}
