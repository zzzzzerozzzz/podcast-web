/* eslint-disable @next/next/no-img-element */

const stats = [
  { value: "38,178", label: "矩阵总粉丝（FB＋IG）" },
  { value: "879万", label: "28日浏览·两大专页" },
  { value: "4,267", label: "单帖最高分享" },
  { value: "12,000", label: "私域群组成员" },
];

const sellingPoints = [
  {
    title: "① 精准：粉丝就是「正在决定去哪消费的香港人」",
    body: "北上消费决策周期＝周四计划 → 周五找料 → 周六日出发（自家 174 帖数据实证）。你的广告帖出现在他们「找料」那一刻，不是乱枪打鸟。",
  },
  {
    title: "② 裂变：内容被香港人「转发给朋友」",
    body: "分享是 Facebook 最强推流信号。我们单帖分享最高 4,267 次——一次投放，裂变触达远超粉丝数。付 1 个粉的钱，到 3 个人的屏幕。",
  },
  {
    title: "③ 私域：12,000 人北上交流群组直达＋可置顶",
    body: "专页帖之外，群组帖直达 12,000 个活跃问「去哪吃去哪玩」的香港人，可置顶 7-14 天持续曝光——这是广告投放买不到的。",
  },
];

const dashboards = [
  {
    img: "/dash-gba.jpg",
    name: "大湾区北上攻略情报站 · 12,094 追踪",
    nums: [
      { v: "465万", l: "浏览（28日）↑160%" },
      { v: "147,595", l: "互动 ↑56%" },
      { v: "+7,497", l: "新追踪 ↑233%" },
    ],
  },
  {
    img: "/dash-sz.jpg",
    name: "深圳美食住宿｜港人北上攻略 · 7,135 追踪",
    nums: [
      { v: "414万", l: "浏览（28日）↑293%" },
      { v: "154,612", l: "互动 ↑233%" },
      { v: "+6,330", l: "新追踪 ↑708%" },
    ],
  },
];

const caseNums = [
  { v: "13,186", l: "观看（2日）" },
  { v: "85", l: "条留言查询" },
  { v: "1.3×", l: "观看 ÷ 粉丝数" },
];

const topPosts = [
  { name: "深圳科技地标帖", likes: 2640, shares: 4267 },
  { name: "广州北京路帖", likes: 2047, shares: 3026 },
  { name: "深圳森林商场帖", likes: 854, shares: 214 },
  { name: "地铁6号线帖", likes: 772, shares: 94 },
  { name: "盐田一日游帖", likes: 593, shares: 97 },
];

const lineup = [
  { name: "大湾区北上攻略情报站", fans: "12,094", note: "大湾区食玩买攻略＋影片" },
  { name: "广东美食旅游攻略", fans: "10,469", note: "广东省美食旅游（12/25 恢复全量）" },
  { name: "深圳美食住宿｜港人北上攻略", fans: "7,135", note: "深圳食住买专页（28日 +708% 增长中）" },
  { name: "FB群组·深圳食玩买｜广州美食｜港人北上交流", fans: "约12,000", note: "私域直达＋置顶" },
  { name: "IG @cantonesefoodtravelguide", fans: "4,775", note: "广东/深圳影片同步（两个月 +36%）" },
  { name: "IG @chinatravelhack", fans: "3,705", note: "中国旅游影片同步（两个月 +24%）" },
];

const singleRates = [
  ["专页图文帖（1专页1帖）", "$500-800"],
  ["专页视频帖 Reel（60-90s 配音字幕）", "$800-1,500"],
  ["探店合作（商家出餐/门票）", "互惠＋$300-600"],
  ["群组情报帖（12,000成员直达）", "$300-800"],
  ["群组置顶 7日／14日", "+$600／+$1,000"],
  ["IG 同步加购", "+$200/帖"],
];

const packages = [
  {
    tag: "🔥 首单体验",
    name: "$688 体验组",
    body: "专页图文 1 帖＋群组情报帖 1 帖（原价约 $900，先试效果）",
  },
  {
    tag: "🎯 周末爆点",
    name: "$1,880",
    body: "周四/五黄金档 2 条视频＋群组置顶 3 日（卡准「周五找料」决策点）",
  },
  {
    tag: "🚀 全矩阵",
    name: "$2,800",
    body: "3 专页＋IG＋群组置顶 7 日（单买 $3,500+）",
  },
  {
    tag: "📅 包月档",
    name: "$3,880/月",
    body: "每月 2 视频＋2 图文＋群组 4 帖＋黄金档优先（3 个月起）",
  },
];

