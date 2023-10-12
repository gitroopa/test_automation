import { test, expect } from "@playwright/test";

import { AddressPage } from "./models/pages/addressPage";
test.only("Generate quotes for Gas energy product", async ({ page }) => {
  const addressPage = new AddressPage(page);
  await page.goto("https://energy-journey-ui-staging.makeiteasy.com/");
  await addressPage.acceptCookie.click();
  await addressPage.postcodeField.click();
  await addressPage.postcodeField.fill("n76bt");
  await addressPage.postcodeField.press("Enter");
  await addressPage.addressSearchField.click();
  await addressPage.addressSearchField.fill("Basement");
  await addressPage.selectAddressLine.click();
  await expect(page).toHaveURL(
    "https://energy-journey-ui-staging.makeiteasy.com/business_name"
  );
});
