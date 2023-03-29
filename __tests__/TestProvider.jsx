import { useState } from 'react'
import { PartsContext } from '../src/context/PartsContext'

const TestProvider = ({
  children,
  defaultIndexes = {},
  defaultPart = '',
  defaultPoints = [],
  defaultMaterials = {}
}) => {
  const [selectedIndexes, setSelectedIndexes] = useState(defaultIndexes)
  const [selectedPart, setSelectedPart] = useState(defaultPart)
  const points = defaultPoints
  const materials = defaultMaterials

  return (
    <PartsContext.Provider value={{
      selectedIndexes,
      setSelectedIndexes,
      selectedPart,
      setSelectedPart,
      points,
      materials
    }}
    >
      {children}
    </PartsContext.Provider>
  )
}

export default TestProvider
