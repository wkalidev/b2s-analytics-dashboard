import { useState, useEffect, useCallback } from 'react'

export interface VolumeData {
  timestamp: number
  volume: number
  transactions: number
  uniqueUsers: number
}

export interface PoolStats {
  reserveX: number
  reserveY: number
  price: number
  tvl: number
  volume24h: number
}

export interface LeaderboardEntry {
  address: string
  staked: number
  rewards: number
  rank: number
}

const API = 'https://base2stacks-tracker.vercel.app/api'

export function useVolumeData(timeRange: '24h' | '7d' | '30d' = '7d') {
  const [data, setData] = useState<VolumeData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(`${API}/volume?range=${timeRange}`)
      .then(r => r.json())
      .then(d => { setData(d.results ?? []); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [timeRange])

  return { data, loading, error }
}

export function usePoolStats() {
  const [stats, setStats] = useState<PoolStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/pool/stats`)
      .then(r => r.json())
      .then(d => { setStats(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return { stats, loading }
}

export function useLeaderboard(limit = 10) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  const refetch = useCallback(() => {
    fetch(`${API}/leaderboard?limit=${limit}`)
      .then(r => r.json())
      .then(d => { setEntries(d.results ?? []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [limit])

  useEffect(() => { refetch() }, [refetch])

  return { entries, loading, refetch }
}

export function useTVL() {
  const [tvl, setTvl] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/tvl`)
      .then(r => r.json())
      .then(d => { setTvl(d.tvl ?? 0); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return { tvl, loading }
}
