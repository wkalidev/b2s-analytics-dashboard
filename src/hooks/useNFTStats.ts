import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96'

export function useNFTStats() {
  const [minted, setMinted]   = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/tokens/nft/holdings?asset_identifiers=${CONTRACT}.b2s-badges::b2s-badge&limit=1`)
      .then(r => r.json())
      .then(d => setMinted(d.total || 0))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { minted, loading }
}
