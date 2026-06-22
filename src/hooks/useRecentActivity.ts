import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'

export function useRecentActivity(limit = 10) {
  const [activity, setActivity] = useState<any[]>([])
  const [loading, setLoading]   = useState(false)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-token/transactions?limit=${limit}`).then(r => r.json()),
      fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-liquidity-pool-v5/transactions?limit=${limit}`).then(r => r.json()),
    ])
      .then(([token, pool]) => {
        const all = [...(token.results || []), ...(pool.results || [])]
          .sort((a, b) => new Date(b.burn_block_time_iso).getTime() - new Date(a.burn_block_time_iso).getTime())
          .slice(0, limit)
        setActivity(all)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [limit])

  return { activity, loading }
}
