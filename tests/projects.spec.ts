import { expect, test } from "@playwright/test";

test("home preview leads to the full project with a loaded screenshot and repository link", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Malicious Link Checker" })).toBeVisible();
  await page.locator(".projects-view-button").click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Projects" })).toHaveAttribute("aria-current", "page");
  const screenshot = page.getByRole("img", { name: /Malicious Link Checker interface/ });
  await expect(screenshot).toBeVisible();
  await expect.poll(() => screenshot.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect(page.getByText(/96% accuracy/)).toBeVisible();
  await expect(page.getByText(/22 URL-based features/)).toBeVisible();
  await expect(page.getByRole("link", { name: "View on GitHub" })).toHaveAttribute("href", "https://github.com/ShivanK3397/Malicious-Link-Checker");
  await page.getByRole("button", { name: "Dark mode" }).click();
  await expect(screenshot).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
