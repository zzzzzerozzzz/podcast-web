"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Crown,
  Gift,
  MapPin,
  MessageCircle,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteFooter, SiteHeader, useSiteLang } from "@/components/SiteShell";
import { Reveal } from "@/components/MotionPrimitives";
import { AFFILIATE_DEALS, VIP_OFFERS, getDealsCopy } from "@/lib/deals-data";
import { waLink } from "@/lib/site-data";

export default function DealsPage() {
  const [lang, switchLang] = useSiteLang();
  const [tab, setTab] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const c = getDealsCopy(lang);
  const filteredDeals =
    tab === "all" ? AFFILIATE_DEALS : AFFILIATE_DEALS.filter((d) => d.category === tab);

  const copyPromo = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#161310] text-[#F4ECE0] editorial-grain">
      <SiteHeader lang={lang} switchLang={switchLang} />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Page Header (instant first-paint) */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div>
              <h1 className="font-serif font-bold text-[30px] sm:text-[40px] md:text-[46px] leading-tight text-[#F7EFDD] mb-3">
                {c.title}
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#C6B9A6] max-w-2xl leading-relaxed">
                {c.lead}
              </p>
            </div>
            <Link
              href="/border"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#241E18] hover:bg-[#2F2720] border border-[#E8C98A]/30 text-[#F5D98B] text-[13.5px] font-bold px-5 min-h-[44px] transition-colors duration-150 active:scale-[0.97] self-start lg:self-auto focus-visible:outline-2 focus-visible:outline-[#F5D98B]"
            >
              <Radio className="w-4 h-4 text-[#65C466]" aria-hidden="true" />
              {c.borderLink}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* SECTION A: High-Ticket VIP 1-on-1 Concierge Funnel */}
        <section className="mb-16 md:mb-20">
          <Reveal className="mb-7">
            <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#F5D98B] bg-[#C5A065]/16 border border-[#E8C98A]/30 rounded-full px-3.5 py-1 mb-3">
              <Crown className="w-3.5 h-3.5 text-[#E89B5C]" />
              VIP CONCIERGE · 3 人私隱小群對接
            </div>
            <h2 className="font-serif font-bold text-[24px] sm:text-[30px] text-[#F7EFDD] mb-2">
              {c.vipTitle}
            </h2>
            <p className="text-[14.5px] text-[#B8AB98] max-w-2xl leading-relaxed">{c.vipSub}</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {VIP_OFFERS.map((offer, idx) => (
              <Reveal key={offer.id} delay={idx * 0.06} className="h-full">
                <div className="creator-card rounded-[1.5rem] p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#24190F] bg-[#F5D98B] rounded-full px-3 py-0.5">
                        {offer.badge[lang]}
                      </span>
                      <span className="text-[11.5px] text-[#B9D4A8] font-semibold">
                        {offer.statusTag[lang]}
                      </span>
                    </div>

                    <h3 className="text-[18.5px] font-bold text-[#F7EFDD] leading-snug mb-2">
                      {offer.title[lang]}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[12.5px] text-[#A89B88] mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#E89B5C] shrink-0" />
                      <span>{offer.location[lang]}</span>
                    </div>

                    <div className="rounded-xl bg-[#C5A065]/12 border border-[#E8C98A]/25 px-4 py-3 text-[13.5px] font-semibold text-[#F5D98B] leading-relaxed mb-4">
                      {offer.perk[lang]}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {offer.highlights[lang].map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-[13.5px] text-[#C8BCA9] leading-snug"
                        >
                          <ShieldCheck className="w-4 h-4 text-[#E89B5C] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={waLink(offer.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] hover:brightness-105 text-[#24190F] font-bold text-[14px] py-3 px-5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {c.vipBtn}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SECTION B: Affiliate Deals & Promo Codes */}
        <section className="mb-14">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-7">
            <div>
              <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#E8C98A] mb-2">
                <Gift className="w-4 h-4 text-[#E89B5C]" />
                AFFILIATE DEALS & PROMO CODES
              </div>
              <h2 className="font-serif font-bold text-[24px] sm:text-[30px] text-[#F7EFDD] mb-1.5">
                {c.affTitle}
              </h2>
              <p className="text-[14px] text-[#A89B88]">{c.affSub}</p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-1.5">
              {c.tabs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[12.5px] font-bold transition-colors cursor-pointer ${
                    tab === item.id
                      ? "bg-[#E8C98A] text-[#1D1711]"
                      : "bg-[#241E18] text-[#C2B5A2] border border-[#E8C98A]/20 hover:text-[#F7EFDD]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {filteredDeals.map((deal, idx) => (
              <Reveal key={deal.id} delay={idx * 0.05}>
                <motion.div
                  layout
                  className="creator-card rounded-[1.5rem] p-6 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[12px] font-display font-bold text-[#F5D98B] tracking-wide">
                        {deal.partner}
                      </span>
                      <span className="text-[11px] font-bold text-[#E89B5C] bg-[#E89B5C]/15 border border-[#E89B5C]/30 rounded-full px-2.5 py-0.5">
                        {deal.badge[lang]}
                      </span>
                    </div>

                    <h3 className="text-[17.5px] font-bold text-[#F7EFDD] leading-snug mb-2">
                      {deal.title[lang]}
                    </h3>
                    <p className="text-[13.5px] text-[#B8AB98] leading-relaxed mb-5">
                      {deal.desc[lang]}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {deal.code ? (
                      <div className="flex items-center justify-between gap-3 rounded-xl bg-[#161310]/80 border border-dashed border-[#E8C98A]/35 px-4 py-2.5">
                        <div>
                          <div className="text-[10px] text-[#9E9383] uppercase">PROMO CODE</div>
                          <div className="font-display font-bold text-[15px] text-[#F5D98B] tracking-wider">
                            {deal.code}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyPromo(deal.id, deal.code!)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#2B241B] hover:bg-[#362D22] border border-[#E8C98A]/30 px-3 py-1.5 text-[12px] font-bold text-[#F5D98B] cursor-pointer"
                        >
                          {copiedId === deal.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#65C466]" />
                              {c.copied}
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              {c.copyCode}
                            </>
                          )}
                        </button>
                      </div>
                    ) : null}

                    {deal.ready ? (
                      <a
                        href={deal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#2C241B] hover:bg-[#382E22] border border-[#E8C98A]/40 text-[#F5D98B] font-bold text-[13.5px] py-2.5 px-4 transition-colors"
                      >
                        {deal.ctaLabel[lang]}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href={waLink(`你好 Zero！我想查詢「${deal.title.hk}」嘅最新連結同優惠`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#262019] hover:bg-[#30281F] border border-[#E8C98A]/25 text-[#DED2C0] font-semibold text-[13.5px] py-2.5 px-4 transition-colors"
                      >
                        {deal.ctaLabel[lang]}
                        <ArrowUpRight className="w-4 h-4 text-[#E89B5C]" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Statutory Hong Kong Credit Card Disclaimer */}
          <div className="rounded-xl bg-[#1D1813] border border-[#E8C98A]/18 px-4 py-3 text-[12px] text-[#B8AB98] leading-relaxed">
            {c.cardLegal}
          </div>
        </section>

        {/* Bottom 12,000-member Community CTA */}
        <Reveal>
          <div className="rounded-[1.8rem] bg-gradient-to-r from-[#2A2218] via-[#241E16] to-[#2B2217] border border-[#E8C98A]/35 p-6 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-2xl bg-[#C5A065]/20 border border-[#E8C98A]/30 text-[#F5D98B] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-serif font-bold text-[20px] md:text-[24px] text-[#F7EFDD] mb-1.5">
                  {c.groupCtaTitle}
                </h3>
                <p className="text-[14px] text-[#C8BCA9] leading-relaxed">{c.groupCtaDesc}</p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/groups/shenzhenguangzhouhktravel"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] text-[#24190F] font-bold text-[14.5px] px-6 py-3.5"
            >
              {c.groupCtaBtn}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
