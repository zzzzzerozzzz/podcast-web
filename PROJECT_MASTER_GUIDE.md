# Zero to Growth (Podcast Web) - 專案全攻略開發手冊

## 1. 專案核心與定位
**專案名稱**: Zero to Growth (從零到增長)
**核心價值**: "AI 不會取代你，但會用 AI 的人會。"
**目標受眾**: 尋求數位轉型、個人增長、AI 實戰應用的專業人士。
**視覺風格**: **Organic Professional (有機專業)**
- 結合自然元素（植物、根系、金屬）與現代科技。
- 強調「增長」是自然的演化，而非冰冷的機械堆疊。

---

## 2. 技術架構 (Tech Stack)
本專案採用現代化、高效能的無頭網站架構：

- **核心框架**: [Next.js 14+](https://nextjs.org/) (App Router 架構)
- **程式語言**: TypeScript
- **樣式系統**: [Tailwind CSS v3](https://tailwindcss.com/) + Shadcn/ui (元件庫)
- **會員系統**: [Clerk](https://clerk.com/) (身份驗證與會員管理)
- **圖標庫**: [Lucide React](https://lucide.dev/)
- **字體**: Inter, Noto Sans TC (針對中文優化)

---

## 3. 視覺設計系統 (Design System)

### 3.1 核心配色 (Color Palette)
- **Primary (主色 - 橄欖綠)**: `#4a5d23` (象徵生長、智慧、穩健)
- **Accent (強調色 - 暗金/大地)**: `#c5a065` (象徵價值、收穫、高級感)
- **Background (背景 - 米白/奶油)**: `#fbfaf8` (象徵紙張質感、閱讀舒適)
- **Stroke (線條 - 深鼠尾草綠)**: `#2c3e26` (象徵結構、邊界)

### 3.2 圖片生成策略 (AI Image Prompts)
本網站的所有核心配圖皆由 AI 生成，並統一為 **"2D Organic Flat Illustration"** 風格。

**通用 Prompt 結構**:
> "Minimalist 2D flat vector editorial illustration. [主題描述]. Olive green and antique gold. Grain texture, cream background. Organic style."

**關鍵圖片 Prompts**:
1.  **AI Growth Engine (首頁 Hero)**:
    - *Prompt*: "A stylized abstract wheel or turbine made of swirling organic leaf shapes and geometric circles, symbolizing natural momentum engine."
2.  **Membership (會員鑰匙)**:
    - *Prompt*: "A funnel made of overlapping large olive green and gold leaves, filtering out grey geometric specks and dropping golden seeds representing value."
3.  **Data Insight (騰訊元寶)**:
    - *Prompt*: "A chat bubble shape that looks like a natural cave entrance surrounded by plant roots. A stream of golden water or energy flows out."

---

## 4. 頁面架構與內容 (Site Structure)

### 4.1 首頁 (`app/page.tsx`)
首頁採用 **"雜誌式佈局 (Magazine Layout)"**，強調閱讀深度與視覺層次。

- **Hero Section**:
    - **標題**: "AI 不會取代你，但會用 AI 的人會。"
    - **CTA**: "進入 AI 增長引擎" (引導至內容)
    - **視覺**: 有機渦輪引擎圖。
- **Featured Posts (最新思維)**:
    - **主推文章 (Main Feature)**: 左側大圖，展示最具份量的深度文章 (目前設定為 Perplexity 或 AI Filter 相關文章)。
    - **次要文章列表 (Sidebar List)**: 右側列表，快速瀏覽最新標題。
- **Monthly Reading List (本月書單)**:
    - **組件位置**: `components/Home/ReadingList.tsx`
    - **功能**: 展示書籍封面、星級評分、簡短書評。
- **Membership Section (會員專區)**:
    - **視覺**: 深色背景 + 金色種子漏斗圖。
    - **文案**: "加入會員，獲取專屬增長資源"。

### 4.2 會員中心 (`app/profile/page.tsx`)
整合 Clerk 會員系統，根據登入狀態顯示不同內容。

- **未登入狀態 (`<SignedOut>`)**:
    - 顯示吸睛的 Hero 區域。
    - 列出會員權益 (Podcast, 書單, 模版)。
    - 顯示「登入 / 註冊」按鈕。
- **已登入狀態 (`<SignedIn>`)**:
    - 歡迎詞 (讀取 Clerk User Data)。
    - **功能儀表板**:
        1.  **會員 Podcast**: 連結至 `/listen`。
        2.  **AI 實戰模板**: 連結至 `/ai-engine`。
        3.  **個人檔案**: (開發中)
        4.  **訂閱管理**: (開發中)

### 4.3 導航與佈局 (`app/layout.tsx`, `components/AppShell`)
- **Navbar**: 響應式設計，包含 Logo、導航連結、Clerk User Button。
- **Footer**: 包含社群連結、版權宣告、Sitemap。

---

## 5. 檔案目錄結構 (Directory Map)

```
podcast-web/
├── app/
│   ├── layout.tsx       # 全域佈局 (字體、Navbar、Footer)
│   ├── page.tsx         # 首頁 (主要內容入口)
│   ├── profile/         # 會員中心頁面
│   ├── listen/          # Podcast 播放列表頁面
│   └── globals.css      # 全域樣式 (Tailwind 設定)
├── components/
│   ├── AppShell/        # 應用程式外框 (Navbar, Footer)
│   ├── Home/            # 首頁專用組件 (ReadingList, FeaturedPosts)
│   └── ui/              # 共用 UI 元件 (Button, Card...)
├── public/
│   └── images/          # 靜態圖片資源 (posts/, hero-*.png)
├── lib/
│   └── posts.ts         # 文章資料邏輯 (目前為靜態數據)
└── tailwind.config.ts   # 樣式配置 (顏色、斷點)
```

## 6. 未來開發建議 (Roadmap)

1.  **CMS 整合**: 
    - 目前文章資料 `lib/posts.ts` 為手動維護。建議未來串接 Headless CMS (如 Sanity, Notion API) 以便更輕鬆地發布文章。
2.  **資料庫串接**:
    - 目前 Waitlist 僅為前端顯示。建議使用 Supabase 或連接 Google Sheets API 將 Email 收集起來。
3.  **會員分級**:
    - 利用 Clerk 的 Metadata 功能，區分 "Free" 與 "Pro" 會員，展示不同等級的內容。
