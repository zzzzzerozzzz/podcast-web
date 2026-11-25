"use client";

/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock, Gift, MapPin, Radio, TrainFront } from "lucide-react";
import { SiteFooter, SiteHeader, useSiteLang } from "@/components/SiteShell";
import { Reveal } from "@/components/MotionPrimitives";
import { GUIDE_ARTICLES, getGuidesCopy } from "@/lib/guides-data";

export default function GuideDetailPage() {
  const params = useParams<{ slug: string }>();
  const [lang, switchLang] = useSiteLang();
  const c = getGuidesCopy(lang);

  const article = GUIDE_ARTICLES.find((g) => g.slug === params?.slug) ?? GUIDE_ARTICLES[0];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#161310] text-[#F4ECE0] editorial-grain">
      <SiteHeader lang={lang} switchLang={switchLang} />

      <main className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 pt-7 pb-16 md:pt-10 md:pb-24">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#E8C98A] hover:text-[#F5D98B] mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {c.backToList}
        </Link>

        <Reveal>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11.5px] font-bold bg-[#C5A065]/20 text-[#F5D98B] border border-[#E8C98A]/35 rounded-full px-3 py-0.5">
              {article.cityLabel[lang]}
            </span>
            <span className="text-[11.5px] font-bold bg-[#E89B5C] text-[#24190F] rounded-full px-3 py-0.5">
              {article.category[lang]}
            </span>
            <span className="inline-flex items-center gap-1 text-[12px] text-[#A89B88] ml-1">
              <Clock className="w-3.5 h-3.5" />
              {c.updatedLabel} {article.updatedAt} · {article.readTime}
            </span>
          </div>

          <h1 className="font-serif font-bold text-[28px] sm:text-[36px] md:text-[42px] leading-[1.22] text-[#F7EFDD] mb-4">
            {article.title[lang]}
          </h1>
          <p className="text-[15.5px] text-[#C6B9A6] leading-relaxed mb-6">
            {article.excerpt[lang]}
          </p>

          {/* Hero Cover */}
          <div className="relative aspect-[16/9] rounded-[1.6rem] overflow-hidden border border-[#E8C98A]/20 mb-7 photo-sheen">
            <img
              src={article.img}
              alt={article.title[lang]}
              className="w-full h-full object-cover ken-burns-a"
            />
          </div>

          {/* From-HK Quick Transit Box */}
          <div className="grid sm:grid-cols-2 gap-3 mb-9">
            <div className="rounded-2xl bg-[#211C16] border border-[#E8C98A]/20 p-4 flex items-start gap-3">
              <TrainFront className="w-5 h-5 text-[#F5D98B] shrink-0 mt-0.5" />
              <div>
                <div className="text-[11.5px] font-bold text-[#E8C98A] mb-0.5">
                  {c.fromHkLabel}
                </div>
                <div className="text-[13.5px] text-[#EDE1CE] leading-snug">
                  {article.fromHk[lang]}
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[#211C16] border border-[#E8C98A]/20 p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E89B5C] shrink-0 mt-0.5" />
              <div>
                <div className="text-[11.5px] font-bold text-[#E8C98A] mb-0.5">
                  {c.nearestPortLabel}
                </div>
                <div className="text-[13.5px] text-[#EDE1CE] leading-snug">
                  {article.nearestPort[lang]}
                </div>
              </div>
            </div>
          </div>

          {/* Article Body Sections */}
          <article className="space-y-8 mb-12">
            {article.sections.map((sec) => (
              <section key={sec.heading.hk} className="creator-card rounded-2xl p-6 md:p-7">
                <h2 className="font-serif font-bold text-[20px] md:text-[23px] text-[#F5D98B] mb-3">
                  {sec.heading[lang]}
                </h2>
                <p className="text-[15px] text-[#DED2C0] leading-[1.8]">{sec.body[lang]}</p>
                {sec.bullets ? (
                  <ul className="mt-4 space-y-2.5">
                    {sec.bullets[lang].map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[14.5px] text-[#C8BCA9] leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-[#E89B5C] shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          {/* Contextual Monetization Box */}
          <div className="rounded-[1.6rem] bg-gradient-to-r from-[#2A2218] to-[#211C16] border border-[#E8C98A]/35 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <h3 className="font-serif font-bold text-[20px] text-[#F7EFDD] mb-1.5">
                {article.ctaType === "border" ? c.checkBorderBtn : c.goDealsBtn}
              </h3>
              <p className="text-[13.5px] text-[#C2B5A2] leading-relaxed">{c.comingNote}</p>
            </div>
            <Link
              href={article.ctaType === "border" ? "/border" : "/deals"}
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] text-[#24190F] font-bold text-[14px] px-6 py-3"
            >
              {article.ctaType === "border" ? (
                <Radio className="w-4 h-4" />
              ) : (
                <Gift className="w-4 h-4" />
              )}
              {article.ctaType === "border" ? c.checkBorderBtn : c.goDealsBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
