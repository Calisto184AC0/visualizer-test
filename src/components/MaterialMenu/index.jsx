import { useEffect } from 'react'
import { useParts } from '../../context/PartsContext'

const MaterialMenu = () => {
  const { materials, selectedPart, selectedIndexes, setSelectedIndexes } = useParts()

  useEffect(() => {
    console.log(materials)
  }, [materials])

  if (!selectedPart) return <></>

  return (
    <div className='fixed z-10 bottom-6 flex flex-col items-center gap-5'>
      <span className='rounded px-3 py-1 bg-white drop-shadow-md'>
        {materials[selectedPart][selectedIndexes[selectedPart]].name}
      </span>
      <div className='flex gap-3'>
        {
        materials[selectedPart].map(({ name, materialPreview, id }, index) => {
          return (
            <div
              key={id}
              onClick={() => setSelectedIndexes({ ...selectedIndexes, [selectedPart]: index })}
              className='p-2 rounded-md cursor-pointer drop-shadow-md'
              style={{
                backgroundColor: selectedIndexes[selectedPart] === index ? '#9747FF' : '#FFFFFF'
              }}
            >
              <img
                src={materialPreview} alt={`Muestra de ${name}`} style={{
                  height: 'clamp(4rem, 2.2685rem + 6.443vw, 10rem)'
                }}
              />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default MaterialMenu
