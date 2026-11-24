import { NextResponse } from "next/server";

export const revalidate = 300; // Refresh every 5 minutes

const IMMD_RESIDENT_URL =
  "https://secure1.info.gov.hk/immd/mobileapps/2bb9ae17/data/CPQueueTimeR.json";
const HKO_WEATHER_URL =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc";

export interface PortStatus {
  code: string;
  nameHk: string;
  nameCn: string;
  subHk: string;
  subCn: string;
  hours: string;
  transitHk: string;
  transitCn: string;
  bestForHk: string;
  bestForCn: string;
  depQueue: number | null;
  arrQueue: number | null;
}

const PORT_META: Omit<PortStatus, "depQueue" | "arrQueue">[] = [
  {
    code: "LSC",
    nameHk: "落馬洲支線（福田口岸）",
    nameCn: "落马洲支线（福田口岸）",
    subHk: "港鐵東鐵綫直達 · 最熱門北上口岸",
    subCn: "港铁东铁线直达 · 最热门北上口岸",
    hours: "06:30 – 22:30",
    transitHk: "東鐵綫落馬洲站 → 過關接深圳地鐵 4 / 10 號線",
    transitCn: "东铁线落马洲站 → 过关接深圳地铁 4 / 10 号线",
    bestForHk: "福田 COCO Park、卓悅中心、水圍、崗廈北",
    bestForCn: "福田 COCO Park、卓悦中心、水围、岗厦北",
  },
  {
    code: "SBC",
    nameHk: "深圳灣口岸",
    nameCn: "深圳湾口岸",
    subHk: "一地兩檢 · 新界西及九龍巴士直達",
    subCn: "一地两检 · 新界西及九龙巴士直达",
    hours: "06:30 – 24:00",
    transitHk: "B2P / B3X / 跨境直通巴 → 深圳地鐵 13 號線／的士",
    transitCn: "B2P / B3X / 跨境直通巴 → 深圳地铁 13 号线／打车",
    bestForHk: "深圳灣萬象城、海岸城、萬象天地、前海",
    bestForCn: "深圳湾万象城、海岸城、万象天地、前海",
  },
  {
    code: "LWS",
    nameHk: "羅湖口岸",
    nameCn: "罗湖口岸",
    subHk: "東鐵綫終點站 · 直駁廣深城際高鐵",
    subCn: "东铁线终点站 · 直驳广深城际高铁",
    hours: "06:30 – 24:00",
    transitHk: "東鐵綫羅湖站 → 深圳地鐵 1 號線／深圳站動車",
    transitCn: "东铁线罗湖站 → 深圳地铁 1 号线／深圳站动车",
    bestForHk: "東門老街、羅湖萬象城、國貿、轉高鐵往廣州",
    bestForCn: "东门老街、罗湖万象城、国贸、转高铁往广州",
  },
  {
    code: "HYW",
    nameHk: "香園圍（蓮塘口岸）",
    nameCn: "香园围（莲塘口岸）",
    subHk: "人車直達 · 過關通道新淨流暢",
    subCn: "人车直达 · 过关通道新净流畅",
    hours: "07:00 – 22:00",
    transitHk: "B7 / B8 / B9 巴士 → 深圳地鐵 2 / 8 號線蓮塘口岸站",
    transitCn: "B7 / B8 / B9 巴士 → 深圳地铁 2 / 8 号线莲塘口岸站",
    bestForHk: "鹽田海濱、大小梅沙、蓮塘街市、東部華僑城",
    bestForCn: "盐田海滨、大小梅沙、莲塘街市、东部华侨城",
  },
  {
    code: "LMC",
    nameHk: "落馬洲（皇崗口岸）",
    nameCn: "落马洲（皇岗口岸）",
    subHk: "24 小時通關 · 夜遊／水療過夜必備",
    subCn: "24 小时通关 · 夜游／水疗过夜必备",
    hours: "24 小時",
    transitHk: "皇巴士 / 全日通跨境巴 → 深圳地鐵 7 號線皇崗口岸站",
    transitCn: "皇巴士 / 全日通跨境巴 → 深圳地铁 7 号线皇岗口岸站",
    bestForHk: "深宵宵夜、24 小時水療會所、凌晨返港",
    bestForCn: "深夜宵夜、24 小时水疗会所、凌晨返港",
  },
  {
    code: "HZM",
    nameHk: "港珠澳大橋香港口岸",
    nameCn: "港珠澳大桥香港口岸",
    subHk: "24 小時通關 · 金巴直達珠海／澳門",
    subCn: "24 小时通关 · 金巴直达珠海／澳门",
    hours: "24 小時",
    transitHk: "A 車 / B6 巴士往口岸 → 轉乘金巴（約 40 分鐘）",
    transitCn: "A 车 / B6 巴士往口岸 → 转乘金巴（约 40 分钟）",
    bestForHk: "珠海拱北／情侶路、長隆、澳門路氹新酒店",
    bestForCn: "珠海拱北／情侣路、长隆、澳门路氹新酒店",
  },
  {
    code: "MKT",
    nameHk: "文錦渡口岸",
    nameCn: "文锦渡口岸",
    subHk: "上水專線巴士直達 · 過關人流較少",
    subCn: "上水专线巴士直达 · 过关人流较少",
    hours: "07:00 – 22:00",
    transitHk: "上水廣場文錦渡快線 → 深圳地鐵 9 號線文錦站",
    transitCn: "上水广场文锦渡快线 → 深圳地铁 9 号线文锦站",
    bestForHk: "羅湖文錦、黃貝嶺、避開羅湖週末人潮",
    bestForCn: "罗湖文锦、黄贝岭、避开罗湖周末人潮",
  },
  {
    code: "STK",
    nameHk: "沙頭角口岸",
    nameCn: "沙头角口岸",
    subHk: "東部直通巴口岸（服務狀態依官方為準）",
    subCn: "东部直通巴口岸（服务状态依官方为准）",
    hours: "07:00 – 22:00",
    transitHk: "跨境直通巴直達沙頭角口岸",
    transitCn: "跨境直通巴直达沙头角口岸",
    bestForHk: "鹽田、大梅沙、東部海岸線",
    bestForCn: "盐田、大梅沙、东部海岸线",
  },
];

