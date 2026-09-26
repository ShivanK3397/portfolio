import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  use: { baseURL: "http://localhost:3000", channel: "msedge" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel: "msedge" } },
    { name: "tablet", use: { viewport: { width: 768, height: 1024 } } },
    { name: "mobile", use: { viewport: { width: 375, height: 812 } } },
  ],
  webServer: { command: "node node_modules/next/dist/bin/next start", url: "http://localhost:3000", reuseExistingServer: !process.env.CI },
});
