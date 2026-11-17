"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Lang = "hk" | "cn";

const T = {
  hk: {
    brand: "Zero to Growth (ZTG) Studio",
    brandSub: "零到成長工作室",
    badge: "zerotogrowth",
    h1: "港人北上媒體矩陣",
    tagline: "一句話：深圳商家想做嘅「香港客人」生意，我哋隔住一條深圳河幫你直接觸達佢哋。",
    dateNote: "數據抓取：2026-11-17（Meta 官方 API 實時）",
    stats: [
      { value: "38,178", label: "矩陣總粉絲", up: true },
      { value: "879萬", label: "28日瀏覽·兩大專頁", up: true },
      { value: "4,267", label: "單帖最高分享" },
      { value: "12,000", label: "私域群組成員" },
    ],
    sellingTitle: "點解揀我哋（三個別人冇嘅）",
    points: [
      {
        icon: "🎯",
        title: "① 精準：粉絲就係「正在決定去邊消費嘅香港人」",
        body: "北上消費決策週期＝週四計劃 → 週五搵料 → 週六日出發（自家 174 帖數據實證）。你嘅廣告帖出現喺佢哋「搵料」嗰一刻，唔係亂槍打鳥。",
      },
      {
        icon: "📣",
        title: "② 裂變：內容被香港人「轉發俾朋友」",
        body: "分享係 Facebook 最強推流訊號。我哋單帖分享最高 4,267 次——一次投放，裂變觸及遠超粉絲數。俾 1 個粉嘅錢，到 3 個人嘅屏幕。",
      },
      {
        icon: "💎",
        title: "③ 私域：12,000 人北上交流群組直達＋可置頂",
        body: "專頁帖之外，群組帖直達 12,000 個活躍問「去邊食去邊玩」嘅香港人，可置頂 7-14 日持續曝光——呢個係廣告投放買唔到嘅。",
      },
    ],
    dashTitle: "後台實錄：28 天增長（兩大專頁官方數據）",
    dashes: [
      {
        name: "大灣區北上攻略情報站",
        fans: "12,094 追蹤",
        nums: [
          { v: "465萬", l: "瀏覽（28日）↑160%" },
          { v: "147,595", l: "互動 ↑56%" },
          { v: "+7,497", l: "新追蹤 ↑233%" },
        ],
        float1: "465萬瀏覽",
        float2: "↑160%",
      },
      {
        name: "深圳美食住宿｜港人北上攻略",
        fans: "7,135 追蹤",
        nums: [
          { v: "414萬", l: "瀏覽（28日）↑293%" },
          { v: "154,612", l: "互動 ↑233%" },
          { v: "+6,330", l: "新追蹤 ↑708%" },
        ],
        float1: "+708% 增長中",
        float2: "414萬瀏覽",
      },
    ],
    dashSum:
      "兩頁合計：28 天 879 萬瀏覽、30.2 萬次互動、新增 13,827 追蹤——日均 31 萬曝光嘅高速增長流量池，你嘅廣告帖進入嘅唔係死水一潭。",
    cpmTitle: "📈 性價比對決",
    cpmLeftTitle: "傳統 Meta 廣告 🔥",
    cpmLeftBody:
      "CPM（每千次曝光）約 HK$30-150，另加代理費 12-20%。買足 879 萬曝光＝成本高達數十萬，仲要自己煩受眾設定同素材。",
    cpmRightTitle: "ZTG 矩陣推廣 ⚡",
    cpmRightBody:
      "揀 $2,800 全矩陣或 $3,880 包月——每千次精準港客觸達成本只需幾毫子至幾蚊，附帶老牌專頁信任度＋私域群組直達。拒絕無效燒錢。",
    vs: "VS",
    caseTitle: "實績案例：深圳灣展覽推廣",
    caseName: "史前星球恐龍展（深圳灣萬象城 BASE）· 2026-09",
    caseNums: [
      { v: "13,186", l: "觀看（2日）" },
      { v: "85", l: "條留言查詢" },
      { v: "1.3×", l: "觀看 ÷ 粉絲數" },
    ],
    caseBody:
      "單條推廣帖帶動大量「點去/幾多錢」私訊查詢，全部引導至場館資訊同港人交通路線（福田/羅湖→11號線後海站）。觀看數超粉絲數＝平台演算法額外推流。",
    topTitle: "近30日代表作（真實數據）",
    topPosts: [
      { emoji: "🏙️", name: "深圳科技地標帖", likes: 2640, shares: 4267, hot: true },
      { emoji: "🛤️", name: "廣州北京路帖", likes: 2047, shares: 3026 },
      { emoji: "🌿", name: "深圳森林商場帖", likes: 854, shares: 214 },
      { emoji: "🚇", name: "地鐵6號線帖", likes: 772, shares: 94 },
      { emoji: "🏖️", name: "鹽田一日遊帖", likes: 593, shares: 97 },
    ],
    likeWord: "讚",
    shareWord: "分享",
    lineupTitle: "媒體陣容",
    lineupHead: ["媒體", "粉絲", "定位"],
    lineup: [
      { name: "大灣區北上攻略情報站", fans: "12,094", note: "大灣區食玩買攻略＋影片" },
      { name: "廣東美食旅遊攻略", fans: "10,469", note: "廣東省深度食玩旅遊指南（高權重老牌專頁）" },
      { name: "深圳美食住宿｜港人北上攻略", fans: "7,135", note: "深圳食住買專頁（28日 +708% 增長中）" },
      { name: "FB群組·深圳食玩買｜廣州美食｜港人北上交流", fans: "約12,000", note: "私域直達＋置頂" },
      { name: "IG @cantonesefoodtravelguide", fans: "4,775", note: "廣東/深圳影片同步（兩個月 +36%）" },
      { name: "IG @chinatravelhack", fans: "3,705", note: "中國旅遊影片同步（兩個月 +24%）" },
    ],
    priceTitle: "合作方案（HK$）",
    singleTitle: "單項價目",
    singles: [
      ["專頁圖文帖（1專頁1帖）", "$500-800"],
      ["專頁影片帖 Reel（60-90s 配音字幕）", "$800-1,500"],
      ["探店合作（商家出餐/門票）", "互惠＋$300-600"],
      ["群組情報帖（12,000成員直達）", "$300-800"],
      ["群組置頂 7日／14日", "+$600／+$1,000"],
      ["IG 同步加購", "+$200/帖"],
    ],
    packages: [
      {
        tag: "🔥 首單體驗",
        name: "$688 輕量試水組",
        who: "未做過港客推廣、想用「幾百蚊成本」實測香港客流反應嘅單店／新品牌",
        hook: "唔使大筆預算，幾百蚊即刻試出香港客人對你品牌嘅真實吸引力！",
        items: [
          "主力專頁圖文 1 帖（精選《大灣區北上攻略情報站》，深度港式語境排版）",
          "12,000 人私域情報帖 1 帖（精準植入群組「週末去邊玩」討論區）",
          "初稿預審保障：發布前 100% 經商家確認，修改至滿意才出稿",
        ],
        value: "原單買需 $800-$1,100 ｜ 限首次合作專享",
        star: "",
      },
      {
        tag: "🎯 週末爆點短影音組",
        name: "$1,880",
        who: "主打視覺誘惑（如炭火烤肉、特色烘焙、SPA按摩），想精準截擊「週五放工即出發」嘅香港客群",
        hook: "卡準香港人『週五搵料、週六衝深圳』嘅決策黃金期，用短片直接引爆週末到店！",
        items: [
          "2 條黃金檔短影音（Reel/Shorts）：鎖定週四／週五 17:00-20:00 港人搵料高峰排期發布",
          "包辦全套地道後製：商家提供拍攝素材，我哋負責港式粵語專業配音＋繁體爆點字幕＋網感節奏精剪",
          "12,000 人私域群組置頂 3 日：週末黃金 72 小時鎖定群組首頁入口持續曝光",
          "雙主力專頁聯播：擴大流量池，享受算法雙重推流",
        ],
        value: "",
        star: "top",
      },
      {
        tag: "🚀 開業／大促力薦",
        name: "$2,800 全矩陣霸屏",
        who: "新店插旗深圳、大型商場節慶、展覽盛事，或連鎖品牌單月主推",
        hook: "唔做慢熱推廣！要就一次過喺全香港人 Feed 流洗版，短時間製造開局排隊效應！",
        items: [
          "全渠道 3 大 FB 專頁同步分發（總計逾 38,000+ 精準粉絲矩陣同步鋪量）",
          "雙 IG 帳號同步發布（@cantonesefoodtravelguide + @chinatravelhack 觸及年輕探店客群）",
          "12,000 人交流群「精華置頂」整整 7 日（佔領全週私域頂流）",
          "自帶二級裂變機制：文案精心設計 @Tag 好友與轉發激勵，享受最高單帖 4,200+ 次轉發嘅推流效應",
        ],
        value: "單項購買總值逾 $3,900+，全網一站式打通",
        star: "value",
      },
      {
        tag: "👑 品牌季度簽約首選",
        name: "$3,880/月 長效增長代運營檔",
        who: "拒絕「爆一日就靜返」！想建立長期香港客流基本盤、鎖定港人「週末固定飯堂」嘅實力品牌",
        hook: "告別單次撞運氣，每月多頻次精準植入生活圈，令香港人過關第一時間諗起你！",
        items: [
          "全月 4 篇深度宣傳：3 條精剪粵語配音短影音＋3 篇深度原創種草圖文",
          "群組深度互動 3 帖：週 1 帖持續發酵，以真實探店口吻解答港人留言（每 10-15 天放出 1 次群組貼，合共 3 次）",
          "全月黃金發帖檔期優先鎖定（保證卡準各個公眾假期與連假前夕）",
          "月度官方 API 數據回盤：提供完整觸及、互動及私訊諮詢復盤報告",
          "增值贈送：免費提供「港人到店路線指引＋口岸交通指南」宣傳模板",
        ],
        value: "3 個月起簽，尊享專屬流量顧問服務",
        star: "",
      },
    ],
    starTop: "⭐ 最多商家選擇",
    starValue: "⭐ 性價比最高",
    bookNow: "⚡ 立即預約此方案",
    payNote: "支持港幣/人民幣對公、對私結算，初稿 100% 商家預審，與您一起溫暖成長",
    addons:
      "加購：素材授權 +30-50%｜留言關鍵字→私訊導流 +$150（避 FB 外鏈新政）｜簡體版內容 +$100",
    ctaLine: "掃碼即時查詢 · 24 小時內回覆",
    ctaContact: "香港團隊 · 繁簡雙語 · 服務深圳/大灣區商家＋香港品牌",
    qrWechat: "微信掃碼加好友",
    qrWa: "WhatsApp 掃碼",
    qrWaBtn: "桌面版撳呢度開 WhatsApp",
    mailLabel: "電郵",
    footer:
      "條款：出稿 7 日內；初稿商家預審一次；合作帖按 Meta 政策標註「付費合作」。數據截至 2026-11-17，報價可議。",
  },
  cn: {
    brand: "Zero to Growth (ZTG) Studio",
    brandSub: "零到成长工作室",
    badge: "zerotogrowth",
    h1: "港人北上媒体矩阵",
    tagline: "一句话：深圳商家想做的「香港客人」生意，我们隔着一条深圳河帮你直接触达他们。",
    dateNote: "数据抓取：2026-11-17（Meta 官方 API 实时）",
    stats: [
      { value: "38,178", label: "矩阵总粉丝", up: true },
      { value: "879万", label: "28日浏览·两大专页", up: true },
      { value: "4,267", label: "单帖最高分享" },
      { value: "12,000", label: "私域群组成员" },
    ],
    sellingTitle: "为什么选我们（三个别人没有的）",
    points: [
      {
        icon: "🎯",
        title: "① 精准：粉丝就是「正在决定去哪消费的香港人」",
        body: "北上消费决策周期＝周四计划 → 周五找料 → 周六日出发（自家 174 帖数据实证）。你的广告帖出现在他们「找料」那一刻，不是乱枪打鸟。",
      },
      {
        icon: "📣",
        title: "② 裂变：内容被香港人「转发给朋友」",
        body: "分享是 Facebook 最强推流信号。我们单帖分享最高 4,267 次——一次投放，裂变触达远超粉丝数。付 1 个粉的钱，到 3 个人的屏幕。",
      },
      {
        icon: "💎",
        title: "③ 私域：12,000 人北上交流群组直达＋可置顶",
        body: "专页帖之外，群组帖直达 12,000 个活跃问「去哪吃去哪玩」的香港人，可置顶 7-14 天持续曝光——这是广告投放买不到的。",
      },
    ],
    dashTitle: "后台实录：28 天增长（两大专页官方数据）",
    dashes: [
      {
        name: "大湾区北上攻略情报站",
        fans: "12,094 追踪",
        nums: [
          { v: "465万", l: "浏览（28日）↑160%" },
          { v: "147,595", l: "互动 ↑56%" },
          { v: "+7,497", l: "新追踪 ↑233%" },
        ],
        float1: "465万浏览",
        float2: "↑160%",
      },
      {
        name: "深圳美食住宿｜港人北上攻略",
        fans: "7,135 追踪",
        nums: [
          { v: "414万", l: "浏览（28日）↑293%" },
          { v: "154,612", l: "互动 ↑233%" },
          { v: "+6,330", l: "新追踪 ↑708%" },
        ],
        float1: "+708% 增长中",
        float2: "414万浏览",
      },
    ],
    dashSum:
      "两页合计：28 天 879 万浏览、30.2 万次互动、新增 13,827 追踪——日均 31 万曝光的高速增长流量池，你的广告帖进入的不是死水一潭。",
    cpmTitle: "📈 性价比对决",
    cpmLeftTitle: "传统 Meta 广告 🔥",
    cpmLeftBody:
      "CPM（每千次曝光）约 HK$30-150，另加代理费 12-20%。买足 879 万曝光＝成本高达数十万，还要自己烦受众设定和素材。",
    cpmRightTitle: "ZTG 矩阵推广 ⚡",
    cpmRightBody:
      "选 $2,800 全矩阵或 $3,880 包月——每千次精准港客触达成本只需几毫至几蚊，附带老牌专页信任度＋私域群组直达。拒绝无效烧钱。",
    vs: "VS",
    caseTitle: "实绩案例：深圳湾展览推广",
    caseName: "史前星球恐龙展（深圳湾万象城 BASE）· 2026-09",
    caseNums: [
      { v: "13,186", l: "观看（2日）" },
      { v: "85", l: "条留言查询" },
      { v: "1.3×", l: "观看 ÷ 粉丝数" },
    ],
    caseBody:
      "单条推广帖带动大量「怎么去/多少钱」私讯查询，全部引导至场馆信息与港人交通路线（福田/罗湖→11号线后海站）。观看数超粉丝数＝平台算法额外推流。",
    topTitle: "近30日代表作（真实数据）",
    topPosts: [
      { emoji: "🏙️", name: "深圳科技地标帖", likes: 2640, shares: 4267, hot: true },
      { emoji: "🛤️", name: "广州北京路帖", likes: 2047, shares: 3026 },
      { emoji: "🌿", name: "深圳森林商场帖", likes: 854, shares: 214 },
      { emoji: "🚇", name: "地铁6号线帖", likes: 772, shares: 94 },
      { emoji: "🏖️", name: "盐田一日游帖", likes: 593, shares: 97 },
    ],
    likeWord: "赞",
    shareWord: "分享",
    lineupTitle: "媒体阵容",
    lineupHead: ["媒体", "粉丝", "定位"],
    lineup: [
      { name: "大湾区北上攻略情报站", fans: "12,094", note: "大湾区食玩买攻略＋影片" },
      { name: "广东美食旅游攻略", fans: "10,469", note: "广东省深度食玩旅游指南（高权重老牌专页）" },
      { name: "深圳美食住宿｜港人北上攻略", fans: "7,135", note: "深圳食住买专页（28日 +708% 增长中）" },
      { name: "FB群组·深圳食玩买｜广州美食｜港人北上交流", fans: "约12,000", note: "私域直达＋置顶" },
      { name: "IG @cantonesefoodtravelguide", fans: "4,775", note: "广东/深圳影片同步（两个月 +36%）" },
      { name: "IG @chinatravelhack", fans: "3,705", note: "中国旅游影片同步（两个月 +24%）" },
    ],
    priceTitle: "合作方案（HK$）",
    singleTitle: "单项价目",
    singles: [
      ["专页图文帖（1专页1帖）", "$500-800"],
      ["专页视频帖 Reel（60-90s 配音字幕）", "$800-1,500"],
      ["探店合作（商家出餐/门票）", "互惠＋$300-600"],
      ["群组情报帖（12,000成员直达）", "$300-800"],
      ["群组置顶 7日／14日", "+$600／+$1,000"],
      ["IG 同步加购", "+$200/帖"],
    ],
    packages: [
      {
        tag: "🔥 首单体验",
        name: "$688 轻量试水组",
        who: "未做过港客推广、想用「几百蚊成本」实测香港客流反应的单店／新品牌",
        hook: "不用大笔预算，几百蚊立刻试出香港客人对你品牌的真实吸引力！",
        items: [
          "主力专页图文 1 帖（精选《大湾区北上攻略情报站》，深度港式语境排版）",
          "12,000 人私域情报帖 1 帖（精准植入群组「周末去哪玩」讨论区）",
          "初稿预审保障：发布前 100% 经商家确认，修改至满意才出稿",
        ],
        value: "原单买需 $800-$1,100 ｜ 限首次合作专享",
        star: "",
      },
      {
        tag: "🎯 周末爆点短影音组",
        name: "$1,880",
        who: "主打视觉诱惑（如炭火烤肉、特色烘焙、SPA按摩），想精准截击「周五下班即出发」的香港客群",
        hook: "卡准香港人『周五找料、周六冲深圳』的决策黄金期，用短片直接引爆周末到店！",
        items: [
          "2 条黄金档短影音（Reel/Shorts）：锁定周四／周五 17:00-20:00 港人找料高峰排期发布",
          "包办全套地道后期：商家提供拍摄素材，我们负责港式粤语专业配音＋繁体爆点字幕＋网感节奏精剪",
          "12,000 人私域群组置顶 3 日：周末黄金 72 小时锁定群组首页入口持续曝光",
          "双主力专页联播：扩大流量池，享受算法双重推流",
        ],
        value: "",
        star: "top",
      },
      {
        tag: "🚀 开业／大促力荐",
        name: "$2,800 全矩阵霸屏",
        who: "新店插旗深圳、大型商场节庆、展览盛事，或连锁品牌单月主推",
        hook: "不做慢热推广！要就一次过在全香港人 Feed 流洗版，短时间制造开局排队效应！",
        items: [
          "全渠道 3 大 FB 专页同步分发（总计逾 38,000+ 精准粉丝矩阵同步铺量）",
          "双 IG 帐号同步发布（@cantonesefoodtravelguide + @chinatravelhack 触及年轻探店客群）",
          "12,000 人交流群「精华置顶」整整 7 日（占领全周私域顶流）",
          "自带二级裂变机制：文案精心设计 @Tag 好友与转发激励，享受最高单帖 4,200+ 次转发的推流效应",
        ],
        value: "单项购买总值逾 $3,900+，全网一站式打通",
        star: "value",
      },
      {
        tag: "👑 品牌季度签约首选",
        name: "$3,880/月 长效增长代运营档",
        who: "拒绝「爆一日就静返」！想建立长期香港客流基本盘、锁定港人「周末固定饭堂」的实力品牌",
        hook: "告别单次撞运气，每月多频次精准植入生活圈，令香港人过关第一时间想起你！",
        items: [
          "全月 4 篇深度宣传：3 条精剪粤语配音短影音＋3 篇深度原创种草图文",
          "群组深度互动 3 帖：周 1 帖持续发酵，以真实探店口吻解答港人留言（每 10-15 天放出 1 次群组贴，合共 3 次）",
          "全月黄金发帖档期优先锁定（保证卡准各个公众假期与连假前夕）",
          "月度官方 API 数据回盘：提供完整触及、互动及私讯咨询复盘报告",
          "增值赠送：免费提供「港人到店路线指引＋口岸交通指南」宣传模板",
        ],
        value: "3 个月起签，尊享专属流量顾问服务",
        star: "",
      },
    ],
    starTop: "⭐ 最多商家选择",
    starValue: "⭐ 性价比最高",
    bookNow: "⚡ 立即预约此方案",
    payNote: "支持港币/人民币对公、对私结算，初稿 100% 商家预审，与您一起温暖成长",
    addons: "加购：素材授权 +30-50%｜留言关键词→私信导流 +$150（避 FB 外链新政）｜简体版内容 +$100",
    ctaLine: "扫码即时查询 · 24 小时内回复",
    ctaContact: "香港团队 · 繁简双语 · 服务深圳/大湾区商家＋香港品牌",
    qrWechat: "微信扫码加好友",
    qrWa: "WhatsApp 扫码",
    qrWaBtn: "桌面版点这里开 WhatsApp",
    mailLabel: "邮箱",
    footer:
      "条款：出稿 7 日内；初稿商家预审一次；合作帖按 Meta 政策标注「付费合作」。数据截至 2026-11-17，报价可议。",
  },
};

