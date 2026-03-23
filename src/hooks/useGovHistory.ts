import { useState, useEffect } from 'react'

const HIRO    = 'https://api.mainnet.hiro.so'
const CONTRACT = 'SP936YWJPST8GB8FFRCN7CC6P2YR5K6NNBAARQ96'

export function useGovHistory(limit = 20) {
  const [votes, setVotes]         = useState<any[]>([])
  const [proposals, setProposals] = useState<any[]>([])
  const [loading, setLoading]     = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${HIRO}/extended/v1/address/${CONTRACT}.b2s-governance/transactions?limit=${limit}`)
      .then(r => r.json())
      .then(d => {
        const txs = d.results || []
        setVotes(txs.filter((tx: any) => tx.contract_call?.function_name === 'vote'))
        setProposals(txs.filter((tx: any) => tx.contract_call?.function_name === 'create-proposal'))
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [limit])

  return { votes, proposals, loading }
}
