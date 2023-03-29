import Alert from './components/Alert'
import useComposition from './hooks/useComposition'

const Composition = () => {
  const { pointsList, materialsList, hoverName, selectedPart, closeMenu } = useComposition()

  return (
    <div
      className='relative z-0 w-fit' onClick={closeMenu}
    >
      {hoverName !== '' && <Alert message={hoverName} />}
      {selectedPart === '' && pointsList}
      {materialsList}
      <img
        src='/base.jpeg'
        alt='Base image'
        className='h-screen w-auto max-w-none'
      />
    </div>
  )
}

export default Composition
