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

export const EASE_EDITORIAL = [0.23, 1, 0.32, 1] as const;

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

export function Reveal({ children, className = "", delay = 0, y = 12 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px 10% 0px" }}
      transition={{ duration: 0.34, delay: Math.min(delay, 0.16), ease: EASE_EDITORIAL }}
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
        initial={{ y: "24%", opacity: 0.92 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.48, delay, ease: EASE_EDITORIAL }}
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
 * then runs a crisp kinetic roll-up from 78% -> 100% once it enters the viewport on client.
 */
export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  durationMs = 620,
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
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      hasAnimated.current = true;
      return;
    }
    hasAnimated.current = true;
    const from = Math.round(value * 0.78);
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
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
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
  loading?: "eager" | "lazy";
  animate?: boolean;
}

/**
 * Viewport-aware image that automatically pauses Ken Burns motion when scrolled off-screen.
 */
export function LivingImage({
  src,
  alt,
  variant = "a",
  className = "",
  loading = "lazy",
  animate = true,
}: LivingImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const inView = useInView(ref, { amount: 0.05 });

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      style={animate ? { animationPlayState: inView ? "running" : "paused" } : undefined}
      className={`w-full h-full object-cover ${
        animate ? (variant === "a" ? "ken-burns-a" : "ken-burns-b") : ""
      } ${className}`}
    />
  );
}

interface ParallaxFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ParallaxFrame({ src, alt, caption, className = "" }: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.08]);

  return (
    <div ref={ref} className={`relative overflow-hidden photo-sheen ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {caption ? (
        <span className="absolute bottom-3.5 left-3.5 z-10 bg-[#161310]/85 backdrop-blur-md text-[#E8C98A] text-[11.5px] font-medium px-3.5 py-1.5 rounded-full border border-[#E8C98A]/25">
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
}: {
  scenes: FilmstripScene[];
  tickerItems?: string[];
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stripRef, { amount: 0.05 });
  const doubledScenes = [...scenes, ...scenes];

  return (
    <div
      ref={stripRef}
      className="relative overflow-hidden border-y border-[#E8C98A]/16 bg-[#1A1511] select-none"
    >
      {/* Living photography filmstrip (pauses automatically when scrolled off-screen or hovered) */}
      <div className="relative py-5 md:py-6 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 z-10 bg-gradient-to-r from-[#1A1511] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 z-10 bg-gradient-to-l from-[#1A1511] to-transparent"
        />

        <div
          className="filmstrip-track flex items-center gap-3.5 sm:gap-4 w-max px-2"
          style={{ animationPlayState: inView ? "running" : "paused" }}
        >
          {doubledScenes.map((scene, idx) => (
            <div
              key={`${scene.label}-${idx}`}
              className="group relative w-[205px] sm:w-[248px] aspect-[16/10] rounded-2xl overflow-hidden border border-[#E8C98A]/20 bg-[#211C16] shrink-0 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.85)]"
            >
              <img
                src={scene.img}
                alt={scene.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100C]/90 via-[#14100C]/20 to-transparent" />
              <span className="absolute top-2.5 left-2.5 text-[10px] font-bold tracking-wide bg-[#161310]/80 backdrop-blur-sm text-[#F5D98B] border border-[#E8C98A]/28 rounded-full px-2.5 py-0.5">
                {scene.tag}
              </span>
              <div className="absolute bottom-2.5 inset-x-3 text-[12.5px] font-bold text-[#F7EFDD] truncate drop-shadow">
                {scene.label}
              </div>
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.05 });
  const doubled = [...items, ...items];
  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-[#1D1813] text-[#F4ECE0] py-3.5 border-y border-[#E8C98A]/18 select-none"
    >
      <div
        className="marquee-track flex items-center gap-6 whitespace-nowrap w-max"
        style={{ animationPlayState: inView ? "running" : "paused" }}
      >
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
