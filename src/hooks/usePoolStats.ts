import { useState, useEffect } from 'react'

const HIRO = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'

export function usePoolStats() {
  const [stxLocked, setStxLocked] = useState(0)
  const [swapCount, setSwapCount] = useState(0)
  const [loading, setLoading]     = useState(false)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-liquidity-pool-v5/balances`).then(r => r.json()),
      fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-liquidity-pool-v5/transactions?limit=1`).then(r => r.json()),
    ])
      .then(([bal, txs]) => {
        setStxLocked(Number(bal.stx?.balance || 0) / 1_000_000)
        setSwapCount(txs.total || 0)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { stxLocked, swapCount, loading }
}
