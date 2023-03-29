const MaterialMenuContainer = ({ children }) => {
  return (
    <div className='fixed z-10 bottom-6 flex flex-col items-center gap-5 lg:top-6 lg:bottom-auto lg:right-12'>
      {children}
    </div>
  )
}

export default MaterialMenuContainer
