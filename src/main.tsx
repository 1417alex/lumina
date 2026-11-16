import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const giwaSepolia = {
  id: 91342,
  name: 'GIWA Sepolia',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://sepolia-rpc.giwa.io'] } },
  blockExplorers: { default: { name: 'Explorer', url: 'https://sepolia-explorer.giwa.io' } },
} as const

const config = getDefaultConfig({
  appName: 'Lumina',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [giwaSepolia],
  transports: { [giwaSepolia.id]: http() },
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
