import MaterialMenuContainer from './components/MaterialMenuContainer'
import MaterialName from './components/MaterialName'
import useMaterialMenu from './hooks/useMaterialMenu'

const MaterialMenu = () => {
  const { selectedPart, selectedMaterialName, materialItems } = useMaterialMenu()

  if (!selectedPart) return <></>

  return (
    <MaterialMenuContainer>
      <MaterialName name={selectedMaterialName} />
      <div className='flex gap-3 items-center lg:flex-col'>
        {materialItems}
      </div>
    </MaterialMenuContainer>
  )
}

export default MaterialMenu
