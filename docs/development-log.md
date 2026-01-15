# Development Log

## [2026-01-12] Phase 3 Start: Core Logic Implementation

**Focus:** Establishing the backend logic for the blog system using Markdown and file-system routing.

### 1. Challenges & Solutions

- **Markdown Parsing (Server-Side)**:
  - **Problem**: Needed a way to turn static `.md` files into structured data for the frontend without a CMS.
  - **Solution**: Implemented `lib/posts.ts` using `fs` (Node.js file system), `gray-matter` (for metadata), and `remark` (for content). This allows for a "Git-based CMS" workflow.
  
- **Data Fetching Pattern**:
  - **Problem**: Deciding between API routes and Server Components.
  - **Solution**: Chose **React Server Components** (RSC) to fetch blog data directly in `page.tsx`. This avoids client-side waterfalls and improves SEO performance.

- **Type Safety**:
  - **Problem**: `frontmatter` returned by libraries is loosely typed.
  - **Solution**: Defined strict TypeScript interfaces (`PostData`) to ensure safety throughout the app.

---

## [2026-01-13] Blog Enhancements & Personal Branding

**Focus:** Transforming the blog from a generic list into a curated space reflecting "Zero's" organic growth philosophy.

### 1. New Features Delivered

- **Zero's Quick Notes (Zero 隨手記)**:
  - Created a new content category for shorter, insight-driven posts.
  - Implemented distinct **Amber Styling** (`bg-amber-50`, `border-amber-200`) to differentiate these notes from standard articles.
  - Added sample content: `content/posts/ai-customer-service.md`.
  
- **Power Quote Section**:
  - Inserted a high-impact typography section between featured and main lists.
  - Quote: *"My experience is 25 years, but my knowledge stays in the freshest 24 hours."*

- **Monthly Reading List**:
  - Designed a 3-column grid section at the bottom of the blog.
  - Generated custom minimalist book covers for *Zero to One*, *Atomic Habits*, and *Antifragile*.
  - Integrated via `next/image` for performance optimization.

### 2. Technical Issues & Solutions

| 問題 | 原因 | 解決方案 |
|------|------|----------|
| **Import 語法錯誤** | `import Image from "next/image"` 被誤貼到 JSX render function 內部 | 透過手動審查發現並移除，確保所有 import 在檔案頂部 |
| **useEffect Lint 警告** | 使用 `useState` + `useEffect` 同步 URL 參數，觸發 ESLint exhaustive-deps 警告 | 重構為 **URL-Driven 狀態**：直接使用 `useSearchParams()` 作為 Source of Truth，移除多餘的 local state |
| **未使用的 Import** | 重構後 `Tag` import 殘留在 `BlogList.tsx` 但未使用 | 移除未使用的 import |
| **Inline Style 警告** | `ScrollProgress.tsx` 使用 `style={{ width }}` 觸發 ESLint 警告 | 重構為 `useRef` 直接操作 DOM 樣式，避免 inline style prop |
| **useSearchParams 需要 Suspense** | Next.js 15 要求 `useSearchParams()` 必須在 Suspense boundary 內 | 在 `app/blog/page.tsx` 中用 `<Suspense>` 包裹 `<BlogList />`，並建立 loading skeleton |

### 3. Design System Updates

- Reinforced the **Olive & Cream** aesthetic with subtle Amber accents for highlighting specific content types.
- Maintained the "Organic Growth" feel with rounded corners (`rounded-2xl`, `rounded-[2.5rem]`) and serif accents for quotes.

### 4. Documentation & Workflow

- **README.md**：新增完整中文專案說明文件
- **工作流程**：建立 `/update-reading-list` 斜線指令，讓非技術使用者可透過 AI 輔助更新書單內容

---

## [2026-01-14] Global Audio Player Development

**Focus:** Building a persistent audio player that stays visible across all pages for seamless podcast listening.

### 1. New Features Delivered

- **Audio Context (`lib/audio-context.tsx`)**:
  - Created global React Context for managing audio state across the entire app.
  - Features: `playEpisode()`, `togglePlay()`, `pause()`, `seekTo()`, `closePlayer()`.
  - Uses `HTMLAudioElement` via `useRef` for actual audio playback.
  - Demo audio integration for testing without real podcast files.

- **Mini Player Component (`components/Audio/MiniPlayer.tsx`)**:
  - Floating "Island-style" player at the bottom of the screen.
  - Glassmorphism design (blur, rounded corners, shadow).
  - Features:
    - Play/Pause toggle
    - Progress bar (click to seek)
    - Expand/Collapse for episode details
    - Close button
    - Animated playing indicator

- **Layout Integration**:
  - Wrapped `<AudioProvider>` around the entire app in `layout.tsx`.
  - `<MiniPlayer />` renders globally, persisting across page navigation.

