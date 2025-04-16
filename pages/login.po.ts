import { Locator } from "@playwright/test";
import { BasePO } from "./base.po";

export class LoginPO extends BasePO{
    async successfulLogin(email: string, password : string=process.env.PASSWORD):Promise <void>{
            await this.loginPage.click();

            await this.emailField.click();
            await this.emailField.fill(email);

            await this.passswordField.click();
            await this.passswordField.fill(process.env.PASSWORD);

            await this.loginButton.click();

            await Promise.all([
                this.waitForGetResponse(this.PRINCIPAL_API),
                this.loginButton.click()
            ]);
    }

    private readonly loginPage : Locator = this.page.locator('a');
    private readonly emailField : Locator = this.page.getByPlaceholder('Email Address');
    private readonly passswordField : Locator = this.page.getByPlaceholder('Password');
    private readonly loginButton : Locator = this.page.getByRole('button', { name: 'Log in' });
}