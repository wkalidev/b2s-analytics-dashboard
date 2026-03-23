import { useState, useEffect } from 'react'

export function useTokenPrice() {
  const [stxPrice, setStxPrice] = useState(0)
  const [change24h, setChange24h] = useState(0)
  const [loading, setLoading]   = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=blockstack&vs_currencies=usd&include_24hr_change=true')
      .then(r => r.json())
      .then(d => {
        setStxPrice(d.blockstack?.usd || 0)
        setChange24h(d.blockstack?.usd_24h_change || 0)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { stxPrice, change24h, loading }
}
