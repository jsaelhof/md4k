import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto("/");
  await page.getByLabel("Email address").fill("jsaelhof@gmail.com");
  await page.getByLabel("Password").fill("aqZswXdeC123!@#_?_?_");
  await page.getByRole("button", { name: "Continue" }).click();

  // wait until the page reaches a state where all cookies are set.
  await page.waitForURL("/list/addedOn/desc");
  //await expect(page.getByAltText("Jason Saelhof")).toBeVisible();

  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});
