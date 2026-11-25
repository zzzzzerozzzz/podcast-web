import type { Lang } from "./site-data";

export type GuideCity = "shenzhen" | "guangzhou" | "gba" | "transport";

export interface GuideArticle {
  slug: string;
  city: GuideCity;
  cityLabel: { hk: string; cn: string };
  category: { hk: string; cn: string };
  title: { hk: string; cn: string };
  excerpt: { hk: string; cn: string };
  img: string;
  updatedAt: string;
  readTime: string;
  fromHk: { hk: string; cn: string };
  nearestPort: { hk: string; cn: string };
  featured?: boolean;
  sections: {
    heading: { hk: string; cn: string };
    body: { hk: string; cn: string };
    bullets?: { hk: string[]; cn: string[] };
  }[];
  ctaType: "deals" | "border" | "whatsapp";
}

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    slug: "shenzhen-futian-hotels-2026",
    city: "shenzhen",
    cityLabel: { hk: "深圳", cn: "深圳" },
    category: { hk: "深圳酒店", cn: "深圳酒店" },
    title: {
      hk: "福田口岸高質酒店推介 2026｜近 COCO Park、卓悅中心過夜精選",
      cn: "福田口岸高质酒店推介 2026｜近 COCO Park、卓悦中心过夜精选",
    },
    excerpt: {
      hk: "過關 10 分鐘即到！整理福田區港人實測好評酒店清單，涵蓋高 CP 值商務酒店、親子房及週末輕奢之選。",
      cn: "过关 10 分钟即到！整理福田区港人实测好评酒店清单，涵盖高性价比商务酒店、亲子房及周末轻奢之选。",
    },
    img: "/scenes/mall-wide.jpg",
    updatedAt: "2026-11-24",
    readTime: "4 min",
    fromHk: { hk: "東鐵落馬洲站過關 → 地鐵 4 / 10 號線 2–4 個站", cn: "东铁落马洲站过关 → 地铁 4 / 10 号线 2–4 个站" },
    nearestPort: { hk: "福田口岸（落馬洲支線）", cn: "福田口岸（落马洲支线）" },
    featured: true,
    sections: [
      {
        heading: { hk: "點解港人過夜首選福田區？", cn: "为什么港人过夜首选福田区？" },
        body: {
          hk: "福田口岸連接香港東鐵綫，過關後直接駁深圳地鐵 4 號線及 10 號線，30 分鐘內去齊購物公園（COCO Park）、崗廈卓悅中心、皇庭廣場同水圍夜市，對兩日一夜週末行程最省時間。",
          cn: "福田口岸连接香港东铁线，过关后直接接驳深圳地铁 4 号线及 10 号线，30 分钟内逛遍购物公园（COCO Park）、岗厦卓悦中心、皇庭广场与水围夜市，对两天一夜周末行程最省时间。",
        },
      },
      {
        heading: { hk: "揀酒店 3 個港人不踩雷準則", cn: "选酒店 3 个港人不踩雷准则" },
        body: {
          hk: "訂房前建議重點檢查開業年份、地鐵距離同隔音評價（本頁之後將陸續補齊我們最新實拍酒店名單與獨家優惠連結）：",
          cn: "订房前建议重点检查开业年份、地铁距离与隔音评价（本页之后将陆续补齐我们最新实拍酒店名单与独家优惠链接）：",
        },
        bullets: {
          hk: [
            "優先揀 2023 年後新開或翻新酒店，冷氣同乾濕分離設計明顯更舒適",
            "落腳位揀「會展中心／崗廈／購物公園」站步行 5 分鐘內，宵夜返房最方便",
            "星期五、六房價浮動大，建議週三前喺 Trip.com／Klook 鎖定可免費取消房型",
          ],
          cn: [
            "优先选 2023 年后新开或翻新酒店，空调与干湿分离设计明显更舒适",
            "选址优先「会展中心／岗厦／购物公园」站步行 5 分钟内，夜宵回房最方便",
            "星期五、六房价浮动大，建议周三前在 Trip.com／Klook 锁定可免费取消房型",
          ],
        },
      },
    ],
    ctaType: "deals",
  },
  {
    slug: "shenzhen-tech-landmarks",
    city: "shenzhen",
    cityLabel: { hk: "深圳", cn: "深圳" },
    category: { hk: "爆款路線", cn: "爆款路线" },
    title: {
      hk: "深圳科技地標＋森林系商場一日遊｜29 萬人收藏口岸直達路線",
      cn: "深圳科技地标＋森林系商场一日游｜29 万人收藏口岸直达路线",
    },
    excerpt: {
      hk: "專頁近 30 日超過 29 萬觸及嘅爆款主題整理！由「深圳之眼」崗廈北出發，串連新開打卡商場與高人氣餐廳。",
      cn: "专页近 30 日超过 29 万触及的爆款主题整理！由「深圳之眼」岗厦北出发，串联新开打卡商场与高人气餐厅。",
    },
    img: "/posts/p1.jpg",
    updatedAt: "2026-11-24",
    readTime: "3 min",
    fromHk: { hk: "福田口岸過關 → 深圳地鐵 10 號線直達崗廈北站（約 12 分鐘）", cn: "福田口岸过关 → 深圳地铁 10 号线直达岗厦北站（约 12 分钟）" },
    nearestPort: { hk: "福田口岸", cn: "福田口岸" },
    sections: [
      {
        heading: { hk: "上午：崗廈北「深圳之眼」超現實建築打卡", cn: "上午：岗厦北「深圳之眼」超现实建筑打卡" },
        body: {
          hk: "福田口岸坐 10 號線僅 3 個站就到達崗廈北樞紐，免日曬雨淋，出口直接連通卓悅中心及多條地下商業街，係最輕鬆嘅第一站。",
          cn: "福田口岸坐 10 号线仅 3 个站就到达岗厦北枢纽，免日晒雨淋，出口直接连通卓悦中心及多条地下商业街，是最轻松的第一站。",
        },
      },
      {
        heading: { hk: "下午至晚上：商場探店＋水療放鬆", cn: "下午至晚上：商场探店＋水疗放松" },
        body: {
          hk: "建議下午轉乘地鐵前往南山／深圳灣萬象城或前海新商場歎精品咖啡同晚餐，晚上可直接安排 24 小時大型水療按腳過夜，翌日精神飽滿返港。",
          cn: "建议下午转乘地铁前往南山／深圳湾万象城或前海新商场享精品咖啡和晚餐，晚上可直接安排 24 小时大型水疗按摩过夜，次日精神饱满返港。",
        },
      },
    ],
    ctaType: "deals",
  },
  {
    slug: "guangzhou-beijing-road-weekend",
    city: "guangzhou",
    cityLabel: { hk: "廣州", cn: "广州" },
    category: { hk: "廣州攻略", cn: "广州攻略" },
    title: {
      hk: "廣州北京路兩日一夜美食散步路線｜西九高鐵直達老字號精選",
      cn: "广州北京路两天一夜美食散步路线｜西九高铁直达老字号精选",
    },
    excerpt: {
      hk: "專頁 25 萬瀏覽爆款攻略完整文字版！由香港西九龍搭高鐵出發，輕鬆掃盡北京路騎樓老字號與珠江夜景。",
      cn: "专页 25 万浏览爆款攻略完整文字版！由香港西九龙搭高铁出发，轻松扫尽北京路骑楼老字号与珠江夜景。",
    },
    img: "/posts/p2.jpg",
    updatedAt: "2026-11-24",
    readTime: "4 min",
    fromHk: { hk: "香港西九龍高鐵 → 廣州東站（約 1 小時 35 分）→ 地鐵直達北京路", cn: "香港西九龙高铁 → 广州东站（约 1 小时 35 分）→ 地铁直达北京路" },
    nearestPort: { hk: "西九龍高鐵站 / 羅湖轉動車", cn: "西九龙高铁站 / 罗湖转动车" },
    sections: [
      {
        heading: { hk: "點解揀廣州東站而唔係廣州南？", cn: "为什么选广州东站而不是广州南？" },
        body: {
          hk: "香港西九龍直達廣州東站落車已經係市中心天河區，搭地鐵去北京路、越秀同東山口快過廣州南站接近半個鐘，周末兩日一夜首選！",
          cn: "香港西九龙直达广州东站下车已经是市中心天河区，搭地铁去北京路、越秀和东山口比广州南站快将近半小时，周末两天一夜首选！",
        },
      },
      {
        heading: { hk: "北京路＋大佛古寺慢遊貼士", cn: "北京路＋大佛古寺慢游贴士" },
        body: {
          hk: "傍晚 6 點半至 7 點大佛古寺亮燈最靚，建議先喺附近文明路食燉湯甜品，再行去北京路步行街感受騎樓夜景，行程節奏剛剛好。",
          cn: "傍晚 6 点半至 7 点大佛古寺亮灯最美，建议先在附近文明路喝炖汤吃甜品，再走到北京路步行街感受骑楼夜景，行程节奏刚刚好。",
        },
      },
    ],
    ctaType: "deals",
  },
  {
    slug: "shenzhen-spa-overnight-guide",
    city: "shenzhen",
    cityLabel: { hk: "深圳", cn: "深圳" },
    category: { hk: "水療過夜", cn: "水疗过夜" },
    title: {
      hk: "深圳過夜水療會所實測比較｜水果任食、口岸免費接駁與避坑貼士",
      cn: "深圳过夜水疗会所实测比较｜水果任吃、口岸免费接驳与避坑贴士",
    },
    excerpt: {
      hk: "星期五放工即上深圳按腳過夜！整理羅湖、福田、南山大型水療消費模式、小費規矩同網上預訂慳錢貼士。",
      cn: "星期五下班即上深圳按摩过夜！整理罗湖、福田、南山大型水疗消费模式、小费规矩与网上预订省钱贴士。",
    },
    img: "/guides/guide-spa-shenzhen.jpg",
    updatedAt: "2026-11-24",
    readTime: "4 min",
    fromHk: { hk: "福田／羅湖／皇崗口岸過關即有專車或地鐵 1–2 個站", cn: "福田／罗湖／皇岗口岸过关即有专车或地铁 1–2 个站" },
    nearestPort: { hk: "福田口岸 / 皇崗口岸（24 小時）", cn: "福田口岸 / 皇岗口岸（24 小时）" },
    sections: [
      {
        heading: { hk: "第一次去深圳過夜水療要帶咩？", cn: "第一次去深圳过夜水疗要带什么？" },
        body: {
          hk: "記得帶齊回鄉證（過夜必須實名登記），其餘拖鞋、浴服、洗護用品同充電線場內一般齊全。建議提前喺網上買好 24 小時淨桑套票再入閘更抵玩。",
          cn: "记得带齐回乡证（过夜必须实名登记），其余拖鞋、浴服、洗护用品和充电线场内一般齐全。建议提前在网上买好 24 小时净桑套票再入场更划算。",
        },
      },
    ],
    ctaType: "deals",
  },
  {
    slug: "hk-northbound-credit-cards",
    city: "gba",
    cityLabel: { hk: "北上慳錢", cn: "北上省钱" },
    category: { hk: "北上神卡", cn: "北上神卡" },
    title: {
      hk: "港人北上消費神卡實測｜避開 1.95% 外幣手續費＋支付綁卡教學",
      cn: "港人北上消费神卡实测｜避开 1.95% 外币手续费＋支付绑卡教学",
    },
    excerpt: {
      hk: "北上食飯住酒店唔好亂碌卡！教你配搭 AlipayHK、WeChat Pay HK 同免手續費銀聯／現金回贈卡，每程慳返幾百蚊。",
      cn: "北上吃饭住酒店不要乱刷卡！教你搭配 AlipayHK、WeChat Pay HK 与免手续费银联／现金回赠卡，每程省回几百元。",
    },
    img: "/guides/guide-credit-card-hk.jpg",
    updatedAt: "2026-11-24",
    readTime: "3 min",
    fromHk: { hk: "出發前於香港手機預先完成綁卡及實名認證", cn: "出发前于香港手机预先完成绑卡及实名认证" },
    nearestPort: { hk: "全港各口岸適用", cn: "全港各口岸适用" },
    sections: [
      {
        heading: { hk: "點解唔好直接用普通 Visa/Master 碌人民幣？", cn: "为什么不要直接用普通 Visa/Master 刷人民币？" },
        body: {
          hk: "香港大部分普通 Visa／Mastercard 簽外幣會收 1.95% 跨境手續費，計埋匯率差價隨時蝕 2.5%！改用免外幣手續費銀聯雙幣卡，或者高回贈指定卡綁定電子錢包，長遠慳極多。（借定唔借？還得到先好借！）",
          cn: "香港大部分普通 Visa／Mastercard 刷外币会收 1.95% 跨境手续费，加上汇率差价随时亏 2.5%！改用免外币手续费银联双币卡，或者高回赠指定卡绑定电子钱包，长远省很多。（提示：借定唔借？还得到先好借！）",
        },
      },
    ],
    ctaType: "deals",
  },
  {
    slug: "shenzhen-port-transport-handbook",
    city: "transport",
    cityLabel: { hk: "口岸交通", cn: "口岸交通" },
    category: { hk: "過關工具", cn: "过关工具" },
    title: {
      hk: "香港 8 大陸路口岸過關全攻略｜去福田、南山、鹽田邊個最快？",
      cn: "香港 8 大陆路口岸过关全攻略｜去福田、南山、盐田哪个最快？",
    },
    excerpt: {
      hk: "週末過關唔想排長龍？一文對比羅湖、福田、深圳灣、蓮塘、皇崗同港珠澳大橋開放時間與最佳落腳點。",
      cn: "周末过关不想排长队？一文对比罗湖、福田、深圳湾、莲塘、皇岗和港珠澳大桥开放时间与最佳落脚点。",
    },
    img: "/scenes/border-real.jpg",
    updatedAt: "2026-11-24",
    readTime: "3 min",
    fromHk: { hk: "出發前先睇本網實時口岸等候時間看板", cn: "出发前先看本网实时口岸等候时间看板" },
    nearestPort: { hk: "全港 8 大陸路口岸", cn: "全港 8 大陆路口岸" },
    sections: [
      {
        heading: { hk: "按目的地秒選口岸", cn: "按目的地秒选口岸" },
        body: {
          hk: "去福田食買玩首選落馬洲支線（福田口岸）；去深圳灣萬象城、海岸城同前海必行深圳灣口岸；去鹽田睇海食海鮮行香園圍（蓮塘口岸）最順路；凌晨返港則記住皇崗口岸 24 小時開放。",
          cn: "去福田吃喝玩乐首选落马洲支线（福田口岸）；去深圳湾万象城、海岸城和前海必走深圳湾口岸；去盐田看海吃海鲜走香园围（莲塘口岸）最顺路；凌晨返港则记住皇岗口岸 24 小时开放。",
        },
      },
    ],
    ctaType: "border",
  },
];

