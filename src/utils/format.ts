export function formatB2S(n: number): string {
  return `${n.toFixed(2)} $B2S`
}

export function formatSTX(n: number): string {
  return `${n.toFixed(4)} STX`
}

export function formatUSD(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 2
  }).format(n)
}

export function formatLarge(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`
  return n.toLocaleString()
}

export function formatChange(n: number): string {
  return `${n >= 0 ? '+' : ''}${n.toFixed(2)}%`
}
