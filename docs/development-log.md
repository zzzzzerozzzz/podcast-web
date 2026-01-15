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
