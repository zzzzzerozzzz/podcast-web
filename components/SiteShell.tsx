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
      shortLabel: lang === "hk" ? "合作" : "合作",
      icon: Sparkles,
      match: (p: string) => p === "/",
    },
    {
      href: "/border",
      label: lang === "hk" ? "實時口岸" : "实时口岸",
      shortLabel: lang === "hk" ? "口岸" : "口岸",
      icon: Radio,
      match: (p: string) => p.startsWith("/border"),
    },
    {
      href: "/deals",
      label: lang === "hk" ? "北上著數" : "北上优惠",
      shortLabel: lang === "hk" ? "著數" : "优惠",
      icon: Gift,
      match: (p: string) => p.startsWith("/deals"),
    },
    {
      href: "/guides",
      label: lang === "hk" ? "實測攻略" : "实测攻略",
      shortLabel: lang === "hk" ? "攻略" : "攻略",
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
      <ScrollProgressBar />
      <header className="sticky top-0 z-40 w-full max-w-full bg-[#161310]/92 backdrop-blur-md border-b border-[#E8C98A]/16">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-6 h-[58px] md:h-[68px] flex items-center justify-between gap-2 min-w-0">
          <Link href="/" aria-label={t.brand} className="min-w-0 shrink overflow-hidden">
            <BrandLogo subtitle={brandSubtitle} compact />
          </Link>

          {/* Desktop multi-page navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-[13.5px] font-semibold">
            {primaryPages.map((item) => {
              const active = item.match(pathname);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-colors ${
                    active ? "text-[#F5D98B]" : "text-[#C8BCA9] hover:text-[#F7EFDD]"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#C5A065]/20 border border-[#E8C98A]/35"
                    />
                  ) : null}
                  <Icon className="relative z-10 w-3.5 h-3.5" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <div
              className="inline-flex items-center rounded-full bg-[#241E18] p-0.5 border border-[#E8C98A]/22"
              role="group"
              aria-label="Language switch"
            >
              <button
                type="button"
                onClick={() => switchLang("hk")}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-[12px] sm:text-[12.5px] font-semibold transition-all cursor-pointer ${
                  lang === "hk"
                    ? "bg-[#C5A065] text-[#1A1510] shadow-xs"
                    : "text-[#B8AB98] hover:text-[#F7EFDD]"
                }`}
              >
                繁
              </button>
              <button
                type="button"
                onClick={() => switchLang("cn")}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-[12px] sm:text-[12.5px] font-semibold transition-all cursor-pointer ${
                  lang === "cn"
                    ? "bg-[#C5A065] text-[#1A1510] shadow-xs"
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
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#282119] hover:bg-[#332A1F] border border-[#E8C98A]/38 text-[#F5D98B] text-[12.5px] font-bold px-3.5 py-2 transition-all"
              >
                <Users className="w-3.5 h-3.5 text-[#E89B5C]" />
                {lang === "hk" ? "加入 12,000 人群" : "加入 12,000 人群"}
              </a>
            ) : (
              <a
                href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#E89B5C] hover:bg-[#F0AD74] text-[#24190F] text-[13px] font-bold px-4 py-2 transition-all shadow-[0_8px_22px_-8px_rgba(232,155,92,0.5)]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t.navCta}
              </a>
            )}
          </div>
        </div>

        {/* Mobile compact sub-nav pill bar (strictly fits 320px+ with zero horizontal clipping) */}
        <div className="lg:hidden w-full border-t border-[#E8C98A]/10 bg-[#1B1712]/95">
          <div className="w-full max-w-6xl mx-auto px-2 sm:px-3 py-1.5 grid grid-cols-4 gap-1">
            {primaryPages.map((item) => {
              const active = item.match(pathname);
              const Icon = item.icon;
              return (
                <Link
                  key={`m-${item.href}`}
                  href={item.href}
                  className={`min-w-0 flex items-center justify-center gap-1 py-1.5 px-1 rounded-xl text-[11px] sm:text-[12px] font-bold transition-all whitespace-nowrap overflow-hidden ${
                    active
                      ? "bg-[#C5A065]/22 text-[#F5D98B] border border-[#E8C98A]/30"
                      : "text-[#B8AB98] hover:text-[#F7EFDD]"
                  }`}
                >
                  <Icon className="w-3 h-3 shrink-0 hidden min-[370px]:block" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = SITE_DATA[lang];
  return (
    <footer className="border-t border-[#E8C98A]/15 bg-[#120F0D] pt-8 pb-24 md:pb-8 px-4 sm:px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-[#9A8E7D]">
        <div className="flex flex-wrap items-center justify-center gap-4 text-[#C2B5A2]">
          <Link href="/" className="hover:text-[#F5D98B] transition-colors">
            {lang === "hk" ? "商務合作" : "商务合作"}
          </Link>
          <Link href="/border" className="hover:text-[#F5D98B] transition-colors">
            {lang === "hk" ? "實時口岸" : "实时口岸"}
          </Link>
          <Link href="/deals" className="hover:text-[#F5D98B] transition-colors">
            {lang === "hk" ? "北上著數" : "北上优惠"}
          </Link>
          <Link href="/guides" className="hover:text-[#F5D98B] transition-colors">
            {lang === "hk" ? "實測攻略" : "实测攻略"}
          </Link>
          <a
            href="https://www.facebook.com/groups/shenzhenguangzhouhktravel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5D98B] transition-colors"
          >
            {lang === "hk" ? "12,000人 FB 交流群" : "12,000人 FB 交流群"}
          </a>
        </div>
        <p className="text-center md:text-right leading-relaxed max-w-xl">{t.footer}</p>
      </div>
    </footer>
  );
}
