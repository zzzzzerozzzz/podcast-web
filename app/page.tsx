"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Lang = "hk" | "cn";

const T = {
  hk: {
    brand: "Zero to Growth Studio",
    brandSub: "跨境新媒體引流工作室",
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
    reelsLine: "短影音（Reels）傳播力：常態爆款播放 50,000-150,000+ 次 ｜ 單條最高曝光突破 250,000+ 人次（演算法自然外溢破圈，突破粉絲數限制）",
    sellingTitle: "點解揀我哋（三個別人冇嘅）",
    points: [
      {
        title: "01 精準觸達｜粉絲就係「正在決定去邊消費嘅香港人」",
        body: "北上消費決策週期＝週四計劃 → 週五搵料 → 週六日出發（自家 174 帖數據實證）。你嘅廣告帖出現喺佢哋「搵料」嗰一刻，唔係亂槍打鳥。",
      },
      {
        title: "02 爆款裂變｜內容被香港人轉發，演算法暴力推流",
        body: "唔需要擔心專頁粉絲基數——我哋原創 Reel 短影音常規爆款播放達 5-15 萬次，單條最高紀錄達 25 萬次曝光！配合 Facebook／Instagram 演算法二次擴散，單帖最高分享 4,267 次，直接打入未追蹤你嘅數十萬潛在香港遊客屏幕。",
      },
      {
        title: "03 私域直達｜12,000 人北上交流群組直達＋可置頂",
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
    cpmTitle: "性價比對決",
    cpmLeftTitle: "傳統 Meta 廣告",
    cpmLeftBody:
      "CPM（每千次曝光）約 HK$30-150，另加代理費 12-20%。買足 879 萬曝光＝成本高達數十萬，仲要自己煩受眾設定同素材。",
    cpmRightTitle: "ZTG 矩陣推廣",
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
      { img: "/posts/p1.jpg", name: "深圳科技地標帖", likes: 2640, shares: 4267, hot: true },
      { img: "/posts/p2.jpg", name: "廣州北京路帖", likes: 2047, shares: 3026 },
      { img: "/posts/p3.jpg", name: "深圳森林商場帖", likes: 854, shares: 214 },
      { img: "/posts/p4.jpg", name: "地鐵6號線帖", likes: 772, shares: 94 },
      { img: "/posts/p5.jpg", name: "鹽田一日遊帖", likes: 593, shares: 97 },
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
    qBannerTitle: "季度優惠｜預付 3 個月全部套餐一律 85 折",
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
        tag: "首單體驗",
        name: "$688 輕量試水組",
        who: "未做過港客推廣、想用幾百蚊實測香港客流反應嘅單店／新品牌",
        hook: "幾百蚊極低門檻，即刻試出香港客人對你品牌嘅真實吸引力！",
        items: [
          "主力推薦專頁深度圖文 1 帖（精選大灣區攻略站或廣東老牌專頁，道地港式語境排版）",
          "12,000 人私域交流群情報帖 1 帖（精準植入「週末去邊玩」討論話題）",
          "初稿預審保障：100% 商家確認後才正式排期發布",
        ],
        value: "單買原價需 $800-$1,100 ｜ 限首單體驗",
        expect: "",
        star: "",
      },
      {
        tag: "最多餐飲／休閒景點選擇",
        name: "$1,880 週末爆點短影音組",
        who: "主打視覺誘惑（烤肉、烘焙、按摩SPA、特色體驗），想精準截擊「週五放工即出發」嘅香港客群",
        hook: "卡準香港人『週四搵料、週五決定、週六衝深圳』嘅黃金決策期，短影音引爆週末到店！",
        expect: "精準短片常態播放約 50,000-150,000 次（單條最高達 25 萬人次）",
        gift: "",
        items: [
          "2 條黃金檔短影音（Reel/Shorts），鎖定週四／週五 17:00-20:00 出發前夕發布",
          "包辦全套後製：商家提供原片素材，工作室包辦港式粵語專業配音＋繁體爆點字幕＋網感精剪",
          "12,000 人私域群組週末「精華置頂」整整 3 日",
          "雙主力專頁聯播分發，享受演算法雙重推流",
          "限時加贈：免費同步 2 大 IG Reels（@cantonesefoodtravelguide + @chinatravelhack）",
        ],
        value: "",
        star: "top",
      },
      {
        tag: "新店／大促力薦 · 性價比最高",
        name: "$2,800 全矩陣霸屏方案",
        who: "新店插旗深圳、大型商場活動、展覽盛事，或連鎖品牌單月主推",
        hook: "唔做慢熱推廣！一次過喺全香港人嘅 Feed 流洗版，短時間製造開局排隊效應！",
        items: [
          "全矩陣 3 大 FB 專頁同步分發（總計 38,000+ 精準粉絲同步鋪量）",
          "雙 IG 帳號同步發布（@cantonesefoodtravelguide + @chinatravelhack 觸及年輕探店客群）",
          "12,000 人交流群組「精華置頂」整整 7 日（搶佔私域全週入口）",
          "自帶二級裂變機制：文案引導 @Tag 好友與主動轉發",
        ],
        value: "單項購買總值逾 $3,900+，一站式搞掂全網曝光",
        expect: "",
        star: "value",
      },
      {
        tag: "品牌季度簽約首選",
        name: "$3,880/月 長效增長代運營檔",
        who: "拒絕「爆一日就靜返」！想建立長期香港客流基本盤、鎖定港人「週末固定飯堂」嘅實力品牌",
        hook: "告別單次撞運氣，每月多頻次精準植入生活圈，令香港人過關第一時間諗起你！",
        items: [
          "全月 4 篇原創深度內容（2 條精剪粵語配音短影音＋2 篇深度種草圖文）",
          "12,000 人私域群組每週深度互動（全月共 4 帖持續發酵解答）",
          "享有全月黃金檔期（週末及公眾假期前夕）優先鎖定權",
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
    addons:
      "加購：素材授權 +30-50%",
    ctaLine: "掃碼即時查詢 · 24 小時內回覆",
    ctaContact: "香港團隊 · 繁簡雙語 · 服務深圳/大灣區商家＋香港品牌",
    qrWechat: "微信掃碼加好友",
    qrWa: "WhatsApp 掃碼",
    qrWaBtn: "💬 點擊此處直接開啟 WhatsApp 諮詢",
    mailLabel: "電郵",
    footer:
      "條款：出稿 7 日內；初稿商家預審一次；合作帖按 Meta 政策標註「付費合作」。數據截至 2026-11-17，報價可議。",
  },
  cn: {
    brand: "Zero to Growth Studio",
    brandSub: "跨境新媒体引流工作室",
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
    reelsLine: "短影音（Reels）传播力：常态爆款播放 50,000-150,000+ 次 ｜ 单条最高曝光突破 250,000+ 人次（算法自然外溢破圈，突破粉丝数限制）",
    sellingTitle: "为什么选我们（三个别人没有的）",
    points: [
      {
        title: "01 精准触达｜粉丝就是「正在决定去哪消费的香港人」",
        body: "北上消费决策周期＝周四计划 → 周五找料 → 周六日出发（自家 174 帖数据实证）。你的广告帖出现在他们「找料」那一刻，不是乱枪打鸟。",
      },
      {
        title: "02 爆款裂变｜内容被香港人转发，算法暴力推流",
        body: "不需要担心专页粉丝基数——我们原创 Reel 短影音常规爆款播放达 5-15 万次，单条最高纪录达 25 万次曝光！配合 Facebook／Instagram 算法二次扩散，单帖最高分享 4,267 次，直接打入未追踪你的数十万潜在香港游客屏幕。",
      },
      {
        title: "03 私域直达｜12,000 人北上交流群组直达＋可置顶",
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
    cpmTitle: "性价比对决",
    cpmLeftTitle: "传统 Meta 广告",
    cpmLeftBody:
      "CPM（每千次曝光）约 HK$30-150，另加代理费 12-20%。买足 879 万曝光＝成本高达数十万，还要自己烦受众设定和素材。",
    cpmRightTitle: "ZTG 矩阵推广",
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
      { img: "/posts/p1.jpg", name: "深圳科技地标帖", likes: 2640, shares: 4267, hot: true },
      { img: "/posts/p2.jpg", name: "广州北京路帖", likes: 2047, shares: 3026 },
      { img: "/posts/p3.jpg", name: "深圳森林商场帖", likes: 854, shares: 214 },
      { img: "/posts/p4.jpg", name: "地铁6号线帖", likes: 772, shares: 94 },
      { img: "/posts/p5.jpg", name: "盐田一日游帖", likes: 593, shares: 97 },
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
    qBannerTitle: "季度優惠｜預付 3 個月全部套餐一律 85 折",
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
        tag: "首单体验",
        name: "$688 轻量试水组",
        who: "未做过港客推广、想用几百蚊实测香港客流反应的单店／新品牌",
        hook: "几百蚊极低门槛，立刻试出香港客人对你品牌的真实吸引力！",
        items: [
          "主力推荐专页深度图文 1 帖（精选大湾区攻略站或广东老牌专页，道地港式语境排版）",
          "12,000 人私域交流群情报帖 1 帖（精准植入「周末去哪玩」讨论话题）",
          "初稿预审保障：100% 商家确认后才正式排期发布",
        ],
        value: "单买原价需 $800-$1,100 ｜ 限首单体验",
        expect: "",
        star: "",
      },
      {
        tag: "最多餐饮／休闲景点选择",
        name: "$1,880 周末爆点短影音组",
        who: "主打视觉诱惑（烤肉、烘焙、按摩SPA、特色体验），想精准截击「周五下班即出发」的香港客群",
        hook: "卡准香港人『周四找料、周五决定、周六冲深圳』的黄金决策期，短影音引爆周末到店！",
        expect: "精准短片常态播放约 50,000-150,000 次（单条最高达 25 万人次）",
        gift: "",
        items: [
          "2 条黄金档短影音（Reel/Shorts），锁定周四／周五 17:00-20:00 出发前夕发布",
          "包办全套后期：商家提供原片素材，工作室包办港式粤语专业配音＋繁体爆点字幕＋网感精剪",
          "12,000 人私域群组周末「精华置顶」整整 3 日",
          "双主力专页联播分发，享受算法双重推流",
          "限时加赠：免费同步 2 大 IG Reels（@cantonesefoodtravelguide + @chinatravelhack）",
        ],
        value: "",
        star: "top",
      },
      {
        tag: "新店／大促力荐 · 性价比最高",
        name: "$2,800 全矩阵霸屏方案",
        who: "新店插旗深圳、大型商场活动、展览盛事，或连锁品牌单月主推",
        hook: "不做慢热推广！一次过在全香港人的 Feed 流洗版，短时间制造开局排队效应！",
        items: [
          "全矩阵 3 大 FB 专页同步分发（总计 38,000+ 精准粉丝同步铺量）",
          "双 IG 帐号同步发布（@cantonesefoodtravelguide + @chinatravelhack 触及年轻探店客群）",
          "12,000 人交流群组「精华置顶」整整 7 日（抢占私域全周入口）",
          "自带二级裂变机制：文案引导 @Tag 好友与主动转发",
        ],
        value: "单项购买总值逾 $3,900+，一站式搞定全网曝光",
        expect: "",
        star: "value",
      },
      {
        tag: "品牌季度签约首选",
        name: "$3,880/月 长效增长代运营档",
        who: "拒绝「爆一日就静返」！想建立长期香港客流基本盘、锁定港人「周末固定饭堂」的实力品牌",
        hook: "告别单次撞运气，每月多频次精准植入生活圈，令香港人过关第一时间想起你！",
        items: [
          "全月 4 篇原创深度内容（2 条精剪粤语配音短影音＋2 篇深度种草图文）",
          "12,000 人私域群组每周深度互动（全月共 4 帖持续发酵解答）",
          "享有全月黄金档期（周末及公众假期前夕）优先锁定权",
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
    payNote: "支持港币／人民币对公或对私结算 ｜ 短影音由商家提供素材，工作室全包港式粤语配音、字幕及精剪（如需派员深圳实拍探店可另加购） ｜ 初稿 100% 商家预审确认",
    addons: "加购：素材授权 +30-50%",
    ctaLine: "扫码即时查询 · 24 小时内回复",
    ctaContact: "香港团队 · 繁简双语 · 服务深圳/大湾区商家＋香港品牌",
    qrWechat: "微信扫码加好友",
    qrWa: "WhatsApp 扫码",
    qrWaBtn: "💬 点击此处直接开启 WhatsApp 咨询",
    mailLabel: "邮箱",
    footer:
      "条款：出稿 7 日内；初稿商家预审一次；合作帖按 Meta 政策标注「付费合作」。数据截至 2026-11-17，报价可议。",
  },
};

const CARD = "glass-card rounded-3xl";
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
    <main className="min-h-screen text-[#f3ead9] relative overflow-hidden">
      {/* Warm glows + paper grain */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#c5a065]/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 -right-52 w-[500px] h-[500px] rounded-full bg-[#e07b39]/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/5 w-[440px] h-[440px] rounded-full bg-[#9db88a]/10 blur-[150px]" />
      <div className="pointer-events-none fixed inset-0 paper-grain opacity-[0.05] mix-blend-overlay" />

      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#0c0f17]/85 backdrop-blur border-b border-[#c5a065]/15">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-2.5">
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
                <div className="text-[11.5px] text-[#94a3b8] mt-2">{s.label}</div>
              </div>
            ))}
          </div>
          <div className={`${CARD} mt-4 px-5 py-3.5 text-center col-span-full`}>
            <p className="text-[15px] text-[#f5d98b] font-semibold leading-relaxed">{t.reelsLine}</p>
          </div>
        </div>
      </section>

      {/* Selling points */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">
            {t.sellingTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {t.points.map((p) => (
              <div key={p.title} className={`${CARD} p-5`}>
                <h3 className="font-semibold text-[15px] mb-2 text-[#f3ead9]">{p.title}</h3>
                <p className="text-[15.5px] text-white/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPM VS */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.cpmTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 items-stretch relative">
            <div className="rounded-3xl border border-white/10 bg-[#26211a]/60 backdrop-blur p-5">
              <h3 className="font-bold text-[#e0896a] text-[15px] mb-2">{t.cpmLeftTitle}</h3>
              <p className="text-[15.5px] text-white/55 leading-relaxed">{t.cpmLeftBody}</p>
            </div>
            <div className="flex w-11 h-11 rounded-full bg-[#241e18] border-2 border-[#c5a065]/50 items-center justify-center font-bold text-sm text-[#e8c98a] z-10 mx-auto my-1 md:my-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              {t.vs}
            </div>
            <div className="rounded-3xl border-2 border-[#c5a065]/70 bg-[#c5a065]/[0.07] backdrop-blur p-5 glow-gold">
              <h3 className="font-bold text-[#e8c98a] text-[15px] mb-2">{t.cpmRightTitle}</h3>
              <p className="text-[15.5px] text-[#f3ead9]/80 leading-relaxed">{t.cpmRightBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards in polaroid frames */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.dashTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {t.dashes.map((d, i) => (
              <div key={d.name} className="relative">
                <div className={`relative mx-auto w-full max-w-[280px] ${i === 0 ? "md:-rotate-2" : "md:rotate-2"}`}>
                  {/* tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#e8c98a]/40 rotate-[-4deg] rounded-sm z-10 backdrop-blur-sm" />
                  <div className="bg-[#faf6ec] rounded-[28px] p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]">
                    <img src={dashImgs[i]} alt={d.name} className="w-full rounded-xl aspect-[9/18] object-cover object-top" />
                    <p className="text-center text-[13px] font-semibold text-[#6b5a3e] mt-2.5 truncate">
                      ✦ {d.name} ✦
                    </p>
                  </div>
                  <div className="absolute -right-3 top-8 bg-[#f5d98b] text-[#3a2f1c] text-[13px] font-bold rounded-full px-3 py-1.5 shadow-[0_0_18px_rgba(245,217,139,0.45)] rotate-3">
                    {d.float1}
                  </div>
                  <div className="absolute -left-3 bottom-14 bg-[#b9d4a8] text-[#26301c] text-[13px] font-bold rounded-full px-3 py-1.5 shadow-[0_0_18px_rgba(185,212,168,0.4)] -rotate-2">
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
          <h2 className="text-2xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.caseTitle}</h2>
          <div className={`${CARD} p-5`}>
            <h3 className="font-semibold text-[15px] mb-1 text-[#f3ead9]">{t.caseName}</h3>
            <div className="grid grid-cols-3 gap-2 my-4">
              {t.caseNums.map((n) => (
                <div key={n.l} className={`${CARD} py-2.5 px-1 text-center`}>
                  <div className="text-base font-bold font-mono tabular-nums text-[#f5d98b]">{n.v}</div>
                  <div className="text-[10px] text-white/45">{n.l}</div>
                </div>
              ))}
            </div>
            <p className="text-[15.5px] text-white/60 leading-relaxed">{t.caseBody}</p>
          </div>
        </div>
      </section>

      {/* Top posts polaroid wall */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.topTitle}</h2>
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
                <img src={p.img} alt={p.name} className="w-16 h-16 rounded-2xl object-cover shrink-0 border border-white/10" />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-[14px] truncate text-[#f3ead9]">{p.name}</div>
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
          <h2 className="text-2xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.lineupTitle}</h2>
          <div className={`${CARD} overflow-hidden`}>
            <table className="w-full text-[15px]">
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
                <p key={m.name} className="text-[12.5px] text-white/40">
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
          <h2 className="text-2xl font-bold pl-3 mb-6 border-l-4 border-[#c5a065] text-[#f7efdd]">{t.priceTitle}</h2>
          <div className="rounded-3xl border-2 border-[#e8c98a]/70 bg-gradient-to-r from-[#c5a065]/25 via-[#e8c98a]/15 to-[#c5a065]/25 backdrop-blur px-6 py-4 mb-6 glow-gold text-center">
            <p className="text-[19px] font-bold text-[#f5d98b] tracking-wide">{t.qBannerTitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5 mb-6">
            {t.packages.map((p) => {
              const morandi =
                p.star === "top"
                  ? "featured bg-[#e8c9a8]/15 border-2 border-[#e8c98a]/60"
                  : p.star === "value"
                    ? "featured bg-[#b8c9a8]/12 border-2 border-[#b9d4a8]/60"
                    : "bg-[#d9c7a7]/[0.07] border border-[#c5a065]/20";
              return (
                <div
                  key={p.name}
                  className={`h-full rounded-3xl p-5 backdrop-blur flex flex-col relative ${morandi} ${
                    p.star ? "glow-gold" : ""
                  }`}
                >
                  <div className="h-[34px] mb-1.5 flex items-center justify-center shrink-0">
                    {p.star ? (
                      <span className="bg-[#f5d98b] text-[#3a2f1c] text-[12.5px] font-bold rounded-full px-5 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.4)]">
                        {p.tag}
                      </span>
                    ) : (
                      <span className="text-[14px] font-semibold text-[#f0b48a]">{p.tag}</span>
                    )}
                  </div>
                  <div className="text-[22px] leading-tight font-bold font-mono tabular-nums mb-2.5 text-[#f7efdd]">{p.name}</div>
                  <p className="text-[13px] text-white/55 leading-snug mb-2.5">{p.who}</p>
                  <p className="text-[14.5px] text-[#e8c98a]/90 italic leading-relaxed border-l-2 border-[#c5a065]/40 pl-2.5 mb-3.5">
                    「{p.hook}」
                  </p>
                  {p.expect ? (
                    <p className="text-[14px] text-[#f5d98b] font-bold bg-[#c5a065]/10 rounded-xl px-3 py-2 mb-3.5">
                      {p.expect}
                    </p>
                  ) : null}
                  {p.gift ? (
                    <p className="text-[13.5px] text-[#b9d4a8] font-bold bg-[#b9d4a8]/10 border border-[#b9d4a8]/25 rounded-xl px-3 py-2 mb-3.5">
                      {p.gift}
                    </p>
                  ) : null}
                  <ul className="space-y-2 mb-3.5 flex-1">
                    {p.items.map((i) => (
                      <li key={i} className="text-[14px] text-white/65 leading-snug flex gap-1.5">
                        <span className="text-[#c5a065] shrink-0">✦</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  {p.value ? (
                    <p className="text-[13px] text-[#b9d4a8] font-semibold mb-3.5">{p.value}</p>
                  ) : null}
                  <a
                    href="https://wa.me/qr/RFLV47X75BYHI1"
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
          <p className="text-[13.5px] text-white/40 mt-3">{t.addons}</p>
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
          <p className="text-[15px] text-white/50 mb-8">{t.ctaContact}</p>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-6">
            <div className="bg-[#faf6ec] rounded-[1.35rem] p-3 border border-[#c5a065]/45 glow-gold">
              <img src="/qr-wechat.png" alt="WeChat QR" className="w-full rounded-xl" />
              <p className="text-[14px] font-bold text-[#4a3b22] mt-2">{t.qrWechat}</p>
            </div>
            <div className="bg-[#faf6ec] rounded-[1.35rem] p-3 border border-[#c5a065]/45 glow-gold">
              <img src="/qr-whatsapp.png" alt="WhatsApp QR" className="w-full rounded-xl" />
              <p className="text-[14px] font-bold text-[#4a3b22] mt-2">{t.qrWa}</p>
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
        <p className="max-w-5xl mx-auto text-[12px] text-white/35 text-center">{t.footer}</p>
      </footer>
    </main>
  );
}
