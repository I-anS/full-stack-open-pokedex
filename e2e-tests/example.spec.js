const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('can navigate from main page to Ivysaur page', async ({ page }) => {
    // Go to the main page
    await page.goto('/')

    // Click on the Ivysaur link
    await page.getByRole('link', { name: /ivysaur/i }).click()

    // Expect some unique content on Ivysaur's page
    await expect(page.getByText(/chlorophyll/i)).toBeVisible()
  })
})
