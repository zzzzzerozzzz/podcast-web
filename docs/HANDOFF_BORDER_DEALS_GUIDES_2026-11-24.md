# 桌面 Agent 交接與上線指南（Stage 5：雙引擎 4 頁升級）

- **日期**：2026-11-24
- **目標倉庫**：`zzzzzerozzzz/podcast-web`（部署域名：`https://zerotogrowth.app`）
- **對齊基準 Commit**：`origin/main` @ `6a63495`
  - ✅ **100% 保留** `origin/main` 最新已完成的優化（`og.jpg`、SEO canonical、精簡 20% 文案、`WhatsApp 免費問價` CTA、廣東專頁 `~10,000` 及 `0.45s` 快速滾動動畫）。
  - ✅ **無衝突增量疊加** 3 個全新 C 端變現與引流分頁 ＋ 全站統一導覽列。

---

## 1. 本次新增與修改檔案清單

### 新增檔案（8 個）
1. `app/api/border/route.ts`
   - Next.js Server Route（`revalidate = 300` 每 5 分鐘快取），即時串接：
     - 香港政府入境事務處開放數據（香港居民通道）：`https://secure1.info.gov.hk/immd/mobileapps/2bb9ae17/data/CPQueueTimeR.json`
     - 香港天文台實時氣溫／濕度：`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc`
2. `app/border/page.tsx`
   - **`/border` 實時口岸等候時間看板**：顯示羅湖、落馬洲支線（福田）、深圳灣、香園圍（蓮塘）、落馬洲（皇崗）、港珠澳大橋、文錦渡、沙頭角 8 大陸路口岸出入境狀態，支援「北上出境優先 ⇄ 返港入境優先」排序、最暢通口岸推薦、交通指引及導流至 `/deals` 與 `/guides`。
3. `lib/deals-data.ts` & `app/deals/page.tsx`
   - **`/deals` 北上優惠碼與高客單 VIP 專屬預約**：
     - 上半部：牙科／配鏡／高端水療與溫泉酒店／全身體檢 4 張 1對1 WhatsApp VIP 預約卡（點擊自動帶入項目訊息，方便開 3 人私隱小群防走數）。
     - 下半部：可篩選聯盟著數專區（酒店／水療／北上神卡／上網卡），內建一鍵複製優惠碼動畫及香港信用卡法定忠告（`借定唔借？還得到先好借！`）。
4. `lib/guides-data.ts`、`app/guides/page.tsx`、`app/guides/[slug]/page.tsx`
   - **`/guides` 及 `/guides/[slug]` 港人北上實測攻略庫**：支援城市分類篩選，預建 6 篇高搜尋量示範攻略（福田酒店、深圳地標、廣州北京路、過夜水療、北上神卡、8 大口岸全攻略），每篇附「由香港點去」交通資訊盒與轉化 CTA。
5. `components/SiteShell.tsx`
   - 全站共用 `SiteHeader`（桌面單列導覽 ＋ 手機 4 格快捷分頁列：`商務合作｜實時口岸｜北上著數｜實測攻略`）、`SiteFooter` 與 `useSiteLang()` 雙語同步 Hook。

### 修改檔案（3 個）
1. `app/page.tsx`：接入共用 `<SiteHeader />`、`<SiteFooter />` 與 `useSiteLang()`（完整保留 `6a63495` 所有文案與動效）。
2. `components/MotionPrimitives.tsx`：保留 `6a63495` 的 `0.45s` 快速進場設定，將 `amount` 改為 `"some"` 以防手機高卡片漏觸發。
3. `docs/REDESIGN_PLAN_2026-11-23.md`：補全 Stage 5 紀錄。

---

## 2. 給本機電腦 Agent 的一鍵上線步驟（10 秒完成）

請在本機 `podcast-web` 專案目錄執行以下指令（假設補丁檔 `podcast-web-stage5-on-6a63495.patch` 位於桌面或專案根目錄）：

```bash
# 1. 確保本機 main 與遠端最新 (6a63495) 同步
git checkout main
git pull origin main

# 2. （建議）打一個上線前保險 tag
git tag backup-pre-stage5-20261124
git push origin backup-pre-stage5-20261124

# 3. 套用本次無衝突增量補丁
git am /path/to/podcast-web-stage5-on-6a63495.patch

# 4. 本地驗證 TypeScript 與 Next.js Production Build
npm run build

# 5. 推送上 GitHub（自動觸發 Vercel 部署至 zerotogrowth.app）
git push origin main
```

### 上線後驗證網址清單（Vercel 部署約 1–2 分鐘）
- `https://zerotogrowth.app/`（商務合作主頁，頂部應出現 4 個分頁導覽）
- `https://zerotogrowth.app/border`（確認即時顯示香港入境處 8 大口岸狀態與氣溫）
- `https://zerotogrowth.app/api/border`（確認回傳 `"source": "live"`）
- `https://zerotogrowth.app/deals`（確認 VIP 預約 WhatsApp 按鈕、優惠碼複製與信用卡忠告正常）
- `https://zerotogrowth.app/guides` 及任意單篇攻略頁（如 `/guides/shenzhen-futian-hotels-2026`）

---

## 3. 日後更新真實資料位置（超好維護）

- **填入正式聯盟連結（Trip.com / Klook / Creatory 信用卡 / eSIM）與合作 VIP 商家資訊**：
  - 只需修改 `lib/deals-data.ts`：將對應項目的 `url` 換成真實聯盟連結，並將 `ready: false` 改為 `ready: true`。
- **新增或修改北上實測攻略文章**：
  - 只需在 `lib/guides-data.ts` 的 `GUIDE_ARTICLES` 陣列中新增／編輯項目即可自動生成新頁面。
