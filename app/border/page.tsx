"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  CloudSun,
  Compass,
  Gift,
  MapPin,
  RefreshCw,
  TrainFront,
  Users,
} from "lucide-react";
import { SiteFooter, SiteHeader, useSiteLang } from "@/components/SiteShell";
import { EASE_EDITORIAL, Reveal } from "@/components/MotionPrimitives";
import type { PortStatus } from "@/app/api/border/route";

interface BorderApiPayload {
  source: "live" | "unavailable";
  fetchedAt: string;
  ports: PortStatus[];
  weather: {
    temp: number | null;
    humidity: number | null;
    updated: string | null;
  };
}

function getStatusMeta(code: number | null, lang: "hk" | "cn") {
  if (code === 0) {
    return {
      label: lang === "hk" ? "正常 · 一般少於 15 分鐘" : "正常 · 一般少于 15 分钟",
      short: lang === "hk" ? "暢通 <15分" : "畅通 <15分",
      dot: "bg-[#65C466]",
      pill: "bg-[#65C466]/15 text-[#9EE39F] border-[#65C466]/35",
      rank: 0,
    };
  }
  if (code === 1) {
    return {
      label: lang === "hk" ? "繁忙 · 一般少於 30 分鐘" : "繁忙 · 一般少于 30 分钟",
      short: lang === "hk" ? "繁忙 <30分" : "繁忙 <30分",
      dot: "bg-[#E8B25C]",
      pill: "bg-[#E8B25C]/15 text-[#F5D98B] border-[#E8B25C]/35",
      rank: 1,
    };
  }
  if (code === 2) {
    return {
      label: lang === "hk" ? "非常繁忙 · 30 分鐘或以上" : "非常繁忙 · 30 分钟或以上",
      short: lang === "hk" ? "擠塞 30分+" : "拥堵 30分+",
      dot: "bg-[#E06D58]",
      pill: "bg-[#E06D58]/18 text-[#F5A899] border-[#E06D58]/40",
      rank: 2,
    };
  }
  if (code === 99) {
    return {
      label: lang === "hk" ? "非服務時段" : "非服务时段",
      short: lang === "hk" ? "未開放" : "未开放",
      dot: "bg-[#7B7266]",
      pill: "bg-white/[0.05] text-[#9E9383] border-white/10",
      rank: 4,
    };
  }
  if (code === 4) {
    return {
      label: lang === "hk" ? "系統維護中" : "系统维护中",
      short: lang === "hk" ? "維護中" : "维护中",
      dot: "bg-[#7B7266]",
      pill: "bg-white/[0.05] text-[#9E9383] border-white/10",
      rank: 3,
    };
  }
  return {
    label: lang === "hk" ? "暫未讀取即時數據" : "暂未读取实时数据",
    short: lang === "hk" ? "待更新" : "待更新",
    dot: "bg-[#7B7266]",
    pill: "bg-white/[0.05] text-[#9E9383] border-white/10",
    rank: 5,
  };
}

