import { useEffect } from 'react'
import { useParts } from '../../context/PartsContext'

const MaterialMenu = () => {
  const { materials } = useParts()

  useEffect(() => {
    console.log(materials)
  }, [materials])

  return (
    <div className='fixed z-10 bottom-6'>
      <span>Menú</span>
    </div>
  )
}

export default MaterialMenu
