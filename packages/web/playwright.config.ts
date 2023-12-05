import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:4000",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    // Setup project - Configures login: https://playwright.dev/docs/auth
    { name: "setup", testMatch: /.*\.setup\.ts/ },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Use prepared auth state.
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["setup"],
    },

    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     // Use prepared auth state.
    //     storageState: "playwright/.auth/user.json",
    //   },
    //   dependencies: ["setup"],
    // },

    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //     // Use prepared auth state.
    //     storageState: "playwright/.auth/user.json",
    //   },
    //   dependencies: ["setup"],
    // },

    /* Test against mobile viewports. */
    // {
    //   name: "Mobile Chrome",
    //   use: {
    //     ...devices["Pixel 5"],
    //     // Use prepared auth state.
    //     storageState: "playwright/.auth/user.json",
    //   },
    //   dependencies: ["setup"],
    // },
    // {
    //   name: "Mobile Safari",
    //   use: {
    //     ...devices["iPhone 12"],
    //     // Use prepared auth state.
    //     storageState: "playwright/.auth/user.json",
    //   },
    //   dependencies: ["setup"],
    // },

    /* Test against branded browsers. */
    // {
    //   name: "Microsoft Edge",
    //   use: {
    //     ...devices["Desktop Edge"],
    //     channel: "msedge",
    //     // Use prepared auth state.
    //     storageState: "playwright/.auth/user.json",
    //   },
    //   dependencies: ["setup"],
    // },
    // {
    //   name: "Google Chrome",
    //   use: {
    //     ...devices["Desktop Chrome"],
    //     channel: "chrome",
    //     // Use prepared auth state.
    //     storageState: "playwright/.auth/user.json",
    //   },
    //   dependencies: ["setup"],
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: [
    // Start the backend
    {
      cwd: "../api",
      command: "yarn run dev",
      port: 4001,
      reuseExistingServer: !process.env.CI,
      stdout: "pipe",
      stderr: "pipe",
    },
    // Start the frontend
    {
      command: "yarn run dev",
      port: 4000,
      reuseExistingServer: !process.env.CI,
      stdout: "pipe",
      stderr: "pipe",
    },
  ],
});
