import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { BuyToken } from './components/BuyToken'
import { LaunchesList } from './components/LaunchesList'

export default function App() {
  const { isConnected } = useAccount()

  return (
    <div style={{ background: '#0a0a0f', color: '#fff', fontFamily: 'system-ui' }}>
      <header style={{ 
        padding: '16px 24px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: 'rgba(10,10,15,0.8)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>Lumina</div>
        <ConnectButton />
      </header>

      {/* Hero с логотипом */}
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #1a1033 0%, #0a0a0f 70%)',
        textAlign: 'center',
        padding: '100px 20px 60px'
      }}>
        <img 
          src="/logo.png" 
          alt="Lumina" 
          style={{ 
            width: 'min(420px, 75vw)', 
            height: 'auto',
            marginBottom: 30,
            filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.5))'
          }} 
        />
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', margin: 0, fontWeight: 700 }}>
          Discover the next market
        </h1>
        <p style={{ fontSize: 18, color: '#aaa', marginTop: 16, maxWidth: 480 }}>
          Launch and trade with Ammora’s programmable liquidity on GIWA
        </p>
      </div>

      {/* Контент ниже */}
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 100px' }}>
        {isConnected ? (
          <>
            <LaunchesList />
            <BuyToken />
          </>
        ) : (
          <p style={{ textAlign: 'center', color: '#888', fontSize: 18 }}>
            Connect your wallet to explore launches and buy tokens
          </p>
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: 32, color: '#555', fontSize: 14, borderTop: '1px solid #222' }}>
        Lumina · Built with Ammora SDK
      </footer>
    </div>
  )
}
