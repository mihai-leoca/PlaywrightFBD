import { BasePO } from "./base.po";
import { Page, test, expect } from '@playwright/test';

export class NavigationPO extends BasePO{
    async baseURL():Promise<void>{
        await this.page.goto(process.env.BASE_URL);
    }

}