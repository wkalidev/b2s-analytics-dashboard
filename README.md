# 📊 B2S Analytics Dashboard

Real-time analytics for the Base2Stacks ecosystem — powered by Hiro Mainnet API.

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Recharts](https://img.shields.io/badge/Recharts-2.0-green)](https://recharts.org/)
[![Stacks](https://img.shields.io/badge/Network-Stacks%20Mainnet-5546FF)](https://stacks.co/)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)
[![Builder Rewards](https://img.shields.io/badge/Stacks-Builder%20Rewards%20March%202026-orange)](https://stacks.org)

---

## 📦 Install

```bash
npm install @b2s/analytics-dashboard
```

> Peer dependencies: `react ^18`, `react-dom ^18`, `recharts ^2`

---

## 🚀 Usage

```tsx
import { AnalyticsDashboard } from '@b2s/analytics-dashboard';

function App() {
  return (
    <AnalyticsDashboard
      refreshInterval={60000}
      theme="dark"
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `refreshInterval` | `number` | `60000` | Auto-refresh interval in ms |
| `theme` | `'light' \| 'dark'` | `'dark'` | Color theme |

---

## ✨ Features

- 🟢 **Live data** from Hiro Mainnet API — no mock, no fake numbers
- ⚡ **Daily transaction activity** — Bar chart (last 14 days)
- 📈 **Cumulative activity** — Area chart
- 🥧 **Holder distribution** — Pie chart by balance bucket
- 📊 **Contract activity comparison** — Token / Pool / Staking
- 🔄 **Auto-refresh** — configurable interval

---

## 📊 Contracts Tracked (Mainnet)

| Contract | Address |
|---|---|
| `b2s-token` | `SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96.b2s-token` |
| `b2s-liquidity-pool-v5` | `SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96.b2s-liquidity-pool-v5` |
| `b2s-rewards-distributor-v3` | `SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96.b2s-rewards-distributor-v3` |

---

## 🛠️ Development

```bash
git clone https://github.com/wkalidev/b2s-analytics-dashboard.git
cd b2s-analytics-dashboard
npm install --legacy-peer-deps
npm run dev
```

```bash
npm run build   # compile TypeScript + Vite
npm test        # run tests
```

---

## 📁 Structure

```
b2s-analytics-dashboard/
├── src/
│   ├── AnalyticsDashboard.tsx   # Main component + all charts
│   └── index.ts                 # Package exports
├── docs/                        # Documentation
└── package.json
```

---

## 🔗 Related

- [base2stacks-tracker](https://github.com/wkalidev/base2stacks-tracker) — Main DeFi platform
- [b2s-token-contract](https://github.com/wkalidev/b2s-token-contract) — Smart contracts

---

## 📜 License

MIT License — See [LICENSE](./LICENSE)

---

## 👨‍💻 Author

**wkalidev (zcodebase)**

- 🐦 [Twitter](https://twitter.com/willycodexwar)
- 🟪 [Farcaster](https://warpcast.com/willywarrior)
- 🐙 [GitHub](https://github.com/wkalidev)

---

**Built for #StacksBuilderRewards March 2026 🏆**