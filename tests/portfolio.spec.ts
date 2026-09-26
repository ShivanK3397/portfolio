import { expect, test } from "@playwright/test";

test("pages have accessible navigation, metadata, and fit the viewport", async ({ page }, testInfo) => {
  for (const [path, label] of [["/", "Home"], ["/about", "About"], ["/work", "Work"]]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: label })).toHaveAttribute("aria-current", "page");
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(new URL(canonical!).pathname).toBe(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.screenshot({ path: testInfo.outputPath(`${label.toLowerCase()}.png`), fullPage: true });
  }
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page).toHaveTitle(/About/);
});

test("keyboard users can skip navigation and motion preferences are respected", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  expect(await page.locator(".button").first().evaluate(element => getComputedStyle(element).transitionDuration)).toBe("0s");
});

test("missing pages have a working recovery link", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await page.getByRole("link", { name: "Back home" }).click();
  await expect(page).toHaveURL("/");
});

test("discovery and social assets are served", async ({ request }) => {
  for (const path of ["/robots.txt", "/sitemap.xml", "/icon.svg", "/opengraph-image"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
});
