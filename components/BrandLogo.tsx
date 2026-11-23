import React from "react";

interface BrandLogoProps {
  subtitle?: string;
  compact?: boolean;
}

export function BrandLogo({ subtitle, compact = false }: BrandLogoProps) {
  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      <div
        className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 bg-[#272119] border border-[#E8C98A]/30 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.65)] ${
          compact ? "w-9 h-9" : "w-10 h-10"
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path
            d="M9 11H26L10 25H27"
            stroke="#F5D98B"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 11C24.5 7.8 27 6 30 6C30 9 28.2 11 24.5 11Z"
            fill="#E89B5C"
          />
        </svg>
      </div>
      <div className="leading-tight min-w-0">
        <div
          className={`font-display font-bold tracking-tight text-[#F7EFDD] ${
            compact ? "text-[14px]" : "text-[15px]"
          }`}
        >
          Zero to Growth
        </div>
        {subtitle ? (
          <div className="text-[11px] tracking-wide truncate text-[#B8AB98]">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