const CARD = "rounded-3xl border border-[#c5a065]/25 bg-[#2a241c]/70 backdrop-blur";
const GOLD = "#e8c98a";
const CREAM = "#f5d98b";
const SOFTGREEN = "#b9d4a8";
const ORANGE = "#f0955c";

export default function Home() {
  const [lang, setLang] = useState<Lang>("hk");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("mk-lang") : null;
    if (saved === "hk" || saved === "cn") {
      setLang(saved);
      return;
    }
    const loc = typeof navigator !== "undefined" ? navigator.language : "";
    if (loc.startsWith("zh-HK") || loc.startsWith("zh-TW") || loc.startsWith("zh-MO")) {
      setLang("hk");
    }
  }, []);

  const switchLang = (l: Lang) => {
    setLang(l);
    try {
      window.localStorage.setItem("mk-lang", l);
    } catch {}
  };

  const t = T[lang];
  const dashImgs = ["/dash-gba.jpg", "/dash-sz.jpg"];

  return (
    <main className="min-h-screen bg-[#221d17] text-[#f3ead9] relative overflow-hidden">
      {/* Warm glows + paper grain */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#c5a065]/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 -right-52 w-[500px] h-[500px] rounded-full bg-[#e07b39]/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/5 w-[440px] h-[440px] rounded-full bg-[#9db88a]/10 blur-[150px]" />
      <div className="pointer-events-none fixed inset-0 paper-grain opacity-[0.05] mix-blend-overlay" />

      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#221d17]/85 backdrop-blur border-b border-[#c5a065]/15">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <img src="/logo.png" alt="ZTG Studio logo" className="w-10 h-10 object-contain shrink-0" />
            <div className="leading-tight min-w-0">
              <div className="text-[13px] font-bold text-[#e8c98a] truncate">{t.brand}</div>
              <div className="text-[10px] text-white/40">{t.brandSub}</div>
            </div>
          </div>
          <div className="flex items-center shrink-0">
            <button
              onClick={() => switchLang("hk")}
              className={`px-4 py-1 rounded-full border transition text-sm ${
                lang === "hk"
                  ? "bg-[#c5a065] text-[#221d17] font-bold border-[#c5a065]"
                  : "text-white/50 border-white/15"
              }`}
            >
              繁
            </button>
            <button
              onClick={() => switchLang("cn")}
              className={`ml-2 px-4 py-1 rounded-full border transition text-sm ${
                lang === "cn"
                  ? "bg-[#c5a065] text-[#221d17] font-bold border-[#c5a065]"
                  : "text-white/50 border-white/15"
              }`}
            >
              簡
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-12 pb-10">
        <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div>
            <span className="inline-block bg-gradient-to-r from-[#b8813f] to-[#e0a866] text-[13px] font-bold rounded-full px-4 py-1.5 mb-5 text-[#241c11]">
              {t.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#f7efdd]">{t.h1}</h1>
            <p className="text-[15px] text-[#e9dcc2]/80 mb-2">{t.tagline}</p>
            <p className="text-xs text-white/35 mb-8 lg:mb-0">{t.dateNote}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {t.stats.map((s) => (
              <div key={s.label} className={`${CARD} px-4 py-5 text-center glow-gold`}>
                <div className="text-[26px] leading-none font-bold font-mono tabular-nums text-[#f5d98b]">
                  {s.value}
                  {s.up ? <span className="text-[#b9d4a8] text-base ml-1">↗</span> : null}
                </div>
                <div className="text-[10px] text-white/35 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling points */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">
            {t.sellingTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {t.points.map((p) => (
              <div key={p.title} className={`${CARD} p-5`}>
                <h3 className="font-semibold text-[15px] mb-2 text-[#f3ead9]">
                  <span className="text-xl mr-2">{p.icon}</span>
                  {p.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPM VS */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.cpmTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 items-stretch relative">
            <div className="rounded-3xl border border-white/10 bg-[#26211a]/60 backdrop-blur p-5">
              <h3 className="font-bold text-[#e0896a] text-[15px] mb-2">{t.cpmLeftTitle}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{t.cpmLeftBody}</p>
            </div>
            <div className="rounded-3xl border-2 border-[#c5a065]/70 bg-[#c5a065]/[0.07] backdrop-blur p-5 glow-gold">
              <h3 className="font-bold text-[#e8c98a] text-[15px] mb-2">{t.cpmRightTitle}</h3>
              <p className="text-sm text-[#f3ead9]/75 leading-relaxed">{t.cpmRightBody}</p>
            </div>
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#221d17] border-2 border-[#c5a065]/50 items-center justify-center font-bold text-sm text-[#e8c98a] z-10">
              {t.vs}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards in polaroid frames */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.dashTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {t.dashes.map((d, i) => (
              <div key={d.name} className="relative">
                <div className={`relative mx-auto w-full max-w-[280px] ${i === 0 ? "md:-rotate-2" : "md:rotate-2"}`}>
                  {/* tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#e8c98a]/40 rotate-[-4deg] rounded-sm z-10 backdrop-blur-sm" />
                  <div className="bg-[#faf6ec] rounded-2xl p-3 shadow-[0_18px_50px_rgba(0,0,0,0.5)]">
                    <img src={dashImgs[i]} alt={d.name} className="w-full rounded-xl aspect-[9/18] object-cover object-top" />
                    <p className="text-center text-[12px] font-semibold text-[#6b5a3e] mt-2.5 truncate">
                      ✦ {d.name} ✦
                    </p>
                  </div>
                  <div className="absolute -right-3 top-8 bg-[#f5d98b] text-[#3a2f1c] text-[12px] font-bold rounded-full px-3 py-1.5 shadow-[0_0_18px_rgba(245,217,139,0.45)] rotate-3">
                    {d.float1}
                  </div>
                  <div className="absolute -left-3 bottom-14 bg-[#b9d4a8] text-[#26301c] text-[12px] font-bold rounded-full px-3 py-1.5 shadow-[0_0_18px_rgba(185,212,168,0.4)] -rotate-2">
                    {d.float2}
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs text-white/40 mb-3">{d.fans}</p>
                  <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                    {d.nums.map((n) => (
                      <div key={n.l} className={`${CARD} py-2.5 px-1 text-center`}>
                        <div className="text-[15px] font-bold font-mono tabular-nums text-[#f5d98b]">{n.v}</div>
                        <div className="text-[10px] text-white/45">{n.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/55 mt-10 max-w-xl mx-auto text-center leading-relaxed">{t.dashSum}</p>
        </div>
      </section>

      {/* Case study */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.caseTitle}</h2>
          <div className={`${CARD} p-5`}>
            <h3 className="font-semibold text-[15px] mb-1 text-[#f3ead9]">
              <span className="text-xl mr-2">🦕</span>
              {t.caseName}
            </h3>
            <div className="grid grid-cols-3 gap-2 my-4">
              {t.caseNums.map((n) => (
                <div key={n.l} className={`${CARD} py-2.5 px-1 text-center`}>
                  <div className="text-base font-bold font-mono tabular-nums text-[#f5d98b]">{n.v}</div>
                  <div className="text-[10px] text-white/45">{n.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/55 leading-relaxed">{t.caseBody}</p>
          </div>
        </div>
      </section>

      {/* Top posts polaroid wall */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.topTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.topPosts.map((p, i) => (
              <div
                key={p.name}
                className={`rounded-3xl p-4 backdrop-blur border flex items-center gap-4 ${
                  p.hot
                    ? "border-[#c5a065]/60 bg-[#c5a065]/[0.06]"
                    : "border-[#c5a065]/20 bg-[#2a241c]/70"
                } ${i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${
                    p.hot ? "bg-gradient-to-br from-[#e8c98a]/40 to-[#b9d4a8]/30" : "bg-gradient-to-br from-white/10 to-white/5"
                  }`}
                >
                  {p.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-[14px] truncate text-[#f3ead9]">
                    {p.hot ? "🔥 " : ""}
                    {p.name}
                  </div>
                  <div className="flex gap-2 mt-1.5 flex-wrap">
                    <span className="text-[11px] bg-white/10 rounded-full px-2.5 py-0.5 text-white/65">
                      {t.likeWord} {p.likes.toLocaleString()}
                    </span>
                    <span className="text-[11px] bg-[#f0955c]/20 text-[#f0b48a] rounded-full px-2.5 py-0.5 font-semibold">
                      🔥 {t.shareWord} {p.shares.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lineup */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.lineupTitle}</h2>
          <div className={`${CARD} overflow-hidden`}>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left text-white/55">
                  <th className="px-4 py-3">{t.lineupHead[0]}</th>
                  <th className="px-4 py-3">{t.lineupHead[1]}</th>
                  <th className="px-4 py-3 hidden md:table-cell">{t.lineupHead[2]}</th>
                </tr>
              </thead>
              <tbody>
                {t.lineup.map((m) => (
                  <tr key={m.name} className="border-t border-white/5">
                    <td className="px-4 py-3">{m.name}</td>
                    <td className="px-4 py-3 font-bold font-mono tabular-nums text-[#f5d98b] whitespace-nowrap">{m.fans}</td>
                    <td className="px-4 py-3 text-white/45 hidden md:table-cell">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden px-4 pb-4 space-y-1.5">
              {t.lineup.map((m) => (
                <p key={m.name} className="text-[11px] text-white/35">
                  · {m.name}：{m.note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — Morandi cards */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.priceTitle}</h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5 mb-6 items-start">
            {t.packages.map((p) => {
              const morandi =
                p.star === "top"
                  ? "bg-[#e8c9a8]/15 border-2 border-[#e8c98a]/60"
                  : p.star === "value"
                    ? "bg-[#b8c9a8]/12 border-2 border-[#b9d4a8]/60"
                    : "bg-[#d9c7a7]/[0.07] border border-[#c5a065]/20";
              return (
                <div
                  key={p.name}
                  className={`rounded-3xl p-5 backdrop-blur flex flex-col relative ${morandi} ${
                    p.star ? "glow-gold md:-translate-y-1.5" : ""
                  }`}
                >
                  {p.star ? (
                    <div className="self-center absolute -top-3.5 bg-[#f5d98b] text-[#3a2f1c] text-[12px] font-bold rounded-full px-4 py-1 shadow-[0_4px_14px_rgba(0,0,0,0.4)] rotate-[-2deg]">
                      {p.star === "top" ? t.starTop : t.starValue}
                    </div>
                  ) : null}
                  <div className="text-[13px] font-semibold text-[#f0b48a] mb-1 mt-1">{p.tag}</div>
                  <div className="text-[22px] leading-tight font-bold font-mono tabular-nums mb-2.5 text-[#f7efdd]">{p.name}</div>
                  <p className="text-[12px] text-white/50 leading-snug mb-2.5">🎯 {p.who}</p>
                  <p className="text-[13px] text-[#e8c98a]/90 italic leading-relaxed border-l-2 border-[#c5a065]/40 pl-2.5 mb-3.5">
                    「{p.hook}」
                  </p>
                  <ul className="space-y-2 mb-3.5 flex-1">
                    {p.items.map((i) => (
                      <li key={i} className="text-[12.5px] text-white/60 leading-snug flex gap-1.5">
                        <span className="text-[#c5a065] shrink-0">✦</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  {p.value ? (
                    <p className="text-[11.5px] text-[#b9d4a8] font-semibold mb-3.5">💎 {p.value}</p>
                  ) : null}
                  <a
                    href="https://wa.me/qr/RFLV47X75BYHI1"
                    className={`text-center text-sm font-bold rounded-full py-2.5 px-4 ${
                      p.star
                        ? "bg-gradient-to-r from-[#e89b5c] to-[#f0b48a] text-[#2e2114]"
                        : "border border-[#c5a065]/40 text-[#e8c98a]"
                    }`}
                  >
                    {t.bookNow}
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-center text-[13px] text-[#e8c98a] mb-4 font-semibold">{t.payNote}</p>
          <div className={`${CARD} p-2`}>
            <div className="px-3 pt-2 pb-1 text-sm text-white/55">{t.singleTitle}</div>
            <div className="grid md:grid-cols-2 gap-x-6">
              {t.singles.map(([k, v]) => (
                <div key={k} className="flex justify-between items-baseline gap-4 px-3 py-2.5 border-b border-white/5">
                  <span className="text-sm">{k}</span>
                  <span className="text-sm font-bold font-mono tabular-nums text-[#f0b48a] whitespace-nowrap">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-white/35 mt-3">{t.addons}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 relative">
        <div className={`max-w-5xl mx-auto ${CARD} p-8 text-center glow-gold`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/logo.png" alt="ZTG Studio logo" className="w-9 h-9 object-contain" />
            <span className="text-[13px] text-[#e8c98a] font-bold">{t.brand}</span>
          </div>
          <p className="text-lg font-bold mb-2 text-[#f7efdd]">{t.ctaLine}</p>
          <p className="text-sm text-white/45 mb-8">{t.ctaContact}</p>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-6">
            <div className="bg-[#faf6ec] rounded-[1.35rem] p-3 border border-[#c5a065]/45 glow-gold">
              <img src="/qr-wechat.png" alt="WeChat QR" className="w-full rounded-xl" />
              <p className="text-[13px] font-bold text-[#4a3b22] mt-2">{t.qrWechat}</p>
            </div>
            <div className="bg-[#faf6ec] rounded-[1.35rem] p-3 border border-[#c5a065]/45 glow-gold">
              <img src="/qr-whatsapp.png" alt="WhatsApp QR" className="w-full rounded-xl" />
              <p className="text-[13px] font-bold text-[#4a3b22] mt-2">{t.qrWa}</p>
            </div>
          </div>
          <a
            href="https://wa.me/qr/RFLV47X75BYHI1"
            className="inline-block bg-gradient-to-r from-[#e89b5c] to-[#f0b48a] text-[#2e2114] font-bold rounded-full px-8 py-3 text-sm mb-4 shadow-[0_0_20px_rgba(232,155,92,0.4)]"
          >
            {t.qrWaBtn}
          </a>
          <p className="text-sm">
            {t.mailLabel}：
            <a href="mailto:ZEROWONG5@GMAIL.COM" className="underline font-bold text-[#e8c98a]">
              ZEROWONG5@GMAIL.COM
            </a>
          </p>
        </div>
      </section>

      <footer className="px-6 py-6 border-t border-[#c5a065]/15">
        <p className="max-w-5xl mx-auto text-[11px] text-white/30 text-center">{t.footer}</p>
      </footer>
    </main>
  );
}
