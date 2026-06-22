import { useState, useEffect, useCallback } from 'react'

const HIRO = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP1V72500C63KN9E348QDK9X879MASSTN0J3KBQ5N'

export function useMetrics(refreshInterval = 60000) {
  const [metrics, setMetrics] = useState({
    totalTxCount: 0,
    holders: 0,
    totalSupply: 0,
    poolTxCount: 0,
    rewardsTxCount: 0,
    bridgeTxCount: 0,
    loading: true,
  })

  const fetchData = useCallback(async () => {
    try {
      const [t, h, m] = await Promise.all([
        fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-token/transactions?limit=1`).then(r => r.json()),
        fetch(`${HIRO}/extended/v1/tokens/ft/${CONTRACT}.b2s-token/holders?limit=1`).then(r => r.json()),
        fetch(`${HIRO}/metadata/v1/ft/${CONTRACT}.b2s-token`).then(r => r.json()),
      ])
      setMetrics(prev => ({
        ...prev,
        totalTxCount: t.total || 0,
        holders: h.total || 0,
        totalSupply: m.total_supply ? Number(m.total_supply) / 1_000_000 : 0,
        loading: false,
      }))
    } catch {
      setMetrics(prev => ({ ...prev, loading: false }))
    }
  }, [])

  useEffect(() => {
    fetchData()
    const i = setInterval(fetchData, refreshInterval)
    return () => clearInterval(i)
  }, [fetchData, refreshInterval])

  return metrics
}
