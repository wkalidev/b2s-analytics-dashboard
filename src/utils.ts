export function formatUSD(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value)
}

export function formatB2S(micro: number): string {
  return `${(micro / 1_000_000).toFixed(2)} B2S`
}

export function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return value.toFixed(0)
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function truncateAddress(address: string): string {
  if (address.length <= 12) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function calcPriceImpact(amountIn: number, reserveIn: number, reserveOut: number): number {
  const amountInWithFee = amountIn * 0.9975
  const amountOut = (amountInWithFee * reserveOut) / (reserveIn + amountInWithFee)
  const priceBefore = reserveOut / reserveIn
  const priceAfter = (reserveOut - amountOut) / (reserveIn + amountIn)
  return Math.abs((priceAfter - priceBefore) / priceBefore) * 100
}

export function calcAPY(principal: number, lockBlocks: number): number {
  const base = 12.5
  if (lockBlocks >= 2100) return base * 3
  if (lockBlocks >= 1050) return base * 2
  if (lockBlocks >= 525) return base * 1.5
  return base
}

export function timeAgo(timestamp: number): string {
  const secs = Math.floor((Date.now() - timestamp) / 1000)
  if (secs < 60) return `${secs}s ago`
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`
  return `${Math.floor(secs / 86400)}d ago`
}

export function exportCSV(data: Record<string, unknown>[], filename: string): void {
  const headers = Object.keys(data[0] ?? {})
  const rows = data.map(row => headers.map(h => row[h]).join(','))
  const csv = [headers.join(','), ...rows].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}-${Date.now()}.csv`
  a.click()
  URL.revokeObjectURL(url)
}
