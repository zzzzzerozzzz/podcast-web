# 粵港外勞事務所 - 官方網站專案

本專案是「粵港外勞事務所」的官方網站源代碼。這是一個基於 Next.js 構建的現代化響應式網站，旨在為香港僱主提供專業的跨境勞務解決方案。

## 🌐 網站資訊

| 網站名稱 | 端口 (Port) | 描述 |
|---------|-------------|------|
| **粵港外勞事務所** | `:3004` | 跨境勞務中介、外勞申請服務、SEO 文章中心 |

---

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev -- -p 3004
```

---

## 📝 內容管理 (適用於粵港外勞事務所)

目前網站採用 **手動代碼管理** 方式。

### 如何新增 SEO 文章

詳細步驟請參考工作流程文件： `.agent/workflows/add-new-article.md`

**簡要流程：**

1. 準備文章內容與圖片（放入 `public/`）。
2. 在 `app/blog/page.tsx` 的 `articles` 列表中添加文章數據。
3. 複製並創建新頁面： `app/blog/[文章-slug]/page.tsx`。

### 圖片資源

* 所有靜態圖片存放在 `public/` 目錄。
* 創辦人圖片：`public/founder.png` (舊) / `public/founder-handshake.png` (新)。

---

## 🛠️ 技術架構

* **框架**: Next.js 13+ (App Router)
* **語言**: TypeScript
* **樣式**: Tailwind CSS
* **部署**: Vercel (連接 GitHub 自動部署)
* **SEO**:
  * 內建 Metadata API
  * Google Search Console 驗證已集成 (`app/layout.tsx`)

### 目錄結構

```
web/
├── app/
│   ├── blog/           # 文章系統 (列表與詳情頁)
│   ├── components/     # 共用組件 (Navbar, Footer 等)
│   ├── services/       # 服務頁面
│   ├── layout.tsx      # 全局佈局 (含 GSC 驗證碼)
│   └── page.tsx        # 首頁 (含創辦人與核心服務)
├── public/             # 靜態資源 (圖片)
└── .agent/workflows/   # AI 助手工作流程指南
```

---

## 📦 部署指南

本專案已配置為推送到 GitHub `main` 分支時自動觸發 Vercel 部署。

**更新線上網站步驟：**

1. **保存更改**：

    ```bash
    git add .
    git commit -m "更新說明..."
    ```

2. **推送到遠端**：

    ```bash
    git push origin main
    ```

    *(如果遇到衝突，且確定本地版本為準，可使用 `git push origin main --force`)*

3. **驗證**：
    推送後約 2-5 分鐘，訪問線上網址檢查更新。

---

## 📅 未來優化建議 (Roadmap)

隨著文章數量增加，目前的「手動複製代碼」方式將變得難以維護。建議未來升級為：

1. **MDX 系統**：將文章寫成 `.md` 文件，自動生成頁面。
2. **Headless CMS**：引入 Contentful 或 Strapi 後台，實現「無代碼」發文。

---

*最後更新時間：2026-01-13*
