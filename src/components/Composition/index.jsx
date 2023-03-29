import { Fragment, useState } from 'react'
import { useParts } from '../../context/PartsContext'
import Alert from './components/Alert'
import Layer from './components/Layer'
import Point from './components/Point'

const Composition = () => {
  const [hoverName, setHoverName] = useState('')

  const { points, materials, selectedIndexes, selectedPart, setSelectedPart } = useParts()

  const closeMenu = () => {
    if (selectedPart !== '') {
      setSelectedPart('')
      setHoverName('')
    }
  }

  return (
    <div
      className='relative z-0 w-fit' onClick={closeMenu}
    >
      {hoverName !== '' && <Alert message={hoverName} />}
      {
        points.map(({ id, ...data }) => {
          const { coordY, coordX, name } = data

          if (!materials[id] || !materials[id][selectedIndexes[id]]) return null

          return (
            <Fragment key={`point-${id}`}>
              {selectedPart === '' && (
                <Point
                  name={name}
                  coordX={coordX}
                  coordY={coordY}
                  onMouseEnter={() => setHoverName(name)}
                  onMouseLeave={() => setHoverName('')}
                  onClick={() => setSelectedPart(id)}
                />
              )}
              <Layer
                src={materials[id][selectedIndexes[id]].layers[id]}
                alt={`Capa de ${name}`}
              />
            </Fragment>
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
