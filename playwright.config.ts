import {defineConfig, devices} from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config()


export default defineConfig({
    testDir: "./tests",
    timeout: 30 * 1000,
    expect: {
        timeout: 5 * 1000
    },
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: 1,
    reporter: [["html"]],
    use: {
        actionTimeout: 0,
        baseURL: process.env.BASE_URL,
        trace: "on",
        viewport: {width: 1920, height: 1080}
    },

    projects: [
        {
            name: "chromium",
            use: {...devices['Desktop Chrome']},
        }
    ],
});