export default function BorderPage() {
  const [lang, switchLang] = useSiteLang();
  const [direction, setDirection] = useState<"dep" | "arr">("dep");
  const [data, setData] = useState<BorderApiPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const res = await fetch("/api/border", { cache: "no-store" });
      if (res.ok) {
        const json: BorderApiPayload = await res.json();
        setData(json);
      }
    } catch {
      // keep existing state
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  const sortedPorts = [...(data?.ports ?? [])].sort((a, b) => {
    const codeA = direction === "dep" ? a.depQueue : a.arrQueue;
    const codeB = direction === "dep" ? b.depQueue : b.arrQueue;
    return getStatusMeta(codeA, lang).rank - getStatusMeta(codeB, lang).rank;
  });

  const fastPorts = sortedPorts.filter((p) =>
    direction === "dep" ? p.depQueue === 0 : p.arrQueue === 0
  );

  const hkTime = data?.fetchedAt
    ? new Intl.DateTimeFormat("zh-HK", {
        timeZone: "Asia/Hong_Kong",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(data.fetchedAt))
    : "—";

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#161310] text-[#F4ECE0] editorial-grain">
      <SiteHeader lang={lang} switchLang={switchLang} />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Header Hero (instant first-paint) */}
        <div className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#E8C98A] mb-2.5">
            <span className="w-6 h-[1.5px] bg-[#E89B5C]" aria-hidden="true" />
            <span>{lang === "hk" ? "香港入境處即時開放數據" : "香港入境处实时开放数据"}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div>
              <h1 className="font-serif font-bold text-[30px] sm:text-[40px] md:text-[46px] leading-tight text-[#F7EFDD] mb-2.5">
                {lang === "hk" ? "香港實時口岸等候時間" : "香港实时口岸等候时间"}
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#C6B9A6] max-w-2xl leading-relaxed">
                {lang === "hk"
                  ? "直接串接香港政府入境事務處陸路口岸實時數據（香港居民通道，每 15 分鐘更新）。出發北上前一秒睇清邊個口岸最暢通！"
                  : "直接接入香港政府入境事务处陆路口岸实时数据（香港居民通道，每 15 分钟更新）。出发北上前一秒看清哪个口岸最畅通！"}
              </p>
            </div>

            {/* Live Weather + Refresh Pill */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {data?.weather?.temp !== null && data?.weather?.temp !== undefined ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-[#241E18] border border-[#E8C98A]/22 px-4 min-h-[44px] text-[13px] text-[#F5D98B]">
                  <CloudSun className="w-4 h-4 text-[#E89B5C]" aria-hidden="true" />
                  <span className="tabular-nums">
                    {lang === "hk" ? "香港氣溫" : "香港气温"} {data.weather.temp}°C
                    {data.weather.humidity ? ` · 濕度 ${data.weather.humidity}%` : ""}
                  </span>
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => loadData(true)}
                disabled={refreshing}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#241E18] hover:bg-[#2F2720] border border-[#E8C98A]/30 text-[#F5D98B] text-[13px] font-bold px-4 min-h-[44px] transition-colors duration-150 active:scale-[0.97] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B]"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} aria-hidden="true" />
                {lang === "hk" ? "即時更新" : "实时刷新"}
              </button>
            </div>
          </div>
        </div>

        {/* Direction Switcher + Live Timestamp */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center self-start bg-[#241E18] border border-[#E8C98A]/25 rounded-full p-1">
            <button
              type="button"
              onClick={() => setDirection("dep")}
              aria-pressed={direction === "dep"}
              className={`relative px-4 min-h-[42px] rounded-full text-[13px] font-bold transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B] ${
                direction === "dep" ? "text-[#1A1510]" : "text-[#C2B5A2]"
              }`}
            >
              {direction === "dep" ? (
                <motion.span
                  layoutId="border-dir"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  className="absolute inset-0 rounded-full bg-[#E8C98A]"
                />
              ) : null}
              <span className="relative z-10">
                {lang === "hk" ? "北上出境優先" : "北上出境优先"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setDirection("arr")}
              aria-pressed={direction === "arr"}
              className={`relative px-4 min-h-[42px] rounded-full text-[13px] font-bold transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B] ${
                direction === "arr" ? "text-[#1A1510]" : "text-[#C2B5A2]"
              }`}
            >
              {direction === "arr" ? (
                <motion.span
                  layoutId="border-dir"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  className="absolute inset-0 rounded-full bg-[#E89B5C]"
                />
              ) : null}
              <span className="relative z-10">
                {lang === "hk" ? "返港入境優先" : "返港入境优先"}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[12px] text-[#A89B88]">
            <Clock className="w-3.5 h-3.5 text-[#C5A065]" aria-hidden="true" />
            <span>
              {lang === "hk" ? "最後讀取（香港時間）" : "最后读取（香港时间）"}：{hkTime}
              {data?.source === "live"
                ? lang === "hk"
                  ? " · 官方即時連線"
                  : " · 官方实时连线"
                : ""}
            </span>
          </div>
        </div>

        {/* Smart Fastest Recommendation Banner */}
        {!loading && fastPorts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
            className="mb-7"
          >
            <div className="rounded-2xl bg-[#65C466]/10 border border-[#65C466]/30 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-[12px] font-bold text-[#9EE39F] mb-1">
                  {direction === "dep"
                    ? lang === "hk"
                      ? "現時最暢通北上口岸（一般少於 15 分鐘）"
                      : "目前最畅通北上口岸（一般少于 15 分钟）"
                    : lang === "hk"
                    ? "現時最暢通返港口岸（一般少於 15 分鐘）"
                    : "目前最畅通返港口岸（一般少于 15 分钟）"}
                </div>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {fastPorts.map((p) => (
                    <span
                      key={p.code}
                      className="text-[12.5px] font-bold bg-[#161310]/70 text-[#F7EFDD] border border-[#65C466]/35 rounded-full px-3 py-1"
                    >
                      {lang === "hk" ? p.nameHk : p.nameCn}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/deals"
                className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#F5D98B] hover:text-[#F0B482]"
              >
                {lang === "hk" ? "順手領北上著數" : "顺手领北上优惠"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ) : null}

        {/* 8 Control Points Live Cards */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-44 rounded-2xl bg-[#211C16] border border-[#E8C98A]/12 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {sortedPorts.map((port, idx) => {
              const depMeta = getStatusMeta(port.depQueue, lang);
              const arrMeta = getStatusMeta(port.arrQueue, lang);
              const primaryMeta = direction === "dep" ? depMeta : arrMeta;

              return (
                <motion.div
                  key={port.code}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: idx * 0.04, ease: EASE_EDITORIAL }}
                  className="creator-card rounded-2xl p-5 h-full flex flex-col justify-between"
                >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="min-w-0">
                          <h2 className="text-[17.5px] font-bold text-[#F7EFDD] leading-snug">
                            {lang === "hk" ? port.nameHk : port.nameCn}
                          </h2>
                          <p className="text-[12.5px] text-[#A89B88] mt-0.5">
                            {lang === "hk" ? port.subHk : port.subCn}
                          </p>
                        </div>
                        <span className="shrink-0 text-[11px] font-display font-bold text-[#C8BCA9] bg-[#161310]/70 border border-[#E8C98A]/18 rounded-full px-2.5 py-1">
                          {port.hours}
                        </span>
                      </div>

                      {/* Dep & Arr Status Pills */}
                      <div className="grid grid-cols-2 gap-2.5 mb-4">
                        <div
                          className={`rounded-xl border px-3 py-2.5 ${
                            direction === "dep"
                              ? depMeta.pill
                              : "bg-[#161310]/55 border-white/10 text-[#C2B5A2]"
                          }`}
                        >
                          <div className="text-[10.5px] opacity-80 mb-1">
                            {lang === "hk" ? "出境（北上）" : "出境（北上）"}
                          </div>
                          <div className="flex items-center gap-1.5 text-[12.5px] font-bold">
                            <span className={`w-2 h-2 rounded-full shrink-0 ${depMeta.dot}`} />
                            <span className="truncate">{depMeta.short}</span>
                          </div>
                        </div>

                        <div
                          className={`rounded-xl border px-3 py-2.5 ${
                            direction === "arr"
                              ? arrMeta.pill
                              : "bg-[#161310]/55 border-white/10 text-[#C2B5A2]"
                          }`}
                        >
                          <div className="text-[10.5px] opacity-80 mb-1">
                            {lang === "hk" ? "入境（返港）" : "入境（返港）"}
                          </div>
                          <div className="flex items-center gap-1.5 text-[12.5px] font-bold">
                            <span className={`w-2 h-2 rounded-full shrink-0 ${arrMeta.dot}`} />
                            <span className="truncate">{arrMeta.short}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-[12.5px] text-[#C2B5A2] pt-3 border-t border-white/8">
                      <div className="flex items-start gap-2">
                        <TrainFront className="w-3.5 h-3.5 text-[#E8C98A] shrink-0 mt-0.5" />
                        <span>{lang === "hk" ? port.transitHk : port.transitCn}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#E89B5C] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#EDE1CE]">
                            {lang === "hk" ? "熱門目的地：" : "热门目的地："}
                          </strong>
                          {lang === "hk" ? port.bestForHk : port.bestForCn}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#8E8374] pt-0.5">
                        {primaryMeta.label}
                      </div>
                    </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Built-in Monetization & Retention Cross-Links */}
        <Reveal>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/deals"
              className="group creator-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#E89B5C]/18 text-[#F5D98B] flex items-center justify-center mb-4">
                  <Gift className="w-5 h-5" />
                </span>
                <h3 className="text-[17px] font-bold text-[#F7EFDD] group-hover:text-[#F5D98B] transition-colors mb-1.5">
                  {lang === "hk" ? "出發前領：北上優惠碼與 VIP 預約" : "出发前领：北上优惠码与 VIP 预约"}
                </h3>
                <p className="text-[13.5px] text-[#B8AB98] leading-relaxed">
                  {lang === "hk"
                    ? "深圳酒店早鳥、水療門票、免手續費北上神卡，以及牙科／配鏡 1對1 專屬福利。"
                    : "深圳酒店早鸟、水疗门票、免手续费北上神卡，以及牙科／配镜 1对1 专属福利。"}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-[#E89B5C]">
                {lang === "hk" ? "前往著數專區" : "前往优惠专区"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/guides"
              className="group creator-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#C5A065]/18 text-[#F5D98B] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </span>
                <h3 className="text-[17px] font-bold text-[#F7EFDD] group-hover:text-[#F5D98B] transition-colors mb-1.5">
                  {lang === "hk" ? "睇最新：港人北上實測攻略" : "看最新：港人北上实测攻略"}
                </h3>
                <p className="text-[13.5px] text-[#B8AB98] leading-relaxed">
                  {lang === "hk"
                    ? "福田高質酒店、29 萬人收藏深圳地標、廣州北京路兩日一夜，每篇附香港出發交通。"
                    : "福田高质酒店、29 万人收藏深圳地标、广州北京路两天一夜，每篇附香港出发交通。"}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-[#E89B5C]">
                {lang === "hk" ? "瀏覽攻略庫" : "浏览攻略库"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <a
              href="https://www.facebook.com/groups/shenzhenguangzhouhktravel"
              target="_blank"
              rel="noopener noreferrer"
              className="group creator-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#C5A065]/18 text-[#F5D98B] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </span>
                <h3 className="text-[17px] font-bold text-[#F7EFDD] group-hover:text-[#F5D98B] transition-colors mb-1.5">
                  {lang === "hk" ? "12,000 人港人北上交流群" : "12,000 人港人北上交流群"}
                </h3>
                <p className="text-[13.5px] text-[#B8AB98] leading-relaxed">
                  {lang === "hk"
                    ? "每日實時問口岸人流、餐廳伏唔伏、最新好去處，萬二名香港群友一齊開心 Share！"
                    : "每日实时问口岸人流、餐厅踩雷避坑、最新好去处，一万二名香港群友一起交流！"}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-[#E89B5C]">
                {lang === "hk" ? "免費加入 FB 群組" : "免费加入 FB 群组"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </Reveal>

        <p className="text-[12px] text-[#8E8374] leading-relaxed text-center">
          {lang === "hk"
            ? "免責聲明：口岸等候時間來源為香港特別行政區入境事務處開放數據（CPQueueTimeR.json），僅作概括評估參考，實際通關情況以入境處最新公布為準。"
            : "免责声明：口岸等候时间来源为香港特别行政区入境事务处开放数据（CPQueueTimeR.json），仅作概括评估参考，实际通关情况以入境处最新公布为准。"}
        </p>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
