---
name: Conversation Memory Persistence
description: Systematically saves important chat context, decisions, and logic into project files so the user never loses chat history again.
---

# 🧠 Conversation Memory Persistence

## 🚨 CRITICAL RULE
The user frequently loses chat session history due to IDE interface limitations. As an AI assistant, you MUST treat this chat session as **EPHEMERAL** (temporary). Your ONLY reliable way to communicate across sessions is to persist your memory into the actual project files.

## 🎯 Objective
Automatically log all important context, problem-solving steps, prompt requests, and codebase decisions directly into the project repository so the user does not lose their data when the chat window closes.

## 🛠️ Execution Rules

### 1. Actively Document in `docs/development-log.md`
Whenever you implement a new feature, fix a bug, or make a significant architectural change:
- Open `docs/development-log.md`.
- Append a new entry under today's date (if not already present).
- Record the **Issue/User Request**, **Challenges faced**, and **Specific files modified/created**.
- **DO NOT** wait for the user to ask you to do this. Do it proactively as part of your final delivery.

### 2. Persist Deep Conversations to `.agent/knowledge/`
If the user is discussing a complex feature, writing long prompt structures, setting up rules, or designing system architecture (where preserving the *dialogue/thought process* is valuable):
- Create a Markdown file in `c:\Users\usera\Desktop\podcast-web\.agent\knowledge/`.
- File naming convention: `YYYY-MM-DD-topic-name.md` (e.g., `2026-02-28-ai-memory-setup.md`).
- Document the user's specific goals, the prompt they provided, the reasoning for the accepted solution, and code snippets or configuration decisions.

### 3. Workflow for Finishing a Request:
Before completing a major task and giving your final response to the user:
1. Ask yourself: *"If this chat window closes right now, will the user lose context on what we just did?"*
2. If YES, immediately document the context in either `docs/development-log.md` or a new `.agent/knowledge/` file.
3. Inform the user in your response: *"I've saved our discussion context and changes to [File Path] so you won't lose it if this window closes."*

## 📝 Example Output Format (for `.agent/knowledge/`)

```markdown
# Topic: [Summary of the conversation]
**Date**: YYYY-MM-DD

## User's Original Request (Prompt):
> [Copy the main point/prompt the user provided here]

## Technical Decisions Made:
- We chose to use X because Y.
- Files modified: `path/to/file1.ts`, `path/to/file2.css`

## Code/Configuration Logic (For Future Reference):
[Insert relevant snippets or explanations here]
```
