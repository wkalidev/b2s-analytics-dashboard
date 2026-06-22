import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'

export function useTopHolders(limit = 10) {
  const [holders, setHolders] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/tokens/ft/${CONTRACT}.b2s-token/holders?limit=${limit}`)
      .then(r => r.json())
      .then(d => setHolders(d.results || []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [limit])

  return { holders, loading }
}
