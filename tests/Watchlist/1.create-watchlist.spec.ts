import { Page, test, expect } from "@playwright/test";
import { NavigationPO } from "../../pages/navigation.po";
import { initPage } from "../../pages/browser.po";
import { LoginPO } from "../../pages/login.po";
import { CorporateNavBarPO } from "../../pages/corporate-nav-bar.po";
import { WatchlistPO } from "../../pages/watchlist.po";
import { BasePO } from "../../pages/base.po";
import { ShareStartupPO } from "../../pages/share-startup.po";
import { ErrorMessagesPO } from "../../pages/error-messages.po";

test.describe.serial(`Create a new watchlist`, async () => {
  let page: Page;
  let navigationPo: NavigationPO;
  let loginPO: LoginPO;
  let corporateNavBarPO: CorporateNavBarPO;
  let watchlistPO: WatchlistPO;
  let basePO : BasePO;
  let shareStartupPO : ShareStartupPO;
  let errorMessagesPO : ErrorMessagesPO;

 

  test.beforeAll(async ({ browser }) => {
    page = await initPage(browser);
    navigationPo = new NavigationPO(page);
    loginPO = new LoginPO(page);
    corporateNavBarPO = new CorporateNavBarPO(page);
    watchlistPO = new WatchlistPO(page);
    basePO = new BasePO(page);
    shareStartupPO = new ShareStartupPO(page);
    errorMessagesPO = new ErrorMessagesPO(page);
  });

  test.afterAll(async ({browser}) => {
    page = await initPage(browser);
    await browser.close(); // Close the browser after all tests
  });


  test("Navigate to base url", async ({}) => {
    await navigationPo.baseURL();
    expect(page.url(), "check the base url").toMatch(process.env.BASE_URL);
    await expect(page.getByRole('heading', errorMessagesPO.defaultErrorMsg )).not.toBeVisible();
  });

  test("Login with valid credentials", async ({}) => {
    await loginPO.successfulLogin(process.env.PREMIUM_CORPORATE_USER);
    await expect(page.getByRole('heading', errorMessagesPO.defaultErrorMsg)).not.toBeVisible();
  });

  test("Go to SEARCH STARTUPS tab", async ({}) => {
    await corporateNavBarPO.searchStartup();
    await expect(page.getByRole('heading', errorMessagesPO.defaultErrorMsg)).not.toBeVisible();
    await shareStartupPO.closeButton();
    await expect(page.getByRole('heading', errorMessagesPO.defaultErrorMsg)).not.toBeVisible();
  });

  test("Creating a watchlist", async ({}) => {
    await watchlistPO.createWatchlist();
    await expect(page.getByRole('heading', errorMessagesPO.defaultErrorMsg)).not.toBeVisible();
  });

});
