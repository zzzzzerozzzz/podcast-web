# 🌱 Zero to Growth PWA - 中期專案檢討報告

**日期**：2026-01-12  
**專案階段**：首頁與基礎架構完成

---

## 📊 專案進度概覽

### ✅ 已完成功能

- [x] Next.js 14 + App Router 架構設置
- [x] Clerk 會員認證整合
- [x] PWA 基礎配置（manifest、icon、install prompt）
- [x] 響應式導航系統（Desktop Navbar + Mobile BottomNav）
- [x] 首頁 Hero 區塊設計
- [x] 更新日誌卡片（動態顯示最新內容）
- [x] Podcast 收聽頁面（會員鎖定功能）
- [x] 品牌 Logo 統一化

### 🔲 待開發功能

- [ ] 部落格文章詳情頁 (`/blog/[slug]`)
- [ ] 會員個人檔案頁 (`/profile`)
- [ ] 全站音頻播放器（Mini Player）
- [ ] 實際音頻播放功能
- [ ] 正式部署

---

## 🔴 遇到的問題與解決方案

### 1. **Clerk API 金鑰未配置**

| 項目 | 內容 |
|------|------|
| **問題** | 開發初期沒有設置 `.env.local`，導致網站無法啟動 |
| **錯誤訊息** | `Missing Clerk Publishable Key` |
| **解決方案** | 建立 `.env.local` 並填入 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` 和 `CLERK_SECRET_KEY` |
| **預防措施** | 專案初始化時應立即建立 `.env.example` 模板，列出所有必要的環境變數 |

---

### 2. **Next.js Image 組件快取問題**

| 項目 | 內容 |
|------|------|
| **問題** | 更換 Logo 後，瀏覽器仍顯示舊圖片 |
| **錯誤嘗試** | 在 `src` 加上 query string (`/logo.png?v=3`) → 導致 Runtime Error |
| **錯誤原因** | Next.js 的 `next/image` 不允許本地圖片使用 query string |
| **正確解決方案** | 使用 `unoptimized` 屬性繞過 Next.js 圖片優化快取 |
| **預防措施** | 更新靜態資源時，優先考慮重新命名檔案或使用 `unoptimized` 屬性 |

```tsx
// ✅ 正確做法
<Image src="/logo.png" alt="Logo" fill unoptimized />

// ❌ 錯誤做法
<Image src="/logo.png?v=3" alt="Logo" fill />
```

---

### 3. **Hydration Mismatch 錯誤**

| 項目 | 內容 |
|------|------|
| **問題** | 左下角持續出現「1 Issue」錯誤提示 |
| **錯誤原因** | 瀏覽器插件（如 Jetski）在 `<html>` 標籤注入屬性，與 Server-side Rendering 結果不一致 |
| **解決方案** | 在 `<html>` 和 `<body>` 標籤加上 `suppressHydrationWarning` |
| **預防措施** | 專案模板應預設包含此屬性，減少開發干擾 |

```tsx
// app/layout.tsx
<html lang="zh-TW" suppressHydrationWarning>
  <body suppressHydrationWarning className={...}>
```

---

### 4. **未使用的導入 (Lint 警告)**

| 項目 | 內容 |
|------|------|
| **問題** | ESLint 報告 `'Image' is defined but never used` 等警告 |
| **原因** | 重構程式碼後，未同步清理不再需要的 import 語句 |
| **解決方案** | 逐一移除未使用的導入 |
| **預防措施** | 使用 IDE 的「Organize Imports」功能，或配置 ESLint 自動移除 |

---

### 5. **按鈕無障礙性問題 (Lint 錯誤)**

| 項目 | 內容 |
|------|------|
| **問題** | `Buttons must have discernible text` 錯誤 |
| **原因** | 圖示按鈕只有 `<Icon />` 沒有文字描述 |
| **解決方案** | 為所有圖示按鈕加上 `title` 和 `aria-label` 屬性 |
| **預防措施** | 建立按鈕組件時，強制要求傳入 `aria-label` 屬性 |

```tsx
// ✅ 正確做法
<button title="開始播放" aria-label="開始播放">
  <Play />
</button>
```

---

### 6. **缺少依賴套件**

| 項目 | 內容 |
|------|------|
| **問題** | `@import "tw-animate-css"` 導致 CSS 編譯失敗 |
| **原因** | globals.css 引用了未安裝的套件 |
| **解決方案** | 移除該 import 語句 |
| **預防措施** | 新增 CSS import 前，先確認套件已安裝 |

---

### 7. **Logo 更換流程混亂**

| 項目 | 內容 |
|------|------|
| **問題** | 多次更換 Logo 時，不同位置的 Logo 不同步 |
| **影響位置** | Navbar Logo、Hero 主視覺、PWA Icon (192x192, 512x512) |
| **解決方案** | 統一使用 `/public/logo.png` 作為單一來源 |
| **預防措施** | 建立 Logo 更新 Checklist，確保所有位置都使用同一個檔案路徑 |

---

## 📝 最佳實踐總結

### 開發流程

1. **專案初始化時**：立即建立 `.env.example` 模板
2. **新增組件時**：確保 accessibility 屬性完整 (`aria-label`, `title`)
3. **更新靜態資源時**：使用 `unoptimized` 或重新命名檔案
4. **重構程式碼後**：執行 `eslint --fix` 清理未使用的導入

### 常見 Layout 設定

```tsx
// app/layout.tsx 標準模板
<html lang="zh-TW" suppressHydrationWarning>
  <body suppressHydrationWarning className={...}>
```

### 圖片快取處理

```tsx
// 開發階段避免快取問題
<Image src="/logo.png" alt="..." fill unoptimized />
```

---

## 🎯 下一階段目標

1. **部落格文章頁** - 讓使用者能點進去閱讀全文
2. **會員個人檔案頁** - 與 Clerk 深度整合
3. **全站音頻播放器** - 背景持續播放 Podcast
4. **正式部署** - Vercel 一鍵部署

---

*此檢討報告將持續更新，記錄開發過程中的學習與改進。*
