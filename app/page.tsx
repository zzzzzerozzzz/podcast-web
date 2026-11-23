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
    <div className="min-h-screen bg-[#161310] text-[#F4ECE0] editorial-grain relative">
      <ScrollProgressBar />

      {/* Sticky Editorial Navigation */}
      <header className="sticky top-0 z-40 bg-[#161310]/88 backdrop-blur-md border-b border-[#E8C98A]/18">
        <div className="max-w-6xl mx-auto px-5 md:px-6 h-[68px] flex items-center justify-between gap-4">
          <a href="#" aria-label={t.brand} className="shrink-0">
            <BrandLogo subtitle={t.brandSub} compact />
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#C8BCA9]">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#F5D98B] transition-colors link-underline py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <div
              className="inline-flex items-center rounded-full bg-[#241E18] p-0.5 border border-[#E8C98A]/22"
              role="group"
              aria-label="Language switch"
            >
              <button
                type="button"
                onClick={() => switchLang("hk")}
                className={`px-3 py-1 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer ${
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
                className={`px-3 py-1 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer ${
                  lang === "cn"
                    ? "bg-[#C5A065] text-[#1A1510] shadow-xs"
                    : "text-[#B8AB98] hover:text-[#F7EFDD]"
                }`}
              >
                簡
              </button>
            </div>

            <a
              href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#E89B5C] hover:bg-[#F0AD74] text-[#24190F] text-[13px] font-bold px-4 py-2 transition-all shadow-[0_8px_22px_-8px_rgba(232,155,92,0.5)]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              {t.navCta}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO — Vibrant Full-Bleed Golden-Hour Shenzhen + Ken Burns Motion + Kinetic Copy + 9:16 Reel Deck */}
        <section className="relative pt-12 pb-24 md:pt-16 md:pb-28 overflow-hidden">
          {/* Vibrant Shenzhen skyline with slow cinematic Ken Burns zoom */}
          <motion.img
            src="/scenes/hero-shenzhen.jpg"
            alt=""
            aria-hidden="true"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 14, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 w-full h-full object-cover object-[center_42%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#16120E]/92 via-[#1C1611]/78 to-[#1D1712]/48"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#161310] to-transparent"
          />

          <div className="relative max-w-6xl mx-auto px-5 md:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
                className="text-[11.5px] md:text-[12px] font-display font-bold tracking-[0.22em] text-[#F5D98B] uppercase mb-5"
              >
                {t.heroEyebrow}
              </motion.p>

              <h1 className="font-serif font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.16] tracking-tight text-[#F7EFDD] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
                <MaskLine delay={0.08}>{t.h1Line1}</MaskLine>
                <MaskLine delay={0.18} className="text-[#F5D98B]">
                  {t.h1Line2}
                </MaskLine>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: EASE_EDITORIAL }}
                className="text-[16px] md:text-[17.5px] text-[#EDE1CE] leading-[1.75] max-w-xl mb-4"
              >
                {t.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.36 }}
                className="text-[12.5px] text-[#C8BCA9] mb-8"
              >
                {t.dateNote}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4, ease: EASE_EDITORIAL }}
                className="flex flex-col sm:flex-row gap-3.5 mb-10"
              >
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] text-[#24190F] font-bold text-[15px] px-7 py-3.5 shadow-[0_14px_30px_-10px_rgba(232,155,92,0.55)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.ctaHero}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1712]/75 backdrop-blur-md hover:bg-[#2A221A] text-[#F5D98B] border border-[#E8C98A]/45 font-bold text-[15px] px-7 py-3.5 transition-colors"
                >
                  {t.ctaSecondary}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>

              {/* Editorial Proof Row */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5, ease: EASE_EDITORIAL }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8C98A]/25 max-w-lg"
              >
                {t.heroProof.map((item) => (
                  <div key={item.l}>
                    <div className="font-display font-bold text-[20px] md:text-[22px] text-[#F5D98B] leading-none">
                      {item.v}
                    </div>
                    <div className="text-[12px] text-[#D8CBB7] mt-1.5 leading-snug">
                      {item.l}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
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

        {/* 4 KEY METRICS — Floating Overlapping Glass Card with Staggered Count-Up */}
        <section className="relative z-20 px-5 md:px-6 -mt-12 md:-mt-16 mb-10">
          <div className="max-w-6xl mx-auto">
            <div className="creator-card rounded-[1.8rem] px-6 py-7 md:px-8 md:py-8 grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-6 backdrop-blur-md">
              {t.stats.map((s, idx) => (
                <Reveal
                  key={s.label}
                  delay={idx * 0.08}
                  className="lg:border-r lg:last:border-r-0 border-[#E8C98A]/18 lg:pr-6"
                >
                  <div className="font-display font-extrabold text-[34px] sm:text-[40px] md:text-[44px] leading-none text-[#F5D98B] tracking-tight">
                    <AnimatedNumber value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[14.5px] font-bold text-[#F7EFDD] mt-2.5">{s.label}</div>
                  <div className="text-[12px] text-[#B8AB98] mt-1 leading-relaxed">{s.sub}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* KINETIC MARQUEE */}
        <MarqueeStrip items={t.marqueeItems} />

        {/* WHY US + VISUAL COST COMPARISON */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="max-w-2xl mb-12">
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-2.5">
                {t.sellingEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[28px] md:text-[38px] leading-[1.24] text-[#F7EFDD] mb-4">
                {t.sellingTitle}
              </h2>
              <p className="text-[15.5px] text-[#C6B9A6] leading-relaxed">{t.sellingLead}</p>
            </Reveal>

            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-stretch mb-14">
              <Reveal className="h-full">
                <ParallaxFrame
                  src="/scenes/hero-shenzhen.jpg"
                  alt={t.sceneCaption}
                  caption={t.sceneCaption}
                  className="rounded-[1.75rem] h-full min-h-[280px] lg:min-h-[460px] border border-[#E8C98A]/20 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.85)]"
                />
              </Reveal>

              <div className="flex flex-col justify-between gap-4">
                {t.points.map((p, idx) => (
                  <Reveal key={p.num} delay={idx * 0.1}>
                    <div className="creator-card rounded-[1.5rem] p-6">
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 w-10 h-10 rounded-2xl bg-[#C5A065]/15 border border-[#E8C98A]/30 text-[#F5D98B] font-display font-bold text-[14px] flex items-center justify-center">
                          {p.num}
                        </span>
                        <div>
                          <h3 className="text-[17.5px] font-bold text-[#F7EFDD] leading-snug mb-2">
                            {p.title}
                          </h3>
                          <p className="text-[14.5px] text-[#C2B5A2] leading-relaxed">{p.body}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Dynamic Visual Cost Comparison Bar Chart */}
            <Reveal>
              <div className="rounded-[1.85rem] bg-[#1E1914] border border-[#E8C98A]/18 p-6 md:p-9">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-7">
                  <div>
                    <h3 className="font-serif font-bold text-[22px] md:text-[26px] text-[#F7EFDD]">
                      {t.cpmTitle}
                    </h3>
                    <p className="text-[13.5px] text-[#A89B88] mt-1">{t.cpmSub}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Traditional Meta Ad */}
                  <div className="rounded-2xl bg-[#27211A] border border-white/8 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-[13px] font-bold text-[#E0896A] mb-2">
                        {t.cpmTraditional.label}
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-display font-extrabold text-[30px] text-[#F0A08A] leading-none">
                          {t.cpmTraditional.cost}
                        </span>
                        <span className="text-[12.5px] text-[#A89B88]">{t.cpmTraditional.unit}</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/8 overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1, ease: EASE_EDITORIAL }}
                          className="h-full rounded-full bg-[#D9785D]"
                        />
                      </div>
                      <div className="text-[13px] font-bold text-[#E7B5A5] mb-2">
                        {t.cpmTraditional.total}
                      </div>
                    </div>
                    <p className="text-[13.5px] text-[#B8AB98] leading-relaxed">
                      {t.cpmTraditional.desc}
                    </p>
                  </div>

                  {/* Creator Matrix */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#2F271C] to-[#231D15] border border-[#E8C98A]/45 p-6 flex flex-col justify-between shadow-[0_20px_40px_-20px_rgba(0,0,0,0.75)]">
                    <div>
                      <div className="text-[13px] font-bold text-[#E8C98A] mb-2">
                        {t.cpmMatrix.label}
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-display font-extrabold text-[30px] text-[#F5D98B] leading-none">
                          {t.cpmMatrix.cost}
                        </span>
                        <span className="text-[12.5px] text-[#C8BCA9]">{t.cpmMatrix.unit}</span>
                      </div>
                      <div className="h-3 rounded-full bg-[#E8C98A]/14 overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "14%" }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1, delay: 0.15, ease: EASE_EDITORIAL }}
                          className="h-full rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F5D98B]"
                        />
                      </div>
                      <div className="text-[13px] font-bold text-[#F5D98B] mb-2">
                        {t.cpmMatrix.total}
                      </div>
                    </div>
                    <p className="text-[13.5px] text-[#DED2C0] leading-relaxed">
                      {t.cpmMatrix.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VERIFIED BACKEND GROWTH — Deep Warm Mocha Spotlight */}
        <section
          id="metrics"
          className="scroll-mt-20 py-20 md:py-28 bg-[#1E1914] border-y border-[#E8C98A]/15 relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#C5A065]/12 blur-[140px]"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <Reveal>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-3">
                  {t.dashEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[38px] text-[#F7EFDD] leading-tight mb-6">
                  {t.dashTitle}
                </h2>
                <div className="font-display font-extrabold text-[72px] sm:text-[96px] leading-[0.95] text-[#F5D98B] tracking-tight mb-5">
                  <AnimatedNumber value={879} suffix={lang === "hk" ? "萬" : "万"} />
                </div>
                <p className="text-[17px] md:text-[18.5px] font-medium text-[#F7EFDD] leading-relaxed mb-3">
                  {t.bigLine}
                </p>
                <p className="text-[14.5px] text-[#B8AB98] leading-relaxed mb-8">
                  {t.dashSum}
                </p>

                <button
                  type="button"
                  onClick={() => setShowBackendModal(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2B241C] hover:bg-[#352C22] border border-[#E8C98A]/35 text-[#F5D98B] text-[13.5px] font-semibold px-5 py-2.5 transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#E8C98A]" />
                  {t.dashProofBtn}
                </button>
              </Reveal>

              <div className="space-y-5">
                {t.dashes.map((d, idx) => (
                  <Reveal key={d.name} delay={idx * 0.12}>
                    <div className="creator-card rounded-[1.6rem] p-6 md:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                          <span className="inline-block text-[11px] font-bold tracking-wide text-[#F5D98B] bg-[#C5A065]/18 border border-[#E8C98A]/30 rounded-full px-2.5 py-0.5 mb-2">
                            {d.badge}
                          </span>
                          <h3 className="text-[17px] font-bold text-[#F7EFDD]">{d.name}</h3>
                        </div>
                        <span className="text-[13px] font-display font-semibold text-[#B8AB98]">
                          {d.fans}
                        </span>
                      </div>

                      <div className="h-1.5 rounded-full bg-white/8 overflow-hidden mb-5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${d.growthPct}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1.1, delay: idx * 0.15, ease: EASE_EDITORIAL }}
                          className="h-full rounded-full bg-gradient-to-r from-[#C5A065] to-[#E89B5C]"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {d.nums.map((n) => (
                          <div
                            key={n.l}
                            className="rounded-xl bg-[#161310]/65 border border-[#E8C98A]/12 p-3"
                          >
                            <div className="font-display font-bold text-[20px] md:text-[24px] text-[#F5D98B] tabular-nums leading-none">
                              {n.v}
                            </div>
                            <div className="text-[11px] text-[#A89B88] mt-1.5">{n.l}</div>
                            <div className="inline-flex items-center gap-0.5 text-[11.5px] font-bold text-[#B9D4A8] mt-1">
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
            <Reveal className="mb-16">
              <div className="creator-card rounded-[1.85rem] p-6 md:p-9">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
                  <div>
                    <span className="inline-block text-[11.5px] font-bold tracking-[0.16em] text-[#E89B5C] uppercase mb-2">
                      {t.caseLabel}
                    </span>
                    <h2 className="font-serif font-bold text-[23px] md:text-[28px] text-[#F7EFDD] mb-3">
                      {t.caseName}
                    </h2>
                    <p className="text-[15px] text-[#C2B5A2] leading-relaxed">{t.caseBody}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {t.caseNums.map((n) => (
                      <div
                        key={n.l}
                        className="rounded-2xl bg-[#161310]/70 border border-[#E8C98A]/16 p-4 text-center"
                      >
                        <div className="font-display font-extrabold text-[22px] md:text-[26px] text-[#F5D98B] tabular-nums leading-none">
                          {n.v}
                        </div>
                        <div className="text-[11.5px] text-[#B8AB98] mt-2 leading-snug">{n.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-9">
              <div>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-2">
                  {t.worksEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#F7EFDD]">
                  {t.topTitle}
                </h2>
              </div>
              <p className="text-[13.5px] text-[#A89B88]">{t.topSub}</p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.topPosts.map((post, idx) => (
                <Reveal key={post.id} delay={idx * 0.08}>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="group w-full text-left creator-card rounded-[1.5rem] overflow-hidden flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1D1813]">
                      <img
                        src={post.img}
                        alt={post.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-[#161310]/30 to-transparent" />
                      <span
                        className={`absolute top-3.5 left-3.5 text-[11px] font-bold px-3 py-1 rounded-full ${
                          post.hot
                            ? "bg-[#E89B5C] text-[#24190F]"
                            : "bg-[#161310]/85 text-[#F5D98B] border border-[#E8C98A]/30"
                        }`}
                      >
                        {post.tag}
                      </span>
                      <div className="absolute bottom-3.5 inset-x-4 text-[#F7EFDD]">
                        <div className="text-[11px] text-[#E8C98A] font-medium mb-0.5">
                          {post.platform}
                        </div>
                        <div className="font-bold text-[16px] leading-snug">{post.name}</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#1E1914] flex-1 flex flex-col justify-between">
                      <div className="grid grid-cols-3 gap-2 text-center py-1">
                        <div>
                          <div className="font-display font-bold text-[16px] text-[#F5D98B] tabular-nums">
                            {formatWan(post.reach, lang)}
                          </div>
                          <div className="text-[11px] text-[#A89B88]">{t.reachWord}</div>
                        </div>
                        <div className="border-x border-[#E8C98A]/12">
                          <div className="font-display font-bold text-[16px] text-[#F0A08A] tabular-nums">
                            {post.likes.toLocaleString()}
                          </div>
                          <div className="text-[11px] text-[#A89B88]">{t.likeWord}</div>
                        </div>
                        <div>
                          <div className="font-display font-bold text-[16px] text-[#F4ECE0] tabular-nums">
                            {post.shares.toLocaleString()}
                          </div>
                          <div className="text-[11px] text-[#A89B88]">{t.shareWord}</div>
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
        <div className="relative h-[190px] md:h-[250px] overflow-hidden border-y border-[#E8C98A]/18">
          <ParallaxFrame
            src="/scenes/bay-band.jpg"
            alt={t.sceneCaption}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#161310]/65 via-transparent to-[#161310]/75 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-6 md:bottom-8 pointer-events-none">
            <div className="max-w-6xl mx-auto px-5 md:px-6 flex items-center justify-between text-[#F5D98B]">
              <span className="text-[12.5px] font-medium tracking-[0.18em] uppercase drop-shadow">
                {t.sceneCaption}
              </span>
            </div>
          </div>
        </div>

        {/* MEDIA LINEUP — Clickable Real Channels */}
        <section id="lineup" className="scroll-mt-20 py-16 md:py-24 bg-[#1B1712]">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="max-w-2xl mb-10">
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-2">
                {t.lineupEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#F7EFDD] mb-3">
                {t.lineupTitle}
              </h2>
              <p className="text-[15px] text-[#C2B5A2] leading-relaxed">{t.lineupSub}</p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-4">
              {t.lineup.map((ch, idx) => {
                const content = (
                  <>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                            ch.tier === "主力"
                              ? "bg-[#C5A065]/20 text-[#F5D98B] border-[#E8C98A]/40"
                              : ch.tier === "私域"
                              ? "bg-[#E89B5C]/15 text-[#F0A08A] border-[#E89B5C]/35"
                              : "bg-white/6 text-[#C2B5A2] border-white/12"
                          }`}
                        >
                          {ch.tier}
                        </span>
                        <span className="text-[11.5px] text-[#A89B88] font-medium">
                          {ch.platform}
                        </span>
                      </div>
                      <h3
                        className={`text-[16px] font-bold text-[#F7EFDD] leading-snug mb-1.5 ${
                          ch.url ? "group-hover:text-[#F5D98B] transition-colors" : ""
                        }`}
                      >
                        {ch.name}
                      </h3>
                      <p className="text-[13.5px] text-[#B8AB98] leading-relaxed">{ch.note}</p>
                    </div>

                    <div className="shrink-0 text-right flex flex-col items-end justify-between self-stretch">
                      <div className="font-display font-extrabold text-[22px] text-[#F5D98B] tabular-nums leading-none">
                        {ch.fans}
                      </div>
                      {ch.url ? (
                        <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#E89B5C] group-hover:translate-x-0.5 transition-transform">
                          {t.lineupVisit}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      ) : null}
                    </div>
                  </>
                );
                return (
                  <Reveal key={ch.name} delay={idx * 0.06}>
                    {ch.url ? (
                      <a
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group creator-card rounded-2xl p-5 flex items-start justify-between gap-4 h-full"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="creator-card rounded-2xl p-5 flex items-start justify-between gap-4 h-full">
                        {content}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <p className="text-[13px] text-[#A89B88] mt-5 leading-relaxed">{t.lineupNote}</p>
            </Reveal>
          </div>
        </section>

        {/* THREE-STEP DELIVERY WORKFLOW */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-12">
              <div>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-2">
                  {t.stepsEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#F7EFDD]">
                  {t.stepsTitle}
                </h2>
              </div>
              <p className="text-[14px] text-[#B8AB98]">{t.stepsKicker}</p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 mb-14">
              {t.steps.map((step, idx) => {
                const Icon = stepIcons[idx] ?? Rocket;
                return (
                  <Reveal key={step.n} delay={idx * 0.1}>
                    <div className="creator-card rounded-[1.6rem] p-7 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className="w-12 h-12 rounded-2xl bg-[#C5A065]/18 border border-[#E8C98A]/30 text-[#F5D98B] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="font-display font-extrabold text-[34px] text-[#E8C98A]/22 leading-none">
                          {step.n}
                        </span>
                      </div>
                      <h3 className="text-[19px] font-bold text-[#F7EFDD] mb-2.5">{step.t}</h3>
                      <p className="text-[14.5px] text-[#C2B5A2] leading-relaxed">{step.b}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Mid CTA Banner */}
            <Reveal>
              <div className="rounded-[1.85rem] bg-gradient-to-r from-[#2A2218] via-[#241E16] to-[#2B2217] border border-[#E8C98A]/35 p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.8)]">
                <div className="max-w-2xl">
                  <h3 className="font-serif font-bold text-[22px] md:text-[26px] text-[#F7EFDD] leading-snug mb-2">
                    {t.midCtaTitle}
                  </h3>
                  <p className="text-[14.5px] text-[#C8BCA9] leading-relaxed">{t.midCtaBody}</p>
                </div>
                <a
                  href={waLink(t.midCtaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] hover:brightness-105 text-[#24190F] font-bold text-[15px] px-7 py-3.5 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.midCtaBtn}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRICING WITH INTERACTIVE MONTHLY / QUARTERLY 85折 TOGGLE */}
        <section
          id="pricing"
          className="scroll-mt-20 py-16 md:py-24 bg-[#1B1712] border-y border-[#E8C98A]/15"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-2">
                  {t.priceEyebrow}
                </p>
                <h2 className="font-serif font-bold text-[28px] md:text-[38px] text-[#F7EFDD] mb-2">
                  {t.priceTitle}
                </h2>
                <p className="text-[15px] text-[#C2B5A2]">{t.priceSub}</p>
              </div>

              {/* Interactive Spring Billing Switch */}
              <div className="inline-flex items-center self-start md:self-auto bg-[#262019] border border-[#E8C98A]/28 rounded-full p-1.5">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`relative px-4 py-2 rounded-full text-[13.5px] font-bold transition-colors cursor-pointer ${
                    billing === "monthly" ? "text-[#1D1711]" : "text-[#C2B5A2]"
                  }`}
                >
                  {billing === "monthly" ? (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-[#E8C98A]"
                    />
                  ) : null}
                  <span className="relative z-10">{t.billingMonthly}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("quarterly")}
                  className={`relative px-4 py-2 rounded-full text-[13.5px] font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                    billing === "quarterly" ? "text-[#24190F]" : "text-[#C2B5A2]"
                  }`}
                >
                  {billing === "quarterly" ? (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-[#E89B5C]"
                    />
                  ) : null}
                  <span className="relative z-10">{t.billingQuarterly}</span>
                  <span
                    className={`relative z-10 text-[10.5px] px-2 py-0.5 rounded-full font-extrabold ${
                      billing === "quarterly"
                        ? "bg-[#24190F] text-[#F5D98B]"
                        : "bg-[#E89B5C]/20 text-[#F0B482]"
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
                          ? "bg-gradient-to-b from-[#30271B] to-[#231D15] text-[#F7EFDD] border-2 border-[#E8C98A]/65 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)] lg:-translate-y-2"
                          : "creator-card text-[#F4ECE0]"
                      }`}
                    >
                      <div className="mb-3">
                        <span
                          className={`inline-block text-[12px] font-bold rounded-full px-3.5 py-1 ${
                            isFeatured
                              ? "bg-[#F5D98B] text-[#241B10]"
                              : "bg-[#C5A065]/16 text-[#E8C98A] border border-[#E8C98A]/25"
                          }`}
                        >
                          {pkg.tag}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-[22px] text-[#F7EFDD] mb-2">
                        {pkg.name}
                      </h3>

                      <div className="flex items-baseline gap-2 mb-1">
                        <AnimatedPrice
                          price={shownPrice}
                          className="font-display font-extrabold text-[40px] leading-none text-[#F5D98B]"
                        />
                        <span className="text-[13px] text-[#B8AB98]">
                          HKD {billing === "quarterly" ? t.perMonth : ""}
                        </span>
                      </div>

                      <div className="min-h-[22px] mb-4">
                        {billing === "quarterly" ? (
                          <span className="text-[12px] font-semibold text-[#F0B482]">
                            {t.quarterlySavePrefix}
                            {totalSaved.toLocaleString()} · {t.quarterlyNote}
                          </span>
                        ) : (
                          <span className="text-[12px] text-[#A89B88]">{pkg.footnote}</span>
                        )}
                      </div>

                      <p className="text-[13.5px] leading-relaxed mb-4 text-[#C8BCA9]">
                        {pkg.who}
                      </p>

                      {/* Spec chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {pkg.specs.map(([k, v]) => (
                          <span
                            key={k}
                            className="text-[11.5px] rounded-full px-2.5 py-1 bg-[#161310]/65 border border-[#E8C98A]/20 text-[#B8AB98]"
                          >
                            {k} <strong className="text-[#F5D98B]">{v}</strong>
                          </span>
                        ))}
                      </div>

                      <p className="text-[13.5px] font-medium pl-3 border-l-2 border-[#C5A065] text-[#E8C98A] mb-5 leading-relaxed">
                        「{pkg.hook}」
                      </p>

                      <ul className="space-y-2.5 mb-7">
                        {pkg.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                            <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#E89B5C]" />
                            <span className="text-[#DED2C0]">{item}</span>
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
                            ? "bg-gradient-to-r from-[#E89B5C] to-[#F0B482] hover:brightness-105 text-[#24190F]"
                            : "border border-[#E8C98A]/40 hover:bg-[#E8C98A]/12 text-[#F5D98B]"
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
              <p className="text-center text-[13.5px] font-medium text-[#E8C98A] mb-6 leading-relaxed">
                {t.payNote}
              </p>

              {/* Single-Item Rate Table */}
              <div className="creator-card rounded-[1.5rem] p-5 md:p-7">
                <div className="text-[14px] font-bold text-[#F5D98B] mb-4">{t.singleTitle}</div>
                <div className="grid md:grid-cols-2 gap-x-8">
                  {t.singles.map(([item, price]) => (
                    <div
                      key={item}
                      className="flex items-baseline justify-between gap-4 py-3 border-b border-white/8"
                    >
                      <span className="text-[14px] text-[#DED2C0]">{item}</span>
                      <span className="font-display font-bold text-[14.5px] text-[#F0B482] whitespace-nowrap tabular-nums">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[12.5px] text-[#A89B88] mt-4">{t.addons}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* B2B FAQ ACCORDION */}
        <section id="faq" className="scroll-mt-20 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-5 md:px-6">
            <Reveal className="text-center mb-10">
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-2">
                {t.faqEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-[#F7EFDD]">
                {t.faqTitle}
              </h2>
            </Reveal>

            <div className="space-y-3">
              {t.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={faq.q} delay={idx * 0.05}>
                    <div className="rounded-2xl bg-[#211C16] border border-[#E8C98A]/18 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <span className="font-bold text-[15.5px] text-[#F7EFDD] leading-snug">
                          {faq.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0 w-8 h-8 rounded-full bg-[#2C251C] border border-[#E8C98A]/25 flex items-center justify-center text-[#F5D98B]"
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
                            <div className="px-6 pb-5 text-[14.5px] text-[#C6B9A6] leading-relaxed border-t border-[#E8C98A]/12 pt-3.5">
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
            <div className="max-w-3xl mx-auto creator-card rounded-[2rem] p-7 md:p-11 text-center">
              <div className="flex justify-center mb-4">
                <BrandLogo />
              </div>
              <p className="text-[11.5px] font-display font-bold tracking-[0.22em] text-[#E8C98A] uppercase mb-2">
                {t.ctaEyebrow}
              </p>
              <h2 className="font-serif font-bold text-[26px] md:text-[34px] text-[#F7EFDD] leading-snug mb-2.5">
                {t.ctaLine}
              </h2>
              <p className="text-[14.5px] text-[#B8AB98] mb-8">{t.ctaContact}</p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto mb-7">
                <div className="rounded-2xl bg-[#FAF5EB] p-3.5 border border-[#C5A065]/45">
                  <img
                    src="/qr-wechat.png"
                    alt={t.qrWechat}
                    className="w-full rounded-xl bg-white p-1"
                  />
                  <p className="text-[13px] font-bold text-[#3D311E] mt-2.5">{t.qrWechat}</p>
                </div>
                <div className="rounded-2xl bg-[#FAF5EB] p-3.5 border border-[#C5A065]/45">
                  <img
                    src="/qr-whatsapp.png"
                    alt={t.qrWa}
                    className="w-full rounded-xl bg-white p-1"
                  />
                  <p className="text-[13px] font-bold text-[#3D311E] mt-2.5">{t.qrWa}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href={waLink(`${t.brand}｜我想了解港人北上推廣報價`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] hover:brightness-105 text-[#24190F] font-bold text-[15px] px-8 py-3.5 transition-all shadow-[0_14px_30px_-10px_rgba(232,155,92,0.45)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.qrWaBtn}
                </a>
                <p className="text-[13.5px] text-[#B8AB98] inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#E8C98A]" />
                  {t.mailLabel}：
                  <a
                    href="mailto:ZEROWONG5@GMAIL.COM"
                    className="font-display font-bold text-[#F5D98B] link-underline"
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
      <footer className="border-t border-[#E8C98A]/15 bg-[#120F0D] py-7 px-5">
        <div className="max-w-6xl mx-auto text-center text-[12.5px] text-[#9A8E7D] leading-relaxed">
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
        <div className="mx-3 mb-3 rounded-2xl bg-[#1D1813]/95 backdrop-blur-md border border-[#E8C98A]/30 px-3.5 py-2.5 shadow-[0_14px_30px_rgba(0,0,0,0.65)] flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[12.5px] font-bold text-[#F7EFDD] truncate">{t.stickyTitle}</p>
            <p className="text-[11px] text-[#B8AB98] truncate">{t.stickyNote}</p>
          </div>
          <a
            href={waLink(`${t.brand}｜我想了解報價`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] text-[#24190F] font-bold text-[12.5px] px-4 py-2 whitespace-nowrap"
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
            className="fixed inset-0 z-50 bg-black/78 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[1.8rem] bg-[#211C16] border border-[#E8C98A]/28 overflow-hidden shadow-2xl grid sm:grid-cols-2"
            >
              <div className="relative aspect-[4/4] sm:aspect-auto bg-[#161310]">
                <img
                  src={selectedPost.img}
                  alt={selectedPost.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[11.5px] font-bold text-[#F5D98B] bg-[#C5A065]/18 border border-[#E8C98A]/30 px-3 py-1 rounded-full">
                      {selectedPost.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedPost(null)}
                      aria-label="Close"
                      className="w-8 h-8 rounded-full bg-[#2E271E] flex items-center justify-center text-[#F7EFDD] cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-[12px] text-[#A89B88] mb-1">{selectedPost.platform}</div>
                  <h3 className="font-serif font-bold text-[22px] text-[#F7EFDD] mb-3">
                    {selectedPost.name}
                  </h3>
                  <p className="text-[14px] text-[#C6B9A6] leading-relaxed mb-5">
                    {selectedPost.caption}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="rounded-xl bg-[#161310]/70 border border-[#E8C98A]/18 p-2.5 text-center">
                      <Eye className="w-3.5 h-3.5 text-[#F5D98B] mx-auto mb-1" />
                      <div className="font-display font-bold text-[15px] text-[#F5D98B]">
                        {formatWan(selectedPost.reach, lang)}
                      </div>
                      <div className="text-[10.5px] text-[#A89B88]">{t.reachWord}</div>
                    </div>
                    <div className="rounded-xl bg-[#161310]/70 border border-[#E8C98A]/18 p-2.5 text-center">
                      <Heart className="w-3.5 h-3.5 text-[#F0A08A] mx-auto mb-1" />
                      <div className="font-display font-bold text-[15px] text-[#F7EFDD]">
                        {selectedPost.likes.toLocaleString()}
                      </div>
                      <div className="text-[10.5px] text-[#A89B88]">{t.likeWord}</div>
                    </div>
                    <div className="rounded-xl bg-[#161310]/70 border border-[#E8C98A]/18 p-2.5 text-center">
                      <Share2 className="w-3.5 h-3.5 text-[#E8C98A] mx-auto mb-1" />
                      <div className="font-display font-bold text-[15px] text-[#F7EFDD]">
                        {selectedPost.shares.toLocaleString()}
                      </div>
                      <div className="text-[10.5px] text-[#A89B88]">{t.shareWord}</div>
                    </div>
                  </div>
                  <a
                    href={waLink(`看過你們的「${selectedPost.name}」，想了解同款推廣合作`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E89B5C] to-[#F0B482] text-[#24190F] font-bold text-[13.5px] py-3"
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
            className="fixed inset-0 z-50 bg-black/78 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 14 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-[1.8rem] bg-[#211C16] border border-[#E8C98A]/28 p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-serif font-bold text-[19px] text-[#F7EFDD]">
                  {t.dashModalTitle}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowBackendModal(false)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-[#2E271E] flex items-center justify-center text-[#F7EFDD] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E8C98A]/20 bg-white p-2 mb-4">
                <img
                  src="/dash-gba-crop.png"
                  alt="Meta Business Suite 28-day analytics"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-[13px] text-[#B8AB98] leading-relaxed">{t.dashModalNote}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
