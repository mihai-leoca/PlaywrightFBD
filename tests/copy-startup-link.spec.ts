import { Page, test, expect } from '@playwright/test';
import { NavigationPO } from '../pages/navigation.po';
import { initPage } from '../pages/browser.po';
import { LoginPO } from '../pages/login.po';
import { CorporateNavBarPO } from '../pages/corporate-nav-bar.po';
import { ShareStartupPO } from '../pages/share-startup.po';
import { BasePO } from '../pages/base.po';
import { ExceptionPO, exceptionPO } from '../pages/exception.po';




test.describe.serial(`Share startup link`, async () => {
    let page: Page;
    let navigationPo: NavigationPO;
    let loginPO: LoginPO;
    let corporateNavBarPO: CorporateNavBarPO; 
    let shareStartupPO: ShareStartupPO;
    let basePO : BasePO;
    let exceptionPO: ExceptionPO;

    test.beforeAll(async({browser})=>{
        page = await initPage(browser);
        navigationPo= new NavigationPO(page);
        loginPO = new LoginPO(page);
        corporateNavBarPO = new CorporateNavBarPO(page);
        shareStartupPO = new ShareStartupPO(page);
        basePO = new BasePO(page);
        exceptionPO = new ExceptionPO(page);

    });

    test('Navigate to base url', async({})=>{
        await navigationPo.baseURL();
        expect(page.url(),'check the base url').toMatch(process.env.BASE_URL);
        await expect(page.getByRole('heading', exceptionPO.defaultErrorMsg)).not.toBeVisible();
    })

    test('Login with valid credentials',async({})=>{
        await loginPO.successfulLogin("mihai.coera+acc_comp@gmail.com");
        // expect(page.url(),'check the corporate homepage url').toMatch(process.env.URL_CORPORATE_HOME);
        await expect(page.getByRole('heading', exceptionPO.defaultErrorMsg)).not.toBeVisible();
    })

    test('Go to SEARCH STARTUPS tab',async({})=>{
        await corporateNavBarPO.searchStartup();
        expect(page.url(),'check the SEARCH STARTUP url').toMatch(process.env.URL_SEARCH_STARTUPS);
        await expect(page.getByRole('heading', exceptionPO.defaultErrorMsg)).not.toBeVisible();
    })

    test('Close the new filter modal',async({})=>{
        await shareStartupPO.closeButton();
        await expect(page.getByRole('heading', exceptionPO.defaultErrorMsg)).not.toBeVisible();
    })

    test('Copy startup link',async({})=>{
        await shareStartupPO.copyStartupLink();
        await expect(page.getByRole('heading', { name: 'Link copied to clipboard.' })).toBeVisible();
        await expect(page.getByRole('heading', exceptionPO.defaultErrorMsg)).not.toBeVisible();
    })
});