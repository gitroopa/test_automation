import { expect, Locator, Page } from "@playwright/test";

export class AddressPage{
    readonly page: Page;
    readonly acceptCookie: Locator;
    readonly postcodeField: Locator;
    readonly addressSearchField: Locator;
    readonly selectAddressLine: Locator;

    constructor(page: Page){
        this.page = page;
        this.acceptCookie = page.getByRole('button', { name: 'Accept all and continue' });
        this.postcodeField = page.locator('#postcode-input-top');
        this.addressSearchField = page.getByPlaceholder('Search...');
        this.selectAddressLine= page.getByRole('button', { name: 'Basement, 111 Axminster Road, London, N7 6BT' });
    }

}