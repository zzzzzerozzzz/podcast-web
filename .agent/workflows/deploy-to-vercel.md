---
description: 如何部署網站到 Vercel（含常見問題與解決方法）
---

# 部署網站到 Vercel

## 部署方式

### 方式一：透過 Git 推送（推薦）

這是最穩定的部署方式，Vercel 會自動從 GitHub 拉取最新代碼並部署。

```bash
# 1. 將所有變更加入暫存區
git add -A

# 2. 提交變更
git commit -m "feat: 描述你的更新內容"

# 3. 推送到 GitHub
git push origin main
```

推送後，Vercel 會自動觸發部署，通常 1-2 分鐘內完成。

### 方式二：使用 Vercel CLI

```bash
# 部署到生產環境
npx vercel --prod
```

---

## 常見問題與解決方法

### 問題 1：Vercel CLI Token 過期

**錯誤訊息：**
```
Error: The specified token is not valid
```

**原因：**
Vercel CLI 的認證 Token 過期或失效。

**解決方法：**

1. 重新登入 Vercel：
   ```bash
   npx vercel login
   ```
2. 在瀏覽器中完成認證流程
3. 認證成功後，重新執行部署命令

**備選方案：**
如果 CLI 認證持續失敗，改用 Git 推送方式部署（見方式一）。

---

### 問題 2：環境變數未設定（Clerk 認證）

**錯誤訊息：**
- 登入按鈕不顯示
- Clerk 相關功能無法使用

**解決方法：**

1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 進入專案 → Settings → Environment Variables
3. 確保已設定以下變數：
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. 重新部署專案

---

### 問題 3：圖片無法顯示

**可能原因：**
- 圖片路徑錯誤
- 圖片檔案未提交到 Git

**解決方法：**

1. 確認圖片存放在 `public/images/` 目錄
2. 在 Markdown frontmatter 中使用正確路徑：
   ```yaml
   image: /images/your-image-name.png
   ```
3. 確認圖片已加入 Git：
   ```bash
   git add public/images/
   git commit -m "Add images"
   git push origin main
   ```

---

### 問題 4：部署卡住或超時

**解決方法：**

1. 檢查 Vercel Dashboard 的部署日誌
2. 確認 `next.config.ts` 或 `next.config.js` 設定正確
3. 嘗試本地建置測試：
   ```bash
   npm run build
   ```
4. 如有建置錯誤，先修復後再推送

---

## 驗證部署成功

1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 找到 `podcast-web` 專案
3. 確認最新部署狀態為 ✅ **Ready**
4. 點擊預覽連結測試網站功能

---

## 網站連結

- **生產環境**: https://podcast-web-seven.vercel.app/
- **AI 增長引擎**: https://podcast-web-seven.vercel.app/ai-engine

---

## 本次部署記錄（2026-01-16）

### 遇到的問題
1. **Vercel CLI Token 過期**：執行 `npx vercel --prod` 時出現 Token 無效錯誤
2. **CLI 認證流程卡住**：`npx vercel login` 等待瀏覽器認證時未能完成

### 解決方法
改用 Git 推送方式部署：
```bash
git add -A
git commit -m "feat: Complete AI Growth Engine with 10 articles and realistic professional imagery"
git push origin main
```

### 結果
✅ 成功部署，Vercel 自動從 GitHub 拉取並完成建置，耗時約 1 分鐘。
