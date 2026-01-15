# 🌱 Zero to Growth - 個人品牌 PWA 網站

> 從 0 到 1 的真實成長 — 餐飲管理專家 Zero Wong 的個人品牌網站

---

## 🔗 線上訪問

- **正式網址**：[https://podcast-web-seven.vercel.app](https://podcast-web-seven.vercel.app)
- **GitHub 倉庫**：[zzzzzerozzzz/podcast-web](https://github.com/zzzzzerozzzz/podcast-web)

---

## 📖 專案簡介

這是一個基於 **Next.js 15** 構建的漸進式網頁應用程式 (PWA)，專為展示個人品牌內容而設計。網站包含部落格文章、會員專屬 Podcast、以及豐富的個人故事內容。

### 🎯 核心功能

- **📝 部落格系統**：基於 Markdown 的內容管理，支援分類篩選與搜尋
- **🎧 全站 Podcast 播放器**：懸浮式播放器設計，支援全站無縫聆聽
- **🔐 會員權限系統**：整合 Clerk 身份驗證，支援優雅降級（缺少金鑰時仍可運行）
- **📚 學習書單**：每月推薦書籍展示區，支援動態書封生成
- **📱 PWA 支援**：可安裝至手機桌面，具備流暢的原生應用感

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
│   ├── listen/            # Podcast 頁面
│   └── profile/           # 會員中心
├── components/            # React 元件
│   ├── AppShell/          # 導航列、底部選單
│   ├── Audio/             # 全站播放器元件
│   ├── Blog/              # 部落格、 Load More 功能
│   └── PWA/               # PWA 安裝提示
├── content/               # 內容資料 (.md 檔案)
├── lib/                   # 工具函式 (Audio Context, Markdown Parser)
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

---

## 📝 內容管理

### 新增文章格式

在 `content/posts/` 下新增 `.md`，格式如下：

```markdown
---
title: "文章標題"
date: "2026-01-15"
category: "思維心法"
excerpt: "文章摘要..."
---
```

---

## 🎨 設計規範

- **色彩**：#6B8E23 (Olive), #FFFEF5 (Cream), #f59e0b (Amber)
- **字體**：Outfit (Headings), Lora (Body)
- **動畫**：全站圖片具備彈性懸浮動畫 (`animate-float`)

---

*此專案由 AI 助理輔助開發，持續優化中。*
