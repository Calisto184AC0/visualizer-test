import { test, expect } from '@playwright/test'

test('Change material', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const layer = page.getByAltText('Capa de Frente')

  const firstMaterialPartSrc = await layer.getAttribute('src')

  const icon = page.getByAltText('Icono de punto para seleccionar Frente')
  await icon.waitFor({ state: 'visible' })
  await page.screenshot({ path: './__e2e__/screenshots/1_initial-state.png' })

  await icon.click()
  const materialPreview = page.getByAltText('Muestra de Roble Tierra')
  await materialPreview.waitFor({ state: 'visible' })
  await page.screenshot({ path: './__e2e__/screenshots/2_menu-open.png' })

  const materialPreviewContainer = materialPreview.locator('..')
  await materialPreviewContainer.click()
  await page.waitForTimeout(1000)
  await page.screenshot({ path: './__e2e__/screenshots/3_selected-material.png' })

  const secondMaterialPartSrc = await layer.getAttribute('src')

  expect(firstMaterialPartSrc).not.toBe(secondMaterialPartSrc)
})
