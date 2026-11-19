"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Lang = "hk" | "cn";

// 一旦有 +852 號碼，只需填這裡（例如 "85291234567"），全站 7 個 CTA 會自動變成
// click-to-chat：https://wa.me/85291234567?text=...  未填則沿用現有 QR 連結。
const WA_NUMBER = "85266925445";
const WA_QR = "https://wa.me/qr/RFLV47X75BYHI1";
const waLink = (msg?: string) =>
  WA_NUMBER
    ? `https://wa.me/${WA_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`
    : WA_QR;

const T = {
  hk: {
    brand: "Zero to Growth Studio",
    brandSub: "跨境新媒體引流工作室",
    badge: "zerotogrowth",
    h1: "港人北上媒體矩陣",
    tagline: "香港人每個週末都在決定去哪吃、去哪玩。你要做的，是在他決定之前出現。",
    dateNote: "數據抓取：2026-11-19（Meta 官方 API 實時）",
    stats: [
      { value: "39,318", label: "矩陣總粉絲", up: true },
      { value: "879萬", label: "28日瀏覽·兩大專頁", up: true },
      { value: "2,112", label: "單帖最高讚好" },
      { value: "12,000", label: "私域群組成員" },
    ],
    reelsLine: "短影音（Reels）傳播力：單條最高曝光突破 250,000+ 人次（演算法自然外溢破圈，突破粉絲數限制）",
    reelsBadge: "🔥 爆款 Reel 單條最高曝光 250,000+ 人次 ｜ 演算法自然破圈",
    sellingTitle: "為什麼選擇我們",
    sellingSub: "（三項差異化優勢）",
    points: [
      {
        title: "01 精準觸達｜粉絲正是「正在決定去哪裡消費的香港人」",
        body: "北上消費決策週期為：週四計劃、週五蒐集資訊、週六日出發（依自家 174 帖數據實證）。你的廣告帖，正好出現在他們蒐集資訊的那一刻。",
      },
      {
        title: "02 爆款裂變｜內容被香港人主動轉發，演算法二次放大",
        body: "原創 Reel 短影音常規播放量達 5-15 萬次，單條最高 25 萬次曝光；配合 Facebook／Instagram 演算法二次擴散，單帖最高 2,112 個讚好，觸及遠超粉絲數，直達尚未追蹤你的香港消費者。",
      },
      {
        title: "03 私域直達｜12,000 人北上交流群組直達＋可置頂",
        body: "除專頁帖文外，群組帖文可直達 12,000 名活躍討論「去哪吃、去哪玩」的香港會員，並可置頂 7-14 天持續曝光，這是付費廣告無法買到的資源。",
      },
    ],
    dashTitle: "後台實錄：28 天增長（兩大專頁官方數據）",
    dashes: [
      {
        name: "大灣區北上攻略情報站",
        fans: "12,792 追蹤",
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
        fans: "7,575 追蹤",
        nums: [
          { v: "414萬", l: "瀏覽（28日）↑293%" },
          { v: "154,612", l: "互動 ↑233%" },
          { v: "+6,330", l: "新追蹤 ↑708%" },
        ],
        float1: "+708% 增長中",
        float2: "414萬瀏覽",
      },
    ],
    bigLine: "28 天，兩個專頁，在香港人的屏幕上出現了八百七十九萬次。",
    dashSum:
      "兩頁合計：30.2 萬次互動、新增 13,827 位追蹤者；日均 31 萬次曝光，近 30 日以 92 帖的月產量持續增長。",
    cpmTitle: "性價比對決",
    cpmLeftTitle: "傳統 Meta 廣告",
    cpmLeftBody:
      "CPM（每千次曝光）約 HK$80，另加代理費 12-20%。以單場 10-20 萬次曝光計，媒體費 HK$8,000-16,000，連代理費實際支出約 HK$9,000-19,200；受眾設定與素材製作仍要自行處理。",
    cpmRightTitle: "本矩陣推廣",
    cpmRightBody:
      "對比之下，$2,800 全矩陣方案已包 3 個 FB 專頁＋2 個 IG 帳號＋12,000 人私域群組，毋須另付媒體費；折算每千次港客觸達只約 HK$0.3 起，還帶著老牌專頁的信任度。",
    vs: "VS",
    caseTitle: "實績案例：深圳灣展覽推廣",
    caseName: "史前星球恐龍展（深圳灣萬象城 BASE）· 2026-09",
    caseNums: [
      { v: "13,186", l: "觀看（2日）" },
      { v: "85", l: "條留言查詢" },
      { v: "1.3×", l: "觀看 ÷ 粉絲數" },
    ],
    caseBody:
      "單條推廣帖帶動大量「交通／票價」私訊查詢，全部引導至場館資訊與港人交通路線（福田／羅湖→11 號線後海站）。觀看數超過粉絲數，代表平台演算法作出額外推流。",
    topTitle: "近 30 日代表作（真實數據）",
    topPosts: [
      { img: "/posts/p1.jpg", name: "深圳科技地標帖", reach: 290000, likes: 2640, shares: 4267, hot: true },
      { img: "/posts/p2.jpg", name: "廣州北京路帖", reach: 250000, likes: 2047, shares: 3026 },
      { img: "/posts/p3.jpg", name: "深圳森林商場帖", reach: 190000, likes: 854, shares: 214 },
      { img: "/posts/p5.jpg", name: "鹽田一日遊帖", reach: 93000, likes: 593, shares: 97 },
    ],
    likeWord: "讚",
    shareWord: "分享",
    reachWord: "接觸人數",
    shareNote: "內容被香港人主動轉發，平台演算法隨之擴大分發。",
    lineupTitle: "媒體陣容",
    lineupHead: ["媒體", "粉絲", "定位"],
    lineupNote: "主力頁每日可出多帖、演算法分發最穩；補位頁題材對口時補量（平台限制期間每日 1 帖），不計入必達交付。",
    lineup: [
      { name: "大灣區北上攻略情報站", fans: "12,792", tier: "主力", note: "大灣區美食旅遊攻略與影片" },
      { name: "深圳美食住宿｜港人北上攻略", fans: "7,575", tier: "主力", note: "深圳美食與住宿專頁（28 日 +708% 增長中）" },
      { name: "廣東美食旅遊攻略", fans: "10,471", tier: "補位", note: "廣東省深度美食旅遊指南（老牌專頁，題材對口時補量）" },
      { name: "FB群組·深圳食玩買｜廣州美食｜港人北上交流", fans: "約12,000", tier: "私域", note: "私域直達＋可置頂" },
      { name: "@cantonesefoodtravelguide", fans: "4,775", tier: "IG", note: "廣東/深圳影片同步（兩個月 +36%）" },
      { name: "@chinatravelhack", fans: "3,705", tier: "IG", note: "中國旅遊影片同步（兩個月 +24%）" },
    ],
    midCtaTitle: "唔確定邊個方案啱你？問一句就得。",
    midCtaBody: "講低你間店做咩、想幾時開始，我哋會覆你一份建議：要幾錢、做幾多帖、預期見到咩數。24 小時內回覆，問完不一定要落單。",
    midCtaBtn: "WhatsApp 問一句",
    midCtaMsg: "港人北上媒體矩陣｜想問邊個方案適合我",
    priceTitle: "合作方案（HK$）",
    qBannerTitle: "季度優惠｜預付 3 個月全部套餐一律 85 折",
    singleTitle: "單項價目",
    singles: [
      ["專頁圖文帖（1專頁1帖）", "$500-800"],
      ["專頁影片帖 Reel（60-90 秒，含配音與字幕）", "$800-1,500"],
      ["探店合作（商家提供餐飲或門票）", "互惠＋$300-600"],
      ["群組情報帖（12,000成員直達）", "$300-800"],
      ["群組置頂 7 天／14 天", "+$600／+$1,000"],
      ["IG 同步加購", "+$200/帖"],
    ],
    packages: [
      {
        tag: "首單體驗",
        name: "$688 輕量試水組",
        who: "適合未做過港客推廣、希望以數百元預算測試香港客流反應的單店或新品牌",
        hook: "以數百元成本，快速驗證香港客人對品牌的真實興趣。",
        items: [
          "主力推薦專頁深度圖文 1 帖（精選大灣區攻略站或廣東老牌專頁，道地港式語境排版）",
          "12,000 人私域交流群情報帖 1 帖（植入「週末好去處」討論話題）",
          "初稿預審保障：100% 商家確認後才正式排期發布",
        ],
        value: "單買原價需 $800-$1,100 ｜ 限首單體驗",
        expect: "",
        star: "",
      },
      {
        tag: "最多餐飲／休閒景點選擇",
        name: "$1,880 週末爆點短影音組",
        who: "適合主打視覺誘惑（烤肉、烘焙、SPA、特色體驗），希望精準攔截「週五下班即出發」香港客群的商家",
        hook: "精準把握香港人「週四找資訊、週五做決定、週六北上」的黃金決策期，以短影音引爆週末到店。",
        expect: "精準短片常態播放約 50,000-150,000 次（單條最高達 25 萬人次）",
        gift: "",
        items: [
          "2 條黃金檔短影音（Reel/Shorts），鎖定週四／週五 17:00-20:00 出發前夕發布",
          "全套後製服務：商家提供原片素材，我們負責港式粵語專業配音、繁體字幕與節奏精剪",
          "12,000 人私域群組週末「精華置頂」整整 3 天",
          "雙主力專頁聯播分發，享受演算法雙重推流",
          "限時加贈：免費同步 2 大 IG Reels（@cantonesefoodtravelguide + @chinatravelhack）",
        ],
        value: "",
        star: "top",
      },
      {
        tag: "新店／大促首選 · 性價比最高",
        name: "$2,800 全矩陣霸屏方案",
        who: "適合新店開業、商場活動、展覽盛事，或連鎖品牌單月主推",
        hook: "不做慢熱推廣：一次覆蓋全香港用戶的 Feed 流，短期內建立開業排隊效應。",
        items: [
          "2 大主力 FB 專頁同步（20,367 粉絲）＋補位專頁 10,471（題材對口時補量）＋雙 IG 8,480",
          "雙 IG 帳號同步發布（@cantonesefoodtravelguide + @chinatravelhack 觸及年輕探店客群）",
          "12,000 人交流群組「精華置頂」整整 7 天（佔據私域全週入口）",
          "內建裂變機制：文案引導標記好友與主動轉發",
        ],
        value: "單項購買總值逾 $3,900+，一站式完成全網曝光",
        expect: "",
        star: "value",
      },
      {
        tag: "品牌季度簽約首選",
        name: "$3,880／月 長效增長代運營",
        who: "適合拒絕「熱鬧一個週末便歸於平淡」、希望建立長期香港客流基本盤的品牌",
        hook: "告別一次性曝光，每月多頻次植入港人生活圈，讓香港人過關第一時間想起你。",
        items: [
          "全月 4 篇原創深度內容（2 條精剪粵語配音短影音＋2 篇深度種草圖文）",
          "12,000 人私域群組每週深度互動（全月共 4 帖）",
          "全月黃金檔期（週末及公眾假期前夕）優先鎖定",
          "月度官方 API 數據復盤報告＋港人到店導流關鍵字優化",
          "免費贈送「港人到店路線指引＋口岸交通指南」宣傳模板",
        ],
        value: "3 個月起簽",
        expect: "",
        gift: "季度簽約特惠：HK$9,800／季（立減近 $1,800）",
        star: "",
      },
    ],
    payNote: "支持港幣／人民幣對公或對私結算 ｜ 短影音由商家提供素材，工作室全包港式粵語配音、字幕及精剪（如需派員深圳實拍探店可另加購） ｜ 初稿 100% 商家預審確認",
    starTop: "最多商家選擇",
    starValue: "性價比最高",
    bookNow: "立即預約此方案",
    stickyTitle: "想知幾錢？直接問",
    stickyNote: "24 小時內回覆 · 香港團隊",
    stickyBtn: "WhatsApp 問價",
    addons:
      "加購：素材授權 +30-50%",
    ctaLine: "掃碼即時查詢 · 24 小時內回覆",
    ctaHero: "WhatsApp 直接問價",
    ctaContact: "香港團隊 · 繁簡雙語 · 服務深圳／大灣區商家及香港品牌",
    qrWechat: "微信掃碼聯絡",
    qrWa: "WhatsApp 掃碼",
    qrWaBtn: "💬 點擊此處直接開啟 WhatsApp 諮詢",
    mailLabel: "電郵",
    proofKicker: "合作保障",
    proof: [
      { v: "6", l: "個官方帳號同步發布" },
      { v: "100%", l: "初稿商家預審，不通過不上線" },
      { v: "7 日", l: "出稿 · 14 日交後台數據" },
    ],
    stepsTitle: "三步交付流程",
    stepsKicker: "確認之後，平均 3–5 個工作日上線",
    steps: [
      { n: "01", t: "寫稿", b: "按港人語境出稿，你審稿；不通過不改稿，不上線。" },
      { n: "02", t: "拍攝", b: "商家提供素材或店內實拍，我們包剪輯、港式配音、字幕。" },
      { n: "03", t: "投放", b: "雙專頁＋群組同步，7 日後交回後台數據報告。" },
    ],
    stepsNote: "全流程你只需要做兩件事：確認稿、確認片。",
    moreItems: "＋ 另含 {n} 項，詳見下方單項價目",
    dashCapName: "Meta 商務套件 · 創作者管理中心",
    dashCapDate: "截圖 2026-11-17",
    footer:
      "條款：7 日內出稿；初稿經商家預審；合作帖文按 Meta 政策標註「付費合作」。數據截至 2026-11-17，價格可議。",
  },
  cn: {
    brand: "Zero to Growth Studio",
    brandSub: "跨境新媒体引流工作室",
    badge: "zerotogrowth",
    h1: "港人北上媒体矩阵",
    tagline: "香港人每个周末都在决定去哪吃、去哪玩。你要做的，是在他决定之前出现。",
    dateNote: "数据抓取：2026-11-19（Meta 官方 API 实时）",
    stats: [
      { value: "39,318", label: "矩阵总粉丝", up: true },
      { value: "879万", label: "28日浏览·两大专页", up: true },
      { value: "2,112", label: "单帖最高赞好" },
      { value: "12,000", label: "私域群组成员" },
    ],
    reelsLine: "短影音（Reels）传播力：单条最高曝光突破 250,000+ 人次（算法自然外溢破圈，突破粉丝数限制）",
    reelsBadge: "🔥 爆款 Reel 单条最高曝光 250,000+ 人次 ｜ 算法自然破圈",
    sellingTitle: "为什么选择我们",
    sellingSub: "（三项差异化优势）",
    points: [
      {
        title: "01 精准触达｜粉丝就是「正在决定去哪消费的香港人」",
        body: "北上消费决策周期为：周四计划、周五搜集资讯、周六日出发（依自家 174 帖数据实证）。你的广告帖，正好出现在他们搜集资讯的那一刻。",
      },
      {
        title: "02 爆款裂变｜内容被香港人转发，算法暴力推流",
        body: "原创 Reel 短影音常规播放量达 5-15 万次，单条最高 25 万次曝光；配合 Facebook／Instagram 算法二次扩散，单帖最高 2,112 个赞好，触达远超粉丝数，直达尚未关注你的香港消费者。",
      },
      {
        title: "03 私域直达｜12,000 人北上交流群组直达＋可置顶",
        body: "除专页帖文外，群组帖文可直达 12,000 名活跃讨论「去哪吃、去哪玩」的香港会员，并可置顶 7-14 天持续曝光，这是付费广告无法买到的资源。",
      },
    ],
    dashTitle: "后台实录：28 天增长（两大专页官方数据）",
    dashes: [
      {
        name: "大湾区北上攻略情报站",
        fans: "12,792 追踪",
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
        fans: "7,575 追踪",
        nums: [
          { v: "414万", l: "浏览（28日）↑293%" },
          { v: "154,612", l: "互动 ↑233%" },
          { v: "+6,330", l: "新追踪 ↑708%" },
        ],
        float1: "+708% 增长中",
        float2: "414万浏览",
      },
    ],
    bigLine: "28 天，两个专页，在香港人的屏幕上出现了八百七十九万次。",
    dashSum:
      "两页合计：30.2 万次互动、新增 13,827 位追踪者；日均 31 万次曝光，近 30 日以 92 帖的月产量持续增长。",
    cpmTitle: "性价比对决",
    cpmLeftTitle: "传统 Meta 广告",
    cpmLeftBody:
      "CPM（每千次曝光）约 HK$80，另加代理费 12-20%。以单场 10-20 万次曝光计，媒体费 HK$8,000-16,000，连代理费实际支出约 HK$9,000-19,200；受众设定与素材制作仍要自行处理。",
    cpmRightTitle: "本矩阵推广",
    cpmRightBody:
      "对比之下，$2,800 全矩阵方案已包 3 个 FB 专页＋2 个 IG 账号＋12,000 人私域群组，毋须另付媒体费；折算每千次港客触达只约 HK$0.3 起，还带着老牌专页的信任度。",
    vs: "VS",
    caseTitle: "实绩案例：深圳湾展览推广",
    caseName: "史前星球恐龙展（深圳湾万象城 BASE）· 2026-09",
    caseNums: [
      { v: "13,186", l: "观看（2日）" },
      { v: "85", l: "条留言查询" },
      { v: "1.3×", l: "观看 ÷ 粉丝数" },
    ],
    caseBody:
      "单条推广帖带动大量「交通／票价」私信查询，全部引导至场馆信息与港人交通路线（福田／罗湖→11 号线后海站）。观看数超过粉丝数，代表平台算法作出额外推流。",
    topTitle: "近 30 日代表作（真实数据）",
    topPosts: [
      { img: "/posts/p1.jpg", name: "深圳科技地标帖", reach: 290000, likes: 2640, shares: 4267, hot: true },
      { img: "/posts/p2.jpg", name: "广州北京路帖", reach: 250000, likes: 2047, shares: 3026 },
      { img: "/posts/p3.jpg", name: "深圳森林商场帖", reach: 190000, likes: 854, shares: 214 },
      { img: "/posts/p5.jpg", name: "盐田一日游帖", reach: 93000, likes: 593, shares: 97 },
    ],
    likeWord: "赞",
    shareWord: "分享",
    reachWord: "接触人数",
    shareNote: "内容被香港人主动转发，平台算法随之扩大分发。",
    lineupTitle: "媒体阵容",
    lineupHead: ["媒体", "粉丝", "定位"],
    lineupNote: "主力页每日可出多帖、算法分发最稳；补位页题材对口时补量（平台限制期间每日 1 帖），不计入必达交付。",
    lineup: [
      { name: "大湾区北上攻略情报站", fans: "12,792", tier: "主力", note: "大湾区美食旅游攻略与影片" },
      { name: "深圳美食住宿｜港人北上攻略", fans: "7,575", tier: "主力", note: "深圳美食与住宿专页（28 日 +708% 增长中）" },
      { name: "广东美食旅游攻略", fans: "10,471", tier: "补位", note: "广东省深度美食旅游指南（老牌专页，题材对口时补量）" },
      { name: "FB群组·深圳食玩买｜广州美食｜港人北上交流", fans: "约12,000", tier: "私域", note: "私域直达＋可置顶" },
      { name: "@cantonesefoodtravelguide", fans: "4,775", tier: "IG", note: "广东/深圳影片同步（两个月 +36%）" },
      { name: "@chinatravelhack", fans: "3,705", tier: "IG", note: "中国旅游影片同步（两个月 +24%）" },
    ],
    midCtaTitle: "不确定哪个方案适合你？问一句就行。",
    midCtaBody: "说一下你的店做什么、想什么时候开始，我们会回你一份建议：要多少钱、做多少帖、预期看到什么数。24 小时内回覆，问完不一定要下单。",
    midCtaBtn: "WhatsApp 问一句",
    midCtaMsg: "港人北上媒体矩阵｜想问哪个方案适合我",
    priceTitle: "合作方案（HK$）",
    qBannerTitle: "季度優惠｜預付 3 個月全部套餐一律 85 折",
    singleTitle: "单项价目",
    singles: [
      ["专页图文帖（1专页1帖）", "$500-800"],
      ["专页影片帖 Reel（60-90 秒，含配音与字幕）", "$800-1,500"],
      ["探店合作（商家提供餐饮或门票）", "互惠＋$300-600"],
      ["群组情报帖（12,000成员直达）", "$300-800"],
      ["群组置顶 7 天／14 天", "+$600／+$1,000"],
      ["IG 同步加购", "+$200/帖"],
    ],
    packages: [
      {
        tag: "首单体验",
        name: "$688 轻量试水组",
        who: "适合未做过港客推广、希望以数百元预算测试香港客流反应的单店或新品牌",
        hook: "以数百元成本，快速验证香港客人对你品牌的真实兴趣。",
        items: [
          "主力推荐专页深度图文 1 帖（精选大湾区攻略站或广东老牌专页，道地港式语境排版）",
          "12,000 人私域交流群情报帖 1 帖（植入「周末好去处」讨论话题）",
          "初稿预审保障：100% 商家确认后才正式排期发布",
        ],
        value: "单买原价需 $800-$1,100 ｜ 限首单体验",
        expect: "",
        star: "",
      },
      {
        tag: "最多餐饮／休闲景点选择",
        name: "$1,880 周末爆点短影音组",
        who: "适合主打视觉诱惑（烤肉、烘焙、SPA、特色体验），希望精准拦截「周五下班即出发」香港客群的商家",
        hook: "精准把握香港人「周四找资讯、周五做决定、周六北上」的黄金决策期，以短影音引爆周末到店。",
        expect: "精准短片常态播放约 50,000-150,000 次（单条最高达 25 万人次）",
        gift: "",
        items: [
          "2 条黄金档短影音（Reel/Shorts），锁定周四／周五 17:00-20:00 出发前夕发布",
          "全套后期服务：商家提供原片素材，我们负责港式粤语专业配音、繁体字幕与节奏精剪",
          "12,000 人私域群组周末「精华置顶」整整 3 天",
          "双主力专页联播分发，享受算法双重推流",
          "限时加赠：免费同步 2 大 IG Reels（@cantonesefoodtravelguide + @chinatravelhack）",
        ],
        value: "",
        star: "top",
      },
      {
        tag: "新店／大促首选 · 性价比最高",
        name: "$2,800 全矩阵霸屏方案",
        who: "适合新店开业、商场活动、展览盛事，或连锁品牌单月主推",
        hook: "不做慢热推广：一次覆盖全香港用户的 Feed 流，短期内建立开业排队效应。",
        items: [
          "2 大主力 FB 专页同步（20,367 粉丝）＋补位专页 10,471（题材对口时补量）＋双 IG 8,480",
          "双 IG 帐号同步发布（@cantonesefoodtravelguide + @chinatravelhack 触及年轻探店客群）",
          "12,000 人交流群组「精华置顶」整整 7 天（占据私域全周入口）",
          "内建裂变机制：文案引导标记好友与主动转发",
        ],
        value: "单项购买总值逾 $3,900+，一站式完成全网曝光",
        expect: "",
        star: "value",
      },
      {
        tag: "品牌季度签约首选",
        name: "$3,880／月 长效增长代运营",
        who: "适合拒绝「热闹一个周末便归于平淡」、希望建立长期香港客流基本盘的品牌",
        hook: "告别一次性曝光，每月多频次植入港人生活圈，让香港人过关第一时间想起你。",
        items: [
          "全月 4 篇原创深度内容（2 条精剪粤语配音短影音＋2 篇深度种草图文）",
          "12,000 人私域群组每周深度互动（全月共 4 帖）",
          "全月黄金档期（周末及公众假期前夕）优先锁定",
          "月度官方 API 数据复盘报告＋港人到店导流关键字优化",
          "免费赠送「港人到店路线指引＋口岸交通指南」宣传模板",
        ],
        value: "3 个月起签",
        expect: "",
        gift: "季度签约特惠：HK$9,800／季（立减近 $1,800）",
        star: "",
      },
    ],
    starTop: "最多商家选择",
    starValue: "性价比最高",
    bookNow: "立即预约此方案",
    stickyTitle: "想知道多少钱？直接问",
    stickyNote: "24 小时内回复 · 香港团队",
    stickyBtn: "WhatsApp 问价",
    payNote: "支持港币／人民币对公或对私结算 ｜ 短影音由商家提供素材，工作室全包港式粤语配音、字幕及精剪（如需派员深圳实拍探店可另加购） ｜ 初稿 100% 商家预审确认",
    addons: "加购：素材授权 +30-50%",
    ctaLine: "扫码即时查询 · 24 小时内回复",
    ctaHero: "WhatsApp 直接问价",
    ctaContact: "香港团队 · 繁简双语 · 服务深圳／大湾区商家及香港品牌",
    qrWechat: "微信扫码联络",
    qrWa: "WhatsApp 扫码",
    qrWaBtn: "💬 点击此处直接开启 WhatsApp 咨询",
    mailLabel: "邮箱",
    proofKicker: "合作保障",
    proof: [
      { v: "6", l: "个官方账号同步发布" },
      { v: "100%", l: "初稿商家预审，不通过不上线" },
      { v: "7 日", l: "出稿 · 14 日交后台数据" },
    ],
    stepsTitle: "三步交付流程",
    stepsKicker: "确认之后，平均 3–5 个工作日上线",
    steps: [
      { n: "01", t: "写稿", b: "按港人语境出稿，你审稿；不通过不改稿，不上线。" },
      { n: "02", t: "拍摄", b: "商家提供素材或店内实拍，我们包剪辑、港式配音、字幕。" },
      { n: "03", t: "投放", b: "双专页＋群组同步，7 日后交回后台数据报告。" },
    ],
    stepsNote: "全流程你只需要做两件事：确认稿、确认片。",
    moreItems: "＋ 另含 {n} 项，详见下方单项价目",
    dashCapName: "Meta 商务套件 · 创作者管理中心",
    dashCapDate: "截图 2026-11-17",
    footer:
      "条款：7 日内出稿；初稿经商家预审；合作帖文按 Meta 政策标注「付费合作」。数据截至 2026-11-17，价格可议。",
  },
};

