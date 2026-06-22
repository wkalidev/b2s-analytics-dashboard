import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'

export function useSwapHistory(limit = 20) {
  const [swaps, setSwaps]     = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-liquidity-pool-v5/transactions?limit=${limit}`)
      .then(r => r.json())
      .then(d => {
        const swapTxs = (d.results || []).filter(
          (tx: any) => ['swap-b2s-for-stx', 'swap-stx-for-b2s'].includes(
            tx.contract_call?.function_name
          )
        )
        setSwaps(swapTxs)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [limit])

  return { swaps, loading }
}
