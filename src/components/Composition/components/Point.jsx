const Point = ({ name, coordX, coordY, ...otherProps }) => {
  return (
    <img
      src='/Point.svg'
      alt={`Icono de punto para seleccionar ${name}`}
      className='absolute z-20 cursor-pointer hover:opacity-50 transition-opacity duration-300'
      style={{
        top: `${coordY}%`,
        left: `${coordX}%`
      }}
      {...otherProps}
    />
  )
}

export default Point
