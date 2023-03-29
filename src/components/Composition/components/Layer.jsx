const Layer = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className='absolute z-10 w-full'
    aria-label='layer'
  />
)

export default Layer
