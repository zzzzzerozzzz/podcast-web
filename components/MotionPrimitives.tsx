"use client";

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
      viewport={{ once: true, amount: 0.14, margin: "0px 0px 8% 0px" }}
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
        initial={{ y: "108%", opacity: 0.2 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.82, delay, ease: EASE_EDITORIAL }}
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

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  durationMs = 900,
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
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
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.08]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover will-change-transform"
      />
      {caption ? (
        <span className="absolute bottom-3.5 left-3.5 bg-[#161310]/85 backdrop-blur-md text-[#E8C98A] text-[11.5px] font-medium px-3.5 py-1.5 rounded-full border border-[#E8C98A]/25">
          {caption}
        </span>
      ) : null}
    </div>
  );
}

interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-[#1D1813] text-[#F4ECE0] py-4 border-y border-[#E8C98A]/18 select-none">
      <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
        {doubled.map((item, idx) => (
          <div key={`${item}-${idx}`} className="inline-flex items-center gap-6">
            <span className="text-[13.5px] md:text-[14.5px] font-medium tracking-wide text-[#EFE4D2]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E89B5C]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
