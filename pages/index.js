import { useEffect } from 'react'
import { useFirestore } from '../src/context/FirestoreContext'

export default function Home () {
  const { getPointsData } = useFirestore()

  useEffect(() => {
    getPointsData()
      .then(points => {
        console.log(points)
      })
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  )
}
