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
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>Lumina</div>
        <ConnectButton />
      </header>

      {/* Большой логотип на весь экран */}
      <div style={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #1a1033 0%, #0a0a0f 70%)',
        textAlign: 'center',
        padding: 20
      }}>
        <img 
          src="/logo.png" 
          alt="Lumina" 
          style={{ 
            width: 'min(500px, 80vw)', 
            height: 'auto',
            marginBottom: 30,
            filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.4))'
          }} 
        />
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', margin: 0, fontWeight: 700 }}>
          Discover the next market
        </h1>
        <p style={{ fontSize: 18, color: '#aaa', marginTop: 16, maxWidth: 500 }}>
          Launch and trade with Ammora’s programmable liquidity on GIWA
        </p>
      </div>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        {isConnected ? (
          <>
            <LaunchesList />
            <BuyToken />
          </>
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>
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
