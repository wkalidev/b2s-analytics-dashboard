export function groupByDay(items: any[], dateKey = 'burn_block_time_iso') {
  const byDay: Record<string, number> = {}
  items.forEach(item => {
    const day = item[dateKey]?.slice(0, 10)
    if (day) byDay[day] = (byDay[day] || 0) + 1
  })
  return byDay
}

export function toCumulative(byDay: Record<string, number>) {
  let cum = 0
  return Object.entries(byDay)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({
      date: date.slice(5),
      count,
      cumulative: (cum += count),
    }))
}

export const CHART_COLORS = [
  '#3b82f6', '#06b6d4', '#10b981',
  '#f59e0b', '#ef4444', '#8b5cf6',
]
