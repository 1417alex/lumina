import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { BuyToken } from './components/BuyToken'
import { LaunchesList } from './components/LaunchesList'

export default function App() {
  const { isConnected } = useAccount()

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff', fontFamily: 'system-ui' }}>
      <header style={{ 
        padding: '16px 24px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid #222',
        position: 'sticky',
        top: 0,
        background: '#0a0a0f',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.png" alt="Lumina" style={{ height: 40, width: 'auto' }} />
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Lumina</h1>
        </div>
        <ConnectButton />
      </header>

      <div style={{ 
        textAlign: 'center', 
        padding: '80px 20px 40px',
        background: 'linear-gradient(180deg, #1a1033 0%, #0a0a0f 100%)'
      }}>
        <h2 style={{ fontSize: 42, margin: 0, fontWeight: 700 }}>Discover the next market</h2>
        <p style={{ fontSize: 18, color: '#aaa', marginTop: 12 }}>
          Launch and trade with Ammora’s programmable liquidity on GIWA
        </p>
      </div>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>
        {isConnected ? (
          <>
            <LaunchesList />
            <BuyToken />
          </>
        ) : (
          <p style={{ textAlign: 'center', marginTop: 40, color: '#888' }}>
            Connect your wallet to explore launches and buy tokens
          </p>
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: 24, color: '#555', fontSize: 14, borderTop: '1px solid #222' }}>
        Lumina · Built with Ammora SDK
      </footer>
    </div>
  )
}
