import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96'

export function useVolumeStats() {
  const [poolVolume, setPoolVolume]     = useState(0)
  const [bridgeVolume, setBridgeVolume] = useState(0)
  const [loading, setLoading]           = useState(false)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-liquidity-pool-v5/transactions?limit=1`).then(r => r.json()),
      fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-fee-router/transactions?limit=1`).then(r => r.json()),
    ])
      .then(([pool, bridge]) => {
        setPoolVolume(pool.total || 0)
        setBridgeVolume(bridge.total || 0)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { poolVolume, bridgeVolume, loading }
}
