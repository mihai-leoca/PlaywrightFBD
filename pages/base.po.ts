import {Page, expect} from "@playwright/test"

export class BasePO{
    constructor(public page: Page){
    }

    async assertApiCall(response:string){
        const responseApi = await this.page.request.get(response);
        await expect(responseApi).toBeOK();
    }

    

    protected readonly REQUEST_MEETING_API: RegExp = new RegExp(`.*\/meeting-request.4ee79ed4c4ab349f.png`); 
    protected readonly SHARE_STARTUP_API: RegExp = new RegExp(`.*\/plausible.io\/api\/event`); 
    protected readonly PRINCIPAL_API: RegExp = new RegExp(`.*\/api\/v1\/principal`);
    protected readonly WATCHLIST_API: RegExp = new RegExp(`.*\/api\/v1\/watchlist\?searchTerm=&page=0&size=10&sort=createdDate,desc.*`);

    

    protected async waitForGetResponse(url: RegExp): Promise<void> {
        await this.page.waitForResponse(response => {
            return url.test(response.url()) &&
                   response.request().method() === "GET" &&
                   response.ok();
        });
    }
    

    protected async waitForPostResponse(url: RegExp): Promise<void> {
        await this.page.waitForResponse(response => url.test(response.url())&&
                                        response.request().method()==="POST" &&
                                        response.ok());
    }

    protected async waitForPutResponse(url: RegExp): Promise<void> {
        await this.page.waitForResponse(response => url.test(response.url())&&
                                        response.request().method()==="PUT" &&
                                        response.ok());
    }

    protected async waitForDeleteResponse(url: RegExp): Promise<void> {
        await this.page.waitForResponse(response => url.test(response.url())&&
                                        response.request().method()==="DELETE" &&
                                        response.ok());
    }
}