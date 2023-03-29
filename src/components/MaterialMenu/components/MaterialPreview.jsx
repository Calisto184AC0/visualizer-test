const MaterialPreview = ({ src, name, ...otherProps }) => {
  return (
    <div
      className='p-2 rounded-md cursor-pointer drop-shadow-md'
      {...otherProps}
    >
      <img
        src={src}
        alt={`Muestra de ${name}`}
        style={{
          height: 'clamp(4rem, 2.2685rem + 6.443vw, 10rem)'
        }}
      />
    </div>
  )
}

export default MaterialPreview
