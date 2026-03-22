export interface TokenMetrics {
  price: number
  marketCap: number
  totalSupply: number
  circulatingSupply: number
  volume24h: number
  priceChange24h: number
}

export interface BridgeStats {
  totalTransactions: number
  totalVolumeSTX: number
  totalFeesCollected: number
  uniqueUsers: number
  last24hTransactions: number
  last7dTransactions: number
}

export interface StakingMetrics {
  totalStaked: number
  totalStakers: number
  averageStake: number
  totalRewardsDistributed: number
  currentApy: number
}

export interface ChartDataPoint {
  date: string
  value: number
  label?: string
}

export interface DashboardConfig {
  contractAddress: string
  apiEndpoint: string
  refreshInterval?: number
  theme?: 'light' | 'dark'
  currency?: 'USD' | 'STX'
}
