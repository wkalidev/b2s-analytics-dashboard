export const MAINNET_CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'
export const API_BASE = 'https://base2stacks-tracker.vercel.app/api'
export const HIRO_API = 'https://api.hiro.so'
export const REFRESH_INTERVAL = 30_000
export const MICRO_UNITS = 1_000_000

export const CHART_COLORS = {
  primary: '#3b82f6',
  secondary: '#06b6d4',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  purple: '#8b5cf6',
} as const

export const TIME_RANGES = ['24h', '7d', '30d', '90d'] as const
export type TimeRange = (typeof TIME_RANGES)[number]

export const APY_TIERS = [
  { minBlocks: 2100, multiplier: 3, apy: 37.5, label: '14 days' },
  { minBlocks: 1050, multiplier: 2, apy: 25,   label: '7 days' },
  { minBlocks: 525,  multiplier: 1.5, apy: 18.75, label: '3.5 days' },
  { minBlocks: 0,    multiplier: 1, apy: 12.5,  label: 'No lock' },
] as const
