import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96'

export function useTxHistory(limit = 50) {
  const [txs, setTxs]         = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-token/transactions?limit=${limit}`)
      .then(r => r.json())
      .then(d => setTxs(d.results || []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [limit])

  return { txs, loading }
}
