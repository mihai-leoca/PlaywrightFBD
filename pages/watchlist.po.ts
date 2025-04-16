import { BasePO } from "./base.po";
import { Locator } from "@playwright/test";

export class WatchlistPO extends BasePO{
    async createWatchlist():Promise<void>{
      await this.watchlistIcon.click();
      await this.watchlistCreateNew.click();
      await this.watchlistNameTextBox.fill('Playwright');
      await this.watchlistCreateBtn.click();
    }

    async renameWatchlist():Promise<void>{
      await this.watchlistRenameBtn.click();
      await this.watchlistNameTextBox.fill('Playwright Renamed');
      await this.watchlistSaveBtn.click(); 
    }

    async copyWatchlistLink():Promise<void>{
      await this.watchlistCopyLink.click();
    }

    async toggleOffNotification():Promise<void>{
      await this.watchlistNotificationToggle.click();
    }

    async deleteWatchlist():Promise<void>{
      await this.watchlistDeleteIcon.click();
      await this.watchlistDeleteBtn.click();
    }

    // Creating watchlist locators
    protected readonly watchlistIcon: Locator = this.page.locator('.position-relative > .icon').first();
    protected readonly watchlistCreateNew: Locator = this.page.getByRole('heading', { name: 'Create new list' });
    protected readonly watchlistNameTextBox: Locator = this.page.getByRole('textbox')
    protected readonly watchlistCreateBtn: Locator = this.page.getByRole('button', { name: 'CREATE' });

    // Renaming watchlist locators
    protected readonly watchlistRenameBtn: Locator = this.page.locator('.position-relative > .icon').first();
    protected readonly watchlistSaveBtn: Locator = this.page.getByRole('button', { name: 'SAVE' });

    // Notification toggle  locator
    protected readonly watchlistNotificationToggle: Locator = this.page.getByRole('row', { name: 'Playwright Renamed' }).getByRole('switch');

    // Copy watchlist link locator
    protected readonly watchlistCopyLink: Locator = this.page.locator('.ng-star-inserted > .d-flex > .quick-button > .position-relative > .icon').first();

    // Delete watchlist locator
    protected readonly watchlistDeleteIcon: Locator = this.page.locator('app-circle-custom-button:nth-child(3) > .d-flex > .quick-button > .position-relative > .icon').first();
    protected readonly watchlistDeleteBtn: Locator = this.page.getByRole('button', { name: 'DELETE' });
}

