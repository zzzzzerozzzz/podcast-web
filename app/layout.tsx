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
  metadataBase: new URL("https://podcast-web-seven.vercel.app"),
  title: "港人北上媒體矩陣｜深圳・大灣區商家推廣",
  description:
    "3 個 FB 專頁＋12,000 人港人北上交流群組＋2 個 IG。28 天 879 萬瀏覽、30 萬互動。深圳／大灣區商家觸達香港消費者最直接的渠道。",
  keywords: ["香港客源", "港人北上", "深圳推廣", "大灣區營銷", "Facebook 廣告", "小紅書", "IG 推廣"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    alternateLocale: ["zh_CN"],
    url: "/",
    siteName: "Zero to Growth Studio",
    title: "港人北上媒體矩陣｜深圳・大灣區商家推廣",
    description:
      "38,178 粉絲、28 天 879 萬瀏覽、12,000 人港人群組。用香港人自己嘅帳號，幫深圳商家搵到香港客。",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "港人北上媒體矩陣 — Zero to Growth Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "港人北上媒體矩陣｜深圳・大灣區商家推廣",
    description: "38,178 粉絲、28 天 879 萬瀏覽、12,000 人港人群組。",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#221d17",
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
        className={`${outfit.variable} ${lora.variable} antialiased font-sans bg-[#221d17] text-[#f3ead9]`}
      >
        {children}
      </body>
    </html>
  );
}
