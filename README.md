# 🌱 Zero to Growth - 個人品牌 PWA 網站

> 從 0 到 1 的真實成長 — 餐飲管理專家 Zero Wong 的個人品牌網站

---

## 🔗 線上訪問

- **正式網址**：[https://podcast-web-seven.vercel.app](https://podcast-web-seven.vercel.app)
- **GitHub 倉庫**：[zzzzzerozzzz/podcast-web](https://github.com/zzzzzerozzzz/podcast-web)

---

## 📖 專案簡介

這是一個基於 **Next.js 15** 構建的漸進式網頁應用程式 (PWA)，專為展示個人品牌內容而設計。網站包含部落格文章、會員專屬 Podcast、AI 增長引擎專題、以及豐富的個人故事內容。

### 🎯 核心功能

- **📝 部落格系統**：基於 Markdown 的內容管理，支援分類篩選與搜尋
- **🎧 全站 Podcast 播放器**：懸浮式播放器設計，支援全站無縫聆聽
- **🤖 AI 增長引擎**：10 篇深度 AI 實戰教學文章，涵蓋工具組合與工作流程優化
- **🔐 會員權限系統**：整合 Clerk 身份驗證，支援優雅降級（缺少金鑰時仍可運行）
- **📚 學習書單**：每月推薦書籍展示區，支援動態書封生成
- **📱 PWA 支援**：可安裝至手機桌面，具備流暢的原生應用感

---

## 🤖 AI 增長引擎專題

網站包含完整的 AI 增長引擎專題，共 **10 篇深度文章**：

| # | 文章標題 | 主題 |
|---|---------|------|
| 1 | GEM 法則：打造你的數位分身 | AI 思維框架 |
| 2 | NotebookLM 終極工作流 | 知識萃取工具 |
| 3 | NotebookLM 到 PPT 簡報流程 | 自動化簡報 |
| 4 | AIO：讓 AI 主動找上你的 SEO 策略 | AI 優化策略 |
| 5 | 9 個 NotebookLM 進階技巧 | 進階技巧 |
| 6 | 5 個提升工作效率的 AI 工具 | 工具組合 |
| 7 | Perplexity Pro 實戰場景 | 搜尋工具 |
| 8 | 騰訊元寶：挖開微信資訊金礦 | 中國區工具 |
| 9 | AI 履歷陷阱：避免面試的墓碑 | 求職應用 |
| 10 | 一人公司實戰全攻略 | 創業營運 |

**訪問路徑**：[/ai-engine](https://podcast-web-seven.vercel.app/ai-engine)

---

## 🚀 快速開始

### 環境需求

- Node.js 18.0 或以上
- npm

### 安裝步驟

```bash
# 1. 安裝依賴套件
npm install

# 2. 建立環境變數檔案
# 複製 .env.local 並填入 Clerk API 金鑰
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=你的金鑰
# CLERK_SECRET_KEY=你的秘密金鑰

# 3. 啟動開發伺服器
npm run dev -- -p 3005

# 4. 開啟瀏覽器訪問
# http://localhost:3005
```

---

## 📁 專案結構

```
podcast-web/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   ├── blog/              # 部落格頁面
│   ├── ai-engine/         # AI 增長引擎專題頁
│   ├── listen/            # Podcast 頁面
│   └── profile/           # 會員中心
├── components/            # React 元件
│   ├── AppShell/          # 導航列、底部選單
│   ├── Audio/             # 全站播放器元件
│   ├── Blog/              # 部落格、 Load More 功能
│   └── PWA/               # PWA 安裝提示
├── content/               # 內容資料
│   └── posts/             # Markdown 文章檔案
├── public/
│   └── images/            # 文章封面圖片
├── lib/                   # 工具函式 (Audio Context, Markdown Parser)
├── .agent/
│   └── workflows/         # 開發工作流程文件
└── docs/                  # 專案文件 (開發日誌)
```

---

## 🔧 問題排查 (Troubleshooting)

### 1. 開發伺服器卡住 (Local Dev Hang)

如果遇到 `npm run dev` 啟動後瀏覽器顯示 `ERR_CONNECTION_REFUSED` 或終端機卡在 `Compiling / ...`，請清理快取：

```powershell
Remove-Item -Recurse -Force .next
npm run dev -- -p 3005
```

### 2. Vercel 部署失敗

如果 Vercel Build 報錯，通常是因為缺少環境變數。請在 Vercel Settings 中補齊 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` 和 `CLERK_SECRET_KEY`。
*註：本專案已實作「優雅降級」，若缺少金鑰網站仍能編譯，但會隱藏登入功能。*

### 3. Vercel CLI Token 過期

如果執行 `npx vercel --prod` 出現 Token 無效錯誤，改用 Git 推送方式部署：

```bash
git add -A
git commit -m "feat: 描述更新內容"
git push origin main
```

Vercel 會自動從 GitHub 拉取最新代碼並部署。

---

## 📝 內容管理

### 新增文章格式

在 `content/posts/` 下新增 `.md`，格式如下：

```markdown
---
title: "文章標題"
date: "2026-01-16"
category: "AI 增長引擎"
excerpt: "文章摘要..."
image: "/images/article-cover.png"
featured: true
readTime: "5 min read"
---

文章內容...
```

### 文章分類

- **AI 增長引擎**：AI 工具與工作流程教學
- **思維心法**：個人成長與職涯發展
- **職場實戰**：管理經驗與工作技巧

---

## 🎨 設計規範

- **色彩**：#6B8E23 (Olive), #FFFEF5 (Cream), #f59e0b (Amber)
- **字體**：Outfit (Headings), Lora (Body)
- **動畫**：全站圖片具備彈性懸浮動畫 (`animate-float`)
- **圖片風格**：真實職場攝影，展現東亞專業人士的工作場景

---

## 📋 開發工作流程

專案內建以下開發工作流程（位於 `.agent/workflows/`）：

| 指令 | 描述 |
|------|------|
| `/add-new-article` | 如何為網站添加新的 SEO 文章 |
| `/deploy-to-vercel` | 如何部署網站到 Vercel（含常見問題與解決方法） |
| `/update-reading-list` | 更新 Blog 頁面的「本月學習書單」內容 |

---

## 📅 更新日誌

### 2026-01-16
- ✅ 完成 AI 增長引擎專題（10 篇文章）
- ✅ 更新所有文章封面為真實職場攝影風格
- ✅ 新增部署工作流程文件

### 2026-01-15
- ✅ 建立 AI 增長引擎專題頁面
- ✅ 整合文章分類篩選功能

---

*此專案由 AI 助理輔助開發，持續優化中。*
