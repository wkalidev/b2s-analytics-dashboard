import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'

export function useClaimsHistory(limit = 50) {
  const [claims, setClaims]   = useState<any[]>([])
  const [total, setTotal]     = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-token/transactions?limit=${limit}`)
      .then(r => r.json())
      .then(d => {
        const claimTxs = (d.results || []).filter(
          (tx: any) => tx.contract_call?.function_name === 'claim-daily-reward'
        )
        setClaims(claimTxs)
        setTotal(claimTxs.length)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [limit])

  return { claims, total, loading }
}