export function getGuidesCopy(lang: Lang) {
  return lang === "hk"
    ? {
        eyebrow: "WEEKEND BORDER HANDBOOK",
        title: "港人北上實測攻略庫",
        lead: "每篇都附由香港出發嘅真實口岸與地鐵交通路線。集中收錄高質酒店、爆款打卡地標、水療過夜與北上慳錢貼士（將隨我們最新實拍持續擴充）。",
        tabs: [
          { id: "all", label: "全部攻略" },
          { id: "shenzhen", label: "深圳" },
          { id: "guangzhou", label: "廣州" },
          { id: "gba", label: "北上慳錢" },
          { id: "transport", label: "口岸交通" },
        ] as const,
        readMore: "閱讀完整攻略",
        backToList: "返回攻略庫",
        fromHkLabel: "由香港點去",
        nearestPortLabel: "建議口岸",
        updatedLabel: "更新",
        checkBorderBtn: "查實時口岸等候時間",
        goDealsBtn: "領取北上著數與 VIP 預約",
        comingNote: "想第一時間收到新店實測同酒店優惠？歡迎免費加入我們 12,000 人 FB 港人北上交流群！",
      }
    : {
        eyebrow: "WEEKEND BORDER HANDBOOK",
        title: "港人北上实测攻略库",
        lead: "每篇都附由香港出发的真实口岸与地铁交通路线。集中收录高质酒店、爆款打卡地标、水疗过夜与北上省钱贴士（将随我们最新实拍持续扩充）。",
        tabs: [
          { id: "all", label: "全部攻略" },
          { id: "shenzhen", label: "深圳" },
          { id: "guangzhou", label: "广州" },
          { id: "gba", label: "北上省钱" },
          { id: "transport", label: "口岸交通" },
        ] as const,
        readMore: "阅读完整攻略",
        backToList: "返回攻略库",
        fromHkLabel: "由香港怎么去",
        nearestPortLabel: "建议口岸",
        updatedLabel: "更新",
        checkBorderBtn: "查实时口岸等候时间",
        goDealsBtn: "领取北上优惠与 VIP 预约",
        comingNote: "想第一时间收到新店实测与酒店优惠？欢迎免费加入我们 12,000 人 FB 港人北上交流群！",
      };
}
