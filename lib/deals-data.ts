import type { Lang } from "./site-data";

export interface VipOffer {
  id: string;
  category: "dental" | "optical" | "spa" | "checkup";
  badge: { hk: string; cn: string };
  title: { hk: string; cn: string };
  location: { hk: string; cn: string };
  perk: { hk: string; cn: string };
  highlights: { hk: string[]; cn: string[] };
  waMessage: string;
  statusTag: { hk: string; cn: string };
}

export interface AffiliateDeal {
  id: string;
  category: "hotel" | "spa" | "card" | "esim";
  partner: string;
  badge: { hk: string; cn: string };
  title: { hk: string; cn: string };
  desc: { hk: string; cn: string };
  code?: string;
  /** 之後換成你真實嘅 Klook / Trip.com / Creatory 聯盟追蹤連結即可生效 */
  url: string;
  ready: boolean;
  ctaLabel: { hk: string; cn: string };
}

export const VIP_OFFERS: VipOffer[] = [
  {
    id: "vip-dental",
    category: "dental",
    badge: { hk: "高客單 VIP 專線", cn: "高客单 VIP 专线" },
    title: {
      hk: "深圳口岸港人專科牙科（洗牙／補牙／種牙）",
      cn: "深圳口岸港人专科牙科（洗牙／补牙／种牙）",
    },
    location: { hk: "福田／羅湖口岸步行或專車直達", cn: "福田／罗湖口岸步行或专车直达" },
    perk: {
      hk: "經 Zero 1對1 WhatsApp 預約：免費全口拍片檢查 ＋ 專屬港客透明報價單",
      cn: "经 Zero 1对1 WhatsApp 预约：免费全口拍片检查 ＋ 专属港客透明报价单",
    },
    highlights: {
      hk: [
        "1對1 開設 3 人專屬服務小群，完全保障私隱",
        "先確認清晰價目表，到店絕無硬銷隱藏收費",
        "廣東話專屬顧問全程跟進預約及術後覆診",
      ],
      cn: [
        "1对1 开设 3 人专属服务小群，完全保障隐私",
        "先确认清晰价目表，到店绝无硬销隐藏收费",
        "粤语专属顾问全程跟进预约及术后复诊",
      ],
    },
    waMessage: "你好 Zero！我想查詢【深圳口岸牙科 VIP 預約福利】，想了解透明價目同預約流程。",
    statusTag: { hk: "開放預約諮詢", cn: "开放预约咨询" },
  },
  {
    id: "vip-optical",
    category: "optical",
    badge: { hk: "港人週末熱門", cn: "港人周末热门" },
    title: {
      hk: "深圳驗光配鏡（蔡司／漸進老花／防藍光鏡片）",
      cn: "深圳验光配镜（蔡司／渐进老花／防蓝光镜片）",
    },
    location: { hk: "羅湖／福田核心眼鏡城嚴選合作店", cn: "罗湖／福田核心眼镜城严选合作店" },
    perk: {
      hk: "Zero 讀者專屬價：正貨防偽驗証 ＋ 同日快取或順豐寄返香港",
      cn: "Zero 读者专属价：正货防伪验证 ＋ 同日快取或顺丰寄回香港",
    },
    highlights: {
      hk: [
        "幫你先過濾良心老字號，唔驚去到亂開天殺價",
        "支援香港處方度數或現場專業儀器免費驗光",
        "一對一預約留位，週末免排長龍",
      ],
      cn: [
        "帮你先过滤良心老字号，不怕去到乱开高价",
        "支持香港处方度数或现场专业仪器免费验光",
        "一对一预约留位，周末免排长队",
      ],
    },
    waMessage: "你好 Zero！我想查詢【深圳配鏡 VIP 專屬優惠】，想了解蔡司／漸進鏡片價位。",
    statusTag: { hk: "開放預約諮詢", cn: "开放预约咨询" },
  },
  {
    id: "vip-spa",
    category: "spa",
    badge: { hk: "週末鬆一鬆", cn: "周末放松首选" },
    title: {
      hk: "深圳高端水療過夜 & 溫泉度假酒店套票",
      cn: "深圳高端水疗过夜 & 温泉度假酒店套票",
    },
    location: { hk: "福田／羅湖／南山／惠州溫泉區", cn: "福田／罗湖／南山／惠州温泉区" },
    perk: {
      hk: "代查週末房態及團體優惠價，2–8 人出發均可度身安排",
      cn: "代查周末房态及团体优惠价，2–8 人出发均可定制安排",
    },
    highlights: {
      hk: [
        "精選港人實測乾淨高質水療，水果任食＋過夜房",
        "家庭／朋友包棟溫泉別墅可享專屬群友減免",
        "附最新口岸交通及夜間返港路線貼士",
      ],
      cn: [
        "精选港人实测干净高质水疗，水果任吃＋过夜房",
        "家庭／朋友包栋温泉别墅可享专属群友减免",
        "附最新口岸交通及夜间返港路线贴士",
      ],
    },
    waMessage: "你好 Zero！我想查詢【深圳水療／溫泉酒店週末套票】，大概有幾位同行。",
    statusTag: { hk: "開放預約諮詢", cn: "开放预约咨询" },
  },
  {
    id: "vip-checkup",
    category: "checkup",
    badge: { hk: "家庭健康首選", cn: "家庭健康首选" },
    title: {
      hk: "深圳三甲醫院／高階私營全身體檢套餐",
      cn: "深圳三甲医院／高端私营全身体检套餐",
    },
    location: { hk: "福田／南山口岸 15 分鐘內可達", cn: "福田／南山口岸 15 分钟内可达" },
    perk: {
      hk: "專屬港客預約通道，提供繁體／中英報告解讀安排",
      cn: "专属港客预约通道，提供繁体／中英报告解读安排",
    },
    highlights: {
      hk: [
        "涵蓋無痛腸胃鏡、心腦血管、腫瘤標誌物等熱門項目",
        "價格約為香港私家醫院 1/3，環境舒適免久等",
        "1對1 協助對比項目清單，唔使盲目買貴套餐",
      ],
      cn: [
        "涵盖无痛肠胃镜、心脑血管、肿瘤标志物等热门项目",
        "价格约为香港私家医院 1/3，环境舒适免久等",
        "1对1 协助对比项目清单，不用盲目买贵套餐",
      ],
    },
    waMessage: "你好 Zero！我想查詢【深圳港人全身體檢 VIP 套餐】，想了解價目同預約時間。",
    statusTag: { hk: "合作籌備中 · 可先登記", cn: "合作筹备中 · 可先登记" },
  },
];

