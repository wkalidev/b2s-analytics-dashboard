# B2S Analytics Dashboard

Real-time analytics and insights for Base2Stacks ecosystem.

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Charts](https://img.shields.io/badge/Recharts-2.0-green)](https://recharts.org/)
[![Stacks](https://img.shields.io/badge/Stacks-Analytics-purple)](https://stacks.co/)

## 📊 Overview

Comprehensive analytics dashboard for tracking B2S token metrics, user activity, and ecosystem growth.

## ✨ Features

### Core Metrics
- 📈 **Token Volume** - 24h, 7d, 30d trading volume
- 👥 **User Growth** - New users, active wallets, retention
- 💰 **TVL Tracking** - Total Value Locked in staking
- 🔄 **Transaction Stats** - Claims, stakes, transfers
- 📊 **Distribution Charts** - Token holder distribution
- 🏆 **Leaderboard Analytics** - Top stakers statistics

### Visualizations
- 📉 Line charts for time-series data
- 🥧 Pie charts for distribution
- 📊 Bar charts for comparisons
- 🗺️ Heatmaps for activity patterns
- 📈 Area charts for cumulative data

### Advanced Features
- ⚡ **Real-time Updates** - Live data refresh
- 📥 **Export Reports** - PDF, CSV, PNG
- 🔍 **Custom Filters** - Date ranges, metrics
- 📱 **Responsive Design** - Mobile-friendly
- 🎨 **Theme Support** - Light/Dark modes

## 🚀 Quick Start

### Installation
```bash
npm install @b2s/analytics-dashboard
```

### Basic Usage
```tsx
import { AnalyticsDashboard } from '@b2s/analytics-dashboard';

function App() {
  return (
    <AnalyticsDashboard
      contractAddress="ST936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96"
      apiEndpoint="https://api.b2s.xyz"
      refreshInterval={30000} // 30 seconds
    />
  );
}
```

## 📦 Components

### AnalyticsDashboard

Main dashboard with all metrics.
```tsx
<AnalyticsDashboard
  contractAddress={string}
  apiEndpoint={string}
  refreshInterval?: number
  theme?: 'light' | 'dark'
/>
```

### VolumeChart

Token volume over time.
```tsx
<VolumeChart
  data={volumeData}
  timeRange="7d"
  height={300}
/>
```

### UserGrowthChart

User acquisition and retention.
```tsx
<UserGrowthChart
  data={userData}
  showRetention={true}
/>
```

### DistributionPieChart

Token holder distribution.
```tsx
<DistributionPieChart
  data={distributionData}
  showPercentages={true}
/>
```

## 📊 Data Structure

### Volume Data
```typescript
interface VolumeData {
  timestamp: number;
  volume: number;
  transactions: number;
  uniqueUsers: number;
}
```

### User Growth Data
```typescript
interface UserGrowthData {
  date: string;
  newUsers: number;
  activeUsers: number;
  totalUsers: number;
  retention: number;
}
```

### Distribution Data
```typescript
interface DistributionData {
  range: string; // e.g., "0-100", "100-1000"
  holders: number;
  percentage: number;
  totalTokens: number;
}
```

## 🔧 Configuration

Create `analytics.config.js`:
```javascript
export default {
  api: {
    endpoint: 'https://api.b2s.xyz',
    timeout: 10000,
  },
  refresh: {
    interval: 30000, // 30s
    autoRefresh: true,
  },
  charts: {
    colors: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
    },
    animations: true,
  },
  export: {
    formats: ['pdf', 'csv', 'png'],
    filename: 'b2s-analytics-{date}',
  },
};
```

## 📈 Metrics Explained

### Total Value Locked (TVL)
```
TVL = Sum of all staked tokens × Token price
```

### Daily Active Users (DAU)
```
DAU = Unique wallets with transactions in last 24h
```

### Volume Metrics

- **24h Volume**: Total token transfers in 24 hours
- **7d Volume**: Rolling 7-day trading volume
- **30d Volume**: Monthly trading volume

### Growth Rate
```
Growth Rate = (Current Users - Previous Users) / Previous Users × 100
```

## 🛠️ Development
```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Tests
npm test
```

## 📖 API Integration

### Fetch Volume Data
```typescript
import { fetchVolumeData } from '@b2s/analytics-dashboard';

const data = await fetchVolumeData({
  contractAddress: 'ST936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96',
  timeRange: '7d',
});
```

### Real-time Updates
```typescript
import { useRealTimeMetrics } from '@b2s/analytics-dashboard';

function MyDashboard() {
  const { metrics, loading } = useRealTimeMetrics({
    refreshInterval: 30000,
  });

  return <div>{metrics.volume}</div>;
}
```

## 🎨 Customization

### Custom Theme
```tsx
const customTheme = {
  colors: {
    background: '#0f172a',
    text: '#f1f5f9',
    primary: '#3b82f6',
    chart: {
      line: '#06b6d4',
      fill: '#3b82f620',
    },
  },
};

<AnalyticsDashboard theme={customTheme} />
```

## 🔗 Related Packages

- [@b2s/token-contract](https://github.com/wkalidev/b2s-token-contract)
- [@b2s/staking-interface](https://github.com/wkalidev/b2s-staking-interface)
- [base2stacks-tracker](https://github.com/wkalidev/base2stacks-tracker)

## 📊 Sample Dashboard

View live: [Analytics Dashboard](https://wkalidev-base2stacks-tracker.vercel.app)

## 🤝 Contributing

See [CONTRIBUTING.md](../base2stacks-tracker/CONTRIBUTING.md)

## 📜 License

MIT License

---

**Built for #StacksBuilderRewards 🏆**