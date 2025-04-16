import { test, expect } from '@playwright/test';

test('Facebook Login and Search Test', async ({ page }) => {
  // Variabile pentru credentiale și text de căutare
  const EMAIL = 'mihai@dummy.com';
  const PASSWORD = 'Parola_Dummy';
  const SEARCH_QUERY = 'masini cluj';

// Navigare către pagina de Facebook
  await page.goto('https://www.facebook.com/');

  // Completarea credentialelor și autentificarea
  await page.getByTestId('royal_email').fill(EMAIL);
  await page.getByTestId('royal_pass').fill(PASSWORD);
  await page.getByTestId('royal_login_button').click();

  // Cautarea de masini in bara de cautare
  const searchBox = page.getByPlaceholder('Caută pe Facebook');
  await searchBox.fill(SEARCH_QUERY);
  await searchBox.press('Enter');

  // 4. Validarea ca pagina a procesat cautarea
  await expect(page).toHaveURL(/search/);
  console.log('Căutarea a fost realizată cu succes.');
});
