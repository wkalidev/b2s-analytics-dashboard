export function shortAddress(addr: string): string {
  if (!addr) return ''
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

export function isValidStacksAddress(addr: string): boolean {
  return /^S[PM][0-9A-Z]{38,39}$/.test(addr)
}

export function isContractAddress(addr: string): boolean {
  return addr.includes('.')
}

export function getContractName(addr: string): string {
  return addr.split('.')[1] || ''
}
