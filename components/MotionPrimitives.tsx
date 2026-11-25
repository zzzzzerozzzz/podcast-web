"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C5A065] via-[#F5D98B] to-[#E89B5C] origin-left z-50 pointer-events-none"
    />
  );
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className = "", delay = 0, y = 16 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px 8% 0px" }}
      transition={{ duration: 0.45, delay, ease: EASE_EDITORIAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MaskLineProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function MaskLine({ children, delay = 0, className = "" }: MaskLineProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "105%", opacity: 0.25 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.78, delay, ease: EASE_EDITORIAL }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
}

/**
 * Always renders the real target value initially (SSR / crawler / screenshot safe — never shows 0!),
 * then runs a crisp kinetic roll-up from 72% -> 100% once it enters the viewport on client.
 */
export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  durationMs = 750,
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    setDisplay(value);
  }, [value]);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      hasAnimated.current = true;
      return;
    }
    hasAnimated.current = true;
    const from = Math.round(value * 0.72);
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(from + (value - from) * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, durationMs]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

interface AnimatedPriceProps {
  price: number;
  className?: string;
}

export function AnimatedPrice({ price, className = "" }: AnimatedPriceProps) {
  return (
    <span className={`inline-flex overflow-hidden align-baseline ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={price}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.32, ease: EASE_EDITORIAL }}
          className="inline-block tabular-nums"
        >
          ${price.toLocaleString()}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

interface LivingImageProps {
  src: string;
  alt: string;
  variant?: "a" | "b";
  className?: string;
}

export function LivingImage({ src, alt, variant = "a", className = "" }: LivingImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${variant === "a" ? "ken-burns-a" : "ken-burns-b"} ${className}`}
    />
  );
}

interface ParallaxFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  living?: boolean;
}

export function ParallaxFrame({
  src,
  alt,
  caption,
  className = "",
  living = true,
}: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.04, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden photo-sheen ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full will-change-transform">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${living ? "ken-burns-a" : ""}`}
        />
      </motion.div>
      {caption ? (
        <span className="absolute bottom-3.5 left-3.5 z-10 bg-[#161310]/82 backdrop-blur-md text-[#E8C98A] text-[11.5px] font-medium px-3.5 py-1.5 rounded-full border border-[#E8C98A]/25">
          {caption}
        </span>
      ) : null}
    </div>
  );
}

export interface FilmstripScene {
  img: string;
  label: string;
  tag: string;
}

export function VisualReelStrip({
  scenes,
  tickerItems,
}: {
  scenes: FilmstripScene[];
  tickerItems: string[];
}) {
  const doubledScenes = [...scenes, ...scenes];
  const doubledTicker = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-y border-[#E8C98A]/16 bg-[#1A1511] select-none">
      {/* Living photography filmstrip */}
      <div className="relative py-5 md:py-6 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 z-10 bg-gradient-to-r from-[#1A1511] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 z-10 bg-gradient-to-l from-[#1A1511] to-transparent"
        />

        <div className="filmstrip-track flex items-center gap-3.5 sm:gap-4 w-max px-2">
          {doubledScenes.map((scene, idx) => (
            <div
              key={`${scene.label}-${idx}`}
              className="group relative w-[205px] sm:w-[248px] aspect-[16/10] rounded-2xl overflow-hidden border border-[#E8C98A]/20 bg-[#211C16] shrink-0 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.85)]"
            >
              <img
                src={scene.img}
                alt={scene.label}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  idx % 2 === 0 ? "ken-burns-a" : "ken-burns-b"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100C]/90 via-[#14100C]/20 to-transparent" />
              <span className="absolute top-2.5 left-2.5 text-[10px] font-bold tracking-wide bg-[#161310]/78 backdrop-blur-sm text-[#F5D98B] border border-[#E8C98A]/28 rounded-full px-2.5 py-0.5">
                {scene.tag}
              </span>
              <div className="absolute bottom-2.5 inset-x-3 text-[12.5px] font-bold text-[#F7EFDD] truncate drop-shadow">
                {scene.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slim editorial ticker strip underneath */}
      <div className="border-t border-[#E8C98A]/12 bg-[#16120E] py-2.5 overflow-hidden">
        <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
          {doubledTicker.map((item, idx) => (
            <div key={`${item}-${idx}`} className="inline-flex items-center gap-6">
              <span className="text-[12px] sm:text-[13px] font-medium tracking-wide text-[#D8CCB9]">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#E89B5C]" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-[#1D1813] text-[#F4ECE0] py-3.5 border-y border-[#E8C98A]/18 select-none">
      <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
        {doubled.map((item, idx) => (
          <div key={`${item}-${idx}`} className="inline-flex items-center gap-6">
            <span className="text-[13px] md:text-[14px] font-medium tracking-wide text-[#EFE4D2]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E89B5C]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
