import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Load .env file if it exists (credentials, app URL, etc.)
const envPath = resolve(process.cwd(), '.env');
if (existsSync(envPath)) {
    process.loadEnvFile(envPath);
}

export const config: WebdriverIO.Config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

    services: [
        [
            'browserstack',
            {
                buildIdentifier: '${BUILD_NUMBER}',
                app: process.env.BROWSERSTACK_APP_URL,
                browserstackLocal: false,
            },
        ],
    ],

    capabilities: [
        {
            'bstack:options': {
                deviceName: 'Samsung Galaxy S23',
                osVersion: '13.0',
            },
        },
        {
            'bstack:options': {
                deviceName: 'Google Pixel 8',
                osVersion: '14.0',
            },
        },
    ],

    maxInstances: 10,

    specs: ['./test/specs/**/*.spec.ts'],

    logLevel: 'info',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },
};

// Shared capabilities to merge into every device entry
const commonCapabilities: Record<string, any> = {
    'appium:orientation': 'PORTRAIT',
    'bstack:options': {
        projectName: 'Android Appium WDIO',
        buildName: 'browserstack build',
        sessionName: 'WDIO Appium Tests',
        debug: true,
        networkLogs: true,
    },
};

config.capabilities?.forEach((caps) => {
    const cap = caps as Record<string, any>;
    for (const key in commonCapabilities) {
        cap[key] = {
            ...(commonCapabilities[key] || {}),
            ...(cap[key] || {}),
        };
    }
});
