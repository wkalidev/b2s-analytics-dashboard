import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'

export function useAirdropStats() {
  const [txCount, setTxCount] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-airdrop-v2/transactions?limit=1`)
      .then(r => r.json())
      .then(d => setTxCount(d.total || 0))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { txCount, loading }
}
