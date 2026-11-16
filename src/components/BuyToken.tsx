import { useState } from 'react'
import { useAccount } from 'wagmi'

export function BuyToken() {
  const { isConnected } = useAccount()
  const [token, setToken] = useState('')
  const [amount, setAmount] = useState('0.01')
  const [result, setResult] = useState('')

  const buy = () => {
    if (!isConnected) {
      setResult('Please connect your wallet first')
      return
    }
    if (!token) {
      setResult('Please enter a token address')
      return
    }
    setResult('Demo mode: Real transaction would be sent here via Ammora SDK')
  }

  return (
    <div style={{ background: '#16161d', padding: 20, borderRadius: 16 }}>
      <h3>Buy Token</h3>
      <input
        placeholder="Token address (0x...)"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={inputStyle}
      />
      <button onClick={buy} style={buttonStyle}>
        Buy
      </button>
      {result && <p style={{ marginTop: 12, fontSize: 14 }}>{result}</p>}
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: 12,
  margin: '8px 0',
  borderRadius: 10,
  background: '#0a0a0f',
  color: 'white',
  border: '1px solid #333',
}

const buttonStyle = {
  width: '100%',
  padding: 12,
  marginTop: 8,
  background: '#8b5cf6',
  color: 'white',
  border: 'none',
  borderRadius: 10,
  fontWeight: 600,
  cursor: 'pointer',
}
