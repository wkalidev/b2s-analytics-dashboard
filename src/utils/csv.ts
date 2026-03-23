export function exportToCSV(data: any[], filename: string) {
  if (!data.length) return
  const headers = Object.keys(data[0])
  const rows    = data.map(row => headers.map(h => JSON.stringify(row[h] ?? '')).join(','))
  const csv     = [headers.join(','), ...rows].join('\n')
  const blob    = new Blob([csv], { type: 'text/csv' })
  const url     = URL.createObjectURL(blob)
  const a       = document.createElement('a')
  a.href        = url
  a.download    = `${filename}.csv`
  a.click()
  URL.revokeObjectURL(url)
}
