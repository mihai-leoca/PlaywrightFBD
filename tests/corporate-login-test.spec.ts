import { Page, test, expect } from '@playwright/test';
import { NavigationPO } from '../pages/navigation.po';
import { initPage } from '../pages/browser.po';
import { LoginPO } from '../pages/login.po';
import { BasePO } from '../pages/base.po';



test.describe.serial(`Succesful login as a corporate with valid credentials`, async () => {
    let page: Page;
    let navigationPo: NavigationPO;
    let loginPO: LoginPO;
    let basePO: BasePO;

    test.beforeAll(async({browser})=>{
        page = await initPage(browser);
        navigationPo= new NavigationPO(page);
        loginPO = new LoginPO(page);
        basePO = new BasePO(page);
        

    });

    test('Navigate to base url', async({})=>{
        await navigationPo.baseURL();
        expect(page.url(),'check the base url').toMatch(process.env.BASE_URL);
        await expect(page.getByRole('heading', { name: 'Something went wrong' })).not.toBeVisible();
        
    })

    test('Login with valid credentials',async({})=>{
        await loginPO.successfulLogin("mihai.coera+acc_comp@gmail.com");
        // expect(page.url(),'check the base url').toMatch(process.env.URL_CORPORATE_HOME);
        await expect(page.getByRole('heading', { name: 'Something went wrong' })).not.toBeVisible();

        await basePO.assertApiCall('https://acc-api.foodbytesworld.com/api/v1/principal'); //expect api status to be OK, between 200 and 299
        

    })
    
});