import TestProvider from './TestProvider'

export const indexes = {
  1: 0,
  2: 0
}

export const selectedPart = '1'

export const points = [
  {
    id: '1',
    name: 'Point 1',
    coordX: 0,
    coordY: 0
  },
  {
    id: '2',
    name: 'Point 2',
    coordX: 0,
    coordY: 0
  }
]

export const materials = {
  1: [
    {
      id: '1',
      name: 'Material 1',
      layers: { 1: '#' },
      materialPreview: '#'
    },
    {
      id: '2',
      name: 'Material 2',
      layers: { 1: '#' },
      materialPreview: '#'
    }
  ],
  2: [
    {
      id: '3',
      name: 'Material 3',
      layers: { 2: '#' },
      materialPreview: '#'
    }
  ]
}

export const TestProviderWithoutSelectedPart = ({ children }) => (
  <TestProvider
    defaultIndexes={indexes}
    defaultPoints={points}
    defaultMaterials={materials}
  >
    {children}
  </TestProvider>
)

export const TestProviderWithSelectedPart = ({ children }) => (
  <TestProvider
    defaultIndexes={indexes}
    defaultPart={selectedPart}
    defaultPoints={points}
    defaultMaterials={materials}
  >
    {children}
  </TestProvider>
)