export async function GET() {
  let rawImmd: Record<string, { arrQueue?: number; depQueue?: number }> | null = null;
  let source: "live" | "unavailable" = "unavailable";

  try {
    const res = await fetch(IMMD_RESIDENT_URL, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(6000),
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      rawImmd = await res.json();
      source = "live";
    }
  } catch {
    rawImmd = null;
  }

  let weather: { temp: number | null; humidity: number | null; updated: string | null } = {
    temp: null,
    humidity: null,
    updated: null,
  };

  try {
    const wRes = await fetch(HKO_WEATHER_URL, {
      next: { revalidate: 600 },
      signal: AbortSignal.timeout(5000),
    });
    if (wRes.ok) {
      const wJson = await wRes.json();
      const temps: Array<{ place: string; value: number }> = wJson?.temperature?.data ?? [];
      const hko = temps.find((x) => x.place.includes("天文台")) ?? temps[0];
      const hum = wJson?.humidity?.data?.[0]?.value ?? null;
      weather = {
        temp: typeof hko?.value === "number" ? hko.value : null,
        humidity: typeof hum === "number" ? hum : null,
        updated: typeof wJson?.updateTime === "string" ? wJson.updateTime : null,
      };
    }
  } catch {
    // Graceful silent fallback for weather
  }

  const ports: PortStatus[] = PORT_META.map((meta) => {
    const entry = rawImmd?.[meta.code];
    return {
      ...meta,
      depQueue: typeof entry?.depQueue === "number" ? entry.depQueue : null,
      arrQueue: typeof entry?.arrQueue === "number" ? entry.arrQueue : null,
    };
  });

  return NextResponse.json({
    source,
    fetchedAt: new Date().toISOString(),
    ports,
    weather,
  });
}
