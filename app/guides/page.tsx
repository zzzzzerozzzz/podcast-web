"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Radio, Gift } from "lucide-react";
import { SiteFooter, SiteHeader, useSiteLang } from "@/components/SiteShell";
import { Reveal } from "@/components/MotionPrimitives";
import { GUIDE_ARTICLES, getGuidesCopy } from "@/lib/guides-data";

export default function GuidesPage() {
  const [lang, switchLang] = useSiteLang();
  const [city, setCity] = useState<string>("all");

  const c = getGuidesCopy(lang);
  const filtered =
    city === "all" ? GUIDE_ARTICLES : GUIDE_ARTICLES.filter((g) => g.city === city);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#161310] text-[#F4ECE0] editorial-grain">
      <SiteHeader lang={lang} switchLang={switchLang} />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="mb-8 md:mb-10">
          <h1 className="font-serif font-bold text-[30px] sm:text-[40px] md:text-[46px] leading-tight text-[#F7EFDD] mb-3">
            {c.title}
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#C6B9A6] max-w-2xl leading-relaxed mb-6">
            {c.lead}
          </p>

          {/* City Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {c.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={city === t.id}
                onClick={() => setCity(t.id)}
                className={`px-4 min-h-[44px] rounded-full text-[13px] font-bold transition-colors duration-150 active:scale-[0.97] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B] ${
                  city === t.id
                    ? "bg-[#E8C98A] text-[#1D1711]"
                    : "bg-[#241E18] text-[#C2B5A2] border border-[#E8C98A]/20 hover:text-[#F7EFDD]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filtered.map((article, idx) => (
            <Reveal key={article.slug} delay={idx * 0.04} className="h-full">
              <Link
                href={`/guides/${article.slug}`}
                className="group creator-card rounded-2xl overflow-hidden flex flex-col h-full active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-[#F5D98B]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1D1813] photo-sheen">
                  <img
                    src={article.img}
                    alt={article.title[lang]}
                    loading={idx < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[11px] font-bold bg-[#161310]/85 text-[#F5D98B] border border-[#E8C98A]/30 rounded-full px-2.5 py-0.5">
                      {article.cityLabel[lang]}
                    </span>
                    <span className="text-[11px] font-bold bg-[#E89B5C] text-[#24190F] rounded-full px-2.5 py-0.5">
                      {article.category[lang]}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-[17px] font-bold text-[#F7EFDD] group-hover:text-[#F5D98B] transition-colors leading-snug mb-2">
                      {article.title[lang]}
                    </h2>
                    <p className="text-[13.5px] text-[#B8AB98] leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt[lang]}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start gap-1.5 text-[12px] text-[#C8BCA9] bg-[#161310]/65 border border-[#E8C98A]/14 rounded-xl px-3 py-2 mb-3.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E89B5C] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{article.fromHk[lang]}</span>
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#A89B88]">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.updatedAt} · {article.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#E89B5C]">
                        {c.readMore}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom Utility Strip */}
        <Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/border"
              className="group creator-card rounded-2xl p-6 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-11 h-11 rounded-xl bg-[#65C466]/15 text-[#9EE39F] flex items-center justify-center shrink-0">
                  <Radio className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-bold text-[16px] text-[#F7EFDD] group-hover:text-[#F5D98B]">
                    {c.checkBorderBtn}
                  </div>
                  <div className="text-[12.5px] text-[#A89B88] mt-0.5">
                    {lang === "hk" ? "香港入境處 8 大口岸即時過關數據" : "香港入境处 8 大口岸实时通关数据"}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#E89B5C] shrink-0" />
            </Link>

            <Link
              href="/deals"
              className="group creator-card rounded-2xl p-6 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-11 h-11 rounded-xl bg-[#E89B5C]/18 text-[#F5D98B] flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-bold text-[16px] text-[#F7EFDD] group-hover:text-[#F5D98B]">
                    {c.goDealsBtn}
                  </div>
                  <div className="text-[12.5px] text-[#A89B88] mt-0.5">
                    {lang === "hk" ? "酒店優惠碼、神卡與牙科／配鏡 VIP 預約" : "酒店优惠码、神卡与牙科／配镜 VIP 预约"}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#E89B5C] shrink-0" />
            </Link>
          </div>
        </Reveal>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
