# ⚡ @warborn/sdk

> **Official Public Developer SDK for the Warborn AI Operating System.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 📦 Installation

```bash
npm install @warborn/sdk @warborn/types @warborn/config @warborn/runtime
```

---

## 💡 Quick Start

```typescript
import { createWarbornSDK } from '@warborn/sdk';

const sdk = createWarbornSDK();
await sdk.initialize();

// Decompose a high-level goal
const plan = await sdk.brain.plan("Build multi-agent market analysis pipeline");
console.log("Goal Plan Steps:", plan.steps);

// Execute chat reasoning
const response = await sdk.chat.complete([
  { id: '1' as any, role: 'user', content: 'What is the status of the Warborn AI OS platform?', timestamp: new Date().toISOString() as any }
]);
console.log("Response:", response.message.content);
```

---

## 📄 License

MIT © 2026 Warborn Technologies