- **Listen Page Update**:
  - Connected to global `useAudio()` hook.
  - Play buttons now toggle global player state.
  - Visual sync: "正在播放" indicator on currently playing episode.

### 2. Technical Architecture

```
┌─────────────────────────────────────┐
│           RootLayout                │
│  ┌───────────────────────────────┐  │
│  │       AudioProvider           │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   Navbar                │  │  │
│  │  │   {children}            │  │  │
│  │  │   MiniPlayer ←───┐      │  │  │
│  │  │   BottomNav      │      │  │  │
│  │  └──────────────────│──────┘  │  │
│  │                     │         │  │
│  │   useAudio() ←──────┘         │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 3. Files Created/Modified

| 檔案 | 動作 | 說明 |
|------|------|------|
| `lib/audio-context.tsx` | 新增 | 全站音頻狀態 Context |
| `components/Audio/MiniPlayer.tsx` | 新增 | 浮動播放器 UI |
| `app/layout.tsx` | 修改 | 整合 AudioProvider 與 MiniPlayer |
| `app/listen/page.tsx` | 修改 | 連接全站播放器 |

---

## [2026-01-15] 視覺優化與 Git 部署

**Focus:** 為各頁面補齊 AI 生成插圖、優化文章列表體驗、解決 Git 衝突並成功推送至 GitHub。

### 1. 新功能交付

- **Blog 文章內頁圖片**：
  - 修改 `app/blog/[slug]/page.tsx`，新增 `getCategoryImage()` helper function。
  - 根據文章分類（AI 增長引擎、數位生活、日常習慣、思維心法、Zero 隨手記）自動顯示對應的特色圖片。
  - 移除原本的「Main Article Image」placeholder。

- **文章列表「瀏覽更多」功能**：
  - 修改 `components/Blog/BlogList.tsx`，新增 `visibleCount` 狀態管理。
  - 預設只顯示 6 篇文章（2x3 網格），保持視覺平衡。
  - 當文章數超過 6 篇時，顯示「瀏覽更多文章」按鈕，點擊後展開更多。

- **Podcast 頁面專屬插圖**：
  - 使用 AI 生成「耳機與植物共生」插畫 (`/images/podcast-construction.png`)。
  - 修改 `app/listen/page.tsx` 替換原本的 `hero-abstract.png`。

- **會員頁面專屬插圖**：
  - 使用 AI 生成「鑰匙與鎖與藤蔓」插畫 (`/images/member-construction.png`)。
  - 修改 `app/profile/page.tsx` 替換原本的 `hero-abstract.png`。

- **Hero 與 AI 區塊動畫**：
  - 在 `app/globals.css` 新增 `@keyframes float` 動畫。
  - 為首頁 Hero 圖片和 AI 增長引擎區塊圖片添加 `animate-float` 懸浮效果。

### 2. 技術問題與解決方案

| 問題 | 原因 | 解決方案 |
|------|------|----------|
| **visibleCount 未定義** | 新增 `.slice(0, visibleCount)` 但忘記宣告 state | 在 `BlogList.tsx` 新增 `const [visibleCount, setVisibleCount] = useState(6)` |
| **Git Push 被拒絕** | 遠端有本地沒有的 commit | 執行 `git pull origin main --rebase`，但發生衝突 |
| **Git Rebase 衝突** | 多個檔案同時被本地和遠端修改 | 執行 `git rebase --abort` 中止，改用 merge 策略 |
| **Unrelated Histories 錯誤** | 遠端 repo 的 Git 歷史與本地完全不同 | 使用 `git pull origin main --allow-unrelated-histories` 允許合併不相關的歷史 |
| **多檔案衝突** | .gitignore, README, page.tsx 等 8 個檔案衝突 | 執行 `git checkout --ours [files]` 保留本地版本，再 `git add .` 和 `git commit` |

### 3. Git 操作流程記錄

```bash
# 1. 嘗試推送
git push origin main
# 結果：rejected (遠端有新 commit)

# 2. 嘗試 rebase
git pull origin main --rebase
# 結果：衝突

# 3. 中止 rebase
git rebase --abort

# 4. 使用 merge 策略並允許不相關歷史
git pull origin main --allow-unrelated-histories
# 結果：8 個檔案衝突

# 5. 保留本地版本解決衝突
git checkout --ours .gitignore README.md app/blog/page.tsx app/globals.css app/layout.tsx app/page.tsx package-lock.json package.json

