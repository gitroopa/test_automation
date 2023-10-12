import { expect, Locator, Page } from "@playwright/test";

export class BusinessNamePage{
    readonly page: Page;
    readonly businessNameField: Locator;
    readonly nextButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.businessNameField = page.locator('#business-name');
        this.nextButton = page.locator('button:has-text("Next")');
}
}
