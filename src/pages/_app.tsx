
import AppShell from '@/components/layouts/AppSheel'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react"
export default function App({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>

    <AppShell>
    
      <Component {...pageProps} />
    </AppShell>
    </SessionProvider>
  ) 
  
}
