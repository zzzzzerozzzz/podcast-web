# 🌱 Zero to Growth - 個人品牌 PWA 網站

> 從 0 到 1 的真實成長 — 餐飲管理專家 Zero Wong 的個人品牌網站

---

## 📖 專案簡介

這是一個基於 **Next.js 15** 構建的漸進式網頁應用程式 (PWA)，專為展示個人品牌內容而設計。網站包含部落格文章、會員專屬 Podcast、以及豐富的個人故事內容。

### 🎯 核心功能

- **📝 部落格系統**：基於 Markdown 的內容管理，支援分類篩選與搜尋
- **🎧 Podcast 專區**：會員專屬音頻內容，整合 Clerk 身份驗證
- **📚 學習書單**：每月推薦書籍展示區
- **💬 金句區塊**：個人品牌金句展示
- **📱 PWA 支援**：可安裝至手機桌面，離線瀏覽

---

## 🚀 快速開始

### 環境需求

- Node.js 18.0 或以上
- npm 或 yarn

### 安裝步驟

```bash
# 1. 安裝依賴套件
npm install

# 2. 建立環境變數檔案
# 複製 .env.example 為 .env.local 並填入 Clerk API 金鑰
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=你的金鑰
# CLERK_SECRET_KEY=你的秘密金鑰

# 3. 啟動開發伺服器
npm run dev

# 4. 開啟瀏覽器訪問
# http://localhost:3000
```

### 建置生產版本

```bash
npm run build
npm run start
```

---

## 📁 專案結構

```
podcast-web/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   ├── blog/              # 部落格頁面
│   │   ├── page.tsx       # 文章列表
│   │   └── [slug]/        # 文章詳情頁
│   ├── listen/            # Podcast 頁面
│   └── profile/           # 會員中心
│
├── components/            # React 元件
│   ├── AppShell/          # 導航列、底部選單
│   ├── Blog/              # 部落格相關元件
│   ├── PWA/               # PWA 安裝提示
│   └── ui/                # 基礎 UI 元件
│
├── content/               # 內容資料
│   └── posts/             # Markdown 部落格文章
│
├── public/                # 靜態資源
│   ├── books/             # 書單封面圖片
│   ├── logo.png           # 網站 Logo
│   └── icons/             # PWA 圖示
│
├── lib/                   # 工具函式
│   ├── posts.ts           # Markdown 解析
│   └── utils.ts           # 通用工具
│
├── docs/                  # 專案文件
│   ├── development-log.md # 開發日誌
│   └── mid-project-review.md # 專案檢討
│
└── .agent/                # AI 助理工作流程
    └── workflows/         # 自動化指令
```

---

## 📝 內容管理指南

### 新增部落格文章

1. 在 `content/posts/` 資料夾新增 `.md` 檔案
2. 使用以下格式：

```markdown
---
title: "文章標題"
date: "2026-01-13"
category: "思維心法"
excerpt: "文章摘要，會顯示在列表頁..."
featured: false
---

這裡是文章內容...
```

### 可用的文章分類

- `思維心法` - 思維方式與心態
- `日常習慣` - 生活習慣培養
- `數位生活` - 數位工具與效率
- `生產力` - 工作效率提升
- `自我照顧` - 身心健康
- `Zero 隨手記` - 輕量級隨筆（會有特殊琥珀色樣式）

---

## 🤖 AI 輔助工作流程

本專案支援透過 AI 助理進行內容更新。使用以下斜線指令：

### `/update-reading-list` - 更新學習書單

```
/update-reading-list

這個月我在讀：
1. 書名 - 作者 - 我的心得
2. 書名 - 作者 - 我的心得
3. 書名 - 作者 - 我的心得
```

AI 會自動：

- 生成書封圖片
- 更新程式碼
- 驗證顯示效果

---

## 🎨 設計系統

### 色彩

| 名稱 | 用途 | 色碼 |
|------|------|------|
| Primary (Olive) | 主色調、按鈕、連結 | `#6B8E23` |
| Background (Cream) | 頁面背景 | `#FFFEF5` |
| Foreground | 主要文字 | `#1c1917` |
| Muted | 次要文字 | `#78716c` |
| Amber | Zero 隨手記專用 | `#f59e0b` |

### 字型

- **標題**：Outfit (無襯線)
- **內文**：Lora (襯線)

### 設計風格

- 圓角設計 (`rounded-2xl`, `rounded-3xl`)
- 柔和陰影 (`shadow-lg`, `shadow-primary/25`)
- 漸層背景 (`bg-gradient-to-br`)
- 微動畫 (`hover:-translate-y-1`, `transition-all`)

---

## 🔧 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | Next.js 15 (App Router) |
| 語言 | TypeScript |
| 樣式 | Tailwind CSS |
| 身份驗證 | Clerk |
| 圖示 | Lucide React |
| 內容 | Markdown + gray-matter + remark |

---

## 📞 聯絡方式

- **品牌**：Zero to Growth
- **創辦人**：Zero Wong
- **理念**：陪你完成從 0 到 1 的真實成長

---

*此專案由 AI 輔助開發，持續更新中。*