export const AFFILIATE_DEALS: AffiliateDeal[] = [
  {
    id: "deal-hotel-trip",
    category: "hotel",
    partner: "Trip.com",
    badge: { hk: "酒店訂房高回贈", cn: "酒店订房高回赠" },
    title: {
      hk: "深圳／珠海／澳門新酒店限時早鳥特價",
      cn: "深圳／珠海／澳门新酒店限时早鸟特价",
    },
    desc: {
      hk: "精選近福田口岸、深圳灣萬象城、前海及澳門路氹高評分酒店，預訂即享即時確認與免費取消選項。",
      cn: "精选近福田口岸、深圳湾万象城、前海及澳门路氹高评分酒店，预订即享即时确认与免费取消选项。",
    },
    code: "ZTG2026",
    url: "#coming-soon-trip",
    ready: false,
    ctaLabel: { hk: "查看酒店特價（即將接入連結）", cn: "查看酒店特价（即将接入链接）" },
  },
  {
    id: "deal-spa-klook",
    category: "spa",
    partner: "Klook",
    badge: { hk: "週末必買套票", cn: "周末必买套票" },
    title: {
      hk: "深圳人氣水療會所、室內滑雪及親子樂園門票",
      cn: "深圳人气水疗会所、室内滑雪及亲子乐园门票",
    },
    desc: {
      hk: "出發前網上買定套票一般比現場平 10%–25%，即買即出二維碼，免去現場內地手機認證煩惱。",
      cn: "出发前网上买好套票一般比现场便宜 10%–25%，即买即出二维码，免去现场内地手机认证烦恼。",
    },
    code: "KLOOKZTG",
    url: "#coming-soon-klook",
    ready: false,
    ctaLabel: { hk: "搶購玩樂門票（即將接入連結）", cn: "抢购玩乐门票（即将接入链接）" },
  },
  {
    id: "deal-card-gba",
    category: "card",
    partner: "北上神卡專區",
    badge: { hk: "迎新獎賞推介", cn: "迎新奖赏推介" },
    title: {
      hk: "港人北上免外幣手續費 ＋ 4% 現金回贈信用卡比較",
      cn: "港人北上免外币手续费 ＋ 4% 现金回赠信用卡比较",
    },
    desc: {
      hk: "整理最啱綁定 AlipayHK／WeChat Pay HK 及內地銀聯實體拍卡嘅熱門高回贈卡，幫你每次北上慳返手續費。",
      cn: "整理最适合绑定 AlipayHK／WeChat Pay HK 及内地银联实体拍卡的热门高回赠卡，帮你每次北上省下手续费。",
    },
    url: "#coming-soon-cards",
    ready: false,
    ctaLabel: { hk: "比較北上神卡（即將上線）", cn: "比较北上神卡（即将上线）" },
  },
  {
    id: "deal-esim",
    category: "esim",
    partner: "中港數據卡 / eSIM",
    badge: { hk: "免翻牆即插即用", cn: "免翻墙即插即用" },
    title: {
      hk: "大灣區 5G 免翻牆漫遊數據卡／eSIM 實測推介",
      cn: "大湾区 5G 免翻墙漫游数据卡／eSIM 实测推介",
    },
    desc: {
      hk: "過關自動切換高速 5G，直接上到 WhatsApp、Facebook、IG 同 Google Maps，唔使折騰 VPN。",
      cn: "过关自动切换高速 5G，直接打开 WhatsApp、Facebook、IG 和 Google Maps，不用折腾 VPN。",
    },
    url: "#coming-soon-esim",
    ready: false,
    ctaLabel: { hk: "查看上網卡優惠（即將上線）", cn: "查看上网卡优惠（即将上线）" },
  },
];

