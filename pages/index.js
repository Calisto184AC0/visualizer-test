import Composition from '../src/components/Composition'
import MaterialMenu from '../src/components/MaterialMenu'

const Home = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen bg-stone-100'>
      <MaterialMenu />
      <Composition />
    </div>
  )
}

export default Home
