# B2S Analytics Dashboard

[![Mainnet](https://img.shields.io/badge/Network-Stacks%20Mainnet-green)](https://explorer.hiro.so/?chain=mainnet)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?logo=typescript)](https://typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Recharts](https://img.shields.io/badge/Recharts-2.0-green)](https://recharts.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)
[![Builder Rewards](https://img.shields.io/badge/Stacks-Builder%20Rewards%20May%202026-orange)](https://stacks.org)

Real-time analytics and insights for the Base2Stacks DeFi ecosystem on Stacks mainnet.

**[https://base2stacks-tracker.vercel.app](https://base2stacks-tracker.vercel.app)**

---

## 📊 Overview

Comprehensive analytics dashboard for tracking $B2S token metrics, staking activity, bridge volume, and ecosystem growth — powered by live Hiro Mainnet API data.

---

## ✨ Features

### Core Metrics
- 📈 **Token Volume** — 24h, 7d, 30d trading volume
- 👥 **User Growth** — New users, active wallets, retention
- 💰 **TVL Tracking** — Total Value Locked in `b2s-staking-vault-v2`
- 🔄 **Transaction Stats** — Claims, stakes, transfers, bridges
- 📊 **Distribution Charts** — Token holder distribution
- 🏆 **Leaderboard Analytics** — Top stakers with multipliers

### Visualizations
- 📉 Line charts for time-series data
- 🥧 Pie charts for distribution
- 📊 Bar charts for comparisons
- 📈 Area charts for cumulative data (Recharts)

### Advanced Features
- ⚡ **Real-time Updates** — Live data from Hiro Mainnet API
- 📥 **Export Reports** — CSV, JSON
- 🔍 **Custom Filters** — Date ranges, metrics
- 📱 **Responsive Design** — Mobile-friendly
- 🎨 **Dark Mode** — Neon punk infosec theme

### APY Chart
Real-time APY from `b2s-staking-vault-v2` — 12.5% base, up to 37.5% with lock multipliers.

---

## 🚀 Quick Start

### Installation
```bash
npm install @wkalidev/b2s-analytics-dashboard
```

### Basic Usage
```tsx
import { AnalyticsDashboard } from '@wkalidev/b2s-analytics-dashboard'

function App() {
  return (
    <AnalyticsDashboard
      contractAddress="SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N"
      refreshInterval={60000}
    />
  )
}
```

---

## 📦 Components

### `AnalyticsDashboard`
Main dashboard with all metrics.
```tsx
<AnalyticsDashboard
  contractAddress="SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N"
  refreshInterval?: number  // default: 60000ms
/>
```

### `VolumeChart`
Token volume over time.
```tsx
<VolumeChart data={volumeData} timeRange="7d" height={300} />
```

### `UserGrowthChart`
User acquisition and retention.
```tsx
<UserGrowthChart data={userData} showRetention={true} />
```

### `DistributionPieChart`
Token holder distribution by tier.
```tsx
<DistributionPieChart data={distributionData} showPercentages={true} />
```

---

## 📊 Data Structures

```typescript
interface VolumeData {
  timestamp: number
  volume: number
  transactions: number
  uniqueUsers: number
}

interface UserGrowthData {
  date: string
  newUsers: number
  activeUsers: number
  totalUsers: number
  retention: number
}

interface DistributionData {
  range: string        // e.g. "0-100", "100-1000"
  holders: number
  percentage: number
  totalTokens: number
}
```

---

## 🔧 Development

```bash
git clone https://github.com/wkalidev/b2s-analytics-dashboard.git
cd b2s-analytics-dashboard
npm install
npm run dev
npm run build
npm test
```

---

## 🔗 Smart Contracts (Mainnet)

**Deployer**: `SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N`

| Contract | Role |
|---|---|
| `b2s-staking-vault-v2` | TVL & staker data source |
| `b2s-token-v4` | Balance & supply data |
| `b2s-fee-router` | Bridge volume data |
| `b2s-liquidity-pool-v6` | Swap volume data |

---

## 🔗 Related Repos

| Repo | Description |
|---|---|
| [base2stacks-tracker](https://github.com/wkalidev/base2stacks-tracker) | Main frontend — [live app](https://base2stacks-tracker.vercel.app) |
| [b2s-token-contract](https://github.com/wkalidev/b2s-token-contract) | All Clarity smart contracts |
| [stacks-clarity-toolkit](https://github.com/wkalidev/stacks-clarity-toolkit) | Clarity dev toolkit |
| [b2s-staking-interface](https://github.com/wkalidev/b2s-staking-interface) | Staking UI components |

---

## 📜 License

MIT — See [LICENSE](./LICENSE)

## 👨‍💻 Author

**wkalidev (zcodebase)** · [Twitter](https://twitter.com/willycodexwar) · [Farcaster](https://warpcast.com/willywarrior)

---

**Built for #StacksBuilderRewards May 2026 🏆**