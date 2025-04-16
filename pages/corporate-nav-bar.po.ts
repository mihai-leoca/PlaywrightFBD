import { Locator } from "playwright";
import { BasePO } from "./base.po"

export class CorporateNavBarPO extends BasePO{
    async searchStartup():Promise<void>{
        await this.searchStartupsHeader.click();
    }

    async savedSearches():Promise<void>{
        await this.savedSearchesHeader.click();
    }

    async watchlists():Promise<void>{
        await this.watchlistsHeader.click();
    }

    async network():Promise<void>{
        await this.networkHeader.click();
    }
    private readonly searchStartupsHeader:Locator = this.page.getByRole('heading', { name: 'SEARCH STARTUPS' });
    private readonly savedSearchesHeader:Locator = this.page.getByRole('heading', { name: 'SAVED SEARCHES' });
    private readonly watchlistsHeader:Locator = this.page.getByRole('heading', { name: 'WATCHLISTS' });
    private readonly networkHeader:Locator = this.page.getByRole('heading', { name: 'NETWORK' });
}