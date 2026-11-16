import { useEffect, useState } from 'react'
import { AmmoraDataApiClient } from '@ammora-protocol/sdk'

export function LaunchesList() {
  const [launches, setLaunches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const data = new AmmoraDataApiClient('https://ammora-giwa-sepolia-data.fly.dev')
        const result = await data.getLaunches({ chainId: 91342n })
        setLaunches(result || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p>Загрузка запусков...</p>
  if (!launches.length) return <p>Активных запусков не найдено</p>

  return (
    <div style={{ marginBottom: 40 }}>
      <h2>Активные запуски</h2>
      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        {launches.slice(0, 10).map((launch: any) => (
          <div key={launch.token} style={{ background: '#16161d', padding: 16, borderRadius: 12 }}>
            <div style={{ fontWeight: 600 }}>{launch.name || 'Token'} ({launch.symbol})</div>
            <div style={{ fontSize: 13, color: '#aaa', marginTop: 4 }}>{launch.token}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
