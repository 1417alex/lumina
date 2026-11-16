import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { BuyToken } from './components/BuyToken'
import { LaunchesList } from './components/LaunchesList'

export default function App() {
  const { isConnected } = useAccount()

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff', fontFamily: 'system-ui' }}>
      <header style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222' }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Lumina</h1>
        <ConnectButton />
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
        {!isConnected ? (
          <p style={{ textAlign: 'center', marginTop: 80, color: '#aaa' }}>
            Подключи кошелёк, чтобы видеть запуски и покупать токены
          </p>
        ) : (
          <>
            <LaunchesList />
            <BuyToken />
          </>
        )}
      </main>
    </div>
  )
}
