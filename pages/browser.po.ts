import { Browser, Page } from "@playwright/test";

export async function initPage(browser:Browser): Promise<Page> {
    const context = await browser.newContext();
    return context.newPage();
}