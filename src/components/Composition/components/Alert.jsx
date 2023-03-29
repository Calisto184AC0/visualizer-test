const Alert = ({ message }) => {
  return (
    <span className='fixed z-20 top-6 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/[.5] text-white rounded-md'>
      {message}
    </span>
  )
}

export default Alert
