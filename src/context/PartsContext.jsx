import { createContext, useContext } from 'react'
import useInitParts from '../hooks/useInitParts'

export const PartsContext = createContext(null)

export const useParts = () => {
  const context = useContext(PartsContext)

  if (!context) throw new Error('Threre is no Parts provider')

  return context
}

export const PartsProvider = ({ children }) => {
  const config = useInitParts()

  return (
    <PartsContext.Provider value={config}>
      {children}
    </PartsContext.Provider>
  )
}
