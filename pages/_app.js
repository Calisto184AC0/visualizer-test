import '../styles/globals.css'
import { PartsProvider } from '../src/context/PartsContext'

function MyApp ({ Component, pageProps }) {
  return (
    <PartsProvider>
      <Component {...pageProps} />
    </PartsProvider>
  )
}

export default MyApp