# 6. 完成合併
git add .
git commit -m "Merge remote-tracking branch - resolved conflicts keeping local version"
git push origin main
# 結果：成功 ✅
```

### 4. 新增/修改檔案清單

| 檔案 | 動作 | 說明 |
|------|------|------|
| `app/blog/[slug]/page.tsx` | 修改 | 新增動態分類圖片 |
| `components/Blog/BlogList.tsx` | 修改 | 新增 Load More 功能 |
| `app/listen/page.tsx` | 修改 | 使用新 Podcast 插圖 |
| `app/profile/page.tsx` | 修改 | 使用新會員插圖 |
| `app/globals.css` | 修改 | 新增 float 動畫 keyframes |
| `public/images/podcast-construction.png` | 新增 | Podcast 頁面專屬插圖 |
| `public/images/member-construction.png` | 新增 | 會員頁面專屬插圖 |

### 5. 部署建議

**推薦技術棧：**

- **版本控制 & 備份**：GitHub（只記錄差異，不佔大量空間）
- **部署平台**：Vercel（與 GitHub 自動整合，支援 Preview Deployments）
- **大型媒體檔案**：未來如需大量圖片/音訊，建議使用 Cloudinary 等外部儲存

### 6. 開發伺服器問題排查

#### 問題：重啟電腦後網頁無法開啟

**症狀：**

- 執行 `npm run dev` 後，終端機顯示「✓ Ready」
- 但瀏覽器訪問 `localhost:3005` 時顯示 `ERR_CONNECTION_REFUSED`
- 終端機一直卡在「○ Compiling / ...」永遠不會完成

**原因：**

- `.next` 快取資料夾在重啟電腦後可能損壞
- Turbopack 編譯器在讀取損壞的快取時會無限期卡住

**解決方案：**

```powershell
# 1. 停止現有的 dev server (Ctrl+C)

# 2. 刪除 .next 快取資料夾
Remove-Item -Recurse -Force .next

# 3. 重新啟動 dev server
npm run dev -- -p 3005
```

**預防措施：**

- 如果經常遇到此問題，可以在 `package.json` 中添加一個清理腳本：

  ```json
  "scripts": {
    "clean": "rimraf .next",
    "dev:clean": "npm run clean && npm run dev"
  }
  ```

### 7. Vercel 部署與環境變數排查

#### 問題 A：Vercel Build 失敗 (缺少 Clerk 鑰匙)

**症狀：**

- Vercel 部署時報錯 `Command "npm run build" exited with 1`
- 錯誤日誌顯示缺少 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

**原因：**

- Next.js 在編譯時如果程式碼中有用到 `@clerk/nextjs`，會檢查環境變數
- 如果 Vercel 後台尚未設定這些變數，會導致編譯直接中斷

**解決方案：**

1. **程式碼優化 (優雅降級)**：修改 `layout.tsx` 和 `Navbar.tsx`，增加 `isClerkConfigured` 判斷。如果環境變數缺失，則不加載 ClerkProvider，並隱藏登入按鈕，確保網站能成功編譯。
2. **手動設定**：在 Vercel 專案的 `Settings > Environment Variables` 填入 Clerk 提供的兩把鑰匙。
3. **重新部署 (Redeploy)**：設定完變數後必須手動點擊 Redeploy 才能生效。

#### 問題 B：多個專案覆蓋 (Repository Overlap)

**症狀：**

- 更新 Podcast 網站後，原本顯示勞工公司（www.hk-labor.company）的網站變成了 Podcast 的內容

**原因：**

- 兩個不同的 Vercel 專案（勞工網站 & Podcast 網站）不小心連接到了同一個 GitHub 倉庫 (`zzzzzerozzzz/secondsight-web`)
- 每次推送代碼到 main 分支時，兩個網站都會同時更新為最新的代碼

**解決方案 (已執行)：**

1. **恢復舊網站**：進入舊網站本地資料夾 (`c:\Users\usera\Downloads\SecondSight\web`)，執行 `git push origin main --force` 把原本勞工網站的代碼推回倉庫，恢復線上運作。
2. **建立新倉庫**：為 Podcast 網站單獨建立一個 GitHub 倉庫 (`zzzzzerozzzz/podcast-web`)。
3. **切換遠端**：

   ```powershell
   git remote remove origin
   git remote add origin https://github.com/zzzzzerozzzz/podcast-web.git
   git push -u origin main
   ```

4. **Vercel 重連**：在 Vercel 建立一個新專案，連接到全新的 `podcast-web` 倉庫。

---

## 📋 已建立的斜線指令

| 指令 | 功能 | 檔案位置 |
|------|------|----------|
| `/update-reading-list` | 更新學習書單（書名、作者、心得、封面圖） | `.agent/workflows/update-reading-list.md` |

---

## 🔧 Build 狀態

```
✓ TypeScript validation passed
✓ Generating static pages (8/8)
✓ All lint errors resolved
Exit code: 0
```

---

*此日誌記錄開發過程中的問題、解決方案與學習心得，持續更新中。*
