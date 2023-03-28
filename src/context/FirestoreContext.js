import { createContext, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import firestore from '../utils/firestoreInstance'

const FirestoreContext = createContext(null)

export const useFirestore = () => {
  const context = useContext(FirestoreContext)

  if (!context) throw new Error('Threre is no Firestore provider')

  return context
}

export const FirestoreProvider = ({ children }) => {
  const getPointsData = async () => {
    const pointsCol = collection(firestore, 'points')
    const { docs } = await getDocs(pointsCol)
    const points = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return points
  }

  return (
    <FirestoreContext.Provider value={{ getPointsData }}>
      {children}
    </FirestoreContext.Provider>
  )
}
