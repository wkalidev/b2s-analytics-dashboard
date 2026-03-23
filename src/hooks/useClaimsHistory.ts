import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96'

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
