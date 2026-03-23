export function calcAverage(nums: number[]): number {
  if (!nums.length) return 0
  return nums.reduce((a, b) => a + b, 0) / nums.length
}

export function calcMax(nums: number[]): number {
  return nums.length ? Math.max(...nums) : 0
}

export function calcMin(nums: number[]): number {
  return nums.length ? Math.min(...nums) : 0
}

export function calcSum(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0)
}

export function calcMedian(nums: number[]): number {
  if (!nums.length) return 0
  const sorted = [...nums].sort((a, b) => a - b)
  const mid    = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}
