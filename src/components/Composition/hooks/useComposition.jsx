import { useCallback, useState } from 'react'
import Layer from '../components/Layer'
import Point from '../components/Point'
import { useParts } from '../../../context/PartsContext'

const useComposition = () => {
  const [hoverName, setHoverName] = useState('')

  const {
    points = [],
    materials = {},
    selectedIndexes = {},
    selectedPart,
    setSelectedPart
  } = useParts()

  const fillLists = useCallback(() => {
    const pointsList = []
    const materialsList = []

    for (const { id, ...data } of points) {
      const { coordY, coordX, name } = data

      if (!materials[id] || !materials[id][selectedIndexes[id]]) break

      pointsList.push(
        <Point
          key={`point-${id}`}
          name={name}
          coordX={coordX}
          coordY={coordY}
          onMouseEnter={() => setHoverName(name)}
          onMouseLeave={() => setHoverName('')}
          onClick={() => setSelectedPart(id)}
        />
      )

      materialsList.push(
        <Layer
          key={`layer-${id}`}
          src={materials[id][selectedIndexes[id]].layers[id]}
          alt={`Capa de ${name}`}
        />
      )
    }

    return { pointsList, materialsList }
  }, [materials, points, selectedIndexes])

  const closeMenu = () => {
    if (selectedPart !== '') {
      setSelectedPart('')
      setHoverName('')
    }
  }

  const { pointsList, materialsList } = fillLists()

  return {
    pointsList,
    materialsList,
    hoverName,
    selectedPart,
    closeMenu
  }
}

export default useComposition
