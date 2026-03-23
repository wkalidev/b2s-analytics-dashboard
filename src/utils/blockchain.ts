export function shortTxId(txId: string): string {
  return `${txId.slice(0, 8)}...${txId.slice(-4)}`
}

export function getFunctionLabel(fnName: string): string {
  const labels: Record<string, string> = {
    'claim-daily-reward': '🎁 Claim',
    'stake':              '💰 Stake',
    'unstake':            '📤 Unstake',
    'compound-rewards':   '🔄 Compound',
    'swap-b2s-for-stx':   '🔄 Swap B2S→STX',
    'swap-stx-for-b2s':   '🔄 Swap STX→B2S',
    'add-liquidity':      '💧 Add Liquidity',
    'remove-liquidity':   '💧 Remove Liquidity',
    'vote':               '🏛️ Vote',
    'create-proposal':    '📝 Propose',
    'buy-badge':          '🏅 Buy Badge',
    'list-badge':         '🏷️ List Badge',
  }
  return labels[fnName] || fnName
}
