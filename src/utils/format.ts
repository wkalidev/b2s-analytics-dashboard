export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}K`
  return n.toLocaleString()
}

export function formatBTC(n: number): string {
  return `${n.toFixed(4)} BTC`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString()
}