const CARD = "glass-card rounded-3xl";
const GOLD = "#e8c98a";
const CREAM = "#f5d98b";
const SOFTGREEN = "#b9d4a8";
const ORANGE = "#f0955c";

export default function Home() {
  const [lang, setLang] = useState<Lang>("hk");
  const [showBar, setShowBar] = useState(false);

  // 手機浮動問價條：過了首屏才出現，並在快到頁尾時收起（避免遮住 CTA 卡）
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const bottom = document.body.scrollHeight - window.innerHeight;
      setShowBar(y > 620 && y < bottom - 620);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
      document.documentElement.lang = l === "hk" ? "zh-Hant-HK" : "zh-Hans-CN";
    } catch {}
  };

  const t = T[lang];
  const wan = (n: number) =>
    n >= 10000 ? `${(n / 10000).toFixed(n % 10000 === 0 ? 0 : 1).replace(/\.0$/, "")}萬` : n.toLocaleString();
  const dashImgs = ["/dash-gba.jpg", "/dash-sz.jpg"];
  const stepImgs = ["/scenes/step-brief.jpg", "/scenes/step-shoot.jpg", "/scenes/step-launch.jpg"];

  return (
    <main className="min-h-screen text-[#f3ead9] relative overflow-x-clip">
      {/* Warm glows + paper grain */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#c5a065]/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 -right-52 w-[500px] h-[500px] rounded-full bg-[#e07b39]/[0.08] blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/5 w-[440px] h-[440px] rounded-full bg-[#c5a065]/[0.08] blur-[150px]" />

      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#1b1712]/90 backdrop-blur-md border-b border-[#c5a065]/25">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <img src="/logo.png" alt="ZTG Studio logo" className="w-10 h-10 object-contain shrink-0" />
            <div className="leading-tight min-w-0">
              <div className="text-[13px] font-bold text-[#e8c98a] truncate">{t.brand}</div>
            </div>
          </div>
          <div className="flex items-center shrink-0">
            <button
              onClick={() => switchLang("hk")}
              className={`px-4 py-1 rounded-full border transition text-sm ${
                lang === "hk"
                  ? "bg-[#c5a065] text-[#221d17] font-bold border-[#c5a065]"
                  : "text-[#c2b6a3] border-white/15"
              }`}
            >
              繁
            </button>
            <button
              onClick={() => switchLang("cn")}
              className={`ml-2 px-4 py-1 rounded-full border transition text-sm ${
                lang === "cn"
                  ? "bg-[#c5a065] text-[#221d17] font-bold border-[#c5a065]"
                  : "text-[#c2b6a3] border-white/15"
              }`}
            >
              簡
            </button>
          </div>
        </div>
      </div>

      {/* Hero — 滿版圖疊字（ref: Havenly）＋統計列懸浮疊底邊（ref: AV portfolio） */}
      <section className="relative min-h-[520px] md:min-h-[620px] max-h-[760px] flex items-center overflow-hidden">
        <img src="/scenes/hero-shenzhen.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-[center_42%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181310]/95 via-[#1d1712]/80 to-[#221d17]/40" />
        <div className="relative max-w-6xl mx-auto px-6 pt-10 md:pt-14 pb-14 md:pb-16 w-full md:grid md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-12">
          <div>
            <span className="inline-block bg-gradient-to-r from-[#b8813f] to-[#e0a866] text-[12.5px] font-bold rounded-full px-4 py-1.5 mb-5 text-[#241c11]">
              {t.reelsBadge}
            </span>
            <h1 className="text-[38px] sm:text-5xl md:text-[56px] font-bold mb-4 tracking-normal leading-[1.12] text-[#f7efdd] max-w-xl text-left">{t.h1}</h1>
            <p className="text-[17px] text-[#e9dcc2]/85 mb-2.5 max-w-lg text-left leading-relaxed">{t.tagline}</p>
            <p className="text-[12.5px] text-[#b0a594] mb-7">{t.dateNote}</p>
            <div className="flex gap-3 flex-col sm:flex-row">
              <a href={waLink(`${t.h1}｜我想了解報價`)} className="text-center bg-gradient-to-r from-[#e89b5c] to-[#f0b48a] text-[#2e2114] font-bold rounded-full px-7 py-3.5 text-sm shadow-[0_0_24px_rgba(232,155,92,0.35)]">
                {t.ctaHero}
              </a>
              <a href="#pricing" className="text-center border border-[#e8c98a]/50 text-[#e8c98a] font-bold rounded-full px-7 py-3.5 text-sm transition hover:bg-[#e8c98a]/10">
                {t.priceTitle}
              </a>
            </div>
            {/* 手機版：把桌面右側的「合作保障」壓成一行 chip，填補下半版空白 */}
            <div className="md:hidden flex flex-wrap gap-x-4 gap-y-1.5 mt-6">
              {t.proof.map((x) => (
                <span key={x.v} className="text-[12px] text-[#c2b6a3]">
                  <b className="text-[#f5d98b] font-bold">{x.v}</b> {x.l}
                </span>
              ))}
            </div>
          </div>

          {/* Social proof card — fills the empty sky */}
          <aside className="hidden md:block">
            <div className="rounded-[1.5rem] border border-[#e8c98a]/25 bg-[#1b1712]/75 p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]">
              <div className="text-[11px] font-bold tracking-[0.22em] text-[#c5a065] mb-5">{t.proofKicker}</div>
              <div className="space-y-4">
                {t.proof.map((pr) => (
                  <div key={pr.l} className="flex items-baseline justify-between gap-3 border-b border-[#e8c98a]/12 pb-3 last:border-0 last:pb-0">
                    <span className="text-[26px] font-bold font-mono tabular-nums text-[#f5d98b] leading-none">{pr.v}</span>
                    <span className="text-[13px] text-[#b9ad9a] text-right">{pr.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="relative px-6 -mt-14 md:-mt-16 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className={`${CARD} rounded-[1.6rem] px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 glow-gold`}>
            {t.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[36px] md:text-[40px] leading-none font-bold font-mono tabular-nums text-[#f5d98b]">
                  {s.value}
                  {s.up ? <span className="text-[#e8c98a] text-lg ml-1">↗</span> : null}
                </div>
                <div className="text-[12.5px] text-[#b9ad9a] mt-2.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling points — 左圖右文 40/60（ref: Lunora） */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 mb-10 border-l-4 border-[#c5a065] text-[#f7efdd]">
            {t.sellingTitle}<span className="hidden sm:inline">{t.sellingSub}</span>
          </h2>
          <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-stretch">
          <div className="relative rounded-[1.4rem] overflow-hidden border border-white/10 group min-h-[240px] md:min-h-[380px]">
            <img src="/scenes/crowd-dongmen.jpg" alt="深圳東門食街人流實景" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
            <span className="absolute bottom-3 left-3 bg-[#181310]/85 text-[11px] text-[#e8c98a] rounded-full px-3 py-1">深圳東門 · 週末實景</span>
          </div>
          <div>
          <div className="grid gap-6">
            {t.points.map((p) => {
              const [num, rest] = p.title.split("｜");
              return (
                <div key={p.title} className="glass-card rounded-2xl p-6 relative overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c5a065]/70 via-[#e8c98a] to-[#c5a065]/70" />
                  <div className="font-mono text-[13px] text-[#c5a065] tracking-[0.2em] mb-2.5">{num}</div>
                  <h3 className="text-[19px] font-bold leading-snug mb-3 text-[#f7efdd]">{rest}</h3>
                  <p className="text-[15px] text-[#cbbfad] leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
          </div>
          <div className="mt-12">
          <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.cpmTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 items-stretch relative">
            <div className="rounded-3xl border border-white/10 bg-[#2a241c]/80 p-5">
              <h3 className="font-bold text-[#e0896a] text-[15px] mb-2">{t.cpmLeftTitle}</h3>
              <p className="text-[15.5px] text-[#cbbfad] leading-relaxed">{t.cpmLeftBody}</p>
            </div>
            <div className="flex w-11 h-11 rounded-full bg-[#241e18] border-2 border-[#c5a065]/50 items-center justify-center font-bold text-sm text-[#e8c98a] z-10 mx-auto my-1 md:my-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              {t.vs}
            </div>
            <div className="rounded-3xl border-2 border-[#c5a065]/70 bg-[#c5a065]/[0.07] p-5">
              <h3 className="font-bold text-[#e8c98a] text-[15px] mb-2">{t.cpmRightTitle}</h3>
              <p className="text-[15.5px] text-[#f3ead9]/80 leading-relaxed">{t.cpmRightBody}</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Three-step process — breather between proof blocks */}
      <section className="px-6 pb-12 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6 md:mb-9">
            <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.stepsTitle}</h2>
            <p className="text-[14px] text-[#b0a594] md:pb-1.5">{t.stepsKicker}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-5">
            {t.steps.map((s, i) => (
              <div key={s.n} className="glass-card rounded-[1.1rem] md:rounded-[1.3rem] overflow-hidden group flex md:block">
                <div className="relative hidden md:block md:w-full md:aspect-[16/10] overflow-hidden">
                  <img src={stepImgs[i]} alt={s.t} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181310] via-[#181310]/35 to-transparent" />
                  <span className="absolute left-4 bottom-3 text-[13px] font-bold tracking-[0.22em] text-[#f5d98b]">{s.n}</span>
                </div>
                <div className="p-4 md:p-5 min-w-0 flex items-start gap-3 md:block">
                  <span className="md:hidden shrink-0 w-9 h-9 rounded-full border border-[#c5a065]/35 bg-[#c5a065]/12 text-[12px] font-bold text-[#f5d98b] flex items-center justify-center">{s.n}</span>
                  <div className="min-w-0">
                    <h3 className="text-[16px] md:text-[19px] font-bold text-[#f7efdd] mb-1 md:mb-2">{s.t}</h3>
                    <p className="text-[13px] md:text-[14.5px] text-[#c2b6a3] leading-[1.55] md:leading-relaxed">{s.b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[14px] text-[#e8c98a] mt-7">{t.stepsNote}</p>
        </div>
      </section>

      {/* Dashboards — real backend screenshot, readable crop */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 mb-8 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.dashTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-stretch">
            <figure className="rounded-[1.4rem] border border-[#c5a065]/25 bg-[#2a241c]/80 p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] flex flex-col justify-center">
              <img src="/dash-gba-crop.png" alt="Meta 商務套件 28 天後台數據" className="w-full rounded-[1rem] block" />
              <figcaption className="flex items-center justify-between gap-3 text-[11.5px] text-[#9c9282] px-1 pt-2.5">
                <span>{t.dashCapName}</span>
                <span className="shrink-0">{t.dashCapDate}</span>
              </figcaption>
            </figure>
            <div className="flex flex-col justify-between h-full">
              {t.dashes.map((d) => (
                <div key={d.name} className="rounded-2xl border border-[#e8c98a]/15 bg-white/[0.04] px-5 py-5 md:py-6 flex-1 flex flex-col justify-center mb-3 last:mb-0">
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <span className="text-[13.5px] font-semibold text-[#f3ead9]">{d.name}</span>
                    <span className="text-[12px] text-[#9c9282] shrink-0">{d.fans}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {d.nums.map((n) => (
                      <div key={n.l}>
                        <div className="text-[24px] md:text-[27px] font-bold font-mono tabular-nums text-[#f5d98b] leading-none">{n.v}</div>
                        <div className="text-[11px] text-[#a89d8b] mt-1.5">{n.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-[14.5px] text-[#c2b6a3] leading-relaxed mt-4">{t.dashSum}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 879萬 — the single big number moment */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-mono font-bold tabular-nums leading-none text-[#f5d98b] text-[19vw] md:text-[6.5rem]">
            879<span className="text-[0.42em]">萬</span>
          </div>
          <p className="text-[15px] text-[#c2b6a3] mt-4">{t.bigLine}</p>
        </div>
      </section>
      {/* Transition — the walkway HK people actually take */}
      <div className="relative h-[170px] md:h-[230px] overflow-hidden">
        <img src="/scenes/bay-band.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#221d17] via-[#221d17]/10 to-[#221d17]" />
        <div className="absolute inset-x-0 bottom-8 md:bottom-12">
          <p className="max-w-6xl mx-auto px-6 text-[12px] tracking-[0.18em] text-[#e8c98a]/80">深圳灣公園 · 週末的香港人</p>
        </div>
      </div>

      {/* Case study */}
      <section className="px-6 section-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.caseTitle}</h2>
          <div className={`${CARD} p-5`}>
            <h3 className="font-semibold text-[15px] mb-1 text-[#f3ead9]">{t.caseName}</h3>
            <div className="grid grid-cols-3 gap-2 my-4">
              {t.caseNums.map((n) => (
                <div key={n.l} className={`${CARD} py-2.5 px-1 text-center`}>
                  <div className="text-base font-bold font-mono tabular-nums text-[#f5d98b]">{n.v}</div>
                  <div className="text-[10px] text-[#b9ad9a]">{n.l}</div>
                </div>
              ))}
            </div>
            <p className="text-[15.5px] text-[#b9ad9a] leading-relaxed">{t.caseBody}</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 md:mt-20">
          <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.topTitle}</h2>
          {t.topPosts.filter((p) => p.hot).map((p) => (
            <div key={p.name} className="glass-card featured rounded-[1.4rem] overflow-hidden grid md:grid-cols-[1fr_1.15fr] mb-6 group">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover aspect-[4/3] group-hover:scale-[1.04] transition-transform duration-500" />
              </div>
              <div className="p-6 md:p-7 flex flex-col justify-center">
                <div className="text-[12px] font-bold tracking-[0.2em] text-[#c5a065] mb-2">TOP 1</div>
                <div className="text-xl font-bold text-[#f7efdd] mb-4">{p.name}</div>
                <div className="flex items-end gap-6 flex-wrap">
                  <div>
                    <div className="text-5xl font-bold font-mono tabular-nums text-[#f5d98b] leading-none">{wan(p.reach)}</div>
                    <div className="text-[12px] text-[#b9ad9a] mt-1.5">{t.reachWord}</div>
                  </div>
                  <div className="pb-1">
                    <div className="text-3xl font-bold font-mono tabular-nums text-[#f0a08a] leading-none">{p.likes.toLocaleString()}</div>
                    <div className="text-[12px] text-[#b9ad9a] mt-1.5">{t.likeWord}</div>
                  </div>
                </div>
                <p className="text-[13px] text-[#b9ad9a] mt-5">{t.shareNote}</p>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {t.topPosts.filter((p) => !p.hot).map((p) => (
              <div key={p.name} className="glass-card rounded-[1rem] sm:rounded-[1.2rem] overflow-hidden group flex sm:block">
                <div className="overflow-hidden shrink-0 w-[104px] sm:w-full">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover aspect-[1/1] sm:aspect-[4/3] group-hover:scale-[1.05] transition-transform duration-500" />
                </div>
                <div className="p-3.5 sm:p-4 min-w-0 flex flex-col justify-center sm:block">
                  <div className="font-semibold text-[13.5px] sm:text-[14px] text-[#f3ead9] mb-1.5 sm:mb-2 truncate">{p.name}</div>
                  <div className="flex items-baseline gap-2 sm:block">
                    <span className="text-[19px] sm:text-[22px] font-bold font-mono tabular-nums text-[#f5d98b] leading-none">{wan(p.reach)}</span>
                    <span className="text-[11px] text-[#b0a594] sm:block sm:mt-1">{t.reachWord}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 sm:mt-2">
                    <span className="text-[14px] sm:text-[16px] font-bold font-mono tabular-nums text-[#f0a08a]">{p.likes.toLocaleString()}</span>
                    <span className="text-[11px] text-[#b0a594]">{t.likeWord}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
      </section>

      {/* Lineup — 左圖右表（ref: Lunora newsletter） */}
      <section className="px-6 pt-20 pb-10 md:py-28">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 mb-8 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.lineupTitle}</h2>
        <div className="grid md:grid-cols-[1fr_2.6fr] gap-8 items-center">
        <div className="relative rounded-[1.4rem] overflow-hidden border border-white/10 group hidden md:block">
          <img src="/scenes/border-real.jpg" alt="福田口岸抵達大堂實景" className="w-full object-cover aspect-[3/4] group-hover:scale-[1.03] transition-transform duration-500" />
          <span className="absolute bottom-3 left-3 bg-[#181310]/85 text-[11px] text-[#e8c98a] rounded-full px-3 py-1">福田口岸 · 抵達大堂</span>
        </div>
        <div>
          <div className="overflow-hidden">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="bg-white/[0.04] text-left text-[#cbbfad]">
                  <th className="px-4 py-3">{t.lineupHead[0]}</th>
                  <th className="px-4 py-3">{t.lineupHead[1]}</th>
                  <th className="px-4 py-3 hidden md:table-cell">{t.lineupHead[2]}</th>
                </tr>
              </thead>
              <tbody>
                {t.lineup.map((m) => (
                  <tr key={m.name} className="border-t border-white/5">
                    <td className="px-4 py-3 align-top">
                      <div className="flex items-start gap-2">
                        <span className={`mt-0.5 shrink-0 text-[10.5px] font-bold rounded px-1.5 py-0.5 border ${
                          m.tier === "主力"
                            ? "text-[#f5d98b] border-[#c5a065]/45 bg-[#c5a065]/15"
                            : m.tier === "私域"
                            ? "text-[#f0a08a] border-[#f0a08a]/35 bg-[#f0a08a]/10"
                            : "text-[#a89d8b] border-white/12 bg-white/[0.04]"
                        }`}>{m.tier}</span>
                        <span className="min-w-0">{m.name}</span>
                      </div>
                      <div className="md:hidden text-[12.5px] font-normal text-[#b0a594] mt-1 leading-snug pl-[3.1rem]">{m.note}</div>
                    </td>
                    <td className="px-4 py-3 align-top font-bold font-mono tabular-nums text-[#f5d98b] whitespace-nowrap">{m.fans}</td>
                    <td className="px-4 py-3 text-[#b9ad9a] hidden md:table-cell">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#b9ad9a] leading-relaxed mt-4 max-w-2xl">{t.lineupNote}</p>
        </div>
        </div>
        </div>
      </section>

      {/* Mid CTA — catch the "interested but unsure" reader before the price wall */}
      <section className="px-6 pt-2 pb-4 md:pb-8">
        <div className="max-w-6xl mx-auto rounded-3xl border border-[#c5a065]/30 bg-[#c5a065]/[0.06] px-6 md:px-10 py-7 md:py-9 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <div className="flex-1">
            <p className="text-[19px] md:text-[23px] font-bold text-[#f7efdd] mb-2 leading-snug">{t.midCtaTitle}</p>
            <p className="text-[13.5px] md:text-[14.5px] text-[#b9ad9a] leading-relaxed">{t.midCtaBody}</p>
          </div>
          <a
            href={waLink(t.midCtaMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e8b479] to-[#f0c48a] text-[#2a1d10] font-bold text-[15px] px-7 py-3.5 hover:brightness-105 transition"
          >
            {t.midCtaBtn}
          </a>
        </div>
      </section>

      {/* Pricing — Morandi cards */}
      <section id="pricing" className="px-6 section-screen scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-bold leading-snug pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.priceTitle}</h2>
          <div className="rounded-3xl border-2 border-[#e8c98a]/70 bg-gradient-to-r from-[#c5a065]/25 via-[#e8c98a]/15 to-[#c5a065]/25 px-4 md:px-6 py-3.5 mb-8 text-center text-[13.5px] sm:text-[15px] md:text-base">
            <p className="text-[16px] md:text-[17px] font-bold text-[#f5d98b] tracking-wide">{t.qBannerTitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-8">
            {t.packages.map((p) => {
              const morandi =
                p.star === "top"
                  ? "featured bg-[#e8c9a8]/15 border-2 border-[#e8c98a]/60"
                  : p.star === "value"
                    ? "featured bg-[#e8c98a]/[0.12] border-2 border-[#e8c98a]/55"
                    : "bg-[#d9c7a7]/[0.07] border border-[#c5a065]/20";
              return (
                <div
                  key={p.name}
                  className={`h-full rounded-3xl p-6 flex flex-col relative ${morandi} ${
                    p.star ? "glow-gold" : ""
                  }`}
                >
                  <div className="h-[34px] mb-1.5 flex items-center justify-start shrink-0">
                    {p.star ? (
                      <span className="bg-[#f5d98b] text-[#3a2f1c] text-[12.5px] font-bold rounded-full px-5 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.4)]">
                        {p.tag}
                      </span>
                    ) : (
                      <span className="text-[14px] font-semibold text-[#f0b48a]">{p.tag}</span>
                    )}
                  </div>
                  <div className="mb-2.5 flex items-baseline gap-2">
                    <span className="text-[23px] sm:text-[27px] leading-none font-bold font-mono tabular-nums text-[#f7efdd]">{p.name}</span>
                  </div>
                  <p className="text-[13px] text-[#cbbfad] leading-snug mb-2.5">{p.who}</p>
                  <p className="text-[14.5px] text-[#e8c98a]/90 leading-relaxed border-l-2 border-[#c5a065]/40 pl-2.5 mb-3.5">
                    「{p.hook}」
                  </p>
                  {p.expect ? (
                    <p className="text-[14px] text-[#f5d98b] font-bold bg-[#c5a065]/10 rounded-xl px-3 py-2 mb-3.5">
                      {p.expect}
                    </p>
                  ) : null}
                  {p.gift ? (
                    <p className="text-[13.5px] text-[#e8c98a] font-bold bg-[#e8c98a]/10 border border-[#e8c98a]/25 rounded-xl px-3 py-2 mb-3.5">
                      {p.gift}
                    </p>
                  ) : null}
                  <ul className="space-y-2 mb-3.5">
                    {p.items.slice(0, 4).map((i) => (
                      <li key={i} className="text-[14px] text-[#c2b6a3] leading-snug flex gap-1.5">
                        <span className="text-[#c5a065] shrink-0">✦</span>
                        <span>{i}</span>
                      </li>
                    ))}
                    {p.items.length > 4 ? (
                      <li className="text-[12.5px] text-[#948a7a] leading-snug pt-0.5">
                        {t.moreItems.replace("{n}", String(p.items.length - 4))}
                      </li>
                    ) : null}
                  </ul>
                  {p.value ? (
                    <p className="text-[13px] text-[#e8c98a] font-semibold mb-3.5">{p.value}</p>
                  ) : null}
                  <a
                    href={waLink(`${p.name}｜想了解詳情`)}
                    className={`mt-auto text-center text-sm font-bold rounded-full py-2.5 px-4 ${
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
          <p className="text-center text-[14.5px] text-[#e8c98a] mb-4 font-semibold">{t.payNote}</p>
          <div className={`${CARD} p-2`}>
            <div className="px-3 pt-2 pb-1 text-sm text-[#cbbfad]">{t.singleTitle}</div>
            <div className="grid md:grid-cols-2 gap-x-6">
              {t.singles.map(([k, v]) => (
                <div key={k} className="flex justify-between items-baseline gap-4 px-3 py-2.5 border-b border-white/5">
                  <span className="text-sm">{k}</span>
                  <span className="text-sm font-bold font-mono tabular-nums text-[#f0b48a] whitespace-nowrap">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[13.5px] text-[#b0a594] mt-3">{t.addons}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28 relative">
        <div className={`max-w-2xl mx-auto ${CARD} p-8 text-center glow-gold`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/logo.png" alt="ZTG Studio logo" className="w-9 h-9 object-contain" />
            <span className="text-[13px] text-[#e8c98a] font-bold">{t.brand}</span>
          </div>
          <p className="text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-r from-[#f5d98b] via-[#e8c98a] to-[#c5a065] bg-clip-text text-transparent">{t.ctaLine}</p>
          <p className="text-[15px] text-[#c2b6a3] mb-8">{t.ctaContact}</p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
            <div className="bg-[#faf6ec] rounded-[1.35rem] p-3 border border-[#c5a065]/45">
              <img src="/qr-wechat.png" alt="WeChat QR" className="w-full rounded-xl" />
              <p className="text-[14px] font-bold text-[#4a3b22] mt-2">{t.qrWechat}</p>
            </div>
            <div className="bg-[#faf6ec] rounded-[1.35rem] p-3 border border-[#c5a065]/45">
              <img src="/qr-whatsapp.png" alt="WhatsApp QR" className="w-full rounded-xl" />
              <p className="text-[14px] font-bold text-[#4a3b22] mt-2">{t.qrWa}</p>
            </div>
          </div>
          <a
            href={waLink(`${t.h1}｜我想了解報價`)}
            className="inline-block bg-gradient-to-r from-[#e89b5c] to-[#f0b48a] text-[#2e2114] font-bold rounded-full px-8 py-3 text-sm mb-4 shadow-[0_0_20px_rgba(232,155,92,0.4)]"
          >
            {t.qrWaBtn}
          </a>
          <p className="text-sm">
            {t.mailLabel}：
            <a href="mailto:ZEROWONG5@GMAIL.COM" className="u-draw font-bold text-[#e8c98a]">
              ZEROWONG5@GMAIL.COM
            </a>
          </p>
        </div>
      </section>

      {/* 手機浮動問價條 — 83% 流量在手機，任何位置都能一按問價 */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
          showBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-3 mb-3 rounded-2xl border border-[#c5a065]/35 bg-[#1b1712]/95 backdrop-blur-md px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-bold text-[#f7efdd] leading-tight">{t.stickyTitle}</p>
              <p className="text-[11px] text-[#a89d8b] leading-tight mt-0.5">{t.stickyNote}</p>
            </div>
            <a
              href={waLink(`${t.h1}｜我想了解報價`)}
              className="shrink-0 bg-gradient-to-r from-[#e89b5c] to-[#f0b48a] text-[#2e2114] font-bold rounded-full px-5 py-2.5 text-[13px] whitespace-nowrap"
            >
              {t.stickyBtn}
            </a>
          </div>
        </div>
      </div>

      <footer className="px-6 py-6 border-t border-[#c5a065]/15">
        <p className="max-w-6xl mx-auto text-[12px] text-white/35 text-center">{t.footer}</p>
      </footer>
    </main>
  );
}
