"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Compass, Gift, MessageCircle, Radio, Sparkles, Users } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { ScrollProgressBar } from "./MotionPrimitives";
import { SITE_DATA, waLink, type Lang } from "@/lib/site-data";

export function useSiteLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>("hk");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ztg-lang");
      if (saved === "hk" || saved === "cn") {
        setLang(saved);
        return;
      }
      const loc = navigator.language || "";
      if (loc.startsWith("zh-CN") || loc.startsWith("zh-SG")) {
        setLang("cn");
      }
    } catch {}
  }, []);

  const switchLang = (l: Lang) => {
    setLang(l);
    try {
      window.localStorage.setItem("ztg-lang", l);
      document.documentElement.lang = l === "hk" ? "zh-Hant-HK" : "zh-Hans-CN";
    } catch {}
  };

  return [lang, switchLang];
}

interface SiteHeaderProps {
  lang: Lang;
  switchLang: (l: Lang) => void;
}

export function SiteHeader({ lang, switchLang }: SiteHeaderProps) {
  const pathname = usePathname();
  const t = SITE_DATA[lang];
  const isConsumerPage = pathname !== "/";

  const primaryPages = [
    {
      href: "/",
      label: lang === "hk" ? "商務合作" : "商务合作",
      icon: Sparkles,
      match: (p: string) => p === "/",
    },
    {
      href: "/border",
      label: lang === "hk" ? "實時口岸" : "实时口岸",
      icon: Radio,
      match: (p: string) => p.startsWith("/border"),
    },
    {
      href: "/deals",
      label: lang === "hk" ? "北上著數" : "北上优惠",
      icon: Gift,
      match: (p: string) => p.startsWith("/deals"),
    },
    {
      href: "/guides",
      label: lang === "hk" ? "實測攻略" : "实测攻略",
      icon: Compass,
      match: (p: string) => p.startsWith("/guides"),
    },
  ];

  const brandSubtitle = isConsumerPage
    ? lang === "hk"
      ? "港人北上生活情報站"
      : "港人北上生活情报站"
    : t.brandSub;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-[#F5D98B] focus:text-[#1B1611] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:shadow-lg"
      >
        {lang === "hk" ? "跳至主要內容" : "跳至主要内容"}
      </a>
      <ScrollProgressBar />
      <header className="sticky top-0 z-40 w-full max-w-full bg-[#161310]/94 backdrop-blur-md border-b border-[#E8C98A]/16">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-6 h-[60px] md:h-[68px] flex items-center justify-between gap-2 min-w-0">
          <Link
            href="/"
            aria-label={t.brand}
            className="min-w-0 shrink overflow-hidden py-1.5 rounded-xl focus-visible:outline-2 focus-visible:outline-[#F5D98B]"
          >
            <BrandLogo subtitle={brandSubtitle} compact />
          </Link>

          {/* Desktop multi-page navigation */}
          <nav
            aria-label={lang === "hk" ? "主導覽" : "主导航"}
            className="hidden lg:flex items-center gap-1 text-[13.5px] font-semibold"
          >
            {primaryPages.map((item) => {
              const active = item.match(pathname);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex items-center gap-1.5 px-3.5 min-h-[40px] rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#F5D98B] ${
                    active ? "text-[#F5D98B]" : "text-[#C8BCA9] hover:text-[#F7EFDD]"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[#C5A065]/20 border border-[#E8C98A]/35"
                    />
                  ) : null}
                  <Icon className="relative z-10 w-3.5 h-3.5" aria-hidden="true" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <div
              className="inline-flex items-center rounded-full bg-[#241E18] p-0.5 border border-[#E8C98A]/22"
              role="group"
              aria-label={lang === "hk" ? "語言切換" : "语言切换"}
            >
              <button
                type="button"
                onClick={() => switchLang("hk")}
                aria-pressed={lang === "hk"}
                className={`min-w-[40px] min-h-[38px] px-2.5 rounded-full text-[12.5px] font-semibold transition-colors duration-150 active:scale-[0.97] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B] ${
                  lang === "hk"
                    ? "bg-[#C5A065] text-[#1A1510]"
                    : "text-[#B8AB98] hover:text-[#F7EFDD]"
                }`}
              >
                繁
              </button>
              <button
                type="button"
                onClick={() => switchLang("cn")}
                aria-pressed={lang === "cn"}
                className={`min-w-[40px] min-h-[38px] px-2.5 rounded-full text-[12.5px] font-semibold transition-colors duration-150 active:scale-[0.97] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B] ${
                  lang === "cn"
                    ? "bg-[#C5A065] text-[#1A1510]"
                    : "text-[#B8AB98] hover:text-[#F7EFDD]"
                }`}
              >
                簡
              </button>
            </div>

            {isConsumerPage ? (
              <a
                href="https://www.facebook.com/groups/shenzhenguangzhouhktravel"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#282119] hover:bg-[#332A1F] border border-[#E8C98A]/38 text-[#F5D98B] text-[12.5px] font-bold px-3.5 min-h-[40px] transition-colors duration-150 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[#F5D98B]"
              >
                <Users className="w-3.5 h-3.5 text-[#E89B5C]" aria-hidden="true" />
                {lang === "hk" ? "加入 12,000 人群" : "加入 12,000 人群"}
              </a>
            ) : (
              <a
                href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#E89B5C] hover:bg-[#F0AD74] text-[#24190F] text-[13px] font-bold px-4 min-h-[40px] transition-all duration-150 active:scale-[0.97] shadow-[0_8px_22px_-8px_rgba(232,155,92,0.5)] focus-visible:outline-2 focus-visible:outline-[#F5D98B]"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {t.navCta}
              </a>
            )}
          </div>
        </div>

        {/* Mobile compact sub-nav pill bar (44px accessible touch height, zero clipping on 320px+) */}
        <nav
          aria-label={lang === "hk" ? "手機導覽" : "手机导航"}
          className="lg:hidden w-full border-t border-[#E8C98A]/10 bg-[#1B1712]/95"
        >
          <div className="w-full max-w-6xl mx-auto px-2 sm:px-3 py-1 grid grid-cols-4 gap-1">
            {primaryPages.map((item) => {
              const active = item.match(pathname);
              const Icon = item.icon;
              return (
                <Link
                  key={`m-${item.href}`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`min-w-0 min-h-[44px] flex items-center justify-center gap-1 py-2 px-1 rounded-xl text-[11.5px] sm:text-[12px] font-bold transition-colors duration-150 active:scale-[0.97] whitespace-nowrap overflow-hidden focus-visible:outline-2 focus-visible:outline-[#F5D98B] ${
                    active
                      ? "bg-[#C5A065]/22 text-[#F5D98B] border border-[#E8C98A]/30"
                      : "text-[#B8AB98] hover:text-[#F7EFDD]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0 hidden min-[370px]:block" aria-hidden="true" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = SITE_DATA[lang];
  return (
    <footer className="border-t border-[#E8C98A]/15 bg-[#120F0D] pt-8 pb-24 md:pb-8 px-4 sm:px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-[#9A8E7D]">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[#C2B5A2]">
          <Link
            href="/"
            className="min-h-[44px] inline-flex items-center hover:text-[#F5D98B] transition-colors focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-md px-1"
          >
            {lang === "hk" ? "商務合作" : "商务合作"}
          </Link>
          <Link
            href="/border"
            className="min-h-[44px] inline-flex items-center hover:text-[#F5D98B] transition-colors focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-md px-1"
          >
            {lang === "hk" ? "實時口岸" : "实时口岸"}
          </Link>
          <Link
            href="/deals"
            className="min-h-[44px] inline-flex items-center hover:text-[#F5D98B] transition-colors focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-md px-1"
          >
            {lang === "hk" ? "北上著數" : "北上优惠"}
          </Link>
          <Link
            href="/guides"
            className="min-h-[44px] inline-flex items-center hover:text-[#F5D98B] transition-colors focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-md px-1"
          >
            {lang === "hk" ? "實測攻略" : "实测攻略"}
          </Link>
          <a
            href="https://www.facebook.com/groups/shenzhenguangzhouhktravel"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center hover:text-[#F5D98B] transition-colors focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-md px-1"
          >
            {lang === "hk" ? "12,000人 FB 交流群" : "12,000人 FB 交流群"}
          </a>
        </div>
        <p className="text-center md:text-right leading-relaxed max-w-xl">{t.footer}</p>
      </div>
    </footer>
  );
}
