# B2S Analytics Dashboard

Real-time analytics and insights for the Base2Stacks ecosystem.

[![CI](https://github.com/wkalidev/b2s-analytics-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/wkalidev/b2s-analytics-dashboard/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**Network:** Stacks Mainnet
**Contract:** SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96

## Installation
```bash
npm install @wkalidev/b2s-analytics
```

## Usage
```typescript
import { AnalyticsDashboard } from '@wkalidev/b2s-analytics'

function App() {
  return (
    <AnalyticsDashboard
      contractAddress="SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96"
      apiEndpoint="https://base2stacks-tracker.vercel.app/api"
      refreshInterval={30_000}
    />
  )
}
```

## Features

- Token volume (24h, 7d, 30d)
- User growth tracking
- TVL monitoring
- Real-time updates
- CSV export

## Development
```bash
npm install && npm run dev
```

## License

MIT — Built for #StacksBuilderRewards March 2026 🏆