const WHY = [
  "北上决策周期＝周四计划→周五找料→周六日行动，广告帖黄金档对位",
  "单帖分享 1,000-4,267，裂变触达远超粉丝数",
  "香港 FB 付费广告 CPM 约 HK$30-150 另加代理费 12-20%——原生内容帖自带信任＋精准北上客",
  "AI 生产线＋真人编辑，30 日 92 帖稳定产能",
];

export default function Home() {
  const maxLike = Math.max(...topPosts.map((p) => p.likes));

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2b5b] to-[#1c5bb8] text-white px-6 pt-10 pb-8">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-[#ff8a00] text-[13px] font-bold rounded-full px-3 py-1 mb-4">
            深圳/大湾区商家 · 港客推广专家
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">港人北上媒体矩阵</h1>
          <p className="text-[15px] opacity-95 mb-1">
            一句话：深圳商家想做的「香港客人」生意，我们隔着一条深圳河帮你直接触达他们。
          </p>
          <p className="text-xs opacity-70 mb-6">数据抓取：2026-11-17（Meta 官方 API 实时）</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl px-3 py-3 text-center">
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-[11px] opacity-85">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling points */}
      <section className="px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#0f2b5b] border-l-4 border-[#1c5bb8] pl-3 mb-5">
            为什么选我们（三个别人没有的）
          </h2>
          <div className="space-y-4">
            {sellingPoints.map((p) => (
              <div key={p.title} className="bg-[#f0f7ff] rounded-xl p-4">
                <h3 className="font-semibold text-[#0f2b5b] text-[15px] mb-1">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section className="px-6 pb-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#0f2b5b] border-l-4 border-[#1c5bb8] pl-3 mb-5">
            后台实录：28 天增长（两大专页官方数据）
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {dashboards.map((d) => (
              <div key={d.name} className="bg-[#f0f7ff] rounded-xl p-4">
                <h3 className="font-semibold text-[#0f2b5b] text-[14px] mb-3">{d.name}</h3>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {d.nums.map((n) => (
                    <div key={n.l} className="bg-white rounded-lg py-2 px-1 text-center">
                      <div className="text-base font-bold text-[#c2410c]">{n.v}</div>
                      <div className="text-[10px] text-slate-500">{n.l}</div>
                    </div>
                  ))}
                </div>
                <img
                  src={d.img}
                  alt={`${d.name} 后台截图`}
                  className="w-full rounded-lg border border-slate-200"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-4">
            两页合计：28 天 <b>879 万浏览</b>、30.2 万次互动、新增 13,827 追踪——日均 31 万曝光的高速增长流量池，你的广告帖进入的不是死水一潭。
          </p>
        </div>
      </section>

      {/* Case study */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#0f2b5b] border-l-4 border-[#1c5bb8] pl-3 mb-5">
            实绩案例：深圳湾展览推广
          </h2>
          <div className="bg-[#f0f7ff] rounded-xl p-4">
            <h3 className="font-semibold text-[#0f2b5b] text-[15px]">
              史前星球恐龙展（深圳湾万象城 BASE）· 2026-09
            </h3>
            <div className="grid grid-cols-3 gap-2 my-3">
              {caseNums.map((n) => (
                <div key={n.l} className="bg-white rounded-lg py-2 px-1 text-center">
                  <div className="text-base font-bold text-[#c2410c]">{n.v}</div>
                  <div className="text-[10px] text-slate-500">{n.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              单条推广帖带动大量「怎么去/多少钱」私讯查询，全部引导至场馆信息与港人交通路线（福田/罗湖→11号线后海站）。观看数超粉丝数＝平台算法额外推流。
            </p>
          </div>
        </div>
      </section>

      {/* Top posts chart */}
      <section className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#0f2b5b] border-l-4 border-[#1c5bb8] pl-3 mb-5">
            近30日代表作（真实数据）
          </h2>
          <div className="bg-white rounded-xl border border-slate-100 p-4">
            {topPosts.map((p) => (
              <div key={p.name} className="mb-3">
                <div className="flex justify-between text-[13px] mb-1">
                  <span>{p.name}</span>
                  <span className="text-slate-500">
                    赞 {p.likes.toLocaleString()}｜分享 {p.shares.toLocaleString()}
                  </span>
                </div>
                <div className="h-3.5 bg-slate-100 rounded overflow-hidden mb-1">
                  <div
                    className="h-full bg-gradient-to-r from-[#1c5bb8] to-[#4d8be0]"
                    style={{ width: `${(p.likes / maxLike) * 100}%` }}
                  />
                </div>
                <div className="h-3.5 bg-slate-100 rounded overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff8a00] to-[#ffb25e]"
                    style={{ width: `${(p.shares / maxLike) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <p className="text-[11px] text-slate-500 mt-1">
              <span className="inline-block w-2.5 h-2.5 bg-[#1c5bb8] rounded-sm mr-1 align-middle" />
              赞
              <span className="inline-block w-2.5 h-2.5 bg-[#ff8a00] rounded-sm mr-1 ml-3 align-middle" />
              分享（裂变触达）
            </p>
          </div>
        </div>
      </section>

      {/* Lineup */}
      <section className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#0f2b5b] border-l-4 border-[#1c5bb8] pl-3 mb-5">
            媒体阵容
          </h2>
          <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#eef2fa] text-[#0f2b5b] text-left">
                  <th className="px-3 py-2">媒体</th>
                  <th className="px-3 py-2">粉丝</th>
                  <th className="px-3 py-2 hidden md:table-cell">定位</th>
                </tr>
              </thead>
              <tbody>
                {lineup.map((m) => (
                  <tr key={m.name} className="border-t border-slate-100">
                    <td className="px-3 py-2">{m.name}</td>
                    <td className="px-3 py-2 font-bold text-[#0f2b5b] whitespace-nowrap">{m.fans}</td>
                    <td className="px-3 py-2 text-slate-500 hidden md:table-cell">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden px-3 pb-3 space-y-1">
              {lineup.map((m) => (
                <p key={m.name} className="text-[11px] text-slate-500">
                  · {m.name}：{m.note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#0f2b5b] border-l-4 border-[#1c5bb8] pl-3 mb-5">
            合作方案（HK$）
          </h2>
          <div className="bg-white rounded-xl border border-slate-100 overflow-hidden mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#eef2fa] text-[#0f2b5b] text-left">
                  <th className="px-3 py-2">单项</th>
                  <th className="px-3 py-2">价</th>
                </tr>
              </thead>
              <tbody>
                {singleRates.map(([k, v]) => (
                  <tr key={k} className="border-t border-slate-100">
                    <td className="px-3 py-2">{k}</td>
                    <td className="px-3 py-2 font-bold text-[#c2410c] whitespace-nowrap">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {packages.map((p) => (
              <div key={p.name} className="bg-[#fff7e6] rounded-xl p-4">
                <div className="text-[13px] text-[#c2410c] font-bold mb-1">{p.tag}</div>
                <div className="text-lg font-bold text-slate-800 mb-1">{p.name}</div>
                <p className="text-[13px] text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4">
            加购：素材授权 +30-50%｜留言关键词→私信导流 +$150（避 FB
            外链新政）｜简体版内容 +$100。对比参考：香港 FB 付费广告 CPM 约 HK$30-150 另加代理费 12-20%。
          </p>
        </div>
      </section>

      {/* Why invest */}
      <section className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#0f2b5b] border-l-4 border-[#1c5bb8] pl-3 mb-5">
            值得投放的四个理由
          </h2>
          <ul className="space-y-2">
            {WHY.map((w) => (
              <li key={w} className="text-sm text-slate-600 flex gap-2">
                <span className="text-[#ff8a00] font-bold">✓</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2b5b] text-white px-6 py-10 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg font-bold mb-2">WhatsApp 即时查询 · 24 小时内回复</p>
          <p className="text-sm opacity-85 mb-6">
            【联络人／电话待补】｜香港团队 · 繁简双语 · 服务深圳/大湾区商家＋香港品牌
          </p>
          <a
            href="https://wa.me/"
            className="inline-block bg-[#ff8a00] text-white font-bold rounded-full px-8 py-3"
          >
            WhatsApp 查询合作
          </a>
        </div>
      </section>

      <footer className="bg-slate-100 px-6 py-5">
        <p className="max-w-2xl mx-auto text-[11px] text-slate-400 text-center">
          条款：出稿 7 日内；初稿商家预审一次；合作帖按 Meta 政策标注「付费合作」。数据截至
          2026-11-17，报价可议。
        </p>
      </footer>
    </main>
  );
}
