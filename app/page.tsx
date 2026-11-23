"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Eye,
  Heart,
  Mail,
  MessageCircle,
  PenTool,
  Rocket,
  Share2,
  ShieldCheck,
  TrendingUp,
  Video,
  X,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroReelShowcase } from "@/components/HeroReelShowcase";
import {
  AnimatedNumber,
  AnimatedPrice,
  EASE_EDITORIAL,
  MarqueeStrip,
  MaskLine,
  ParallaxFrame,
  Reveal,
  ScrollProgressBar,
} from "@/components/MotionPrimitives";
import {
  SITE_DATA,
  formatWan,
  waLink,
  type Lang,
  type TopPost,
} from "@/lib/site-data";

export default function Home() {
  const [lang, setLang] = useState<Lang>("hk");
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPost, setSelectedPost] = useState<TopPost | null>(null);
  const [showBackendModal, setShowBackendModal] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Detect saved language or browser locale
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

  // Show mobile sticky CTA bar after scrolling past hero, hide near bottom contact section
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const bottom = document.documentElement.scrollHeight - window.innerHeight;
      setShowStickyBar(y > 560 && y < bottom - 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close modals on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
        setShowBackendModal(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const switchLang = (l: Lang) => {
    setLang(l);
    try {
      window.localStorage.setItem("ztg-lang", l);
      document.documentElement.lang = l === "hk" ? "zh-Hant-HK" : "zh-Hans-CN";
    } catch {}
  };

  const t = SITE_DATA[lang];
  const stepIcons = [PenTool, Video, Rocket];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F271E] editorial-grain relative">
      <ScrollProgressBar />

      {/* Sticky Editorial Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/88 backdrop-blur-md border-b border-[#E6DEC8]">
        <div className="max-w-6xl mx-auto px-5 md:px-6 h-[68px] flex items-center justify-between gap-4">
          <a href="#" aria-label={t.brand} className="shrink-0">
            <BrandLogo subtitle={t.brandSub} compact />
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#475244]">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#1F271E] transition-colors link-underline py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <div
              className="inline-flex items-center rounded-full bg-[#EFE9DC] p-0.5 border border-[#E2D8C3]"
              role="group"
              aria-label="Language switch"
            >
              <button
                type="button"
                onClick={() => switchLang("hk")}
                className={`px-3 py-1 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer ${
                  lang === "hk"
                    ? "bg-[#2C3E26] text-[#FAF7F2] shadow-xs"
                    : "text-[#5C6657] hover:text-[#1F271E]"
                }`}
              >
                繁
              </button>
              <button
                type="button"
                onClick={() => switchLang("cn")}
                className={`px-3 py-1 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer ${
                  lang === "cn"
                    ? "bg-[#2C3E26] text-[#FAF7F2] shadow-xs"
                    : "text-[#5C6657] hover:text-[#1F271E]"
                }`}
              >
                簡
              </button>
            </div>

            <a
              href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#D46B34] hover:bg-[#BE5C28] text-[#FFFFFF] text-[13px] font-bold px-4 py-2 transition-all shadow-[0_8px_20px_-8px_rgba(212,107,52,0.55)]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              {t.navCta}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO — Editorial Kinetic Left + 9:16 Interactive Creator Reel Deck Right */}
        <section className="relative pt-10 pb-14 md:pt-16 md:pb-20 overflow-hidden">
          {/* Soft warm ambient wash (subtle editorial warmth, no neon glow) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-[#E8D7B9]/45 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-8%] w-[420px] h-[420px] rounded-full bg-[#D8E2CE]/45 blur-[110px]"
          />

          <div className="relative max-w-6xl mx-auto px-5 md:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
                className="text-[11.5px] md:text-[12px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-5"
              >
                {t.heroEyebrow}
              </motion.p>

              <h1 className="font-serif font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.16] tracking-tight text-[#1F271E] mb-6">
                <MaskLine delay={0.08}>{t.h1Line1}</MaskLine>
                <MaskLine delay={0.18} className="text-[#2C3E26]">
                  {t.h1Line2}
                </MaskLine>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: EASE_EDITORIAL }}
                className="text-[16px] md:text-[17.5px] text-[#4C5649] leading-[1.75] max-w-xl mb-4"
              >
                {t.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.36 }}
                className="text-[12.5px] text-[#7A8274] mb-8"
              >
                {t.dateNote}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4, ease: EASE_EDITORIAL }}
                className="flex flex-col sm:flex-row gap-3.5 mb-10"
              >
                <a
                  href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D46B34] hover:bg-[#BE5C28] text-white font-bold text-[15px] px-7 py-3.5 transition-all shadow-[0_14px_30px_-12px_rgba(212,107,52,0.6)] hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.ctaHero}
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFFFF] hover:bg-[#F2ECE1] text-[#2C3E26] border border-[#D4CBB6] font-bold text-[15px] px-7 py-3.5 transition-all hover:-translate-y-0.5"
                >
                  {t.ctaSecondary}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Editorial Proof Row */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5, ease: EASE_EDITORIAL }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E6DEC8] max-w-lg"
              >
                {t.heroProof.map((item) => (
                  <div key={item.l}>
                    <div className="font-display font-bold text-[20px] md:text-[22px] text-[#2C3E26] leading-none">
                      {item.v}
                    </div>
                    <div className="text-[12px] text-[#636B5E] mt-1.5 leading-snug">
                      {item.l}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: EASE_EDITORIAL }}
            >
              <HeroReelShowcase
                posts={t.topPosts}
                lang={lang}
                deckLabel={t.reelDeckLabel}
                deckHint={t.reelDeckHint}
                badgeTop={t.reelBadgeTop}
                badgeBottom={t.reelBadgeBottom}
                reachWord={t.reachWord}
                likeWord={t.likeWord}
                shareWord={t.shareWord}
              />
            </motion.div>
          </div>
        </section>

        {/* KINETIC MARQUEE */}
        <MarqueeStrip items={t.marqueeItems} />

        {/* 4 KEY METRICS — Animated Count-Up */}
        <section className="py-12 md:py-16 border-b border-[#E6DEC8] bg-[#FFFFFF]/70">
          <div className="max-w-6xl mx-auto px-5 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
            {t.stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.07} className="lg:border-r lg:last:border-r-0 border-[#E6DEC8] lg:pr-6">
                <div className="font-display font-extrabold text-[36px] sm:text-[42px] md:text-[46px] leading-none text-[#2C3E26] tracking-tight">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[14.5px] font-bold text-[#1F271E] mt-2.5">{s.label}</div>
                <div className="text-[12.5px] text-[#6A7265] mt-1 leading-relaxed">{s.sub}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY US + VISUAL COST COMPARISON */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="max-w-2xl mb-12">
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-2.5">
                {t.sellingEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[28px] md:text-[38px] leading-[1.24] text-[#1F271E] mb-4">
                {t.sellingTitle}
              </h2>
              <p className="text-[15.5px] text-[#556051] leading-relaxed">{t.sellingLead}</p>
            </Reveal>

            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-stretch mb-14">
              <Reveal className="h-full">
                <ParallaxFrame
                  src="/scenes/hero-shenzhen.jpg"
                  alt={t.sceneCaption}
                  caption={t.sceneCaption}
                  className="rounded-[1.75rem] h-full min-h-[280px] lg:min-h-[460px] border border-[#E6DEC8] shadow-[0_24px_50px_-28px_rgba(31,39,30,0.28)]"
                />
              </Reveal>

              <div className="flex flex-col justify-between gap-4">
                {t.points.map((p, idx) => (
                  <Reveal key={p.num} delay={idx * 0.1}>
                    <div className="creator-card rounded-[1.5rem] p-6">
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 w-10 h-10 rounded-2xl bg-[#F2ECE1] border border-[#E2D8C3] text-[#2C3E26] font-display font-bold text-[14px] flex items-center justify-center">
                          {p.num}
                        </span>
                        <div>
                          <h3 className="text-[17.5px] font-bold text-[#1F271E] leading-snug mb-2">
                            {p.title}
                          </h3>
                          <p className="text-[14.5px] text-[#586254] leading-relaxed">{p.body}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Dynamic Visual Cost Comparison Bar Chart */}
            <Reveal>
              <div className="rounded-[1.85rem] bg-[#F2ECE1] border border-[#E2D8C3] p-6 md:p-9">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-7">
                  <div>
                    <h3 className="font-serif font-bold text-[22px] md:text-[26px] text-[#1F271E]">
                      {t.cpmTitle}
                    </h3>
                    <p className="text-[13.5px] text-[#636B5E] mt-1">{t.cpmSub}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Traditional Meta Ad */}
                  <div className="rounded-2xl bg-[#FFFFFF]/80 border border-[#E4DAC7] p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-[13px] font-bold text-[#7A6B5D] mb-2">
                        {t.cpmTraditional.label}
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-display font-extrabold text-[30px] text-[#8E5341] leading-none">
                          {t.cpmTraditional.cost}
                        </span>
                        <span className="text-[12.5px] text-[#7A6B5D]">{t.cpmTraditional.unit}</span>
                      </div>
                      {/* Animated Full Width Bar (High Cost) */}
                      <div className="h-3 rounded-full bg-[#EFE9DC] overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1, ease: EASE_EDITORIAL }}
                          className="h-full rounded-full bg-[#C47C64]"
                        />
                      </div>
                      <div className="text-[13px] font-bold text-[#6E493B] mb-2">
                        {t.cpmTraditional.total}
                      </div>
                    </div>
                    <p className="text-[13.5px] text-[#636B5E] leading-relaxed">
                      {t.cpmTraditional.desc}
                    </p>
                  </div>

                  {/* Creator Matrix */}
                  <div className="rounded-2xl bg-[#2C3E26] text-[#FAF7F2] p-6 flex flex-col justify-between shadow-[0_20px_40px_-20px_rgba(44,62,38,0.5)]">
                    <div>
                      <div className="text-[13px] font-bold text-[#E6C98A] mb-2">
                        {t.cpmMatrix.label}
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-display font-extrabold text-[30px] text-[#FAF7F2] leading-none">
                          {t.cpmMatrix.cost}
                        </span>
                        <span className="text-[12.5px] text-[#FAF7F2]/75">{t.cpmMatrix.unit}</span>
                      </div>
                      {/* Animated Tiny Cost Bar (Ultra High Efficiency) */}
                      <div className="h-3 rounded-full bg-[#FAF7F2]/15 overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "14%" }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1, delay: 0.15, ease: EASE_EDITORIAL }}
                          className="h-full rounded-full bg-[#D46B34]"
                        />
                      </div>
                      <div className="text-[13px] font-bold text-[#F3D79B] mb-2">
                        {t.cpmMatrix.total}
                      </div>
                    </div>
                    <p className="text-[13.5px] text-[#FAF7F2]/82 leading-relaxed">
                      {t.cpmMatrix.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INVERTED DEEP OLIVE SECTION — 879萬 Verified Backend Growth */}
        <section
          id="metrics"
          className="scroll-mt-20 py-20 md:py-28 bg-[#1B2419] text-[#FAF7F2] relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#C59B56]/10 blur-[140px]"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <Reveal>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E6C98A] uppercase mb-3">
                  {t.dashEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[38px] leading-tight mb-6">
                  {t.dashTitle}
                </h2>
                <div className="font-display font-extrabold text-[72px] sm:text-[96px] leading-[0.95] text-[#F2D59B] tracking-tight mb-5">
                  <AnimatedNumber value={879} suffix={lang === "hk" ? "萬" : "万"} />
                </div>
                <p className="text-[17px] md:text-[18.5px] font-medium text-[#FAF7F2] leading-relaxed mb-3">
                  {t.bigLine}
                </p>
                <p className="text-[14.5px] text-[#FAF7F2]/70 leading-relaxed mb-8">
                  {t.dashSum}
                </p>

                <button
                  type="button"
                  onClick={() => setShowBackendModal(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/18 border border-[#FAF7F2]/20 text-[#FAF7F2] text-[13.5px] font-semibold px-5 py-2.5 transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#E6C98A]" />
                  {t.dashProofBtn}
                </button>
              </Reveal>

              <div className="space-y-5">
                {t.dashes.map((d, idx) => (
                  <Reveal key={d.name} delay={idx * 0.12}>
                    <div className="rounded-[1.6rem] bg-[#FAF7F2]/[0.06] border border-[#FAF7F2]/12 p-6 md:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                          <span className="inline-block text-[11px] font-bold tracking-wide text-[#E6C98A] bg-[#E6C98A]/12 border border-[#E6C98A]/25 rounded-full px-2.5 py-0.5 mb-2">
                            {d.badge}
                          </span>
                          <h3 className="text-[17px] font-bold text-[#FAF7F2]">{d.name}</h3>
                        </div>
                        <span className="text-[13px] font-display font-semibold text-[#FAF7F2]/70">
                          {d.fans}
                        </span>
                      </div>

                      {/* Animated Growth Momentum Bar */}
                      <div className="h-1.5 rounded-full bg-[#FAF7F2]/10 overflow-hidden mb-5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${d.growthPct}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1.1, delay: idx * 0.15, ease: EASE_EDITORIAL }}
                          className="h-full rounded-full bg-gradient-to-r from-[#C59B56] to-[#D46B34]"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {d.nums.map((n) => (
                          <div
                            key={n.l}
                            className="rounded-xl bg-[#FAF7F2]/[0.05] border border-[#FAF7F2]/8 p-3"
                          >
                            <div className="font-display font-bold text-[20px] md:text-[24px] text-[#FAF7F2] tabular-nums leading-none">
                              {n.v}
                            </div>
                            <div className="text-[11px] text-[#FAF7F2]/65 mt-1.5">{n.l}</div>
                            <div className="inline-flex items-center gap-0.5 text-[11.5px] font-bold text-[#8FD48B] mt-1">
                              <TrendingUp className="w-3 h-3" />
                              {n.delta}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY & VIRAL WORKS INTERACTIVE GALLERY */}
        <section id="works" className="scroll-mt-20 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            {/* Case Study Editorial Strip */}
            <Reveal className="mb-16">
              <div className="rounded-[1.85rem] bg-[#FFFFFF] border border-[#E6DEC8] p-6 md:p-9 shadow-[0_20px_45px_-28px_rgba(31,39,30,0.16)]">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
                  <div>
                    <span className="inline-block text-[11.5px] font-bold tracking-[0.16em] text-[#D46B34] uppercase mb-2">
                      {t.caseLabel}
                    </span>
                    <h2 className="font-serif font-bold text-[23px] md:text-[28px] text-[#1F271E] mb-3">
                      {t.caseName}
                    </h2>
                    <p className="text-[15px] text-[#556051] leading-relaxed">{t.caseBody}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {t.caseNums.map((n) => (
                      <div
                        key={n.l}
                        className="rounded-2xl bg-[#FAF7F2] border border-[#E6DEC8] p-4 text-center"
                      >
                        <div className="font-display font-extrabold text-[22px] md:text-[26px] text-[#2C3E26] tabular-nums leading-none">
                          {n.v}
                        </div>
                        <div className="text-[11.5px] text-[#636B5E] mt-2 leading-snug">{n.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Viral Works Gallery */}
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-9">
              <div>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-2">
                  {t.worksEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#1F271E]">
                  {t.topTitle}
                </h2>
              </div>
              <p className="text-[13.5px] text-[#6A7265]">{t.topSub}</p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.topPosts.map((post, idx) => (
                <Reveal key={post.id} delay={idx * 0.08}>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="group w-full text-left creator-card rounded-[1.5rem] overflow-hidden flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1B2419]">
                      <img
                        src={post.img}
                        alt={post.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161D15] via-[#161D15]/25 to-transparent" />
                      <span
                        className={`absolute top-3.5 left-3.5 text-[11px] font-bold px-3 py-1 rounded-full ${
                          post.hot
                            ? "bg-[#D46B34] text-white"
                            : "bg-[#FAF7F2]/92 text-[#1F271E]"
                        }`}
                      >
                        {post.tag}
                      </span>
                      <div className="absolute bottom-3.5 inset-x-4 text-[#FAF7F2]">
                        <div className="text-[11px] text-[#E6C98A] font-medium mb-0.5">
                          {post.platform}
                        </div>
                        <div className="font-bold text-[16px] leading-snug">{post.name}</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#FFFFFF] flex-1 flex flex-col justify-between">
                      <div className="grid grid-cols-3 gap-2 text-center py-1">
                        <div>
                          <div className="font-display font-bold text-[16px] text-[#2C3E26] tabular-nums">
                            {formatWan(post.reach, lang)}
                          </div>
                          <div className="text-[11px] text-[#7A8274]">{t.reachWord}</div>
                        </div>
                        <div className="border-x border-[#EFE9DC]">
                          <div className="font-display font-bold text-[16px] text-[#D46B34] tabular-nums">
                            {post.likes.toLocaleString()}
                          </div>
                          <div className="text-[11px] text-[#7A8274]">{t.likeWord}</div>
                        </div>
                        <div>
                          <div className="font-display font-bold text-[16px] text-[#1F271E] tabular-nums">
                            {post.shares.toLocaleString()}
                          </div>
                          <div className="text-[11px] text-[#7A8274]">{t.shareWord}</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SCENIC PARALLAX BAND — Shenzhen Bay */}
        <div className="relative h-[190px] md:h-[250px] overflow-hidden border-y border-[#E6DEC8]">
          <ParallaxFrame
            src="/scenes/bay-band.jpg"
            alt={t.sceneCaption}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-[#1B2419]/30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-6 md:bottom-8 pointer-events-none">
            <div className="max-w-6xl mx-auto px-5 md:px-6 flex items-center justify-between text-[#FAF7F2]">
              <span className="text-[12.5px] font-medium tracking-[0.18em] uppercase drop-shadow">
                {t.sceneCaption}
              </span>
            </div>
          </div>
        </div>

        {/* MEDIA LINEUP — Clickable Real Channels */}
        <section id="lineup" className="scroll-mt-20 py-16 md:py-24 bg-[#F2ECE1]/70">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="max-w-2xl mb-10">
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-2">
                {t.lineupEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#1F271E] mb-3">
                {t.lineupTitle}
              </h2>
              <p className="text-[15px] text-[#556051] leading-relaxed">{t.lineupSub}</p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-4">
              {t.lineup.map((ch, idx) => (
                <Reveal key={ch.name} delay={idx * 0.06}>
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group creator-card rounded-2xl p-5 flex items-start justify-between gap-4 h-full"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                            ch.tier === "主力"
                              ? "bg-[#2C3E26] text-[#FAF7F2] border-[#2C3E26]"
                              : ch.tier === "私域"
                              ? "bg-[#D46B34]/12 text-[#B85420] border-[#D46B34]/30"
                              : "bg-[#F2ECE1] text-[#4E594A] border-[#DCD2BD]"
                          }`}
                        >
                          {ch.tier}
                        </span>
                        <span className="text-[11.5px] text-[#7A8274] font-medium">
                          {ch.platform}
                        </span>
                      </div>
                      <h3 className="text-[16px] font-bold text-[#1F271E] group-hover:text-[#D46B34] transition-colors leading-snug mb-1.5">
                        {ch.name}
                      </h3>
                      <p className="text-[13.5px] text-[#5D6759] leading-relaxed">{ch.note}</p>
                    </div>

                    <div className="shrink-0 text-right flex flex-col items-end justify-between self-stretch">
                      <div>
                        <div className="font-display font-extrabold text-[22px] text-[#2C3E26] tabular-nums leading-none">
                          {ch.fans}
                        </div>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#D46B34] group-hover:translate-x-0.5 transition-transform">
                        {t.lineupVisit}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="text-[13px] text-[#6A7265] mt-5 leading-relaxed">{t.lineupNote}</p>
            </Reveal>
          </div>
        </section>

        {/* THREE-STEP DELIVERY WORKFLOW */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-12">
              <div>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-2">
                  {t.stepsEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#1F271E]">
                  {t.stepsTitle}
                </h2>
              </div>
              <p className="text-[14px] text-[#636B5E]">{t.stepsKicker}</p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 mb-14">
              {t.steps.map((step, idx) => {
                const Icon = stepIcons[idx] ?? Rocket;
                return (
                  <Reveal key={step.n} delay={idx * 0.1}>
                    <div className="creator-card rounded-[1.6rem] p-7 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className="w-12 h-12 rounded-2xl bg-[#2C3E26] text-[#FAF7F2] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="font-display font-extrabold text-[34px] text-[#E6DEC8] leading-none">
                          {step.n}
                        </span>
                      </div>
                      <h3 className="text-[19px] font-bold text-[#1F271E] mb-2.5">{step.t}</h3>
                      <p className="text-[14.5px] text-[#586254] leading-relaxed">{step.b}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Mid CTA Banner */}
            <Reveal>
              <div className="rounded-[1.85rem] bg-[#2C3E26] text-[#FAF7F2] p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_24px_50px_-24px_rgba(44,62,38,0.55)]">
                <div className="max-w-2xl">
                  <h3 className="font-serif font-bold text-[22px] md:text-[26px] leading-snug mb-2">
                    {t.midCtaTitle}
                  </h3>
                  <p className="text-[14.5px] text-[#FAF7F2]/78 leading-relaxed">{t.midCtaBody}</p>
                </div>
                <a
                  href={waLink(t.midCtaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#D46B34] hover:bg-[#E07A43] text-white font-bold text-[15px] px-7 py-3.5 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.midCtaBtn}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRICING WITH INTERACTIVE MONTHLY / QUARTERLY 85折 TOGGLE */}
        <section id="pricing" className="scroll-mt-20 py-16 md:py-24 bg-[#F2ECE1]/65 border-y border-[#E6DEC8]">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-2">
                  {t.priceEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[38px] text-[#1F271E] mb-2">
                  {t.priceTitle}
                </h2>
                <p className="text-[15px] text-[#556051]">{t.priceSub}</p>
              </div>

              {/* Interactive Spring Billing Switch */}
              <div className="inline-flex items-center self-start md:self-auto bg-[#FFFFFF] border border-[#DDD3BE] rounded-full p-1.5 shadow-xs">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`relative px-4 py-2 rounded-full text-[13.5px] font-bold transition-colors cursor-pointer ${
                    billing === "monthly" ? "text-[#FAF7F2]" : "text-[#586254]"
                  }`}
                >
                  {billing === "monthly" ? (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-[#2C3E26]"
                    />
                  ) : null}
                  <span className="relative z-10">{t.billingMonthly}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("quarterly")}
                  className={`relative px-4 py-2 rounded-full text-[13.5px] font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                    billing === "quarterly" ? "text-[#FAF7F2]" : "text-[#586254]"
                  }`}
                >
                  {billing === "quarterly" ? (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-[#D46B34]"
                    />
                  ) : null}
                  <span className="relative z-10">{t.billingQuarterly}</span>
                  <span
                    className={`relative z-10 text-[10.5px] px-2 py-0.5 rounded-full font-extrabold ${
                      billing === "quarterly"
                        ? "bg-[#FAF7F2] text-[#D46B34]"
                        : "bg-[#D46B34]/15 text-[#D46B34]"
                    }`}
                  >
                    {t.billingBadge}
                  </span>
                </button>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-6 mb-10 items-stretch">
              {t.packages.map((pkg, idx) => {
                const discounted = Math.round(pkg.monthlyPrice * 0.85);
                const shownPrice = billing === "quarterly" ? discounted : pkg.monthlyPrice;
                const totalSaved = (pkg.monthlyPrice - discounted) * 3;
                const isFeatured = Boolean(pkg.featured);

                return (
                  <Reveal key={pkg.id} delay={idx * 0.08} className="h-full">
                    <div
                      className={`h-full rounded-[1.8rem] p-7 flex flex-col transition-all duration-300 ${
                        isFeatured
                          ? "bg-[#2C3E26] text-[#FAF7F2] border-2 border-[#2C3E26] shadow-[0_28px_60px_-24px_rgba(44,62,38,0.55)] lg:-translate-y-2"
                          : "bg-[#FFFFFF] text-[#1F271E] border border-[#E6DEC8] shadow-[0_14px_34px_-22px_rgba(31,39,30,0.16)]"
                      }`}
                    >
                      <div className="mb-3">
                        <span
                          className={`inline-block text-[12px] font-bold rounded-full px-3.5 py-1 ${
                            isFeatured
                              ? "bg-[#E6C98A] text-[#1F271E]"
                              : "bg-[#F2ECE1] text-[#D46B34]"
                          }`}
                        >
                          {pkg.tag}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-[22px] mb-2">{pkg.name}</h3>

                      <div className="flex items-baseline gap-2 mb-1">
                        <AnimatedPrice
                          price={shownPrice}
                          className={`font-display font-extrabold text-[40px] leading-none ${
                            isFeatured ? "text-[#FAF7F2]" : "text-[#2C3E26]"
                          }`}
                        />
                        <span
                          className={`text-[13px] ${
                            isFeatured ? "text-[#FAF7F2]/70" : "text-[#7A8274]"
                          }`}
                        >
                          HKD {billing === "quarterly" ? t.perMonth : ""}
                        </span>
                      </div>

                      <div className="min-h-[22px] mb-4">
                        {billing === "quarterly" ? (
                          <span
                            className={`text-[12px] font-semibold ${
                              isFeatured ? "text-[#E6C98A]" : "text-[#D46B34]"
                            }`}
                          >
                            {t.quarterlySavePrefix}
                            {totalSaved.toLocaleString()} · {t.quarterlyNote}
                          </span>
                        ) : (
                          <span
                            className={`text-[12px] ${
                              isFeatured ? "text-[#FAF7F2]/60" : "text-[#7A8274]"
                            }`}
                          >
                            {pkg.footnote}
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-[13.5px] leading-relaxed mb-4 ${
                          isFeatured ? "text-[#FAF7F2]/80" : "text-[#586254]"
                        }`}
                      >
                        {pkg.who}
                      </p>

                      {/* Spec chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {pkg.specs.map(([k, v]) => (
                          <span
                            key={k}
                            className={`text-[11.5px] rounded-full px-2.5 py-1 border ${
                              isFeatured
                                ? "bg-[#FAF7F2]/10 border-[#FAF7F2]/18 text-[#FAF7F2]/80"
                                : "bg-[#FAF7F2] border-[#E6DEC8] text-[#5C6657]"
                            }`}
                          >
                            {k}{" "}
                            <strong
                              className={isFeatured ? "text-[#F2D59B]" : "text-[#2C3E26]"}
                            >
                              {v}
                            </strong>
                          </span>
                        ))}
                      </div>

                      <p
                        className={`text-[13.5px] font-medium pl-3 border-l-2 mb-5 leading-relaxed ${
                          isFeatured
                            ? "border-[#E6C98A] text-[#F2D59B]"
                            : "border-[#D46B34] text-[#2C3E26]"
                        }`}
                      >
                        「{pkg.hook}」
                      </p>

                      <ul className="space-y-2.5 mb-7">
                        {pkg.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isFeatured ? "text-[#E6C98A]" : "text-[#D46B34]"
                              }`}
                            />
                            <span className={isFeatured ? "text-[#FAF7F2]/88" : "text-[#424C3F]"}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={waLink(
                          `${pkg.name}（${billing === "quarterly" ? "季付85折" : "單月"} $${shownPrice}）｜想了解詳情`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-auto w-full text-center rounded-full py-3 px-5 text-[14px] font-bold transition-all ${
                          isFeatured
                            ? "bg-[#D46B34] hover:bg-[#E07A43] text-white"
                            : "bg-[#2C3E26] hover:bg-[#22301D] text-[#FAF7F2]"
                        }`}
                      >
                        {t.bookNow}
                      </a>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <p className="text-center text-[13.5px] font-medium text-[#475244] mb-6 leading-relaxed">
                {t.payNote}
              </p>

              {/* Single-Item Rate Table */}
              <div className="rounded-[1.5rem] bg-[#FFFFFF] border border-[#E6DEC8] p-5 md:p-7">
                <div className="text-[14px] font-bold text-[#2C3E26] mb-4">{t.singleTitle}</div>
                <div className="grid md:grid-cols-2 gap-x-8">
                  {t.singles.map(([item, price]) => (
                    <div
                      key={item}
                      className="flex items-baseline justify-between gap-4 py-3 border-b border-[#EFE9DC]"
                    >
                      <span className="text-[14px] text-[#3F493C]">{item}</span>
                      <span className="font-display font-bold text-[14.5px] text-[#D46B34] whitespace-nowrap tabular-nums">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[12.5px] text-[#7A8274] mt-4">{t.addons}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* B2B FAQ ACCORDION */}
        <section id="faq" className="scroll-mt-20 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-5 md:px-6">
            <Reveal className="text-center mb-10">
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-2">
                {t.faqEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#1F271E]">
                {t.faqTitle}
              </h2>
            </Reveal>

            <div className="space-y-3">
              {t.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={faq.q} delay={idx * 0.05}>
                    <div className="rounded-2xl bg-[#FFFFFF] border border-[#E6DEC8] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <span className="font-bold text-[15.5px] text-[#1F271E] leading-snug">
                          {faq.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0 w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E6DEC8] flex items-center justify-center text-[#2C3E26]"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-[14.5px] text-[#556051] leading-relaxed border-t border-[#F2ECE1] pt-3.5">
                              {faq.a}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CONTACT CTA CARD */}
        <section className="pb-20 md:pb-24 px-5 md:px-6">
          <Reveal>
            <div className="max-w-3xl mx-auto rounded-[2rem] bg-[#FFFFFF] border border-[#E6DEC8] p-7 md:p-11 text-center shadow-[0_28px_60px_-28px_rgba(31,39,30,0.18)]">
              <div className="flex justify-center mb-4">
                <BrandLogo />
              </div>
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#D46B34] uppercase mb-2">
                {t.ctaEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[26px] md:text-[34px] text-[#1F271E] leading-snug mb-2.5">
                {t.ctaLine}
              </h2>
              <p className="text-[14.5px] text-[#636B5E] mb-8">{t.ctaContact}</p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto mb-7">
                <div className="rounded-2xl bg-[#FAF7F2] p-3.5 border border-[#E6DEC8]">
                  <img
                    src="/qr-wechat.png"
                    alt={t.qrWechat}
                    className="w-full rounded-xl bg-white p-1"
                  />
                  <p className="text-[13px] font-bold text-[#2C3E26] mt-2.5">{t.qrWechat}</p>
                </div>
                <div className="rounded-2xl bg-[#FAF7F2] p-3.5 border border-[#E6DEC8]">
                  <img
                    src="/qr-whatsapp.png"
                    alt={t.qrWa}
                    className="w-full rounded-xl bg-white p-1"
                  />
                  <p className="text-[13px] font-bold text-[#2C3E26] mt-2.5">{t.qrWa}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D46B34] hover:bg-[#BE5C28] text-white font-bold text-[15px] px-8 py-3.5 transition-all shadow-[0_14px_30px_-12px_rgba(212,107,52,0.55)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.qrWaBtn}
                </a>
                <p className="text-[13.5px] text-[#636B5E] inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#2C3E26]" />
                  {t.mailLabel}：
                  <a
                    href="mailto:ZEROWONG5@GMAIL.COM"
                    className="font-display font-bold text-[#2C3E26] link-underline"
                  >
                    ZEROWONG5@GMAIL.COM
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E6DEC8] bg-[#F2ECE1]/70 py-7 px-5">
        <div className="max-w-6xl mx-auto text-center text-[12.5px] text-[#6A7265] leading-relaxed">
          {t.footer}
        </div>
      </footer>

      {/* Mobile Floating WhatsApp Bar */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
          showStickyBar
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-3 mb-3 rounded-2xl bg-[#1B2419]/95 backdrop-blur-md border border-[#FAF7F2]/15 px-3.5 py-2.5 shadow-[0_14px_30px_rgba(27,36,25,0.35)] flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[12.5px] font-bold text-[#FAF7F2] truncate">{t.stickyTitle}</p>
            <p className="text-[11px] text-[#FAF7F2]/70 truncate">{t.stickyNote}</p>
          </div>
          <a
            href={waLink(`${t.brand}｜我想了解報價`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#D46B34] text-white font-bold text-[12.5px] px-4 py-2 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t.stickyBtn}
          </a>
        </div>
      </div>

      {/* Modal: Viral Post Detail Lightbox */}
      <AnimatePresence>
        {selectedPost ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 bg-[#1B2419]/75 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[1.8rem] bg-[#FAF7F2] border border-[#E6DEC8] overflow-hidden shadow-2xl grid sm:grid-cols-2"
            >
              <div className="relative aspect-[4/4] sm:aspect-auto bg-[#1B2419]">
                <img
                  src={selectedPost.img}
                  alt={selectedPost.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[11.5px] font-bold text-[#D46B34] bg-[#D46B34]/12 px-3 py-1 rounded-full">
                      {selectedPost.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedPost(null)}
                      aria-label="Close"
                      className="w-8 h-8 rounded-full bg-[#EFE9DC] flex items-center justify-center text-[#1F271E] cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-[12px] text-[#7A8274] mb-1">{selectedPost.platform}</div>
                  <h3 className="font-serif font-bold text-[22px] text-[#1F271E] mb-3">
                    {selectedPost.name}
                  </h3>
                  <p className="text-[14px] text-[#556051] leading-relaxed mb-5">
                    {selectedPost.caption}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="rounded-xl bg-[#FFFFFF] border border-[#E6DEC8] p-2.5 text-center">
                      <Eye className="w-3.5 h-3.5 text-[#2C3E26] mx-auto mb-1" />
                      <div className="font-display font-bold text-[15px] text-[#1F271E]">
                        {formatWan(selectedPost.reach, lang)}
                      </div>
                      <div className="text-[10.5px] text-[#7A8274]">{t.reachWord}</div>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-[#E6DEC8] p-2.5 text-center">
                      <Heart className="w-3.5 h-3.5 text-[#D46B34] mx-auto mb-1" />
                      <div className="font-display font-bold text-[15px] text-[#1F271E]">
                        {selectedPost.likes.toLocaleString()}
                      </div>
                      <div className="text-[10.5px] text-[#7A8274]">{t.likeWord}</div>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-[#E6DEC8] p-2.5 text-center">
                      <Share2 className="w-3.5 h-3.5 text-[#2C3E26] mx-auto mb-1" />
                      <div className="font-display font-bold text-[15px] text-[#1F271E]">
                        {selectedPost.shares.toLocaleString()}
                      </div>
                      <div className="text-[10.5px] text-[#7A8274]">{t.shareWord}</div>
                    </div>
                  </div>
                  <a
                    href={waLink(`看過你們的「${selectedPost.name}」，想了解同款推廣合作`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#2C3E26] hover:bg-[#22301D] text-[#FAF7F2] font-bold text-[13.5px] py-3"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.ctaHero}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Modal: Meta Backend Official Screenshot Proof */}
      <AnimatePresence>
        {showBackendModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBackendModal(false)}
            className="fixed inset-0 z-50 bg-[#1B2419]/75 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 14 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-[1.8rem] bg-[#FAF7F2] border border-[#E6DEC8] p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif font-bold text-[19px] text-[#1F271E]">
                    {t.dashModalTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowBackendModal(false)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-[#EFE9DC] flex items-center justify-center text-[#1F271E] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E6DEC8] bg-white p-2 mb-4">
                <img
                  src="/dash-gba-crop.png"
                  alt="Meta Business Suite 28-day analytics"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-[13px] text-[#636B5E] leading-relaxed">{t.dashModalNote}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
