import { useState } from 'react'
import { useParts } from '../../context/PartsContext'
import Alert from './components/Alert'

const Composition = () => {
  const [selectedPart, setSelectedPart] = useState('')

  const { points } = useParts()

  return (
    <div className='relative z-0 w-fit'>
      {selectedPart !== '' && <Alert message={selectedPart} />}
      {
        points.map(({ id, ...data }) => {
          const { coordY, coordX, name } = data

          return (
            <img
              key={`point-${id}`}
              src='/Point.svg'
              alt={`Icono de punto para el seleccionar ${name}`}
              className='absolute cursor-pointer hover:opacity-50 transition-opacity duration-300'
              style={{
                top: `${coordY}%`,
                left: `${coordX}%`
              }}
              onMouseEnter={() => setSelectedPart(name)}
              onMouseLeave={() => setSelectedPart('')}
            />
          )
        })
      }
      <img
        src='/base.jpeg'
        alt='Base image'
        className='h-screen w-auto max-w-none'
      />
    </div>
  )
}

export default Composition
