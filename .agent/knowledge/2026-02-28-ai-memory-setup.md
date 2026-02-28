# Topic: AI 對話記憶持久化設定 (AI Memory Persistence Setup)
**Date**: 2026-02-28

## User's Original Request (痛點與需求):
> "我是需要重本的資料在電腦在未來修改,所以才叫你把它完整下載"
> "問題是你 CHAT SESSION 是不能找回對話資料"
> "我說是將來吧,過去的就由它。我不能每次都找不到對話資料"

## 痛點分析:
目前的開發環境 (IDE/Editor) 的 AI Chat Session 沒有提供可靠的歷史對話找回功能。如果使用者關閉視窗或重新開啟專案，先前的上下文、提示詞、除錯邏輯和討論過程就會遺失，導致需要重複提供資訊。

## Technical Decisions Made (解決方案):
- 我們決定放棄依賴 Chat Session 的暫存記憶，改為將「對話紀錄」與「決策過程」**實體化為專案檔案 (Markdown)**。
- 新增了一個 AI Skill: `.agent/skills/memory-persistence.md`，以此強制規定未來的 AI 助理在完成重要任務時，必須主動將資訊寫入本地專案。
- **儲存位置分配**:
  1. 程式碼重大變更、Bug 修復、功能實作：紀錄於 `docs/development-log.md`
  2. 深度架構討論、長篇提示詞、系統設定決策：建立獨立檔案紀錄於 `.agent/knowledge/`

## Code/Configuration Logic (建立的檔案):
- **檔案路徑**: `.agent/skills/memory-persistence.md`
- **目的**: 讓專案在未來啟動任何新的 AI 對話時，AI 都會自動讀取這份指令，並且在每次結束對話前，自動評估是否需要備份對話內容到硬碟檔案裡。

這份檔案本身就是「對話實體化」的第一個範例！未來所有重要的決策都會儲存在 `.agent/knowledge/` 這個資料夾中，跟著 GitHub 專案一起受版本控制保護。