export function getDealsCopy(lang: Lang) {
  return lang === "hk"
    ? {
        eyebrow: "ZERO TO GROWTH · 港人北上著數與專屬通道",
        title: "北上優惠碼與 VIP 專屬預約",
        lead: "集合我們精選嘅深圳高質服務 VIP 預約通道，以及酒店、水療、上網卡與北上神卡優惠。所有連結持續更新，建議收藏本頁！",
        vipTitle: "高客單 VIP 專屬預約通道（1對1 貼身跟進）",
        vipSub: "唔使喺公開大群暴露私隱！撳入去直接 WhatsApp 聯絡，我們為你開啟 3 人專屬小群對接良心商家並跟進報價。",
        vipBtn: "WhatsApp 領取專屬福利",
        affTitle: "北上出發前必備：酒店・門票・神卡優惠",
        affSub: "點擊複製優惠碼或前往預訂（連結陸續更新中，歡迎先收藏本頁）",
        tabs: [
          { id: "all", label: "全部著數" },
          { id: "hotel", label: "酒店住宿" },
          { id: "spa", label: "水療玩樂" },
          { id: "card", label: "北上神卡" },
          { id: "esim", label: "上網卡" },
        ] as const,
        copyCode: "複製優惠碼",
        copied: "已複製",
        cardLegal: "忠告：借定唔借？還得到先好借！信用卡及金融產品條款、回贈上限及迎新獎賞以發卡機構最新公布為準。",
        groupCtaTitle: "仲未入 12,000 人港人北上交流群？",
        groupCtaDesc: "每日都有群友分享最新口岸實況、新店實測同限時著數，免費加入一齊傾！",
        groupCtaBtn: "加入 FB 12,000 人交流群",
        borderLink: "出發前睇實時口岸等候時間",
      }
    : {
        eyebrow: "ZERO TO GROWTH · 港人北上优惠与专属通道",
        title: "北上优惠码与 VIP 专属预约",
        lead: "集合我们精选的深圳高质服务 VIP 预约通道，以及酒店、水疗、上网卡与北上神卡优惠。所有链接持续更新，建议收藏本页！",
        vipTitle: "高客单 VIP 专属预约通道（1对1 贴身跟进）",
        vipSub: "无需在公开大群暴露隐私！点击直接 WhatsApp 联络，我们为你开启 3 人专属小群对接良心商家并跟进报价。",
        vipBtn: "WhatsApp 领取专属福利",
        affTitle: "北上出发前必备：酒店・门票・神卡优惠",
        affSub: "点击复制优惠码或前往预订（链接陆续更新中，欢迎先收藏本页）",
        tabs: [
          { id: "all", label: "全部优惠" },
          { id: "hotel", label: "酒店住宿" },
          { id: "spa", label: "水疗玩乐" },
          { id: "card", label: "北上神卡" },
          { id: "esim", label: "上网卡" },
        ] as const,
        copyCode: "复制优惠码",
        copied: "已复制",
        cardLegal: "提示：借定唔借？还得到先好借！信用卡及金融产品条款、回赠上限及迎新奖赏以发卡机构最新公布为准。",
        groupCtaTitle: "还没加入 12,000 人港人北上交流群？",
        groupCtaDesc: "每日都有群友分享最新口岸实况、新店实测与限时优惠，免费加入一起聊！",
        groupCtaBtn: "加入 FB 12,000 人交流群",
        borderLink: "出发前查看实时口岸等候时间",
      };
}
