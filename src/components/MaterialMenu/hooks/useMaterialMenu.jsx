import { useCallback } from 'react'
import { useParts } from '../../../context/PartsContext'
import MaterialPreview from '../components/MaterialPreview'

const useMaterialMenu = () => {
  const { materials, selectedPart, selectedIndexes, setSelectedIndexes } = useParts()

  const getMaterialName = useCallback(() => {
    if (!materials[selectedPart]) return ''
    return materials[selectedPart][selectedIndexes[selectedPart]].name
  }, [materials, selectedPart, selectedIndexes])

  const getMaterialItems = useCallback(() => {
    if (!materials[selectedPart]) return []
    return materials[selectedPart].map(({ name, materialPreview, id }, index) => {
      return (
        <MaterialPreview
          src={materialPreview}
          name={name}
          key={id}
          onClick={() => setSelectedIndexes({ ...selectedIndexes, [selectedPart]: index })}
          style={{
            backgroundColor: selectedIndexes[selectedPart] === index ? '#9747FF' : '#FFFFFF'
          }}
        />
      )
    })
  }, [materials, selectedPart, selectedIndexes])

  const selectedMaterialName = getMaterialName()
  const materialItems = getMaterialItems()

  return { selectedPart, selectedMaterialName, materialItems }
}

export default useMaterialMenu
