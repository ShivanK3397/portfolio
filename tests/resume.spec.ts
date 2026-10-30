import { expect, test } from "@playwright/test";

test("résumé renders inline with selectable text and a download above it", async ({ page }) => {
  await page.goto("/about");
  const section = page.getByRole("region", { name: "My résumé" });
  const download = section.getByRole("link", { name: "Download résumé" });
  await expect(download).toHaveAttribute("download", "");
  await expect(page.getByRole("link", { name: "Download résumé" })).toHaveCount(1);
  const canvas = section.locator("canvas").first();
  await expect(canvas).toBeVisible({ timeout: 20000 });
  await expect(section.locator(".react-pdf__Page__textContent").first()).not.toBeEmpty();
  await expect(section.locator("object, iframe, embed")).toHaveCount(0);
  const buttonBox = await download.boundingBox();
  const canvasBox = await canvas.boundingBox();
  expect(buttonBox!.y + buttonBox!.height).toBeLessThan(canvasBox!.y);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
