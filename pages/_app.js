import '../styles/globals.css'
import { PartsProvider } from '../src/context/PartsContext'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <PartsProvider>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </PartsProvider>
  )
}

export default MyApp
