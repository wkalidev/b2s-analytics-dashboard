export function pct(value: number, total: number): number {
  if (total === 0) return 0
  return (value / total) * 100
}

export function pctChange(from: number, to: number): number {
  if (from === 0) return 0
  return ((to - from) / from) * 100
}

export function formatPct(n: number): string {
  const sign = n >= 0 ? '+' : ''
  return `${sign}${n.toFixed(2)}%`
}
