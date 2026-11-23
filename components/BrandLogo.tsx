import React from "react";

interface BrandLogoProps {
  subtitle?: string;
  inverted?: boolean;
  compact?: boolean;
}

export function BrandLogo({ subtitle, inverted = false, compact = false }: BrandLogoProps) {
  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      <div
        className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 ${
          compact ? "w-9 h-9" : "w-10 h-10"
        } ${
          inverted
            ? "bg-[#FAF7F2]/10 border border-[#FAF7F2]/18"
            : "bg-[#2C3E26] shadow-[0_6px_16px_-6px_rgba(44,62,38,0.45)]"
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          aria-hidden="true"
        >
          {/* Minimalist Z geometric stroke */}
          <path
            d="M9 11H26L10 25H27"
            stroke={inverted ? "#E8C98A" : "#FAF7F2"}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Organic growth sprout accent */}
          <path
            d="M24.5 11C24.5 7.8 27 6 30 6C30 9 28.2 11 24.5 11Z"
            fill="#D46B34"
          />
        </svg>
      </div>
      <div className="leading-tight min-w-0">
        <div
          className={`font-display font-bold tracking-tight ${
            compact ? "text-[14px]" : "text-[15px]"
          } ${inverted ? "text-[#FAF7F2]" : "text-[#1F271E]"}`}
        >
          Zero to Growth
        </div>
        {subtitle ? (
          <div
            className={`text-[11px] tracking-wide truncate ${
              inverted ? "text-[#FAF7F2]/65" : "text-[#636B5E]"
            }`}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
