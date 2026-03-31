import { useState, useEffect } from 'react'

const HIRO     = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96'

export function useVolumeStats() {
  const [poolVolume, setPoolVolume]           = useState(0)
  const [bridgeVolume, setBridgeVolume]       = useState(0)
  const [poolVolume24h, setPoolVolume24h]     = useState(0)
  const [bridgeVolume24h, setBridgeVolume24h] = useState(0)
  const [poolChange, setPoolChange]           = useState(0)
  const [bridgeChange, setBridgeChange]       = useState(0)
  const [loading, setLoading]                 = useState(false)

  useEffect(() => {
    const now = Date.now()
    const DAY = 24 * 60 * 60 * 1000

    const fetchData = async () => {
      setLoading(true)

      try {
        const [poolRes, bridgeRes] = await Promise.all([
          fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-liquidity-pool-v5/transactions?limit=50`),
          fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-fee-router/transactions?limit=50`)
        ])

        const pool = await poolRes.json()
        const bridge = await bridgeRes.json()

        const calc24h = (txs: any[]) => {
          let current = 0
          let previous = 0

          txs.forEach(tx => {
            const t = new Date(tx.burn_block_time_iso).getTime()

            if (t >= now - DAY) current++
            else if (t >= now - (2 * DAY)) previous++
          })

          const change = previous > 0 ? ((current - previous) / previous) * 100 : 0

          return { current, change }
        }

        const poolStats   = calc24h(pool.results || [])
        const bridgeStats = calc24h(bridge.results || [])

        setPoolVolume(pool.total || 0)
        setBridgeVolume(bridge.total || 0)

        setPoolVolume24h(poolStats.current)
        setBridgeVolume24h(bridgeStats.current)

        setPoolChange(poolStats.change)
        setBridgeChange(bridgeStats.change)

      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    poolVolume,
    bridgeVolume,
    poolVolume24h,
    bridgeVolume24h,
    poolChange,
    bridgeChange,
    loading
  }
}
