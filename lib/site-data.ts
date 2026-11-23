export type Lang = "hk" | "cn";

export const WA_NUMBER = "85266925445";
export const WA_QR = "https://wa.me/qr/RFLV47X75BYHI1";
export const waLink = (msg?: string) =>
  WA_NUMBER
    ? `https://wa.me/${WA_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`
    : WA_QR;

export interface TopPost {
  id: string;
  img: string;
  name: string;
  tag: string;
  platform: string;
  reach: number;
  likes: number;
  shares: number;
  hot?: boolean;
  caption: string;
}

export interface MediaChannel {
  name: string;
  fans: string;
  fansNum: number;
  tier: "主力" | "補位" | "补位" | "私域" | "IG";
  platform: "Facebook 專頁" | "Facebook 专页" | "Facebook 群組" | "Facebook 群组" | "Instagram";
  note: string;
  url: string;
}

export interface PricingPackage {
  id: string;
  tag: string;
  name: string;
  monthlyPrice: number;
  who: string;
  hook: string;
  specs: [string, string][];
  items: string[];
  footnote: string;
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const SITE_DATA = {
  hk: {
    brand: "Zero to Growth",
    brandSub: "港人北上內容創作工作室",
    nav: [
      { label: "數據實績", href: "#metrics" },
      { label: "爆款作品", href: "#works" },
      { label: "媒體陣容", href: "#lineup" },
      { label: "合作方案", href: "#pricing" },
      { label: "常見問題", href: "#faq" },
    ],
    navCta: "WhatsApp 問價",
    heroEyebrow: "ZERO TO GROWTH STUDIO · 港人北上生活美食矩陣",
    h1Line1: "香港人週末去哪吃玩，",
    h1Line2: "在決定前先看見你。",
    tagline:
      "我們是土生土長的香港美食旅遊內容團隊，經營 3 個 FB 專頁、2 個 IG 及 12,000 人北上交流群。用港人真正愛看、主動轉發的內容，把深圳與大灣區好店帶到香港客人眼前。",
    dateNote: "Meta 官方後台實測數據 · 更新至 2026-11-23",
    ctaHero: "WhatsApp 直接問價",
    ctaSecondary: "瀏覽合作方案",
    heroProof: [
      { v: "6 個", l: "官方媒體渠道同步" },
      { v: "100%", l: "初稿預審確認上線" },
      { v: "3–5 日", l: "平均快速上線交付" },
    ],
    reelDeckLabel: "實測爆款動態預覽",
    reelDeckHint: "點擊切換作品",
    reelBadgeTop: "單條最高曝光 250,000+",
    reelBadgeBottom: "演算法自然外溢破圈",
    marqueeItems: [
      "大灣區週末探店",
      "28日 879萬真實瀏覽",
      "40,980+ 公開矩陣粉絲",
      "12,000人 港人私域群組",
      "單條 Reel 最高 25萬+ 曝光",
      "粵語原聲配音 · 港式地道語境",
      "深圳美食 · 商場展覽 · 酒店民宿",
      "初稿 100% 商家預審",
    ],
    stats: [
      { value: 40980, suffix: "+", label: "公開矩陣總粉絲", sub: "3 大 FB 專頁 32,500 ＋ 2 個 IG 8,480" },
      { value: 879, suffix: "萬", label: "28 日總瀏覽量", sub: "兩大主力專頁 Meta 官方實測" },
      { value: 25, suffix: "萬+", label: "單條爆款 Reel 曝光", sub: "演算法自然破圈，超越粉絲數" },
      { value: 12000, suffix: "", label: "私域北上交流群", sub: "高活躍港人週末消費決策社群" },
    ],
    sellingEyebrow: "WHY CREATOR MATRIX",
    sellingTitle: "為什麼商家找我們，而不只投硬廣告？",
    sellingLead: "港人北上有一套非常固定的週末消費節奏：週四計劃、週五蒐集攻略、週六日過關消費。我們就是他們週五晚上滑手機時，最常看到的香港本地博主。",
    sceneCaption: "深圳灣黃金日落 · 週末港人北上消費熱潮",
    points: [
      {
        num: "01",
        title: "精準踩在「出發前 24 小時」的決策窗口",
        body: "依自家 174 篇實測帖文數據，港人週末北上集中在週四晚至週五晚蒐集資訊。你的餐廳、商場或展覽內容，正好在他們決定行程的那一刻出現。",
      },
      {
        num: "02",
        title: "港式真實語境，引爆自然轉發與二次推流",
        body: "相比生硬廣告容易被秒滑走，我們的粵語短影音 Reel 常規播放 5–15 萬次、單條最高突破 25 萬曝光；單帖最高 4,267 次轉發，讓香港人主動 Tag 朋友一起去。",
      },
      {
        num: "03",
        title: "12,000 人私域群組直達＋可置頂長尾曝光",
        body: "除了公域專頁與 IG，還能直接發布至 12,000 名活躍討論「深圳食玩買」的香港交流群，並支援置頂 3–14 天持續導流，這是傳統付費廣告買不到的深度信任。",
      },
    ],
    cpmTitle: "一眼看懂：傳統 Meta 廣告 vs 本矩陣推廣",
    cpmSub: "以單波 10–20 萬港人曝光為基準估算",
    cpmTraditional: {
      label: "傳統 Meta 付費廣告（含代理費）",
      cost: "約 HK$80",
      unit: "/ 每千次曝光 (CPM)",
      total: "實支約 HK$9,000 – 19,200",
      desc: "另加 12–20% 代理費，受眾設定與素材拍攝仍需自行負擔，且硬廣告天然防備心較高。",
    },
    cpmMatrix: {
      label: "Zero to Growth 港人創作者矩陣",
      cost: "低至 HK$0.3 起",
      unit: "/ 每千次港客觸達",
      total: "全月霸屏方案僅 HK$2,800",
      desc: "免另付媒體費，包含寫稿、粵語配音、繁體字幕剪輯與 6 個官方渠道同步發布，自帶老牌專頁口碑背書。",
    },
    dashEyebrow: "VERIFIED PERFORMANCE",
    dashTitle: "28 天真實增長實錄",
    bigLine: "28 天，兩個主力專頁，在香港人的手機屏幕上出現了 879 萬次。",
    dashSum: "兩頁合計 30.2 萬次真實互動、新增 13,827 位香港追蹤者，日均曝光超過 31 萬次，近 30 日維持 92 帖高頻內容輸出。",
    dashProofBtn: "查閱 Meta 商務套件後台佐證",
    dashModalTitle: "Meta 商務套件 · 28 天實時後台數據佐證",
    dashModalNote: "截圖取自大灣區北上攻略情報站創作者後台（聚焦核心流量：瀏覽次數 465 萬 ↑160%、互動 147,595 ↑56%、追蹤 +7,497 ↑233%）。合作後將提供完整專屬數據報告。",
    dashes: [
      {
        name: "大灣區北上攻略情報站",
        fans: "14,000 追蹤",
        badge: "核心主力頁",
        growthPct: 88,
        nums: [
          { v: "465萬", l: "28 日瀏覽", delta: "↑160%" },
          { v: "147,595", l: "真實互動", delta: "↑56%" },
          { v: "+7,497", l: "新增追蹤", delta: "↑233%" },
        ],
      },
      {
        name: "深圳美食住宿｜港人北上攻略",
        fans: "8,500 追蹤",
        badge: "爆發增長頁",
        growthPct: 96,
        nums: [
          { v: "414萬", l: "28 日瀏覽", delta: "↑293%" },
          { v: "154,612", l: "真實互動", delta: "↑233%" },
          { v: "+6,330", l: "新增追蹤", delta: "↑708%" },
        ],
      },
    ],
    worksEyebrow: "CASE & VIRAL PORTFOLIO",
    caseLabel: "商業實戰案例",
    caseName: "史前星球恐龍展（深圳灣萬象城 BASE）· 2026-09",
    caseNums: [
      { v: "13,186", l: "48 小時真實觀看" },
      { v: "85 條", l: "主動留言／私訊查詢" },
      { v: "1.3×", l: "自然觀看 ÷ 粉絲破圈率" },
    ],
    caseBody:
      "單條推廣帖即帶動大量香港家庭查詢「票價與交通」，我們在貼文與留言區直接整合福田／羅湖口岸轉乘 11 號線後海站的完整攻略，大幅降低港客前往門檻。",
    topTitle: "近 30 日爆款代表作",
    topSub: "點擊作品卡片可放大檢視完整互動表現",
    likeWord: "讚好",
    shareWord: "轉發分享",
    reachWord: "接觸人次",
    topPosts: [
      {
        id: "p1",
        img: "/posts/p1.jpg",
        name: "深圳科技地標打卡攻略",
        tag: "TOP 1 爆款",
        platform: "FB 專頁 · 圖文/攻略",
        reach: 290000,
        likes: 2640,
        shares: 4267,
        hot: true,
        caption: "超過 4,200 次港人主動轉發給親友收藏，帶動演算法連續多日自然破圈推流。",
      },
      {
        id: "p2",
        img: "/posts/p2.jpg",
        name: "廣州北京路美食散步路線",
        tag: "25萬+ 曝光",
        platform: "FB 專頁 · 深度路線",
        reach: 250000,
        likes: 2047,
        shares: 3026,
        caption: "精準擊中港人週末兩日一夜短途遊需求，高互動率與高收藏率代表作。",
      },
      {
        id: "p3",
        img: "/posts/p3.jpg",
        name: "深圳森林系商場逛街指南",
        tag: "19萬 曝光",
        platform: "FB ＋ IG 同步",
        reach: 190000,
        likes: 854,
        shares: 214,
        caption: "鎖定週末親子與情侶逛街客群，精準導入商場餐飲與打卡點。",
      },
      {
        id: "p5",
        img: "/posts/p5.jpg",
        name: "鹽田海濱一日遊實測",
        tag: "9.3萬 曝光",
        platform: "FB 專頁 · 實測攻略",
        reach: 93000,
        likes: 593,
        shares: 97,
        caption: "涵蓋口岸交通、打卡位與海邊美食，貼近香港讀者實際行程痛點。",
      },
    ] as TopPost[],
    lineupEyebrow: "OUR MEDIA NETWORK",
    lineupTitle: "完整媒體陣容（點擊即可查驗主頁）",
    lineupSub: "6 個真實運營中的香港受眾渠道，透明公開，歡迎隨時點擊瀏覽內容風格與互動熱度。",
    lineupVisit: "查看主頁",
    lineupNote: "註：主力專頁每日高頻更新、演算法推流最穩定；老牌補位專頁按題材對口進行精準加推，確保不洗版且維持高轉換率。",
    lineup: [
      {
        name: "大灣區北上攻略情報站",
        fans: "14,000",
        fansNum: 14000,
        tier: "主力",
        platform: "Facebook 專頁",
        note: "大灣區美食旅遊攻略與爆款短片核心主力頁（28 日 465 萬瀏覽）",
        url: "https://www.facebook.com/chinatravelhack",
      },
      {
        name: "深圳美食住宿｜港人北上攻略",
        fans: "8,500",
        fansNum: 8500,
        tier: "主力",
        platform: "Facebook 專頁",
        note: "專注深圳探店與住宿酒店，28 日追蹤增長 +708% 爆發中",
        url: "https://www.facebook.com/szguide.hk",
      },
      {
        name: "廣東美食旅遊攻略",
        fans: "10,000",
        fansNum: 10000,
        tier: "補位",
        platform: "Facebook 專頁",
        note: "廣東省深度美食旅遊老牌專頁，題材對口時進行精準補量",
        url: "https://www.facebook.com/guangdong.food.stories",
      },
      {
        name: "深圳食玩買攻略｜廣州美食好去處｜港人北上交流",
        fans: "約 12,000",
        fansNum: 12000,
        tier: "私域",
        platform: "Facebook 群組",
        note: "高黏著度香港北上討論社群，情報帖直達並支援精華置頂",
        url: "https://www.facebook.com/groups/shenzhenguangzhouhktravel",
      },
      {
        name: "@cantonesefoodtravelguide",
        fans: "4,775",
        fansNum: 4775,
        tier: "IG",
        platform: "Instagram",
        note: "廣東／深圳短影音同步發布，鎖定年輕香港消費群（兩月 +36%）",
        url: "https://www.instagram.com/cantonesefoodtravelguide/",
      },
      {
        name: "@chinatravelhack",
        fans: "3,705",
        fansNum: 3705,
        tier: "IG",
        platform: "Instagram",
        note: "中國旅遊與口岸攻略短影音同步（兩月 +24%）",
        url: "https://www.instagram.com/chinatravelhack/",
      },
    ] as MediaChannel[],
    stepsEyebrow: "SIMPLE WORKFLOW",
    stepsTitle: "三步輕鬆上線，你只需確認稿件與成片",
    stepsKicker: "確認合作後，平均 3–5 個工作日即可上線曝光",
    steps: [
      {
        n: "01",
        t: "港式語境撰稿預審",
        b: "按香港人閱讀習慣撰寫標題與賣點，初稿可按你的意見修改，100% 確認滿意才進入發布。",
      },
      {
        n: "02",
        t: "素材後製與粵語配音",
        b: "商家只需手機拍 3–5 段素材（附拍攝清單），或加購深圳上門實拍；我們全包剪輯、港式粵語配音與繁體字幕。",
      },
      {
        n: "03",
        t: "全矩陣發布與數據復盤",
        b: "按黃金時段於 FB 專頁、IG 及 12,000 人私域群同步上線，發布後 7–14 日交回官方後台數據報告。",
      },
    ],
    midCtaTitle: "不確定哪個方案最適合你的店？直接問一句最快。",
    midCtaBody: "告訴我們你的門店類型、位置與預計推廣時間，我們 24 小時內給你一份度身建議（該發幾條、預算多少、預期效果），問完完全不勉強落單。",
    midCtaBtn: "WhatsApp 免費諮詢",
    midCtaMsg: "港人北上媒體矩陣｜想問邊個方案適合我",
    priceEyebrow: "TRANSPARENT PRICING",
    priceTitle: "透明合作方案（HK$）",
    priceSub: "無隱藏媒體費，所有套餐皆包含港式文案、排版／後製與商家預審保障。",
    billingMonthly: "單月合作",
    billingQuarterly: "季付 3 個月",
    billingBadge: "限時 85 折",
    perMonth: "/ 月",
    quarterlySavePrefix: "季付共省 HK$",
    quarterlyNote: "按 3 個月預付計算（原價 85 折）",
    singleTitle: "單項加購與零散服務價目",
    bookNow: "預約此方案",
    payNote: "素材由商家提供（手機拍 3–5 段即可，附指引）｜我們全包寫稿、粵語配音、繁體字幕、剪輯與投放｜深圳上門拍攝可加購（+$1,200／次，東莞 +$400）",
    addons: "另設加購：原片商業素材授權 +30–50%（可供商家自用於小紅書／抖音／官方廣告投放）",
    singles: [
      ["專頁深度圖文帖（1 專頁 1 帖）", "$500 – 800"],
      ["專頁短影音 Reel（60–90 秒，含粵語配音與繁體字幕）", "$800 – 1,500"],
      ["探店體驗合作（商家提供餐飲或門票）", "互惠 ＋ $300 – 600"],
      ["12,000 人私域群組情報帖", "$300 – 800"],
      ["群組精華置頂 7 天 ／ 14 天", "+$600 ／ +$1,000"],
      ["IG 帳號同步加購", "+$200 ／ 帖"],
      ["上門實地拍攝（限深圳，東莞 +$400）", "$1,200 ／ 次"],
    ] as [string, string][],
    packages: [
      {
        id: "starter",
        tag: "首單試水",
        name: "輕量試水組",
        monthlyPrice: 588,
        who: "未做過港客推廣、想用最低門檻測試香港客流反應的單店或新品牌。",
        hook: "平均每個平台只需 $196，全站最輕鬆的起步方案。",
        specs: [
          ["內容產出", "1 次"],
          ["曝光渠道", "3 個平台"],
          ["單平台均價", "$196"],
        ],
        items: [
          "FB 主力或老牌專頁深度圖文 1 帖（地道港式語境）",
          "同品牌 IG 帳號同步發布 1 帖（不另收費）",
          "12,000 人私域交流群情報帖 1 帖",
          "初稿 100% 商家預審修改，滿意才上線",
        ],
        footnote: "限新客戶首單體驗一次",
      },
      {
        id: "biweekly",
        tag: "兩週引爆 · 活動首選",
        name: "雙週爆點組",
        monthlyPrice: 1680,
        who: "新店開幕、期間限定、節慶優惠，需要在兩星期內快速打響香港知名度的商家。",
        hook: "兩星期密集上線 3 條內容，圖文＋粵語短片雙管齊下。",
        specs: [
          ["內容產出", "3 次"],
          ["曝光渠道", "6 個平台"],
          ["單平台均價", "$280"],
        ],
        items: [
          "1 條港式粵語配音短影音（Reel）＋ 2 篇深度圖文，兩週內全上線",
          "商家僅需手機拍 3–5 段素材（附專屬拍攝清單）",
          "全套後製：粵語配音、繁體字幕、快節奏剪輯與圖文排版",
          "12,000 人私域群組精華置頂 3 天持續曝光",
        ],
        footnote: "適合短期活動與新店造勢",
      },
      {
        id: "monthly",
        tag: "最多商家選擇 · 性價比之王",
        name: "全月霸屏組",
        monthlyPrice: 2800,
        who: "商場活動、大型展覽、連鎖餐飲品牌或主力衝刺單月港客營業額的商家。",
        hook: "全月每週都有新內容在跑，每個平台均價低至 $233。",
        specs: [
          ["內容產出", "6 次"],
          ["曝光渠道", "12 平台次"],
          ["單平台均價", "$233"],
        ],
        items: [
          "3 條粵語 Reel 短片 ＋ 3 篇深度圖文，覆蓋全矩陣所有專頁與 IG",
          "科學排期：兩大主力專頁各 4 次 ＋ 廣東老牌頁 2 次，不洗版且全月霸屏",
          "12,000 人私域群組發布 2 帖並享全月置頂",
          "完整月度 Meta 官方 API 數據復盤報告",
        ],
        footnote: "月度上限 12 平台次全覆蓋",
        featured: true,
      },
    ] as PricingPackage[],
    faqEyebrow: "COMMON QUESTIONS",
    faqTitle: "商家最常問的 5 個問題",
    faqs: [
      {
        q: "我們店在深圳／大灣區，沒有香港團隊拍片怎麼辦？",
        a: "完全沒問題！90% 的合作商家都是用手機照著我們的「3 分鐘拍攝清單」拍 3–5 段店面與招牌菜實景發過來，我們香港團隊會負責全部寫稿、剪輯、港式粵語配音與繁體字幕。如需專人到店拍攝，深圳地區亦可加購上門拍攝（+$1,200／次）。",
      },
      {
        q: "貼文和短片會用繁體中文和廣東話嗎？初稿可以修改嗎？",
        a: "是的，全站內容均由香港團隊以地道港式繁體中文與粵語配音製作，貼近香港人真實用語。所有文案與影片初稿都會先發給商家預審，可按合理意見修改，100% 確認滿意後才正式發布。",
      },
      {
        q: "發布後的貼文和短影音會保留多久？",
        a: "合作發布的所有專頁圖文與 Reel 短片均會永久保留於專頁與 IG 帳號中，持續享受搜尋與演算法長尾流量（不會到期下架）；群組置頂則按所選方案天數執行。",
      },
      {
        q: "支援哪些付款方式？可以提供收據嗎？",
        a: "支援港幣（轉數快 FPS／銀行轉帳）及人民幣結算（微信支付／支付寶），方便香港及內地大灣區商家安排，並可按需要提供正式商業收據（Receipt）。",
      },
      {
        q: "確認合作後，最快多久可以上線？",
        a: "收到商家素材與確認資料後，圖文一般 3 個工作日內出初稿，短影音 4–5 個工作日內出初稿；確認後可即時排入週四晚或週五晚的港人週末決策黃金檔期發布。",
      },
    ] as FaqItem[],
    ctaEyebrow: "LET'S GROW TOGETHER",
    ctaLine: "把你的好店，帶到香港人週末清單第一頁",
    ctaContact: "香港本土團隊 · 繁簡雙語溝通 · 24 小時內必覆",
    qrWechat: "微信掃碼直接聯絡",
    qrWa: "WhatsApp 掃碼諮詢",
    qrWaBtn: "點擊立即開啟 WhatsApp 問價",
    mailLabel: "商務電郵",
    stickyTitle: "想了解最適合的方案？",
    stickyNote: "香港團隊 · 24 小時內回覆",
    stickyBtn: "WhatsApp 問價",
    footer:
      "條款說明：初稿經商家預審確認後上線；商業合作帖文依 Meta 官方政策規範標註。支援月度／季度長期合作與品牌客製方案。數據更新至 2026-11-23。",
  },
  cn: {
    brand: "Zero to Growth",
    brandSub: "港人北上内容创作工作室",
    nav: [
      { label: "数据实绩", href: "#metrics" },
      { label: "爆款作品", href: "#works" },
      { label: "媒体阵容", href: "#lineup" },
      { label: "合作方案", href: "#pricing" },
      { label: "常见问题", href: "#faq" },
    ],
    navCta: "WhatsApp 问价",
    heroEyebrow: "ZERO TO GROWTH STUDIO · 港人北上生活美食矩阵",
    h1Line1: "香港人周末去哪吃玩，",
    h1Line2: "在决定前先看见你。",
    tagline:
      "我们是土生土长的香港美食旅游内容团队，运营 3 个 FB 专页、2 个 IG 及 12,000 人北上交流群。用港人真正爱看、主动转发的内容，把深圳与大湾区好店带到香港客人眼前。",
    dateNote: "Meta 官方后台实测数据 · 更新至 2026-11-23",
    ctaHero: "WhatsApp 直接问价",
    ctaSecondary: "浏览合作方案",
    heroProof: [
      { v: "6 个", l: "官方媒体渠道同步" },
      { v: "100%", l: "初稿预审确认上线" },
      { v: "3–5 日", l: "平均快速上线交付" },
    ],
    reelDeckLabel: "实测爆款动态预览",
    reelDeckHint: "点击切换作品",
    reelBadgeTop: "单条最高曝光 250,000+",
    reelBadgeBottom: "算法自然外溢破圈",
    marqueeItems: [
      "大湾区周末探店",
      "28日 879万真实浏览",
      "40,980+ 公开矩阵粉丝",
      "12,000人 港人私域群组",
      "单条 Reel 最高 25万+ 曝光",
      "粤语原声配音 · 港式地道语境",
      "深圳美食 · 商场展览 · 酒店民宿",
      "初稿 100% 商家预审",
    ],
    stats: [
      { value: 40980, suffix: "+", label: "公开矩阵总粉丝", sub: "3 大 FB 专页 32,500 ＋ 2 个 IG 8,480" },
      { value: 879, suffix: "万", label: "28 日总浏览量", sub: "两大主力专页 Meta 官方实测" },
      { value: 25, suffix: "万+", label: "单条爆款 Reel 曝光", sub: "算法自然破圈，超越粉丝数" },
      { value: 12000, suffix: "", label: "私域北上交流群", sub: "高活跃港人周末消费决策社群" },
    ],
    sellingEyebrow: "WHY CREATOR MATRIX",
    sellingTitle: "为什么商家找我们，而不只投硬广告？",
    sellingLead: "港人北上有一套非常固定的周末消费节奏：周四计划、周五搜集攻略、周六日过关消费。我们就是他们周五晚上刷手机时，最常看到的香港本地博主。",
    sceneCaption: "深圳湾黄金日落 · 周末港人北上消费热潮",
    points: [
      {
        num: "01",
        title: "精准踩在「出发前 24 小时」的决策窗口",
        body: "依自家 174 篇实测帖文数据，港人周末北上集中在周四晚至周五晚搜集资讯。你的餐厅、商场或展览内容，正好在他们决定行程的那一刻出现。",
      },
      {
        num: "02",
        title: "港式真实语境，引爆自然转发与二次推流",
        body: "相比生硬广告容易被秒划走，我们的粤语短视频 Reel 常规播放 5–15 万次、单条最高突破 25 万曝光；单帖最高 4,267 次转发，让香港人主动 @ 朋友一起去。",
      },
      {
        num: "03",
        title: "12,000 人私域群组直达＋可置顶长尾曝光",
        body: "除了公域专页与 IG，还能直接发布至 12,000 名活跃讨论「深圳吃喝玩乐」的香港交流群，并支持置顶 3–14 天持续导流，这是传统付费广告买不到的深度信任。",
      },
    ],
    cpmTitle: "一眼看懂：传统 Meta 广告 vs 本矩阵推广",
    cpmSub: "以单波 10–20 万港人曝光为基准估算",
    cpmTraditional: {
      label: "传统 Meta 付费广告（含代理费）",
      cost: "约 HK$80",
      unit: "/ 每千次曝光 (CPM)",
      total: "实支约 HK$9,000 – 19,200",
      desc: "另加 12–20% 代理费，受众设定与素材拍摄仍需自行负担，且硬广告天然防备心较高。",
    },
    cpmMatrix: {
      label: "Zero to Growth 港人创作者矩阵",
      cost: "低至 HK$0.3 起",
      unit: "/ 每千次港客触达",
      total: "全月霸屏方案仅 HK$2,800",
      desc: "免另付媒体费，包含写稿、粤语配音、繁体字幕剪辑与 6 个官方渠道同步发布，自带老牌专页口碑背书。",
    },
    dashEyebrow: "VERIFIED PERFORMANCE",
    dashTitle: "28 天真实增长实录",
    bigLine: "28 天，两个主力专页，在香港人的手机屏幕上出现了 879 万次。",
    dashSum: "两页合计 30.2 万次真实互动、新增 13,827 位香港追踪者，日均曝光超过 31 万次，近 30 日维持 92 帖高频内容输出。",
    dashProofBtn: "查阅 Meta 商务套件后台佐证",
    dashModalTitle: "Meta 商务套件 · 28 天实时后台数据佐证",
    dashModalNote: "截图取自大湾区北上攻略情报站创作者后台（聚焦核心流量：浏览次数 465 万 ↑160%、互动 147,595 ↑56%、追踪 +7,497 ↑233%）。合作后将提供完整专属数据报告。",
    dashes: [
      {
        name: "大湾区北上攻略情报站",
        fans: "14,000 追踪",
        badge: "核心主力页",
        growthPct: 88,
        nums: [
          { v: "465万", l: "28 日浏览", delta: "↑160%" },
          { v: "147,595", l: "真实互动", delta: "↑56%" },
          { v: "+7,497", l: "新增追踪", delta: "↑233%" },
        ],
      },
      {
        name: "深圳美食住宿｜港人北上攻略",
        fans: "8,500 追踪",
        badge: "爆发增长页",
        growthPct: 96,
        nums: [
          { v: "414万", l: "28 日浏览", delta: "↑293%" },
          { v: "154,612", l: "真实互动", delta: "↑233%" },
          { v: "+6,330", l: "新增追踪", delta: "↑708%" },
        ],
      },
    ],
    worksEyebrow: "CASE & VIRAL PORTFOLIO",
    caseLabel: "商业实战案例",
    caseName: "史前星球恐龙展（深圳湾万象城 BASE）· 2026-09",
    caseNums: [
      { v: "13,186", l: "48 小时真实观看" },
      { v: "85 条", l: "主动留言／私信咨询" },
      { v: "1.3×", l: "自然观看 ÷ 粉丝破圈率" },
    ],
    caseBody:
      "单条推广帖即带动大量香港家庭咨询「票价与交通」，我们在贴文与留言区直接整合福田／罗湖口岸换乘 11 号线后海站的完整攻略，大幅降低港客前往门槛。",
    topTitle: "近 30 日爆款代表作",
    topSub: "点击作品卡片可放大检视完整互动表现",
    likeWord: "赞好",
    shareWord: "转发分享",
    reachWord: "接触人次",
    topPosts: [
      {
        id: "p1",
        img: "/posts/p1.jpg",
        name: "深圳科技地标打卡攻略",
        tag: "TOP 1 爆款",
        platform: "FB 专页 · 图文/攻略",
        reach: 290000,
        likes: 2640,
        shares: 4267,
        hot: true,
        caption: "超过 4,200 次港人主动转发给亲友收藏，带动算法连续多日自然破圈推流。",
      },
      {
        id: "p2",
        img: "/posts/p2.jpg",
        name: "广州北京路美食散步路线",
        tag: "25万+ 曝光",
        platform: "FB 专页 · 深度路线",
        reach: 250000,
        likes: 2047,
        shares: 3026,
        caption: "精准击中港人周末两天一夜短途游需求，高互动率与高收藏率代表作。",
      },
      {
        id: "p3",
        img: "/posts/p3.jpg",
        name: "深圳森林系商场逛街指南",
        tag: "19万 曝光",
        platform: "FB ＋ IG 同步",
        reach: 190000,
        likes: 854,
        shares: 214,
        caption: "锁定周末亲子与情侣逛街客群，精准导入商场餐饮与打卡点。",
      },
      {
        id: "p5",
        img: "/posts/p5.jpg",
        name: "盐田海滨一日游实测",
        tag: "9.3万 曝光",
        platform: "FB 专页 · 实测攻略",
        reach: 93000,
        likes: 593,
        shares: 97,
        caption: "涵盖口岸交通、打卡位与海边美食，贴近香港读者实际行程痛点。",
      },
    ] as TopPost[],
    lineupEyebrow: "OUR MEDIA NETWORK",
    lineupTitle: "完整媒体阵容（点击即可查验主页）",
    lineupSub: "6 个真实运营中的香港受众渠道，透明公开，欢迎随时点击浏览内容风格与互动热度。",
    lineupVisit: "查看主页",
    lineupNote: "注：主力专页每日高频更新、算法推流最稳定；老牌补位专页按题材对口进行精准加推，确保不刷屏且维持高转化率。",
    lineup: [
      {
        name: "大湾区北上攻略情报站",
        fans: "14,000",
        fansNum: 14000,
        tier: "主力",
        platform: "Facebook 专页",
        note: "大湾区美食旅游攻略与爆款短片核心主力页（28 日 465 万浏览）",
        url: "https://www.facebook.com/chinatravelhack",
      },
      {
        name: "深圳美食住宿｜港人北上攻略",
        fans: "8,500",
        fansNum: 8500,
        tier: "主力",
        platform: "Facebook 专页",
        note: "专注深圳探店与住宿酒店，28 日追踪增长 +708% 爆发中",
        url: "https://www.facebook.com/szguide.hk",
      },
      {
        name: "广东美食旅游攻略",
        fans: "10,000",
        fansNum: 10000,
        tier: "补位",
        platform: "Facebook 专页",
        note: "广东省深度美食旅游老牌专页，题材对口时进行精准补量",
        url: "https://www.facebook.com/guangdong.food.stories",
      },
      {
        name: "深圳食玩买攻略｜广州美食好去处｜港人北上交流",
        fans: "约 12,000",
        fansNum: 12000,
        tier: "私域",
        platform: "Facebook 群组",
        note: "高黏着度香港北上讨论社群，情报帖直达并支持精华置顶",
        url: "https://www.facebook.com/groups/shenzhenguangzhouhktravel",
      },
      {
        name: "@cantonesefoodtravelguide",
        fans: "4,775",
        fansNum: 4775,
        tier: "IG",
        platform: "Instagram",
        note: "广东／深圳短视频同步发布，锁定年轻香港消费群（两月 +36%）",
        url: "https://www.instagram.com/cantonesefoodtravelguide/",
      },
      {
        name: "@chinatravelhack",
        fans: "3,705",
        fansNum: 3705,
        tier: "IG",
        platform: "Instagram",
        note: "中国旅游与口岸攻略短视频同步（两月 +24%）",
        url: "https://www.instagram.com/chinatravelhack/",
      },
    ] as MediaChannel[],
    stepsEyebrow: "SIMPLE WORKFLOW",
    stepsTitle: "三步轻松上线，你只需确认稿件与成片",
    stepsKicker: "确认合作后，平均 3–5 个工作日即可上线曝光",
    steps: [
      {
        n: "01",
        t: "港式语境撰稿预审",
        b: "按香港人阅读习惯撰写标题与卖点，初稿可按你的意见修改，100% 确认满意才进入发布。",
      },
      {
        n: "02",
        t: "素材后期与粤语配音",
        b: "商家只需手机拍 3–5 段素材（附拍摄清单），或加购深圳上门实拍；我们全包剪辑、港式粤语配音与繁体字幕。",
      },
      {
        n: "03",
        t: "全矩阵发布与数据复盘",
        b: "按黄金时段于 FB 专页、IG 及 12,000 人私域群同步上线，发布后 7–14 日交回官方后台数据报告。",
      },
    ],
    midCtaTitle: "不确定哪个方案最适合你的店？直接问一句最快。",
    midCtaBody: "告诉我们你的门店类型、位置与预计推广时间，我们 24 小时内给你一份定制建议（该发几条、预算多少、预期效果），问完完全不勉强下单。",
    midCtaBtn: "WhatsApp 免费咨询",
    midCtaMsg: "港人北上媒体矩阵｜想问哪个方案适合我",
    priceEyebrow: "TRANSPARENT PRICING",
    priceTitle: "透明合作方案（HK$）",
    priceSub: "无隐藏媒体费，所有套餐皆包含港式文案、排版／后期与商家预审保障。",
    billingMonthly: "单月合作",
    billingQuarterly: "季付 3 个月",
    billingBadge: "限时 85 折",
    perMonth: "/ 月",
    quarterlySavePrefix: "季付共省 HK$",
    quarterlyNote: "按 3 个月预付计算（原价 85 折）",
    singleTitle: "单项加购与零散服务价目",
    bookNow: "预约此方案",
    payNote: "素材由商家提供（手机拍 3–5 段即可，附指引）｜我们全包写稿、粤语配音、繁体字幕、剪辑与投放｜深圳上门拍摄可加购（+$1,200／次，东莞 +$400）",
    addons: "另设加购：原片商业素材授权 +30–50%（可供商家自用于小红书／抖音／官方广告投放）",
    singles: [
      ["专页深度图文帖（1 专页 1 帖）", "$500 – 800"],
      ["专页短视频 Reel（60–90 秒，含粤语配音与繁体字幕）", "$800 – 1,500"],
      ["探店体验合作（商家提供餐饮或门票）", "互惠 ＋ $300 – 600"],
      ["12,000 人私域群组情报帖", "$300 – 800"],
      ["群组精华置顶 7 天 ／ 14 天", "+$600 ／ +$1,000"],
      ["IG 账号同步加购", "+$200 ／ 帖"],
      ["上门实地拍摄（限深圳，东莞 +$400）", "$1,200 ／ 次"],
    ] as [string, string][],
    packages: [
      {
        id: "starter",
        tag: "首单试水",
        name: "轻量试水组",
        monthlyPrice: 588,
        who: "未做过港客推广、想用最低门槛测试香港客流反应的单店或新品牌。",
        hook: "平均每个平台只需 $196，全站最轻松的起步方案。",
        specs: [
          ["内容产出", "1 次"],
          ["曝光渠道", "3 个平台"],
          ["单平台均价", "$196"],
        ],
        items: [
          "FB 主力或老牌专页深度图文 1 帖（地道港式语境）",
          "同品牌 IG 账号同步发布 1 帖（不另收费）",
          "12,000 人私域交流群情报帖 1 帖",
          "初稿 100% 商家预审修改，满意才上线",
        ],
        footnote: "限新客户首单体验一次",
      },
      {
        id: "biweekly",
        tag: "两周引爆 · 活动首选",
        name: "双周爆点组",
        monthlyPrice: 1680,
        who: "新店开幕、期间限定、节庆优惠，需要在两星期内快速打响香港知名度的商家。",
        hook: "两星期密集上线 3 条内容，图文＋粤语短片双管齐下。",
        specs: [
          ["内容产出", "3 次"],
          ["曝光渠道", "6 个平台"],
          ["单平台均价", "$280"],
        ],
        items: [
          "1 条港式粤语配音短视频（Reel）＋ 2 篇深度图文，两周内全上线",
          "商家仅需手机拍 3–5 段素材（附专属拍摄清单）",
          "全套后期：粤语配音、繁体字幕、快节奏剪辑与图文排版",
          "12,000 人私域群组精华置顶 3 天持续曝光",
        ],
        footnote: "适合短期活动与新店造势",
      },
      {
        id: "monthly",
        tag: "最多商家选择 · 性价比之王",
        name: "全月霸屏组",
        monthlyPrice: 2800,
        who: "商场活动、大型展览、连锁餐饮品牌或主力冲刺单月港客营业额的商家。",
        hook: "全月每周都有新内容在跑，每个平台均价低至 $233。",
        specs: [
          ["内容产出", "6 次"],
          ["曝光渠道", "12 平台次"],
          ["单平台均价", "$233"],
        ],
        items: [
          "3 条粤语 Reel 短片 ＋ 3 篇深度图文，覆盖全矩阵所有专页与 IG",
          "科学排期：两大主力专页各 4 次 ＋ 广东老牌页 2 次，不刷屏且全月霸屏",
          "12,000 人私域群组发布 2 帖并享全月置顶",
          "完整月度 Meta 官方 API 数据复盘报告",
        ],
        footnote: "月度上限 12 平台次全覆盖",
        featured: true,
      },
    ] as PricingPackage[],
    faqEyebrow: "COMMON QUESTIONS",
    faqTitle: "商家最常问的 5 个问题",
    faqs: [
      {
        q: "我们店在深圳／大湾区，没有香港团队拍片怎么办？",
        a: "完全没问题！90% 的合作商家都是用手机照着我们的「3 分钟拍摄清单」拍 3–5 段店面与招牌菜实景发过来，我们香港团队会负责全部写稿、剪辑、港式粤语配音与繁体字幕。如需专人到店拍摄，深圳地区亦可加购上门拍摄（+$1,200／次）。",
      },
      {
        q: "贴文和短片会用繁体中文和广东话吗？初稿可以修改吗？",
        a: "是的，全站内容均由香港团队以地道港式繁体中文与粤语配音制作，贴近香港人真实用语。所有文案与影片初稿都会先发给商家预审，可按合理意见修改，100% 确认满意后才正式发布。",
      },
      {
        q: "发布后的贴文和短视频会保留多久？",
        a: "合作发布的所有专页图文与 Reel 短片均会永久保留于专页与 IG 账号中，持续享受搜索与算法长尾流量（不会到期下架）；群组置顶则按所选方案天数执行。",
      },
      {
        q: "支持哪些付款方式？可以提供收据吗？",
        a: "支持港币（转数快 FPS／银行转账）及人民币结算（微信支付／支付宝），方便香港及内地大湾区商家安排，并可按需要提供正式商业收据（Receipt）。",
      },
      {
        q: "确认合作后，最快多久可以上线？",
        a: "收到商家素材与确认资料后，图文一般 3 个工作日内出初稿，短视频 4–5 个工作日内出初稿；确认后可即时排入周四晚或周五晚的港人周末决策黄金档期发布。",
      },
    ] as FaqItem[],
    ctaEyebrow: "LET'S GROW TOGETHER",
    ctaLine: "把你的好店，带到香港人周末清单第一页",
    ctaContact: "香港本土团队 · 繁简双语沟通 · 24 小时内必复",
    qrWechat: "微信扫码直接联络",
    qrWa: "WhatsApp 扫码咨询",
    qrWaBtn: "点击立即开启 WhatsApp 问价",
    mailLabel: "商务邮箱",
    stickyTitle: "想了解最适合的方案？",
    stickyNote: "香港团队 · 24 小时内回复",
    stickyBtn: "WhatsApp 问价",
    footer:
      "条款说明：初稿经商家预审确认后上线；商业合作帖文依 Meta 官方政策规范标注。支持月度／季度长期合作与品牌定制方案。数据更新至 2026-11-23。",
  },
};

export function formatWan(n: number, lang: Lang) {
  const unit = lang === "hk" ? "萬" : "万";
  if (n >= 10000) {
    return `${(n / 10000).toFixed(n % 10000 === 0 ? 0 : 1).replace(/\.0$/, "")}${unit}`;
  }
  return n.toLocaleString();
}
