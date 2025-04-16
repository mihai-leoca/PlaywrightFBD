import { BasePO } from "./base.po";
import { Locator } from "@playwright/test";

export class ShareStartupPO extends BasePO{
    async copyStartupLink():Promise<void>{
        await this.shareStartupBtn.click();

    }

    async closeButton():Promise<void>{
    //    await Promise.all([
    //         this.closeBtn.click()
    //     ]);
        return this.closeBtn.click();
    }

    successfulCopiedLinkModal(){
        return this.successfulCopiedLink;
    }


    
    protected readonly shareStartupBtn:Locator= this.page.locator('.d-flex > div:nth-child(2) > app-icon > .icon').first();
    protected readonly successfulCopiedLink:Locator= this.page.getByRole('heading', { name: 'Link copied to clipboard.' });
    protected readonly closeBtn:Locator= this.page.getByRole('button', { name: 'CLOSE' });
}