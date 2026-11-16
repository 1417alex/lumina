import { useEffect, useState } from 'react'

export function LaunchesList() {
  const [launches, setLaunches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Временно демо-данные, пока уточняем API
    setTimeout(() => {
      setLaunches([
        { token: '0x123...abc', name: 'Test Token', symbol: 'TEST' },
        { token: '0x456...def', name: 'Demo Token', symbol: 'DEMO' },
      ])
      setLoading(false)
    }, 500)
  }, [])

  if (loading) return <p>Загрузка запусков...</p>
  if (!launches.length) return <p>Активных запусков не найдено</p>

  return (
    <div style={{ marginBottom: 40 }}>
      <h2>Активные запуски</h2>
      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        {launches.map((launch) => (
          <div key={launch.token} style={{ background: '#16161d', padding: 16, borderRadius: 12 }}>
            <div style={{ fontWeight: 600 }}>{launch.name} ({launch.symbol})</div>
            <div style={{ fontSize: 13, color: '#aaa', marginTop: 4 }}>{launch.token}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
