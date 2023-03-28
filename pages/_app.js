import '../styles/globals.css'
import { FirestoreProvider } from '../src/context/FirestoreContext'

function MyApp ({ Component, pageProps }) {
  return (
    <FirestoreProvider>
      <Component {...pageProps} />
    </FirestoreProvider>
  )
}

export default MyApp
