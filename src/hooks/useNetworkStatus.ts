import { useState, useEffect } from 'react'

const HIRO = 'https://api.mainnet.hiro.so'

export function useNetworkStatus() {
  const [blockHeight, setBlockHeight] = useState(0)
  const [status, setStatus]           = useState('ok')
  const [loading, setLoading]         = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/status`)
      .then(r => r.json())
      .then(d => {
        setBlockHeight(d.stacks_tip_height || 0)
        setStatus(d.status || 'ok')
      })
      .catch(console.error)
      .finally(() => setLoading(false))

    const i = setInterval(() => {
      fetch(`${HIRO}/extended/v1/status`)
        .then(r => r.json())
        .then(d => setBlockHeight(d.stacks_tip_height || 0))
        .catch(console.error)
    }, 30000)
    return () => clearInterval(i)
  }, [])

  return { blockHeight, status, loading }
}
