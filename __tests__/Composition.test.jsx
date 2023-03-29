import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Composition from '../src/components/Composition'
import { TestProviderWithoutSelectedPart, points } from './providers'

describe('Composition component', () => {
  afterEach(cleanup)

  it('should throw an error if is not inside a provider', () => {
    expect(() => render(<Composition />)).toThrow()
  })

  it('should render with a provider', () => {
    render(<Composition />, { wrapper: TestProviderWithoutSelectedPart })
  })

  it('should appear the same number of layers as the number of points', () => {
    render(<Composition />, { wrapper: TestProviderWithoutSelectedPart })

    const points = screen.getAllByRole('img', { name: 'point' })
    const layers = screen.getAllByRole('img', { name: 'layer' })

    expect(points.length).toBe(layers.length)
  })

  it('should appear the name of the point when the mouse is over it', async () => {
    render(<Composition />, { wrapper: TestProviderWithoutSelectedPart })

    const point = screen.getByAltText(`Icono de punto para seleccionar ${points[0].name}`)

    fireEvent.mouseEnter(point)

    const alert = await screen.findByRole('generic', { name: 'alert' })
    expect(alert.innerText).toBe(points[0].name)
  })

  it('should disappear the name of the point when the mouse is out of it', async () => {
    render(<Composition />, { wrapper: TestProviderWithoutSelectedPart })

    const point = screen.getByAltText(`Icono de punto para seleccionar ${points[0].name}`)

    fireEvent.mouseEnter(point)

    const alertMouseEnter = await screen.findByRole('generic', { name: 'alert' })
    expect(alertMouseEnter.innerText).toBe(points[0].name)

    fireEvent.mouseLeave(point)

    const alertMouseLeave = screen.queryByRole('generic', { name: 'alert' })
    expect(alertMouseLeave).toBeNull()
  })
})
