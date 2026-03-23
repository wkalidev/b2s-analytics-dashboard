export function toCSV(data: any[], headers: string[]): string {
  const rows = data.map(row =>
    headers.map(h => JSON.stringify(row[h] ?? '')).join(',')
  )
  return [headers.join(','), ...rows].join('\n')
}

export function downloadCSV(data: any[], headers: string[], filename: string) {
  const csv  = toCSV(data, headers)
  const blob = new Blob([csv], { type: 'text/csv' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
