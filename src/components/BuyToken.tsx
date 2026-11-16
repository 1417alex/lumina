import { useState } from 'react'
import { useAccount, useWalletClient, usePublicClient } from 'wagmi'
import { parseEther } from 'viem'
import { ALCClient, giwaSepoliaAutoRouteDeployment } from '@ammora-protocol/sdk'

export function BuyToken() {
  const { address } = useAccount()
  const { data: walletClient } = useWalletClient()
  const publicClient = usePublicClient()
  const [token, setToken] = useState('')
  const [amount, setAmount] = useState('0.01')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const buy = async () => {
    if (!walletClient || !address || !publicClient || !token) return

    try {
      setLoading(true)
      setResult('')

      const alc = new ALCClient({
        publicClient,
        walletClient,
        deployment: giwaSepoliaAutoRouteDeployment,
      })

      const amountIn = parseEther(amount)
      const quote = await alc.quoteExactInput({ token: token as `0x${string}`, amountIn })

      const hash = await alc.buyExactInput({
        token: token as `0x${string}`,
        amountIn,
        minAmountOut: quote.amountOut,
        recipient: address,
      })

      setResult(`Успешно! Tx: ${hash}`)
    } catch (err: any) {
      setResult('Ошибка: ' + (err.shortMessage || err.message))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: '#16161d', padding: 20, borderRadius: 16 }}>
      <h3>Купить токен</h3>
      <input
        placeholder="Адрес токена"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Сумма в ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={inputStyle}
      />
      <button onClick={buy} disabled={loading} style={buttonStyle}>
        {loading ? 'Отправка...' : 'Купить'}
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
