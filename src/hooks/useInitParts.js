import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import firestore from '../utils/firestoreInstance'

const useInitParts = () => {
  const [points, setPoints] = useState([])
  const [materials, setMaterials] = useState({})
  const [selectedIndexes, setSelectedIndexes] = useState({})
  const [selectedPart, setSelectedPart] = useState('')

  const initParts = async () => {
    const pointsCol = collection(firestore, 'points')
    const { docs: pointDocs } = await getDocs(pointsCol)

    for (const pointDoc of pointDocs) {
      const materialsCol = collection(firestore, 'materials')
      const q = query(materialsCol, where('points', 'array-contains', pointDoc.id))

      const { docs: materialDocs } = await getDocs(q)
      const materialsData = materialDocs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setPoints(prevPoints => [...prevPoints, {
        id: pointDoc.id,
        ...pointDoc.data()
      }])
      setMaterials(prevMaterials => ({
        ...prevMaterials,
        [pointDoc.id]: materialsData
      }))
      setSelectedIndexes(prevSelectedIndexes => ({
        ...prevSelectedIndexes,
        [pointDoc.id]: 0
      }))
    }
  }

  useEffect(() => {
    initParts()

    return () => {
      setPoints([])
      setMaterials({})
    }
  }, [])

  return {
    points,
    materials,
    setSelectedIndexes,
    selectedIndexes,
    selectedPart,
    setSelectedPart
  }
}

export default useInitParts
